"use client"

import { useLanguage } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} Kauã Mattos. {t("footer.rights")}
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">{t("footer.developer")}</p>
      </div>
    </footer>
  )
}
