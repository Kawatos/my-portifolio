"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/context"

export function Experience() {
  const { t, locale } = useLanguage()

  // Definir experiências com traduções
  const getExperiences = () => {
    if (locale === "pt-BR") {
      return [
        {
          title: "Desenvolvedor Full Stack Júnior",
          company: "Ouro Moderno Edtech",
          period: "Dezembro 2024 - Presente",
          duration: "5 meses",
          location: "Montenegro, Rio Grande do Sul, Brasil",
          description: "",
        },
        {
          title: "Estagiário em Desenvolvimento de Cursos",
          company: "Ouro Moderno Edtech",
          period: "Outubro 2023 - Novembro 2024",
          duration: "1 ano e 2 meses",
          location: "Montenegro, Rio Grande do Sul, Brasil",
          description: "",
        },
        {
          title: "Aprendiz: Consultor de vendas",
          company: "Ortobom",
          period: "Agosto 2021 - Dezembro 2021",
          duration: "5 meses",
          location: "Montenegro, Rio Grande do Sul, Brasil",
          description:
            "Consultoria de vendas (Abrimento da Venda, Sondagem, Contorno de Objeções e Fechamento da Venda), Manutenção das Redes Sociais e Marketing Digital. Durante o período que trabalhei no estabelecimento, pude aprimorar ainda mais as habilidades sociais e técnicas desenvolvidas na experiência anterior, aprendendo a observar o cliente e oferecê-lo um atendimento diferenciado e personalizado.",
        },
      ]
    } else if (locale === "en") {
      return [
        {
          title: "Junior Full Stack Developer",
          company: "Ouro Moderno Edtech",
          period: "December 2024 - Present",
          duration: "5 months",
          location: "Montenegro, Rio Grande do Sul, Brazil",
          description: "",
        },
        {
          title: "Course Development Intern",
          company: "Ouro Moderno Edtech",
          period: "October 2023 - November 2024",
          duration: "1 year and 2 months",
          location: "Montenegro, Rio Grande do Sul, Brazil",
          description: "",
        },
        {
          title: "Apprentice: Sales Consultant",
          company: "Ortobom",
          period: "August 2021 - December 2021",
          duration: "5 months",
          location: "Montenegro, Rio Grande do Sul, Brazil",
          description:
            "Sales consulting (Opening the Sale, Probing, Objection Handling, and Closing the Sale), Maintenance of Social Networks and Digital Marketing. During the period I worked at the establishment, I was able to further improve the social and technical skills developed in the previous experience, learning to observe the customer and offer them a differentiated and personalized service.",
        },
      ]
    } else if (locale === "es") {
      return [
        {
          title: "Desarrollador Full Stack Junior",
          company: "Ouro Moderno Edtech",
          period: "Diciembre 2024 - Presente",
          duration: "5 meses",
          location: "Montenegro, Rio Grande do Sul, Brasil",
          description: "",
        },
        {
          title: "Pasante en Desarrollo de Cursos",
          company: "Ouro Moderno Edtech",
          period: "Octubre 2023 - Noviembre 2024",
          duration: "1 año y 2 meses",
          location: "Montenegro, Rio Grande do Sul, Brasil",
          description: "",
        },
        {
          title: "Aprendiz: Consultor de ventas",
          company: "Ortobom",
          period: "Agosto 2021 - Diciembre 2021",
          duration: "5 meses",
          location: "Montenegro, Rio Grande do Sul, Brasil",
          description:
            "Consultoría de ventas (Apertura de la Venta, Sondeo, Manejo de Objeciones y Cierre de la Venta), Mantenimiento de Redes Sociales y Marketing Digital. Durante el período que trabajé en el establecimiento, pude mejorar aún más las habilidades sociales y técnicas desarrolladas en la experiencia anterior, aprendiendo a observar al cliente y ofrecerle un servicio diferenciado y personalizado.",
        },
      ]
    } else if (locale === "ja") {
      return [
        {
          title: "ジュニアフルスタック開発者",
          company: "Ouro Moderno Edtech",
          period: "2024年12月 - 現在",
          duration: "5ヶ月",
          location: "ブラジル、リオグランデ・ド・スル州、モンテネグロ",
          description: "",
        },
        {
          title: "コース開発インターン",
          company: "Ouro Moderno Edtech",
          period: "2023年10月 - 2024年11月",
          duration: "1年2ヶ月",
          location: "ブラジル、リオグランデ・ド・スル州、モンテネグロ",
          description: "",
        },
        {
          title: "見習い：営業コンサルタント",
          company: "Ortobom",
          period: "2021年8月 - 2021年12月",
          duration: "5ヶ月",
          location: "ブラジル、リオグランデ・ド・スル州、モンテネグロ",
          description:
            "営業コンサルティング（セールスのオープニング、プロービング、異議処理、セールスのクロージング）、ソーシャルネットワークとデジタルマーケティングのメンテナンス。この施設で働いていた期間中、前の経験で培った社会的・技術的スキルをさらに向上させ、顧客を観察し、差別化されたパーソナライズされたサービスを提供することを学びました。",
        },
      ]
    }

    // Fallback para inglês
    return [
      {
        title: "Junior Full Stack Developer",
        company: "Ouro Moderno Edtech",
        period: "December 2024 - Present",
        duration: "5 months",
        location: "Montenegro, Rio Grande do Sul, Brazil",
        description: "",
      },
      {
        title: "Course Development Intern",
        company: "Ouro Moderno Edtech",
        period: "October 2023 - November 2024",
        duration: "1 year and 2 months",
        location: "Montenegro, Rio Grande do Sul, Brazil",
        description: "",
      },
      {
        title: "Apprentice: Sales Consultant",
        company: "Ortobom",
        period: "August 2021 - December 2021",
        duration: "5 months",
        location: "Montenegro, Rio Grande do Sul, Brazil",
        description:
          "Sales consulting (Opening the Sale, Probing, Objection Handling, and Closing the Sale), Maintenance of Social Networks and Digital Marketing. During the period I worked at the establishment, I was able to further improve the social and technical skills developed in the previous experience, learning to observe the customer and offer them a differentiated and personalized service.",
      },
    ]
  }

  const experiences = getExperiences()

  return (
    <section id="experience" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("experience.title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("experience.subtitle")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-1 lg:gap-12">
          <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-border after:absolute after:bottom-0 after:left-0 after:top-0 after:h-6 after:w-[2px] after:bg-primary">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 last:mb-0">
                <Card className="transition-all hover:shadow-md hover:border-primary/20 hover:translate-x-1">
                  <CardHeader>
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="text-sm">
                          {exp.company}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {exp.period} · {exp.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </CardHeader>
                  {exp.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
