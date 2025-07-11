"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useLanguage } from "@/lib/i18n/context"
import { createClientSupabaseClient } from "@/lib/supabase/client"

export function ContactForm() {
  const { t, locale } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Obter o placeholder do email de acordo com o idioma
  const getEmailPlaceholder = () => {
    switch (locale) {
      case "pt-BR":
        return "seu.email@exemplo.com"
      case "en":
        return "your.email@example.com"
      case "es":
        return "tu.correo@ejemplo.com"
      case "ja":
        return "あなたの.メール@例.com"
      default:
        return "your.email@example.com"
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const name = formData.get("name") as string
      const email = formData.get("email") as string
      const message = formData.get("message") as string

      // Validar dados básicos
      if (!name || name.length < 2) {
        throw new Error("O nome deve ter pelo menos 2 caracteres")
      }

      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        throw new Error("Email inválido")
      }

      // Salvar no banco de dados
      const supabase = createClientSupabaseClient()
      const { error } = await supabase.from("messages").insert([{ name, email, message }])

      if (error) {
        throw new Error("Erro ao salvar mensagem no banco de dados")
      }

      // Enviar para o FormSubmit
      const formSubmitResponse = await fetch("https://formsubmit.co/ajax/kauasilvamattos0000@gmail.com", {
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

      if (!formSubmitResponse.ok) {
        console.warn("Aviso: Email pode não ter sido enviado, mas a mensagem foi salva no banco de dados")
      }

      // Limpar o formulário
      e.currentTarget.reset()
      setSuccess(true)
      setShowAlert(true)

      // Esconder o alerta após 5 segundos
      setTimeout(() => {
        setShowAlert(false)
      }, 5000)
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
      setSuccess(false)
      setErrorMessage(error instanceof Error ? error.message : "Erro ao enviar mensagem")
      setShowAlert(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {showAlert && (
        <Alert
          className={`mb-4 ${
            success
              ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800"
          }`}
        >
          <AlertTitle>{success ? t("contact.success") : t("contact.error")}</AlertTitle>
          <AlertDescription>{success ? t("contact.successMessage") : errorMessage}</AlertDescription>
        </Alert>
      )}

      <form id="contact-form" onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t("contact.name")}
          </label>
          <Input id="name" name="name" placeholder={t("contact.name")} required minLength={2} />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t("contact.email")}
          </label>
          <Input id="email" name="email" type="email" placeholder={getEmailPlaceholder()} required />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t("contact.message")}
          </label>
          <Textarea id="message" name="message" placeholder={t("contact.message")} className="min-h-[120px]" required />
        </div>
        <Button
          type="submit"
          className="w-full transition-all hover:scale-[1.02] active:scale-[0.98]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              {t("contact.sending")}
            </>
          ) : (
            t("contact.submit")
          )}
        </Button>
      </form>
    </>
  )
}
