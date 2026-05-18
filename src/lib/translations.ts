export type Lang = "kz" | "ru" | "en";

export const DEFAULT_LANG: Lang = "ru";

export type TranslationTree = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    services: string;
    practice: string;
    faq: string;
    contact: string;
    contactWhatsApp: string;
  };
  hero: {
    headline: string;
    description: string;
    ctaConsult: string;
    ctaWhatsApp: string;
  };
  about: {
    title: string;
    lead: string;
    cards: {
      experience: { title: string; body: string };
      consultations: { title: string; body: string };
      confidential: { title: string; body: string };
      approach: { title: string; body: string };
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  why: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  practice: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    lawyerName: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    writeWhatsApp: string;
    form: {
      name: string;
      phone: string;
      message: string;
      submit: string;
      note: string;
      success: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contacts: string;
    rights: string;
    privacy: string;
  };
  brand: {
    firmName: string;
    lawyerTitle: string;
  };
  waPrefill: string;
  office: {
    address: string;
    hours: string;
    email: string;
  };
};

export const translations: Record<Lang, TranslationTree> = {
  en: {
    meta: {
      title: "Seitjan & Partners | Business & Private Law",
      description:
        "Professional legal support for companies and individuals: consultation, contracts, disputes, and court representation.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      practice: "Practice Areas",
      faq: "FAQ",
      contact: "Contact",
      contactWhatsApp: "Contact on WhatsApp",
    },
    hero: {
      headline: "Reliable Legal Support for Your Business and Personal Matters",
      description:
        "Professional legal consultation, document preparation, and court representation with an individual approach.",
      ctaConsult: "Get Consultation",
      ctaWhatsApp: "Write on WhatsApp",
    },
    about: {
      title: "About the practice",
      lead: "We focus on clear communication, disciplined case management, and practical outcomes. Our work is built on confidentiality, careful analysis of facts, and a calm, professional tone in every interaction with clients and authorities.",
      cards: {
        experience: {
          title: "5+ years of experience",
          body: "Representing clients in negotiations, pre-trial stages, and court proceedings across civil and commercial matters.",
        },
        consultations: {
          title: "300+ consultations",
          body: "Structured sessions with written follow-ups where needed, so you always understand the next step.",
        },
        confidential: {
          title: "Confidential support",
          body: "Attorney–client privilege principles, secure handling of documents, and discreet communication channels.",
        },
        approach: {
          title: "Individual approach",
          body: "We tailor strategy to your risk profile, timeline, and budget—without unnecessary procedures.",
        },
      },
    },
    services: {
      title: "Services",
      subtitle: "End-to-end legal support for businesses and private clients.",
      items: [
        {
          title: "Legal consultation",
          description:
            "Risk assessment, rights and obligations review, and a roadmap before you sign or litigate.",
        },
        {
          title: "Contract drafting and review",
          description:
            "Balanced clauses, clear definitions, and dispute-resolution mechanics aligned with your goals.",
        },
        {
          title: "Business legal support",
          description:
            "Day-to-day advice for corporate governance, counterparties, employment issues, and regulatory touchpoints.",
        },
        {
          title: "Civil law cases",
          description:
            "Claims, defenses, and settlement strategies in contractual and non-contractual disputes.",
        },
        {
          title: "Family law",
          description:
            "Divorce-related matters, support, parenting arrangements, and division of assets with sensitivity and rigor.",
        },
        {
          title: "Court representation",
          description:
            "Written submissions, evidence organization, and oral advocacy focused on clarity and credibility.",
        },
      ],
    },
    why: {
      title: "Why clients choose us",
      subtitle: "A premium service model designed for trust and predictability.",
      items: [
        {
          title: "Confidentiality",
          description:
            "Strict information governance and careful channel selection for sensitive materials.",
        },
        {
          title: "Clear explanation of legal risks",
          description:
            "Plain-language summaries with prioritized options—not stacks of unexplained paperwork.",
        },
        {
          title: "Fast response",
          description:
            "We acknowledge inquiries promptly and set realistic timelines for substantive answers.",
        },
        {
          title: "Transparent pricing",
          description:
            "Fee structures discussed upfront: hourly, fixed-fee components, or staged billing where appropriate.",
        },
        {
          title: "Professional document preparation",
          description:
            "Court-ready and transaction-ready drafting with consistent formatting and citations.",
        },
      ],
    },
    practice: {
      title: "Practice areas",
      subtitle: "Focused expertise where disputes and transactions intersect.",
      items: [
        {
          title: "Business disputes",
          description:
            "Shareholder conflicts, breach of contract, unfair competition, and injunctive relief strategies.",
        },
        {
          title: "Contract issues",
          description:
            "Termination, penalties, force majeure, warranties, indemnities, and renegotiation support.",
        },
        {
          title: "Property matters",
          description:
            "Title review, lease disputes, boundaries, and enforcement of property-related judgments.",
        },
        {
          title: "Family disputes",
          description:
            "Financial disclosure, support calculations, and parenting plans with child-focused outcomes.",
        },
        {
          title: "Debt recovery",
          description:
            "Demand letters, settlement talks, enforcement, and insolvency-aware recovery paths.",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Straight answers to common questions before the first meeting.",
      items: [
        {
          question: "How can I get a consultation?",
          answer:
            "Use the contact form, call our office, or message us on WhatsApp. We will confirm availability, scope, and any documents to bring or upload.",
        },
        {
          question: "Do you work online?",
          answer:
            "Yes. We conduct secure video consultations and exchange drafts electronically when it suits your schedule.",
        },
        {
          question: "How much does a consultation cost?",
          answer:
            "Fees depend on complexity and urgency. After a short intake, we provide a clear quote or a capped initial review fee.",
        },
        {
          question: "Can I send documents through WhatsApp?",
          answer:
            "You may send scans for a preliminary review. For sensitive materials, we may direct you to encrypted email or a secure portal.",
        },
        {
          question: "Do you represent clients in court?",
          answer:
            "Yes, including written pleadings, evidence bundles, hearings, and enforcement follow-up where needed.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Tell us briefly what happened—we will propose the fastest safe path forward.",
      lawyerName: "Lawyer",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Office address",
      hoursLabel: "Working hours",
      writeWhatsApp: "Write on WhatsApp",
      form: {
        name: "Name",
        phone: "Phone",
        message: "Message",
        submit: "Send request",
        note: "Submitting this form does not create an attorney–client relationship until confirmed in writing.",
        success:
          "Thank you. We have received your message and will respond as soon as possible.",
      },
    },
    footer: {
      tagline: "Measured advice. Disciplined execution.",
      quickLinks: "Quick links",
      contacts: "Contacts",
      rights: "All rights reserved.",
      privacy: "Confidentiality policy applies to all inquiries.",
    },
    brand: {
      firmName: "Seitjan & Partners",
      lawyerTitle: "Yerkhoja Seitjan, Attorney-at-Law",
    },
    waPrefill: "Hello, I would like to get a legal consultation.",
    office: {
      address: "Almaty city, Akbulak district, 34 Syzdykova St.",
      hours: "Mon–Fri: 10:00–18:00; by appointment on weekends",
      email: "office@seitjanlegal.example",
    },
  },
  ru: {
    meta: {
      title: "Сейтжан и партнеры | Корпоративное и частное право",
      description:
        "Профессиональная юридическая поддержка для бизнеса и частных лиц: консультации, договоры, споры и представительство в суде.",
    },
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      practice: "Практики",
      faq: "Вопросы",
      contact: "Контакты",
      contactWhatsApp: "Связаться в WhatsApp",
    },
    hero: {
      headline: "Надежная юридическая поддержка для бизнеса и частных вопросов",
      description:
        "Профессиональные юридические консультации, подготовка документов и представительство в суде с индивидуальным подходом.",
      ctaConsult: "Получить консультацию",
      ctaWhatsApp: "Написать в WhatsApp",
    },
    about: {
      title: "О практике",
      lead: "Мы выстраиваем работу вокруг ясной коммуникации, дисциплинированного ведения дела и практичного результата. Основа — конфиденциальность, внимательный разбор фактов и спокойный профессиональный тон во взаимодействии с клиентами и органами.",
      cards: {
        experience: {
          title: "5+ лет опыта",
          body: "Сопровождение клиентов на этапах переговоров, досудебного урегулирования и судебного разбирательства по гражданским и коммерческим спорам.",
        },
        consultations: {
          title: "300+ консультаций",
          body: "Структурированные сессии и при необходимости письменные итоги, чтобы вы понимали следующий шаг.",
        },
        confidential: {
          title: "Конфиденциальность",
          body: "Принципы адвокатской тайны, аккуратная работа с документами и деликатные каналы связи.",
        },
        approach: {
          title: "Индивидуальный подход",
          body: "Стратегия под ваш профиль рисков, сроки и бюджет — без лишних процедур.",
        },
      },
    },
    services: {
      title: "Услуги",
      subtitle: "Комплексная юридическая поддержка для компаний и частных клиентов.",
      items: [
        {
          title: "Юридическая консультация",
          description:
            "Оценка рисков, разбор прав и обязанностей и дорожная карта до подписания или суда.",
        },
        {
          title: "Составление и проверка договоров",
          description:
            "Сбалансированные условия, ясные определения и механизмы разрешения споров под ваши цели.",
        },
        {
          title: "Юридическое сопровождение бизнеса",
          description:
            "Повседневные вопросы корпоративного управления, контрагентов, трудовых отношений и регуляторных контактов.",
        },
        {
          title: "Дела по гражданскому праву",
          description:
            "Иски, возражения и стратегии урегулирования по договорным и внедоговорным спорам.",
        },
        {
          title: "Семейное право",
          description:
            "Вопросы, связанные с расторжением брака, алиментами, участием в воспитании детей и разделом имущества — с тактом и требовательностью к доказательствам.",
        },
        {
          title: "Представительство в суде",
          description:
            "Процессуальные документы, систематизация доказательств и судебная аргументация, ориентированная на ясность и убедительность.",
        },
      ],
    },
    why: {
      title: "Почему клиенты выбирают нас",
      subtitle: "Формат премиального сервиса, ориентированный на доверие и предсказуемость.",
      items: [
        {
          title: "Конфиденциальность",
          description:
            "Строгие правила работы с информацией и выбор каналов связи с учётом чувствительности материалов.",
        },
        {
          title: "Понятное объяснение юридических рисков",
          description:
            "Резюме простым языком с приоритетами — без «стопок бумаги» без пояснений.",
        },
        {
          title: "Быстрая обратная связь",
          description:
            "Мы оперативно подтверждаем получение обращения и заранее обозначаем сроки содержательного ответа.",
        },
        {
          title: "Прозрачное ценообразование",
          description:
            "Форматы оплаты обсуждаются заранее: почасовая работа, фиксированные этапы или комбинированные схемы.",
        },
        {
          title: "Профессиональная подготовка документов",
          description:
            "Судебные и сделочные тексты с аккуратной структурой, ссылками на нормы и единым стилем оформления.",
        },
      ],
    },
    practice: {
      title: "Практики",
      subtitle: "Узкая экспертиза там, где пересекаются споры и сделки.",
      items: [
        {
          title: "Корпоративные споры",
          description:
            "Конфликты участников, нарушение договоров, недобросовестная конкуренция и стратегии обеспечительных мер.",
        },
        {
          title: "Договорные споры",
          description:
            "Расторжение, неустойки, форс-мажор, гарантии, возмещение убытков и поддержка переговоров о пересмотре условий.",
        },
        {
          title: "Имущественные вопросы",
          description:
            "Проверка прав, споры по аренде, границы владения и исполнение решений по имущественным требованиям.",
        },
        {
          title: "Семейные споры",
          description:
            "Раскрытие финансов, расчёт алиментов и планы участия в воспитании детей с фокусом на их интересы.",
        },
        {
          title: "Взыскание задолженности",
          description:
            "Претензии, переговоры о мировом, исполнительное производство и маршруты с учётом процедур несостоятельности.",
        },
      ],
    },
    faq: {
      title: "Частые вопросы",
      subtitle: "Прямые ответы до первой встречи.",
      items: [
        {
          question: "Как получить консультацию?",
          answer:
            "Оставьте заявку в форме, позвоните в офис или напишите в WhatsApp. Мы подтвердим время, тему и перечень документов, которые нужно подготовить или загрузить.",
        },
        {
          question: "Вы работаете онлайн?",
          answer:
            "Да. Проводим видеоконсультации и обмениваемся проектами документов в электронном виде, если это удобнее по графику.",
        },
        {
          question: "Сколько стоит консультация?",
          answer:
            "Стоимость зависит от сложности и срочности. После короткого уточняющего запроса мы называем понятную сумму или фиксированный лимит на первичный разбор.",
        },
        {
          question: "Можно ли отправить документы через WhatsApp?",
          answer:
            "Для предварительного ознакомления можно направить сканы. Для особо чувствительных материалов мы можем предложить защищённую почту или портал.",
        },
        {
          question: "Вы представляете интересы клиентов в суде?",
          answer:
            "Да, включая процессуальные документы, комплекты доказательств, заседания и дальнейшее сопровождение исполнения решения при необходимости.",
        },
      ],
    },
    contact: {
      title: "Контакты",
      subtitle: "Кратко опишите ситуацию — мы предложим самый быстрый безопасный маршрут.",
      lawyerName: "Адвокат",
      phoneLabel: "Телефон",
      emailLabel: "Электронная почта",
      addressLabel: "Адрес офиса",
      hoursLabel: "Часы работы",
      writeWhatsApp: "Написать в WhatsApp",
      form: {
        name: "Имя",
        phone: "Телефон",
        message: "Сообщение",
        submit: "Отправить запрос",
        note: "Отправка формы не создаёт адвокатско-клиентские отношения до отдельного письменного подтверждения.",
        success:
          "Спасибо. Мы получили ваше сообщение и свяжемся с вами в ближайшее время.",
      },
    },
    footer: {
      tagline: "Взвешенные рекомендации. Дисциплинированное ведение дела.",
      quickLinks: "Быстрые ссылки",
      contacts: "Контакты",
      rights: "Все права защищены.",
      privacy: "К режиму конфиденциальности относятся все обращения.",
    },
    brand: {
      firmName: "Сейтжан и партнеры",
      lawyerTitle: "Еркожа Сейтжан, адвокат",
    },
    waPrefill: "Здравствуйте, я хотел(а) бы получить юридическую консультацию.",
    office: {
      address: "город Алматы, мкр.Акбулак, ул.Сыздыкова 34",
      hours: "Пн–Пт: 10:00–18:00; в выходные — по предварительной записи",
      email: "office@seitjanlegal.example",
    },
  },
  kz: {
    meta: {
      title: "Сейтжан и партнеры | Бизнес және жеке құқық",
      description:
        "Компаниялар мен жеке тұлғаларға кәсіби заңгерлік қолдау: кеңес, шарттар, даулар және сотта өкілдік ету.",
    },
    nav: {
      home: "Басты бет",
      about: "Біз туралы",
      services: "Қызметтер",
      practice: "Сала бағыттары",
      faq: "Сұрақтар",
      contact: "Байланыс",
      contactWhatsApp: "WhatsApp арқылы хабарласу",
    },
    hero: {
      headline: "Бизнес және жеке мәселелеріңізге сенімді заңгерлік қолдау",
      description:
        "Кәсіби заңгерлік кеңес, құжаттарды дайындау және сотта өкілдік ету — жеке тәсілмен.",
      ctaConsult: "Кеңес алу",
      ctaWhatsApp: "WhatsApp-қа жазу",
    },
    about: {
      title: "Кеңсе туралы",
      lead: "Біз нақты коммуникация, тәртіпті іс жүргізу және практикалық нәтижеге бағытталамыз. Негізі — құпиялылық, фактілерді мұқият талдау және клиенттермен, органдармен байланыста сабырлы кәсіби тон.",
      cards: {
        experience: {
          title: "5+ жыл тәжірибе",
          body: "Клиенттерді келіссөздер, сотқа дейінгі кезеңдер және азаматтық-қаржылық даулар бойынша сот талқылаулары кезінде сүйемелдеу.",
        },
        consultations: {
          title: "300+ кеңес",
          body: "Құрылымдалған кездесулер және қажет болса жазбаша қорытындылар — келесі қадамды түсінесіз.",
        },
        confidential: {
          title: "Құпиялылық",
          body: "Адвокаттық құпиялық принциптері, құжаттарды сақтандыру және сезімтал мәліметтер үшін ыңғайлы арналар.",
        },
        approach: {
          title: "Жеке тәсіл",
          body: "Стратегия тәуекел профилі, мерзім және бюджетіңізге бейімделеді — артық рәсімсіз.",
        },
      },
    },
    services: {
      title: "Қызметтер",
      subtitle: "Компаниялар мен жеке клиенттер үшін толық заңгерлік сүйемелдеу.",
      items: [
        {
          title: "Заңгерлік кеңес",
          description:
            "Тәуекелдерді бағалау, құқықтар мен міндеттерді талдау және қол қою немесе сотқа дейінгі жол картасы.",
        },
        {
          title: "Шарттарды дайындау және тексеру",
          description:
            "Теңгерімді талаптар, анық анықтамалар және мақсаттарыңызға сай дау шешу механизмдері.",
        },
        {
          title: "Бизнесті заңгерлік сүйемелдеу",
          description:
            "Корпоративті басқару, контрагенттер, еңбек қатынастары және реттеуші байланыстар бойынша күнделікті кеңес.",
        },
        {
          title: "Азаматтық құқық істері",
          description:
            "Шарттық және шарттық емес даулар бойынша талаптар, қарсы тұру және келісім стратегиялары.",
        },
        {
          title: "Отбасылық құқық",
          description:
            "Ажырасу, алимент, балалармен байланысу және мүлікті бөлу мәселелері — сезімталдық пен дәлелдемелерге талапшылдықпен.",
        },
        {
          title: "Сотта өкілдік ету",
          description:
            "Құжаттама, дәлелдер жинағы және анықтық пен сенімділікке бағытталған соттық дәлелдеу.",
        },
      ],
    },
    why: {
      title: "Клиенттер неге бізді таңдайды",
      subtitle: "Сенім мен болжамдылыққа бағытталған премиум сервис форматы.",
      items: [
        {
          title: "Құпиялылық",
          description:
            "Ақпаратты басқарудың қатаң ережелері және материалдардың сезімталдығына сай арналар.",
        },
        {
          title: "Заңдық тәуекелдерді түсінікті түсіндіру",
          description:
            "Қарапайым тілдегі қорытындылар мен басымдықтар — түсіндірмесіз қағаз үйінділері емес.",
        },
        {
          title: "Жылдам жауап",
          description:
            "Хабарламаларды тез растаймыз және мазмұнды жауап үшін нақты мерзімдерді алдын ала айтамыз.",
        },
        {
          title: "Ашық баға",
          description:
            "Алдын ала талқыланатын төлем форматтары: сағаттық, белгілі сомалар немесе кезеңдер бойынша.",
        },
        {
          title: "Кәсіби құжат дайындау",
          description:
            "Сотқа және мәмілеге дайын мәтіндер, бірыңғай пішім және нормаларға сілтемелер.",
        },
      ],
    },
    practice: {
      title: "Сала бағыттары",
      subtitle: "Даулар мен мәмілелер тоғысатын бағыттағы терең тәжірибе.",
      items: [
        {
          title: "Бизнес даулары",
          description:
            "Қатысушылардың келіспеушілігі, шарт бұзу, әділсіз бәсекелестік және қамтамасыз ету шаралары.",
        },
        {
          title: "Шарттық мәселелер",
          description:
            "Бұзу, айыппұл, форс-мажор, кепілдіктер, залалдарды өтеу және шартты қайта қарау қолдауы.",
        },
        {
          title: "Мүлік мәселелері",
          description:
            "Құқықтарды тексеру, жалдау даулары, меншік шектері және мүлікке қатысты сот шешімдерін орындау.",
        },
        {
          title: "Отбасылық даулар",
          description:
            "Қаржы мәліметтері, алимент есебі және балалардың мүддесіне бағытталған тәрбиелеу жоспарлары.",
        },
        {
          title: "Қарызды өндіру",
          description:
            "Нотариалды талаптар, келіссөздер, орындау рәсімі және борышқорлық рәсімдерін ескеру.",
        },
      ],
    },
    faq: {
      title: "Жиі қойылатын сұрақтар",
      subtitle: "Бірінші кездесуден бұрын берілетін нақты жауаптар.",
      items: [
        {
          question: "Кеңес қалай аламын?",
          answer:
            "Форманы толтырыңыз, кеңсеге қоңырау шалыңыз немесе WhatsApp арқылы жазыңыз. Уақытты, тақырыпты және дайындау керек құжаттар тізімін растаймыз.",
        },
        {
          question: "Онлайн жұмыс істейсіз бе?",
          answer:
            "Иә. Бейне кеңестер өткіземіз және кестеңізге сай электронды түрде жобалармен алмасамыз.",
        },
        {
          question: "Кеңес қанша тұрады?",
          answer:
            "Құны күрделілік пен шұғылдыққа байланысты. Қысқа сұраудан кейін нақты сома немесе бірінші талдауға шектеулі төлемді ұсынамыз.",
        },
        {
          question: "Құжаттарды WhatsApp арқылы жіберуге бола ма?",
          answer:
            "Алдын ала қарау үшін сканерлерді жіберуге болады. Ерекше сезімтал материалдар үшін қорғалған пошта немесе портал ұсына аламыз.",
        },
        {
          question: "Сотта клиенттерді қорғайсыз ба?",
          answer:
            "Иә, сот құжаттары, дәлелдер, отырыс және қажет болса шешімді орындауды сүйемелдеу.",
        },
      ],
    },
    contact: {
      title: "Байланыс",
      subtitle: "Мәселені қысқаша сипаттаңыз — ең жылдам және қауіпсіз жолды ұсынамыз.",
      lawyerName: "Адвокат",
      phoneLabel: "Телефон",
      emailLabel: "Электрондық пошта",
      addressLabel: "Кеңсе мекенжайы",
      hoursLabel: "Жұмыс уақыты",
      writeWhatsApp: "WhatsApp-қа жазу",
      form: {
        name: "Аты-жөні",
        phone: "Телефон",
        message: "Хабарлама",
        submit: "Сұраныс жіберу",
        note: "Форманы жіберу адвокаттық қатынасты жеке жазбаша растамайынша жасамайды.",
        success:
          "Рахмет. Хабарламаңызды алдық және мүмкіндігінше тез жауап береміз.",
      },
    },
    footer: {
      tagline: "Өлшенген кеңес. Тәртіпті іс жүргізу.",
      quickLinks: "Жылдам сілтемелер",
      contacts: "Байланыс",
      rights: "Барлық құқықтар қорғалған.",
      privacy: "Құпиялылық режимі барлық сұрауларға қолданылады.",
    },
    brand: {
      firmName: "Сейтжан и партнеры",
      lawyerTitle: "Ерқожа Сейтжан, адвокат",
    },
    waPrefill: "Сәлеметсіз бе, мен заңгерлік кеңес алғым келеді.",
    office: {
      address: "Алматы қаласы, ш / а.Ақбұлақ, Сыздықов көшесі, 34",
      hours: "Дс–Жм: 10:00–18:00; демалыста — алдын ала жазылу бойынша",
      email: "office@seitjanlegal.example",
    },
  },
};
