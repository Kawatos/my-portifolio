"use client"

import type React from "react"

import { useActionState } from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useLanguage } from "@/lib/i18n/context"
import { submitContactForm, type ContactFormState } from "@/actions/contact"

export function ContactFormSimple() {
  const { t, locale } = useLanguage()
  const initialState: ContactFormState = {}
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  // Obter o placeholder do email de acordo com o idioma
  const getEmailPlaceholder = () => {
    switch (locale) {
      case "pt-BR":
        return "seu.email@exemplo.com"
      case "en":
        return "your.email@example.com"
      case "es":
        return "tu.correo@exemplo.com"
      case "ja":
        return "あなたの.メール@例.com"
      default:
        return "your.email@example.com"
    }
  }

  // Reset form after successful submission
  useEffect(() => {
    if (state.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement
      if (form) form.reset()
      setShowAlert(true)

      // Hide alert after 5 seconds
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [state.success])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    // The formAction will be called automatically
    // This is just to show the loading state
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <>
      {showAlert && state.success && (
        <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800">
          <AlertTitle>{t("contact.success")}</AlertTitle>
          <AlertDescription>{t("contact.successMessage")}</AlertDescription>
        </Alert>
      )}

      {state.errors?._form && (
        <Alert className="mb-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800">
          <AlertTitle>{t("contact.error")}</AlertTitle>
          <AlertDescription>{state.errors._form}</AlertDescription>
        </Alert>
      )}

      <form id="contact-form" action={formAction} onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t("contact.name")}
          </label>
          <Input
            id="name"
            name="name"
            placeholder={t("contact.name")}
            className={state.errors?.name ? "border-red-500" : ""}
            required
            minLength={2}
          />
          {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t("contact.email")}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={getEmailPlaceholder()}
            className={state.errors?.email ? "border-red-500" : ""}
            required
          />
          {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t("contact.message")}
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder={t("contact.message")}
            className={`min-h-[120px] ${state.errors?.message ? "border-red-500" : ""}`}
            required
          />
          {state.errors?.message && <p className="text-sm text-red-500">{state.errors.message[0]}</p>}
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
