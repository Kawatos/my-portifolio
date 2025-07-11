"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { ContactFormAlternative } from "./contact-form-alternative"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("contact.title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.contactInfo")}</CardTitle>
              <CardDescription>{t("contact.contactMethods")}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:kauasilvamattos0000@gmail.com"
                  className="text-sm hover:underline hover:text-primary transition-colors"
                >
                  kauasilvamattos0000@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a
                  href="https://www.linkedin.com/in/kauã-mattos-969703257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline hover:text-primary transition-colors"
                >
                  linkedin.com/in/kauã-mattos-969703257
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <a
                  href="https://github.com/Kawatos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline hover:text-primary transition-colors"
                >
                  github.com/Kawatos
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="https://wa.me/+5551998814393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline hover:text-primary transition-colors"
                >
                  +55 051 998814393
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Montenegro, Rio Grande do Sul, Brasil</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.sendMessage")}</CardTitle>
              <CardDescription>{t("contact.formDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactFormAlternative />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
