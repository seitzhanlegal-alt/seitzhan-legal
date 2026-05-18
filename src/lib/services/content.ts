import type { Lang } from "@/lib/translations";
import type { ServiceCatalog, ServicePageContent, ServiceSlug } from "./types";
import { SERVICE_SLUGS } from "./types";

const ru = (
  p: Omit<ServicePageContent, "relatedSlugs"> & { relatedSlugs?: ServiceSlug[] },
): ServicePageContent => ({
  ...p,
  relatedSlugs: p.relatedSlugs ?? [],
});

const pages: ServiceCatalog = {
  "lawyer-almaty": {
    ru: ru({
      meta: {
        title: "Адвокат в Алматы | Юридическая защита и консультации",
        description:
          "Адвокат в Алматы: консультации, подготовка документов, представительство в суде и защита интересов клиентов в Казахстане.",
        keywords:
          "адвокат Алматы, юрист Алматы, юридические услуги Алматы, адвокат Казахстан",
      },
      h1: "Адвокат в Алматы",
      intro:
        "Профессиональная юридическая помощь для частных лиц и бизнеса в Алматы. Работаем с делами разной сложности — от консультации до представительства в суде.",
      includes: [
        "Первичный анализ ситуации и правовой оценки рисков",
        "Разработка правовой позиции и плана действий",
        "Подготовка заявлений, жалоб, претензий и иных документов",
        "Представительство в судах и государственных органах",
      ],
      whenNeeded: [
        "Получили судебную повестку или претензию",
        "Нужна защита в споре с контрагентом или работодателем",
        "Требуется сопровождение сделки или договора",
        "Нужен независимый взгляд адвоката до принятия решения",
      ],
      processSteps: [
        "Связь через WhatsApp, телефон или форму на сайте",
        "Краткий разбор ситуации и согласование формата консультации",
        "Изучение документов и правовой анализ",
        "Предложение стратегии и согласование дальнейших шагов",
      ],
      documents: [
        "Паспорт или удостоверение личности",
        "Договоры, переписка, платежные документы по делу",
        "Судебные акты или уведомления (если есть)",
      ],
      faq: [
        {
          question: "Чем адвокат отличается от юриста?",
          answer:
            "Адвокат имеет статус и полномочия, установленные законом, включая представительство в суде и особые гарантии адвокатской тайны.",
        },
        {
          question: "Можно ли получить консультацию дистанционно?",
          answer:
            "Да, первичный разбор возможен онлайн. Для суда и подписания документов может потребоваться личное участие.",
        },
      ],
      relatedSlugs: [
        "legal-consultation-almaty",
        "court-representation",
        "civil-law",
      ],
    }),
    kz: ru({
      meta: {
        title: "Алматыдағы адвокат | Заңгерлік қорғау",
        description:
          "Алматыдағы адвокат: кеңес, құжаттар дайындау, сотта өкілдік және клиент мүддесін қорғау.",
        keywords: "адвокат Алматы, заңгер Алматы, заңгерлік қызметтер",
      },
      h1: "Алматыдағы адвокат",
      intro:
        "Алматыда жеке тұлғалар мен бизнес үшін кәсіби заңгерлік көмек. Кеңестен сотта өкілдікке дейін.",
      includes: [
        "Жағдайды алғашқы талдау және тәуекелдерді бағалау",
        "Құқықтық позиция және әрекет жоспары",
        "Өтініштер мен шағымдарды дайындау",
        "Сотта және мемлекеттік органдарда өкілдік",
      ],
      whenNeeded: [
        "Сот шақыртуы немесе даунама алдыңыз",
        "Контрагентпен дау",
        "Мәміле немесе шартты сүйемелдеу қажет",
      ],
      processSteps: [
        "WhatsApp, телефон немесе сайт арқылы байланыс",
        "Қысқаша талдау және кеңес форматы",
        "Құжаттарды зерттеу",
        "Стратегия ұсыну",
      ],
      documents: ["Жеке куәлік", "Шарттар мен хат алмасу", "Сот құжаттары"],
      faq: [
        {
          question: "Адвокат пен заңгер айырмашылығы неде?",
          answer: "Адвокат заңмен белгіленген мәртебе және сотта өкілдік құқығына ие.",
        },
      ],
      relatedSlugs: ["legal-consultation-almaty", "court-representation"],
    }),
    en: ru({
      meta: {
        title: "Lawyer in Almaty | Legal protection & advice",
        description:
          "Lawyer in Almaty: consultations, document preparation, court representation, and client protection in Kazakhstan.",
        keywords: "lawyer Almaty, attorney Kazakhstan, legal services Almaty",
      },
      h1: "Lawyer in Almaty",
      intro:
        "Professional legal assistance for individuals and businesses in Almaty — from consultation to court representation.",
      includes: [
        "Initial case review and risk assessment",
        "Legal strategy and action plan",
        "Drafting applications and claims",
        "Representation in courts and authorities",
      ],
      whenNeeded: [
        "You received a court summons or claim",
        "A dispute with a counterparty or employer",
        "Transaction or contract support is required",
      ],
      processSteps: [
        "Contact via WhatsApp, phone, or the website form",
        "Brief review and consultation format",
        "Document analysis",
        "Strategy proposal and next steps",
      ],
      documents: ["ID document", "Contracts and correspondence", "Court papers if any"],
      faq: [
        {
          question: "Can consultations be held remotely?",
          answer: "Yes. Court hearings or signing may require in-person involvement.",
        },
      ],
      relatedSlugs: ["legal-consultation-almaty", "court-representation"],
    }),
  },
  "legal-consultation-almaty": {
    ru: ru({
      meta: {
        title: "Юридическая консультация в Алматы",
        description:
          "Юридическая консультация в Алматы: анализ ситуации, оценка рисков, рекомендации и план действий для частных лиц и бизнеса.",
        keywords:
          "юридическая консультация Алматы, адвокат консультация, правовая помощь",
      },
      h1: "Юридическая консультация в Алматы",
      intro:
        "Консультация помогает понять ваши права, риски и возможные шаги до подписания документов или обращения в суд.",
      includes: [
        "Устная или письменная правовая консультация",
        "Анализ представленных документов",
        "Оценка перспектив и рисков",
        "Рекомендации по дальнейшим действиям",
      ],
      whenNeeded: [
        "Планируете подписать договор",
        "Возник спор с партнером, арендодателем или работодателем",
        "Нужно понять сроки и процедуры обращения в суд",
      ],
      processSteps: [
        "Вы описываете ситуацию и цель",
        "Адвокат задает уточняющие вопросы",
        "Проводится правовой анализ",
        "Вы получаете понятные рекомендации",
      ],
      documents: ["Договоры и переписка", "Квитанции и акты", "Уведомления госорганов"],
      faq: [
        {
          question: "Конфиденциальна ли консультация?",
          answer: "Да. Информация клиента защищается профессиональной тайной адвоката.",
        },
      ],
      relatedSlugs: ["lawyer-almaty", "contract-drafting", "civil-law"],
    }),
    kz: ru({
      meta: {
        title: "Алматыдағы заңгерлік кеңес",
        description: "Алматыда заңгерлік кеңес: жағдайды талдау, тәуекелдер және әрекет жоспары.",
        keywords: "заңгерлік кеңес Алматы, адвокат кеңесі",
      },
      h1: "Алматыдағы заңгерлік кеңес",
      intro: "Құқықтарыңызды, тәуекелдерді және келесі қадамдарды түсінуге көмектеседі.",
      includes: ["Заңгерлік кеңес", "Құжаттарды талдау", "Тәуекелдерді бағалау"],
      whenNeeded: ["Шартқа қол қою алдында", "Дау туындағанда"],
      processSteps: ["Байланыс", "Сұрақтар", "Талдау", "Ұсыныстар"],
      documents: ["Шарттар", "Төлем құжаттары"],
      faq: [
        {
          question: "Кеңес құпия ма?",
          answer: "Иә, адвокаттық құпиялық сақталады.",
        },
      ],
      relatedSlugs: ["lawyer-almaty", "contract-drafting"],
    }),
    en: ru({
      meta: {
        title: "Legal consultation in Almaty",
        description:
          "Legal consultation in Almaty: situation analysis, risk assessment, and an action plan.",
        keywords: "legal consultation Almaty, lawyer advice Kazakhstan",
      },
      h1: "Legal consultation in Almaty",
      intro:
        "Understand your rights, risks, and options before signing documents or going to court.",
      includes: ["Oral or written legal advice", "Document review", "Risk assessment"],
      whenNeeded: ["Before signing a contract", "When a dispute arises"],
      processSteps: ["You describe the issue", "Clarifying questions", "Legal analysis", "Recommendations"],
      documents: ["Contracts", "Payment records"],
      faq: [
        {
          question: "Is the consultation confidential?",
          answer: "Yes. Client information is protected by attorney-client privilege.",
        },
      ],
      relatedSlugs: ["lawyer-almaty", "contract-drafting"],
    }),
  },
  "contract-drafting": {
    ru: ru({
      meta: {
        title: "Составление и проверка договоров в Алматы",
        description:
          "Составление и проверка договоров в Алматы: снижение рисков, понятные условия, защита интересов стороны.",
        keywords: "составление договоров Алматы, проверка договора юрист",
      },
      h1: "Составление и проверка договоров",
      intro:
        "Грамотный договор фиксирует обязательства сторон и снижает риск споров. Помогаем подготовить или проверить договор до подписания.",
      includes: [
        "Разработка проекта договора под вашу сделку",
        "Проверка договора контрагента",
        "Согласование существенных условий",
        "Рекомендации по рискам и ответственности",
      ],
      whenNeeded: [
        "Заключаете договор аренды, поставки или оказания услуг",
        "Контрагент прислал типовой договор на подпись",
        "Нужно добавить штрафы, гарантии или порядок расторжения",
      ],
      processSteps: [
        "Обсуждение цели сделки и сторон",
        "Подготовка или анализ текста",
        "Согласование правок",
        "Финальная версия для подписания",
      ],
      documents: ["Проект договора", "Устав и реквизиты (для юрлиц)", "Переписка по условиям"],
      faq: [
        {
          question: "Сколько времени занимает подготовка?",
          answer: "Зависит от сложности: простой договор — несколько дней, сложный — дольше после согласования деталей.",
        },
      ],
      relatedSlugs: ["business-legal-support", "legal-consultation-almaty"],
    }),
    kz: ru({
      meta: {
        title: "Шарттарды дайындау және тексеру | Алматы",
        description: "Алматыда шарттарды дайындау және тексеру: тәуекелдерді азайту.",
        keywords: "шарт дайындау Алматы, шарт тексеру",
      },
      h1: "Шарттарды дайындау және тексеру",
      intro: "Дұрыс шарт міндеттемелерді бекітеді және дау тәуекелін азайтады.",
      includes: ["Шарт жобасын дайындау", "Контрагент шартын тексеру"],
      whenNeeded: ["Жаңа мәміле алдында", "Типтік шартқа қол қою алдында"],
      processSteps: ["Мақсатты талқылау", "Мәтін дайындау", "Келісу"],
      documents: ["Шарт жобасы", "Реквизиттер"],
      faq: [{ question: "Мерзімі қанша?", answer: "Күрделілігіне байланысты." }],
      relatedSlugs: ["business-legal-support"],
    }),
    en: ru({
      meta: {
        title: "Contract drafting and review in Almaty",
        description: "Contract drafting and review in Almaty to protect your interests and reduce dispute risk.",
        keywords: "contract drafting Almaty, contract review lawyer",
      },
      h1: "Contract drafting and review",
      intro: "A clear contract defines obligations and reduces the risk of disputes.",
      includes: ["Drafting tailored contracts", "Reviewing counterparty contracts"],
      whenNeeded: ["Before signing lease, supply, or service agreements"],
      processSteps: ["Discuss deal terms", "Draft or review", "Finalize for signing"],
      documents: ["Draft contract", "Company details for legal entities"],
      faq: [{ question: "How long does drafting take?", answer: "Depends on complexity and agreed scope." }],
      relatedSlugs: ["business-legal-support"],
    }),
  },
  "court-representation": {
    ru: ru({
      meta: {
        title: "Представительство в суде в Алматы",
        description:
          "Представительство в суде в Алматы: подготовка процессуальных документов, участие в заседаниях, защита интересов клиента.",
        keywords: "представительство в суде Алматы, адвокат в суде, защита в суде",
      },
      h1: "Представительство в суде",
      intro:
        "Судебное представительство включает подготовку позиции, документов и участие адвоката в заседаниях от вашего имени.",
      includes: [
        "Анализ материалов дела и судебной практики",
        "Подготовка исков, отзывов, ходатайств",
        "Участие в судебных заседаниях",
        "Сопровождение исполнения решения",
      ],
      whenNeeded: [
        "Вас привлекли к ответственности или подали иск",
        "Нужно взыскать задолженность через суд",
        "Спор не удалось урегулировать досудебно",
      ],
      processSteps: [
        "Изучение документов и сроков",
        "Формирование правовой позиции",
        "Подготовка процессуальных документов",
        "Представительство в суде",
      ],
      documents: ["Иск или определение суда", "Договоры и доказательства", "Переписка сторон"],
      faq: [
        {
          question: "Обязательно ли личное присутствие клиента?",
          answer: "Не всегда. Во многих случаях адвокат представляет интересы по доверенности.",
        },
      ],
      relatedSlugs: ["civil-law", "debt-recovery", "lawyer-almaty"],
    }),
    kz: ru({
      meta: {
        title: "Сотта өкілдік ету | Алматы",
        description: "Алматыда сотта өкілдік: құжаттар дайындау және сот отырыстарына қатысу.",
        keywords: "сотта қорғау Алматы, адвокат сот",
      },
      h1: "Сотта өкілдік ету",
      intro: "Сот процесінде клиент мүддесін қорғау және процессуалдық құжаттарды дайындау.",
      includes: ["Іс материалдарын талдау", "Өтініштер дайындау", "Сот отырыстары"],
      whenNeeded: ["Сотқа тартылдыңыз", "Қарызды сот арқылы өндіру"],
      processSteps: ["Құжаттарды зерттеу", "Позиция", "Сот"],
      documents: ["Сот құжаттары", "Келісімшарттар"],
      faq: [{ question: "Клиент міндетті түрде келе ме?", answer: "Әр жағдайда әртүрлі, көбіне адвокат өкілдік етеді." }],
      relatedSlugs: ["civil-law", "debt-recovery"],
    }),
    en: ru({
      meta: {
        title: "Court representation in Almaty",
        description: "Court representation in Almaty: pleadings, hearings, and protecting client interests.",
        keywords: "court representation Almaty, litigation lawyer Kazakhstan",
      },
      h1: "Court representation",
      intro: "Full litigation support from case analysis to hearings and enforcement guidance.",
      includes: ["Case analysis", "Drafting pleadings", "Court hearings"],
      whenNeeded: ["You are sued or need to file a claim", "Pre-trial settlement failed"],
      processSteps: ["Review deadlines", "Build legal position", "Court advocacy"],
      documents: ["Claim or court order", "Evidence and contracts"],
      faq: [{ question: "Must the client attend every hearing?", answer: "Not always; counsel often acts under a power of attorney." }],
      relatedSlugs: ["civil-law", "debt-recovery"],
    }),
  },
  "family-lawyer": {
    ru: ru({
      meta: {
        title: "Семейный адвокат в Алматы",
        description:
          "Семейный адвокат в Алматы: развод, алименты, определение порядка общения с детьми, раздел имущества.",
        keywords: "семейный адвокат Алматы, развод адвокат, алименты юрист",
      },
      h1: "Семейный адвокат",
      intro:
        "Семейные споры требуют взвешенного подхода. Помогаем защитить права и интересы детей и клиента в рамках закона.",
      includes: [
        "Консультации по бракоразводному процессу",
        "Подготовка соглашений и заявлений",
        "Представительство в суде по семейным делам",
        "Сопровождение вопросов алиментов и имущества",
      ],
      whenNeeded: [
        "Планируется развод или раздел имущества",
        "Спор об алиментах или общении с ребенком",
        "Нужно оспорить или изменить судебный акт",
      ],
      processSteps: [
        "Конфиденциальная консультация",
        "Сбор документов о браке и детях",
        "Досудебные переговоры или суд",
        "Исполнение решения",
      ],
      documents: ["Свидетельство о браке", "Свидетельства о рождении детей", "Документы на имущество"],
      faq: [
        {
          question: "Можно ли развестись без суда?",
          answer: "При определенных условиях — через ЗАГС. При спорах — через суд.",
        },
      ],
      relatedSlugs: ["legal-consultation-almaty", "court-representation"],
    }),
    kz: ru({
      meta: {
        title: "Отбасылық адвокат | Алматы",
        description: "Отбасылық даулар: ажырасу, алимент, мүлік бөлу.",
        keywords: "отбасылық адвокат Алматы",
      },
      h1: "Отбасылық адвокат",
      intro: "Отбасылық дауларда заңды тәсілмен қорғау.",
      includes: ["Ажырасу кеңесі", "Өтініштер", "Сотта өкілдік"],
      whenNeeded: ["Ажырасу", "Алимент дауы"],
      processSteps: ["Кеңес", "Құжаттар", "Сот немесе келісім"],
      documents: ["Неке куәлігі", "Балалар куәлігі"],
      faq: [{ question: "Сотсыз ажырасуға бола ма?", answer: "Жағдайға байланысты." }],
      relatedSlugs: ["court-representation"],
    }),
    en: ru({
      meta: {
        title: "Family lawyer in Almaty",
        description: "Family lawyer in Almaty: divorce, alimony, child arrangements, property division.",
        keywords: "family lawyer Almaty, divorce attorney Kazakhstan",
      },
      h1: "Family lawyer",
      intro: "Sensitive support for family disputes with a focus on lawful outcomes and child interests.",
      includes: ["Divorce consultations", "Drafting agreements", "Court representation"],
      whenNeeded: ["Divorce or property division", "Alimony or child contact disputes"],
      processSteps: ["Private consultation", "Document collection", "Negotiation or court"],
      documents: ["Marriage certificate", "Children's birth certificates"],
      faq: [{ question: "Is court always required?", answer: "Not always; some cases may be handled administratively." }],
      relatedSlugs: ["court-representation"],
    }),
  },
  "business-legal-support": {
    ru: ru({
      meta: {
        title: "Юрист для бизнеса в Алматы",
        description:
          "Юридическое сопровождение бизнеса в Алматы: договоры, споры, корпоративные вопросы, претензионная работа.",
        keywords: "юрист для бизнеса Алматы, корпоративный юрист, правовое сопровождение",
      },
      h1: "Юрист для бизнеса",
      intro:
        "Правовое сопровождение компаний и ИП: от ежедневных консультаций до защиты интересов в спорах.",
      includes: [
        "Абонентское или разовое сопровождение",
        "Проверка и подготовка договоров",
        "Претензионная работа с контрагентами",
        "Представительство в судах и госорганах",
      ],
      whenNeeded: [
        "Регулярные сделки с контрагентами",
        "Проверка договоров перед подписанием",
        "Задолженность контрагента или налоговый вопрос",
      ],
      processSteps: [
        "Аудит текущих рисков",
        "Согласование формата сопровождения",
        "Оперативные консультации и документы",
        "Участие в переговорах и суде при необходимости",
      ],
      documents: ["Учредительные документы", "Договоры", "Переписка с контрагентами"],
      faq: [
        {
          question: "Можно ли работать по абонентской оплате?",
          answer: "Да, формат обсуждается индивидуально в зависимости от объема задач.",
        },
      ],
      relatedSlugs: ["contract-drafting", "debt-recovery", "court-representation"],
    }),
    kz: ru({
      meta: {
        title: "Бизнес үшін заңгер | Алматы",
        description: "Бизнес заңгерлік сүйемелдеуі: шарттар, даулар, корпоративтік сұрақтар.",
        keywords: "бизнес заңгер Алматы",
      },
      h1: "Бизнес үшін заңгер",
      intro: "Компаниялар мен ЖК үшін заңгерлік қолдау.",
      includes: ["Шарттар", "Даулар", "Сотта өкілдік"],
      whenNeeded: ["Мәмілелер", "Контрагент бермеді"],
      processSteps: ["Талдау", "Келісу", "Сүйемелдеу"],
      documents: ["Құжаттама", "Шарттар"],
      faq: [{ question: "Абоненттік жұмыс бар ма?", answer: "Иә, жеке келісіледі." }],
      relatedSlugs: ["contract-drafting"],
    }),
    en: ru({
      meta: {
        title: "Business legal support in Almaty",
        description: "Business legal support in Almaty: contracts, disputes, corporate matters, claims.",
        keywords: "business lawyer Almaty, corporate legal Kazakhstan",
      },
      h1: "Business legal support",
      intro: "Legal support for companies and sole proprietors — ongoing or project-based.",
      includes: ["Contract review", "Claims to counterparties", "Court representation"],
      whenNeeded: ["Regular transactions", "Counterparty default"],
      processSteps: ["Risk review", "Engagement terms", "Ongoing advice"],
      documents: ["Corporate documents", "Contracts"],
      faq: [{ question: "Retainer arrangements available?", answer: "Yes, depending on workload." }],
      relatedSlugs: ["contract-drafting", "debt-recovery"],
    }),
  },
  "debt-recovery": {
    ru: ru({
      meta: {
        title: "Взыскание долгов в Алматы",
        description:
          "Взыскание долгов в Алматы: претензионная работа, подготовка иска, судебное взыскание задолженности.",
        keywords: "взыскание долгов Алматы, долг юрист, взыскание задолженности",
      },
      h1: "Взыскание долгов",
      intro:
        "Помогаем вернуть задолженность законным путем: от претензии до исполнительного производства.",
      includes: [
        "Правовой анализ долга и доказательств",
        "Подготовка и направление претензии",
        "Исковое производство",
        "Сопровождение исполнения решения",
      ],
      whenNeeded: [
        "Контрагент не оплатил поставку или услуги",
        "Есть расписка или договор, но нет оплаты",
        "Истекает срок исковой давности",
      ],
      processSteps: [
        "Проверка документов и сроков",
        "Досудебная претензия",
        "Подготовка иска при необходимости",
        "Суд и исполнение",
      ],
      documents: ["Договор", "Акты, накладные", "Платежные поручения", "Переписка"],
      faq: [
        {
          question: "Всегда ли нужен суд?",
          answer: "Нет. Часто долг удается взыскать на стадии претензии или переговоров.",
        },
      ],
      relatedSlugs: ["court-representation", "civil-law", "business-legal-support"],
    }),
    kz: ru({
      meta: {
        title: "Қарызды өндіріп алу | Алматы",
        description: "Алматыда қарызды заңды өндіріп алу: даунама, сот.",
        keywords: "қарыз өндіріп алу Алматы",
      },
      h1: "Қарызды өндіріп алу",
      intro: "Қарызды заңды жолмен өндіріп алуға көмектесеміз.",
      includes: ["Даунама", "Сот", "Орындау"],
      whenNeeded: ["Төлем жоқ", "Мерзім өтіп барады"],
      processSteps: ["Талдау", "Даунама", "Сот"],
      documents: ["Шарт", "Актілер"],
      faq: [{ question: "Сот міндетті ме?", answer: "Әр жағдайда әртүрлі." }],
      relatedSlugs: ["court-representation", "civil-law"],
    }),
    en: ru({
      meta: {
        title: "Debt recovery in Almaty",
        description: "Debt recovery in Almaty: claims, lawsuits, and enforcement support.",
        keywords: "debt recovery Almaty, debt collection lawyer",
      },
      h1: "Debt recovery",
      intro: "Recover outstanding payments through lawful pre-trial and court procedures.",
      includes: ["Debt analysis", "Formal claims", "Litigation", "Enforcement guidance"],
      whenNeeded: ["Unpaid invoices", "Written acknowledgment of debt"],
      processSteps: ["Document review", "Pre-trial claim", "Court if needed"],
      documents: ["Contract", "Delivery acts", "Payment records"],
      faq: [{ question: "Is court always required?", answer: "Not always; many cases settle pre-trial." }],
      relatedSlugs: ["court-representation", "civil-law"],
    }),
  },
  "civil-law": {
    ru: ru({
      meta: {
        title: "Гражданские дела в Алматы",
        description:
          "Гражданские дела в Алматы: споры по договорам, возмещение ущерба, защита прав потребителей и имущественные споры.",
        keywords: "гражданские дела Алматы, гражданский адвокат, имущественный спор",
      },
      h1: "Гражданские дела",
      intro:
        "Сопровождение гражданских споров: анализ перспектив, подготовка документов и представительство в суде.",
      includes: [
        "Иски о взыскании и возмещении ущерба",
        "Споры по договорам и обязательствам",
        "Защита прав потребителей",
        "Обжалование судебных актов",
      ],
      whenNeeded: [
        "Нарушены условия договора",
        "Причинен ущерб имуществу или здоровью",
        "Нужно оспорить решение суда",
      ],
      processSteps: [
        "Консультация и оценка перспектив",
        "Сбор доказательств",
        "Досудебное урегулирование или иск",
        "Судебное разбирательство",
      ],
      documents: ["Договоры", "Акты осмотра", "Заключения экспертов", "Переписка"],
      faq: [
        {
          question: "Какие сроки важны в гражданском деле?",
          answer: "Исковая давность и процессуальные сроки зависят от категории спора — их важно проверить сразу.",
        },
      ],
      relatedSlugs: ["court-representation", "debt-recovery", "legal-consultation-almaty"],
    }),
    kz: ru({
      meta: {
        title: "Азаматтық істер | Алматы",
        description: "Азаматтық даулар: шарт, зиян, тұтынушы құқығы.",
        keywords: "азаматтық істер Алматы",
      },
      h1: "Азаматтық істер",
      intro: "Азаматтық дауларды сотқа дейін және сотта сүйемелдеу.",
      includes: ["Искілер", "Шарт даулары", "Шағымдану"],
      whenNeeded: ["Шарт бұзылды", "Зиян келді"],
      processSteps: ["Кеңес", "Дәлелдер", "Сот"],
      documents: ["Шарттар", "Актілер"],
      faq: [{ question: "Мерзімдер қандай?", answer: "Іс категориясына байланысты." }],
      relatedSlugs: ["court-representation", "debt-recovery"],
    }),
    en: ru({
      meta: {
        title: "Civil law cases in Almaty",
        description: "Civil law cases in Almaty: contract disputes, damages, consumer rights, property claims.",
        keywords: "civil law Almaty, civil litigation Kazakhstan",
      },
      h1: "Civil law cases",
      intro: "Support in civil disputes from assessment to court representation.",
      includes: ["Contract claims", "Damages", "Appeals"],
      whenNeeded: ["Breach of contract", "Property or consumer dispute"],
      processSteps: ["Assessment", "Evidence", "Court"],
      documents: ["Contracts", "Expert reports"],
      faq: [{ question: "What deadlines apply?", answer: "Limitation periods depend on the claim type — review early." }],
      relatedSlugs: ["court-representation", "debt-recovery"],
    }),
  },
};

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export function getServicePage(
  slug: ServiceSlug,
  lang: Lang,
): ServicePageContent {
  return pages[slug][lang];
}

export { pages as servicePages };
