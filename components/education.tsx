"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function Education() {
  const { t, locale } = useLanguage()

  // Definir educação com traduções
  const getEducation = () => {
    if (locale === "pt-BR") {
      return [
        {
          institution: "Unisinos",
          degree: "Graduação em Análise e Desenvolvimento de Sistemas",
          period: "Fevereiro 2024 - Agosto 2025",
          current: true,
          description:
            "Atualmente cursando Análise e Desenvolvimento de Sistemas na Unisinos, uma das mais prestigiadas universidades do sul do Brasil.",
        },
        {
          institution: "Babbel",
          degree: "Certificado de Conclusão C1 - Curso 1, Língua Inglesa",
          period: "Junho 2023 - Abril 2024",
          current: false,
        },
        {
          institution: "Universidade de Santa Cruz do Sul",
          degree: "Graduação em Análise e Desenvolvimento de Sistemas (Transferido)",
          period: "Julho 2022 - Fevereiro 2024",
          current: false,
          description:
            "Iniciei meus estudos na UNISC e posteriormente fui transferido para a Unisinos para continuar minha formação.",
        },
        {
          institution: "Japan Foundation",
          degree: "Japanese Language Proficiency Test N5 (日本語能力試験)",
          period: "Dezembro 2023",
          current: false,
        },
        {
          institution: "OpenSAP",
          degree: "Course, Information Technology",
          period: "Setembro 2023 - Outubro 2023",
          current: false,
        },
      ]
    } else if (locale === "en") {
      return [
        {
          institution: "Unisinos",
          degree: "Bachelor's in Systems Analysis and Development",
          period: "February 2024 - August 2025",
          current: true,
          description:
            "Currently studying Systems Analysis and Development at Unisinos, one of the most prestigious universities in southern Brazil.",
        },
        {
          institution: "Babbel",
          degree: "C1 Completion Certificate - Course 1, English Language",
          period: "June 2023 - April 2024",
          current: false,
        },
        {
          institution: "University of Santa Cruz do Sul",
          degree: "Bachelor's in Systems Analysis and Development (Transferred)",
          period: "July 2022 - February 2024",
          current: false,
          description: "I started my studies at UNISC and was later transferred to Unisinos to continue my education.",
        },
        {
          institution: "Japan Foundation",
          degree: "Japanese Language Proficiency Test N5 (日本語能力試験)",
          period: "December 2023",
          current: false,
        },
        {
          institution: "OpenSAP",
          degree: "Course, Information Technology",
          period: "September 2023 - October 2023",
          current: false,
        },
      ]
    } else if (locale === "es") {
      return [
        {
          institution: "Unisinos",
          degree: "Licenciatura en Análisis y Desarrollo de Sistemas",
          period: "Febrero 2024 - Agosto 2025",
          current: true,
          description:
            "Actualmente estudiando Análisis y Desarrollo de Sistemas en Unisinos, una de las universidades más prestigiosas del sur de Brasil.",
        },
        {
          institution: "Babbel",
          degree: "Certificado de Finalización C1 - Curso 1, Idioma Inglés",
          period: "Junio 2023 - Abril 2024",
          current: false,
        },
        {
          institution: "Universidad de Santa Cruz do Sul",
          degree: "Licenciatura en Análisis y Desarrollo de Sistemas (Transferido)",
          period: "Julio 2022 - Febrero 2024",
          current: false,
          description:
            "Comencé mis estudios en UNISC y posteriormente fui transferido a Unisinos para continuar mi formación.",
        },
        {
          institution: "Japan Foundation",
          degree: "Japanese Language Proficiency Test N5 (日本語能力試験)",
          period: "Diciembre 2023",
          current: false,
        },
        {
          institution: "OpenSAP",
          degree: "Curso, Tecnología de la Información",
          period: "Septiembre 2023 - Octubre 2023",
          current: false,
        },
      ]
    } else if (locale === "ja") {
      return [
        {
          institution: "Unisinos",
          degree: "システム分析と開発の学士号",
          period: "2024年2月 - 2025年8月",
          current: true,
          description: "現在、ブラジル南部で最も権威のある大学の一つであるUnisinosでシステム分析と開発を学んでいます。",
        },
        {
          institution: "Babbel",
          degree: "C1修了証明書 - コース1、英語",
          period: "2023年6月 - 2024年4月",
          current: false,
        },
        {
          institution: "サンタクルス・ド・スル大学",
          degree: "システム分析と開発の学士号（転校）",
          period: "2022年7月 - 2024年2月",
          current: false,
          description: "UNISCで学業を始め、その後Unisinosに転校して教育を続けました。",
        },
        {
          institution: "国際交流基金",
          degree: "日本語能力試験N5 (日本語能力試験)",
          period: "2023年12月",
          current: false,
        },
        {
          institution: "OpenSAP",
          degree: "コース、情報技術",
          period: "2023年9月 - 2023年10月",
          current: false,
        },
      ]
    }

    // Fallback para inglês
    return [
      {
        institution: "Unisinos",
        degree: "Bachelor's in Systems Analysis and Development",
        period: "February 2024 - August 2025",
        current: true,
        description:
          "Currently studying Systems Analysis and Development at Unisinos, one of the most prestigious universities in southern Brazil.",
      },
      {
        institution: "Babbel",
        degree: "C1 Completion Certificate - Course 1, English Language",
        period: "June 2023 - April 2024",
        current: false,
      },
      {
        institution: "University of Santa Cruz do Sul",
        degree: "Bachelor's in Systems Analysis and Development (Transferred)",
        period: "July 2022 - February 2024",
        current: false,
        description: "I started my studies at UNISC and was later transferred to Unisinos to continue my education.",
      },
      {
        institution: "Japan Foundation",
        degree: "Japanese Language Proficiency Test N5 (日本語能力試験)",
        period: "December 2023",
        current: false,
      },
      {
        institution: "OpenSAP",
        degree: "Course, Information Technology",
        period: "September 2023 - October 2023",
        current: false,
      },
    ]
  }

  const education = getEducation()
  const mainEducation = education[0]
  const otherEducation = education.slice(1)

  return (
    <section id="education" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("education.title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("education.subtitle")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-1 lg:gap-12">
          <Card className="border-primary shadow-md transition-all hover:shadow-lg hover:scale-[1.01]">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <GraduationCap className="h-10 w-10 text-primary" />
              <div className="grid gap-1">
                <CardTitle className="text-2xl">{mainEducation.institution}</CardTitle>
                <CardDescription className="text-base">{mainEducation.degree}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{mainEducation.period}</p>
                <Badge>{t("education.current")}</Badge>
              </div>
              <div className="mt-4 space-y-2">
                <p>{mainEducation.description}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {otherEducation.map((edu, index) => (
              <Card key={index} className="transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <CardTitle>{edu.institution}</CardTitle>
                  <CardDescription>{edu.degree}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  {edu.description && <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
