export type Locale = "pt-BR" | "en" | "es" | "ja"

type TranslationObject = {
  [key: string]: string | TranslationObject
}

type Translations = {
  [key in Locale]: TranslationObject
}

export const translations: Translations = {
  "pt-BR": {
    common: {
      language: "Idioma",
      contactMe: "Entre em contato",
      seeExperience: "Ver experiência",
    },
    header: {
      home: "Início",
      experience: "Experiência",
      skills: "Habilidades",
      education: "Formação",
      contact: "Contato",
    },
    hero: {
      title: "Desenvolvedor Full Stack Júnior",
      description:
        "Olá, meu nome é Kauã Mattos e atualmente sou programador front-end/back-end na Ouro Moderno Edtech. Estou cursando Análise e Desenvolvimento de Sistemas na Unisinos e tenho experiência em programação usando Python, desenvolvimento Web com HTML, CSS e JavaScript, tal como utilizando PHP e SQL.",
    },
    experience: {
      title: "Experiência Profissional",
      subtitle: "Minha trajetória profissional e experiências de trabalho.",
    },
    skills: {
      title: "Habilidades & Especializações",
      subtitle: "Minhas competências técnicas, ferramentas e certificações.",
      languages: "Linguagens",
      programmingLanguages: "Linguagens de programação",
      frameworks: "Frameworks",
      frameworksLibraries: "Frameworks e bibliotecas",
      tools: "Ferramentas",
      toolsTechnologies: "Ferramentas e tecnologias",
      languagesSection: "Idiomas",
      languagesProficiency: "Proficiência em idiomas",
      courses: "Cursos",
      coursesCertifications: "Cursos e certificações",
    },
    education: {
      title: "Formação Acadêmica",
      subtitle: "Minha educação e formação acadêmica.",
      current: "Em andamento",
      unisiniosDescription:
        "Atualmente cursando Análise e Desenvolvimento de Sistemas na Unisinos, uma das mais prestigiadas universidades do sul do Brasil.",
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Vamos conversar! Estou sempre aberto a novas oportunidades.",
      contactInfo: "Informações de Contato",
      contactMethods: "Você pode me encontrar através dos seguintes meios:",
      sendMessage: "Envie uma Mensagem",
      formDescription: "Preencha o formulário abaixo e entrarei em contato o mais breve possível.",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      submit: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Sucesso!",
      error: "Erro",
      successMessage: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      developer: "Desenvolvedor Full Stack Júnior",
    },
  },
  en: {
    common: {
      language: "Language",
      contactMe: "Contact me",
      seeExperience: "See experience",
    },
    header: {
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      title: "Junior Full Stack Developer",
      description:
        "Hello, my name is Kauã Mattos and I currently work as a front-end/back-end programmer at Ouro Moderno Edtech. I am studying Systems Analysis and Development at Unisinos and have experience in programming using Python, Web development with HTML, CSS and JavaScript, as well as using PHP and SQL.",
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My professional journey and work experiences.",
    },
    skills: {
      title: "Skills & Specializations",
      subtitle: "My technical skills, tools, and certifications.",
      languages: "Languages",
      programmingLanguages: "Programming languages",
      frameworks: "Frameworks",
      frameworksLibraries: "Frameworks and libraries",
      tools: "Tools",
      toolsTechnologies: "Tools and technologies",
      languagesSection: "Languages",
      languagesProficiency: "Language proficiency",
      courses: "Courses",
      coursesCertifications: "Courses and certifications",
    },
    education: {
      title: "Academic Education",
      subtitle: "My education and academic background.",
      current: "In progress",
      unisiniosDescription:
        "Currently studying Systems Analysis and Development at Unisinos, one of the most prestigious universities in southern Brazil.",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's talk! I'm always open to new opportunities.",
      contactInfo: "Contact Information",
      contactMethods: "You can find me through the following means:",
      sendMessage: "Send a Message",
      formDescription: "Fill out the form below and I will get back to you as soon as possible.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Success!",
      error: "Error",
      successMessage: "Message sent successfully! I will contact you soon.",
    },
    footer: {
      rights: "All rights reserved.",
      developer: "Junior Full Stack Developer",
    },
  },
  es: {
    common: {
      language: "Idioma",
      contactMe: "Contáctame",
      seeExperience: "Ver experiencia",
    },
    header: {
      home: "Inicio",
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      title: "Desarrollador Full Stack Junior",
      description:
        "Hola, mi nombre es Kauã Mattos y actualmente trabajo como programador front-end/back-end en Ouro Moderno Edtech. Estoy estudiando Análisis y Desarrollo de Sistemas en Unisinos y tengo experiencia en programación con Python, desarrollo Web con HTML, CSS y JavaScript, así como usando PHP y SQL.",
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Mi trayectoria profesional y experiencias laborales.",
    },
    skills: {
      title: "Habilidades y Especializaciones",
      subtitle: "Mis competencias técnicas, herramientas y certificaciones.",
      languages: "Lenguajes",
      programmingLanguages: "Lenguajes de programación",
      frameworks: "Frameworks",
      frameworksLibraries: "Frameworks y bibliotecas",
      tools: "Herramientas",
      toolsTechnologies: "Herramientas y tecnologías",
      languagesSection: "Idiomas",
      languagesProficiency: "Dominio de idiomas",
      courses: "Cursos",
      coursesCertifications: "Cursos y certificaciones",
    },
    education: {
      title: "Formación Académica",
      subtitle: "Mi educación y formación académica.",
      current: "En curso",
      unisiniosDescription:
        "Actualmente estudiando Análisis y Desarrollo de Sistemas en Unisinos, una de las universidades más prestigiosas del sur de Brasil.",
    },
    contact: {
      title: "Contáctame",
      subtitle: "¡Hablemos! Siempre estoy abierto a nuevas oportunidades.",
      contactInfo: "Información de Contacto",
      contactMethods: "Puedes encontrarme a través de los siguientes medios:",
      sendMessage: "Enviar un Mensaje",
      formDescription: "Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Éxito!",
      error: "Error",
      successMessage: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      developer: "Desarrollador Full Stack Junior",
    },
  },
  ja: {
    common: {
      language: "言語",
      contactMe: "お問い合わせ",
      seeExperience: "経験を見る",
    },
    header: {
      home: "ホーム",
      experience: "経験",
      skills: "スキル",
      education: "学歴",
      contact: "連絡先",
    },
    hero: {
      title: "ジュニアフルスタック開発者",
      description:
        "こんにちは、私の名前はカウア・マットスです。現在、Ouro Moderno Edtechでフロントエンド/バックエンドプログラマーとして働いています。UnisinosでシステムAnalysis and Developmentを学んでおり、Python、HTML、CSS、JavaScriptを使用したWeb開発、およびPHPとSQLを使用したプログラミングの経験があります。",
    },
    experience: {
      title: "職歴",
      subtitle: "私の職業的な経歴と仕事の経験。",
    },
    skills: {
      title: "スキルと専門分野",
      subtitle: "私の技術的なスキル、ツール、および認定資格。",
      languages: "言語",
      programmingLanguages: "プログラミング言語",
      frameworks: "フレームワーク",
      frameworksLibraries: "フレームワークとライブラリ",
      tools: "ツール",
      toolsTechnologies: "ツールと技術",
      languagesSection: "言語",
      languagesProficiency: "言語能力",
      courses: "コース",
      coursesCertifications: "コースと認定資格",
    },
    education: {
      title: "学歴",
      subtitle: "私の教育と学術的背景。",
      current: "進行中",
      unisiniosDescription:
        "現在、ブラジル南部で最も権威のある大学の一つであるUnisinosでシステム分析と開発を学んでいます。",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "一緒に話しましょう！新しい機会に常にオープンです。",
      contactInfo: "連絡先情報",
      contactMethods: "以下の手段で私を見つけることができます：",
      sendMessage: "メッセージを送る",
      formDescription: "以下のフォームに記入してください。できるだけ早くご連絡いたします。",
      name: "名前",
      email: "メール",
      message: "メッセージ",
      submit: "メッセージを送信",
      sending: "送信中...",
      success: "成功！",
      error: "エラー",
      successMessage: "メッセージが正常に送信されました！すぐにご連絡いたします。",
    },
    footer: {
      rights: "全著作権所有。",
      developer: "ジュニアフルスタック開発者",
    },
  },
}
