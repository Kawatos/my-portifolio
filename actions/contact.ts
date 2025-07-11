"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"
import { z } from "zod"

// Schema de validação atualizado (sem tamanho mínimo para mensagem)
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string(), // Removido o tamanho mínimo
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

// Função para enviar email usando EmailJS
async function sendEmailNotification(name: string, email: string, message: string) {
  try {
    // Construir o corpo do email
    const emailData = {
      service_id: "service_portfolio", // Substitua pelo seu service_id do EmailJS
      template_id: "template_contact", // Substitua pelo seu template_id do EmailJS
      user_id: "YOUR_USER_ID", // Substitua pelo seu user_id do EmailJS
      template_params: {
        to_name: "Kauã Mattos",
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email,
      },
    }

    // Enviar email usando EmailJS
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      throw new Error(`Erro ao enviar email: ${response.statusText}`)
    }

    return true
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return false
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Extrair dados do formulário
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Validar dados
  const validationResult = ContactFormSchema.safeParse({ name, email, message })

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
      success: false,
      message: "Por favor, corrija os erros no formulário.",
    }
  }

  try {
    // Criar cliente Supabase
    const supabase = createServerSupabaseClient()

    // Inserir mensagem no banco de dados
    const { error } = await supabase.from("messages").insert([{ name, email, message }])

    if (error) {
      console.error("Erro ao enviar mensagem:", error)
      return {
        errors: {
          _form: ["Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."],
        },
        success: false,
        message: "Erro ao enviar mensagem.",
      }
    }

    // Enviar email de notificação
    try {
      // Método alternativo usando fetch para enviar email via FormSubmit
      const emailResponse = await fetch("https://formsubmit.co/ajax/kauasilvamattos0000@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: "Nova mensagem do portfólio!",
        }),
      })

      if (!emailResponse.ok) {
        console.warn("Aviso: Email pode não ter sido enviado, mas a mensagem foi salva no banco de dados")
      }
    } catch (emailError) {
      console.error("Erro ao enviar email:", emailError)
      // Não retornamos erro para o usuário, pois a mensagem foi salva no banco
    }

    // Retornar sucesso
    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    }
  } catch (error) {
    console.error("Erro ao processar formulário:", error)
    return {
      errors: {
        _form: ["Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente."],
      },
      success: false,
      message: "Erro ao processar formulário.",
    }
  }
}
