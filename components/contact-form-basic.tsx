"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/i18n/context"

export function ContactFormBasic() {
  const { t, locale } = useLanguage()

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

  return (
    <form action="https://formsubmit.co/kauasilvamattos0000@gmail.com" method="POST" className="grid gap-4">
      {/* FormSubmit configuração */}
      <input type="hidden" name="_subject" value="Nova mensagem do portfólio!" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input
        type="hidden"
        name="_autoresponse"
        value="Recebemos sua mensagem! Obrigado pelo contato. Responderei assim que possível."
      />

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
      <Button type="submit" className="w-full transition-all hover:scale-[1.02] active:scale-[0.98]">
        {t("contact.submit")}
      </Button>
    </form>
  )
}
