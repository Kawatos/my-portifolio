"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Globe, Languages, Palette } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { TechBadge } from "./tech-badge"
import {
  JavaScriptIcon,
  PythonIcon,
  PhpIcon,
  HtmlIcon,
  CssIcon,
  SqlIcon,
  ReactIcon,
  WordPressIcon,
  DockerIcon,
  GitHubIcon,
  GitIcon,
} from "./tech-icons"

export function Skills() {
  const { t, locale } = useLanguage()

  const skills = {
    programming: [
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "Python", icon: PythonIcon },
      { name: "PHP", icon: PhpIcon },
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "SQL", icon: SqlIcon },
    ],
    frameworks: [
      { name: "React", icon: ReactIcon },
      { name: "WordPress", icon: WordPressIcon },
    ],
    tools: [
      { name: "Docker", icon: DockerIcon },
      { name: "GitHub", icon: GitHubIcon },
      { name: "Git", icon: GitIcon },
    ],
    languages:
      locale === "pt-BR"
        ? ["Português (Nativo)", "Inglês (C1 - Babbel)", "Japonês (N5 - JLPT)"]
        : locale === "en"
          ? ["Portuguese (Native)", "English (C1 - Babbel)", "Japanese (N5 - JLPT)"]
          : locale === "es"
            ? ["Portugués (Nativo)", "Inglés (C1 - Babbel)", "Japonés (N5 - JLPT)"]
            : ["ポルトガル語（ネイティブ）", "英語（C1 - Babbel）", "日本語（N5 - JLPT）"],
    courses: ["OpenSAP - Information Technology"],
  }

  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("skills.title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("skills.subtitle")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <Card className="transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <Code2 className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{t("skills.languages")}</CardTitle>
                <CardDescription>{t("skills.programmingLanguages")}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <TechBadge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <Globe className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{t("skills.frameworks")}</CardTitle>
                <CardDescription>{t("skills.frameworksLibraries")}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <TechBadge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <Database className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{t("skills.tools")}</CardTitle>
                <CardDescription>{t("skills.toolsTechnologies")}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <TechBadge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-2 transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <Languages className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{t("skills.languagesSection")}</CardTitle>
                <CardDescription>{t("skills.languagesProficiency")}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <TechBadge key={skill} name={skill} icon={Languages} />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1 transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <Palette className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{t("skills.courses")}</CardTitle>
                <CardDescription>{t("skills.coursesCertifications")}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.courses.map((skill) => (
                  <TechBadge key={skill} name={skill} icon={Palette} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
