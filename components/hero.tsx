"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

export function Hero() {
  const { t, locale } = useLanguage()

  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image - Aumentada a opacidade no modo claro */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20de%20Perfil.png-her44uTqOrmF6YA79lMAofTgkwSzw0.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-70 dark:opacity-30" // Aumentada de opacity-40 para opacity-70 no modo claro
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/70 dark:from-background/95 dark:via-background/80 dark:to-background/90" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Kauã Mattos
                {locale === "ja" && (
                  <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl"> 「カウア・マットス」</span>
                )}
              </h1>
              <p className="text-xl text-muted-foreground">{t("hero.title")}</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed backdrop-blur-sm bg-background/30 dark:bg-background/40 p-3 rounded-lg">
              {t("hero.description")}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="transition-all hover:scale-[1.05] active:scale-[0.98]">
                <a href="#contact">{t("common.contactMe")}</a>
              </Button>
              <Button variant="outline" asChild className="transition-all hover:scale-[1.05] active:scale-[0.98]">
                <a href="#experience">{t("common.seeExperience")}</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="transition-all hover:scale-[1.15] hover:text-primary hover:bg-primary/10"
              >
                <a href="https://www.linkedin.com/in/kauã-mattos-969703257" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="transition-all hover:scale-[1.15] hover:text-primary hover:bg-primary/10"
              >
                <a href="https://github.com/Kawatos" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="transition-all hover:scale-[1.15] hover:text-primary hover:bg-primary/10"
              >
                <a href="mailto:kauasilvamattos0000@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="transition-all hover:scale-[1.15] hover:text-primary hover:bg-primary/10"
              >
                <a href="https://wa.me/+5551998814393" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-primary/20 shadow-xl transition-all hover:border-primary/40 hover:shadow-2xl hover:scale-[1.02]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20de%20Perfil.png-her44uTqOrmF6YA79lMAofTgkwSzw0.jpeg"
                alt="Foto de perfil de Kauã Mattos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
