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
        title: "Юрист-консультант в Алматы | Юридическая защита и консультации",
        description:
          "Юрист-консультант в Алматы: консультации, подготовка документов, представительство в суде и защита интересов клиентов в Казахстане.",
        keywords:
          "юрист-консультант Алматы, юрист Алматы, юридические услуги Алматы, юрист Казахстан",
      },
      h1: "Юрист-консультант в Алматы",
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
        "Нужен независимый взгляд юрист-консультанта до принятия решения",
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
        title: "Алматыдағы юрист-консультант | Заңгерлік қорғау",
        description:
          "Алматыдағы юрист-консультант: кеңес, құжаттар дайындау, сотта өкілдік және клиент мүддесін қорғау.",
        keywords: "юрист-консультант Алматы, заңгер Алматы, заңгерлік қызметтер",
      },
      h1: "Алматыдағы юрист-консультант",
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
  "bankruptcy-solvency": {
  ru: ru({
    meta: {
      title: "Банкротство и восстановление платежеспособности в Алматы",
      description:
        "Юридическая помощь по вопросам банкротства, восстановления платежеспособности, реструктуризации долгов и защиты интересов должника.",
      keywords:
        "банкротство Алматы, восстановление платежеспособности, юрист по банкротству, реструктуризация долгов",
    },
    h1: "Банкротство и восстановление платежеспособности",
    intro:
      "Юридическое сопровождение по вопросам банкротства, анализа задолженности, восстановления платежеспособности и выбора законного пути решения финансовых обязательств.",
    includes: [
      "Консультация по банкротству физических лиц",
      "Анализ задолженности и финансового положения",
      "Подготовка документов для процедуры банкротства",
      "Сопровождение восстановления платежеспособности",
      "Взаимодействие с кредиторами и государственными органами",
    ],
    whenNeeded: [
      "Имеются просроченные кредиты или долги",
      "Нет возможности исполнять финансовые обязательства",
      "Нужно оценить риски банкротства",
      "Требуется восстановление платежеспособности",
    ],
    processSteps: [
      "Первичная консультация и анализ ситуации",
      "Проверка долгов, доходов и имущества",
      "Выбор подходящей процедуры",
      "Подготовка и подача документов",
      "Сопровождение процесса до результата",
    ],
    documents: [
      "Удостоверение личности",
      "Кредитные договоры",
      "Справки о задолженности",
      "Сведения о доходах",
      "Документы на имущество",
      "Переписка с банками или кредиторами",
    ],
    faq: [
      {
        question: "Можно ли списать долги через банкротство?",
        answer:
          "Возможность списания долгов зависит от финансового положения, состава задолженности и соблюдения требований законодательства.",
      },
      {
        question: "Чем отличается банкротство от восстановления платежеспособности?",
        answer:
          "Банкротство применяется при невозможности платить по долгам, а восстановление платежеспособности направлено на урегулирование обязательств без полного прекращения финансовой деятельности.",
      },
    ],
    relatedSlugs: ["debt-recovery", "legal-consultation-almaty", "civil-law"],
  }),
  kz: ru({
    meta: {
      title: "Банкроттық және төлем қабілеттілігін қалпына келтіру | Алматы",
      description:
        "Банкроттық, қарыздарды қайта құрылымдау және төлем қабілеттілігін қалпына келтіру бойынша заңгерлік көмек.",
      keywords:
        "банкроттық Алматы, төлем қабілеттілігін қалпына келтіру, қарыз бойынша заңгер",
    },
    h1: "Банкроттық және төлем қабілеттілігін қалпына келтіру",
    intro:
      "Қарыздар, банкроттық рәсімі және төлем қабілеттілігін қалпына келтіру бойынша заңгерлік сүйемелдеу.",
    includes: [
      "Банкроттық бойынша кеңес",
      "Қарыз жағдайын талдау",
      "Құжаттарды дайындау",
      "Төлем қабілеттілігін қалпына келтіру бойынша сүйемелдеу",
      "Кредиторлармен жұмыс",
    ],
    whenNeeded: [
      "Несие немесе қарыз бойынша кешіктіру бар",
      "Қаржылық міндеттемелерді орындау қиын",
      "Банкроттық тәуекелін бағалау қажет",
      "Қарызды заңды түрде реттеу керек",
    ],
    processSteps: [
      "Алғашқы кеңес",
      "Қарыздар мен кірістерді талдау",
      "Тиісті рәсімді таңдау",
      "Құжаттарды дайындау",
      "Процесті сүйемелдеу",
    ],
    documents: [
      "Жеке куәлік",
      "Несие шарттары",
      "Қарыз туралы анықтамалар",
      "Кірістер туралы мәліметтер",
      "Мүлік құжаттары",
    ],
    faq: [
      {
        question: "Банкроттық арқылы қарыздан құтылуға бола ма?",
        answer:
          "Бұл қарыз түріне, қаржылық жағдайға және заң талаптарының сақталуына байланысты.",
      },
    ],
    relatedSlugs: ["debt-recovery", "legal-consultation-almaty"],
  }),
  en: ru({
    meta: {
      title: "Bankruptcy and Solvency Restoration in Almaty",
      description:
        "Legal support for bankruptcy, debt restructuring, solvency restoration, and debtor protection in Kazakhstan.",
      keywords:
        "bankruptcy Almaty, solvency restoration, debt restructuring Kazakhstan, bankruptcy lawyer",
    },
    h1: "Bankruptcy and Solvency Restoration",
    intro:
      "Legal support for bankruptcy matters, debt analysis, solvency restoration, and lawful resolution of financial obligations.",
    includes: [
      "Bankruptcy consultation",
      "Debt and financial position analysis",
      "Preparation of documents",
      "Solvency restoration support",
      "Communication with creditors",
    ],
    whenNeeded: [
      "There are overdue loans or debts",
      "Financial obligations cannot be fulfilled",
      "Bankruptcy risks need to be assessed",
      "Debt restructuring is required",
    ],
    processSteps: [
      "Initial consultation",
      "Debt and income analysis",
      "Selection of the proper procedure",
      "Document preparation",
      "Legal support throughout the process",
    ],
    documents: [
      "Identity document",
      "Loan agreements",
      "Debt certificates",
      "Income information",
      "Property documents",
    ],
    faq: [
      {
        question: "Can debts be written off through bankruptcy?",
        answer:
          "It depends on the type of debt, financial situation, and compliance with legal requirements.",
      },
    ],
    relatedSlugs: ["debt-recovery", "legal-consultation-almaty"],
  }),
},
"inheritance-law": {
  ru: ru({
    meta: {
      title: "Наследственное право в Алматы",
      description:
        "Юридическая помощь по наследственным делам: оформление наследства, споры между наследниками, восстановление сроков и сопровождение документов.",
      keywords:
        "наследственное право Алматы, наследство юрист, оформление наследства, наследственные споры",
    },
    h1: "Наследственное право",
    intro:
      "Сопровождение наследственных вопросов: оформление прав, подготовка документов, урегулирование споров между наследниками и защита интересов клиента.",
    includes: [
      "Консультация по вопросам наследства",
      "Оформление наследственных прав",
      "Восстановление срока принятия наследства",
      "Споры между наследниками",
      "Подготовка заявлений и процессуальных документов",
    ],
    whenNeeded: [
      "Нужно оформить наследство",
      "Пропущен срок принятия наследства",
      "Есть спор между наследниками",
      "Необходимо подтвердить право на имущество",
    ],
    processSteps: [
      "Анализ наследственной ситуации",
      "Проверка документов и сроков",
      "Подготовка заявлений",
      "Досудебное урегулирование или обращение в суд",
      "Сопровождение до завершения дела",
    ],
    documents: [
      "Свидетельство о смерти",
      "Документы, подтверждающие родство",
      "Документы на имущество",
      "Завещание при наличии",
      "Переписка или нотариальные документы",
    ],
    faq: [
      {
        question: "Что делать, если срок принятия наследства пропущен?",
        answer:
          "В отдельных случаях срок можно восстановить через суд, если есть уважительные причины и подтверждающие документы.",
      },
      {
        question: "Можно ли решить наследственный спор без суда?",
        answer:
          "Да, если стороны готовы к переговорам. Если договориться невозможно, спор решается в судебном порядке.",
      },
    ],
    relatedSlugs: ["civil-law", "court-representation", "legal-consultation-almaty"],
  }),
  kz: ru({
    meta: {
      title: "Мұрагерлік құқық | Алматы",
      description:
        "Мұра рәсімдеу, мұрагерлер арасындағы даулар, мерзімді қалпына келтіру және құжаттарды сүйемелдеу бойынша заңгерлік көмек.",
      keywords: "мұрагерлік құқық Алматы, мұра рәсімдеу, мұра дауы",
    },
    h1: "Мұрагерлік құқық",
    intro:
      "Мұрагерлік мәселелер бойынша кеңес, құжаттарды дайындау және мұрагерлер арасындағы дауларды сүйемелдеу.",
    includes: [
      "Мұра бойынша кеңес",
      "Мұрагерлік құқықтарды рәсімдеу",
      "Мұра қабылдау мерзімін қалпына келтіру",
      "Мұрагерлер арасындағы даулар",
      "Өтініштер мен құжаттарды дайындау",
    ],
    whenNeeded: [
      "Мұраны рәсімдеу қажет",
      "Мұра қабылдау мерзімі өтіп кеткен",
      "Мұрагерлер арасында дау бар",
      "Мүлікке құқықты растау керек",
    ],
    processSteps: [
      "Жағдайды талдау",
      "Құжаттар мен мерзімдерді тексеру",
      "Өтініштерді дайындау",
      "Келіссөз немесе сотқа жүгіну",
      "Істі аяқтауға дейін сүйемелдеу",
    ],
    documents: [
      "Қайтыс болу туралы куәлік",
      "Туыстықты растайтын құжаттар",
      "Мүлік құжаттары",
      "Өсиет болса",
    ],
    faq: [
      {
        question: "Мұра қабылдау мерзімі өтіп кетсе не істеу керек?",
        answer:
          "Негізді себептер болса, мерзімді сот арқылы қалпына келтіруге болады.",
      },
    ],
    relatedSlugs: ["civil-law", "court-representation"],
  }),
  en: ru({
    meta: {
      title: "Inheritance Law in Almaty",
      description:
        "Legal assistance with inheritance matters, documentation, disputes between heirs, and restoration of inheritance acceptance deadlines.",
      keywords: "inheritance law Almaty, inheritance dispute Kazakhstan, inheritance lawyer",
    },
    h1: "Inheritance Law",
    intro:
      "Legal support in inheritance matters, including documentation, disputes between heirs, and protection of inheritance rights.",
    includes: [
      "Inheritance consultation",
      "Inheritance rights registration",
      "Restoration of missed deadlines",
      "Disputes between heirs",
      "Preparation of legal documents",
    ],
    whenNeeded: [
      "Inheritance needs to be formalized",
      "The inheritance acceptance deadline was missed",
      "There is a dispute between heirs",
      "Property rights need to be confirmed",
    ],
    processSteps: [
      "Case assessment",
      "Document and deadline review",
      "Preparation of applications",
      "Negotiation or court filing",
      "Legal support until completion",
    ],
    documents: [
      "Death certificate",
      "Documents proving family relationship",
      "Property documents",
      "Will, if available",
    ],
    faq: [
      {
        question: "What if the inheritance deadline was missed?",
        answer:
          "In certain cases, the deadline may be restored through court if valid reasons are proven.",
      },
    ],
    relatedSlugs: ["civil-law", "court-representation"],
  }),
},
"labor-law": {
  ru: ru({
    meta: {
      title: "Трудовое право в Алматы",
      description:
        "Юридические консультации по трудовым спорам, увольнению, трудовым договорам, выплатам и защите прав работников и работодателей.",
      keywords:
        "трудовое право Алматы, трудовой спор юрист, увольнение, трудовой договор, защита прав работника",
    },
    h1: "Трудовое право",
    intro:
      "Консультации и сопровождение по трудовым вопросам: договоры, увольнение, выплаты, дисциплинарные меры и защита прав сторон.",
    includes: [
      "Консультации по трудовым спорам",
      "Проверка и подготовка трудовых договоров",
      "Вопросы увольнения и восстановления на работе",
      "Взыскание заработной платы и компенсаций",
      "Защита интересов работников и работодателей",
    ],
    whenNeeded: [
      "Возник спор с работодателем или работником",
      "Есть вопросы по увольнению",
      "Не выплачена зарплата или компенсация",
      "Нужно проверить трудовой договор",
    ],
    processSteps: [
      "Изучение документов и обстоятельств",
      "Оценка правовой позиции",
      "Подготовка претензии или заявления",
      "Переговоры или обращение в уполномоченные органы",
      "Судебное сопровождение при необходимости",
    ],
    documents: [
      "Трудовой договор",
      "Приказы работодателя",
      "Расчетные листы",
      "Переписка",
      "Документы о выплатах",
    ],
    faq: [
      {
        question: "Можно ли оспорить незаконное увольнение?",
        answer:
          "Да, если увольнение проведено с нарушением закона или процедуры, его можно оспорить в установленном порядке.",
      },
      {
        question: "Что делать, если не выплачивают заработную плату?",
        answer:
          "Необходимо собрать подтверждающие документы и обратиться с требованием к работодателю, в уполномоченные органы или суд.",
      },
    ],
    relatedSlugs: ["legal-consultation-almaty", "court-representation", "civil-law"],
  }),
  kz: ru({
    meta: {
      title: "Еңбек құқығы | Алматы",
      description:
        "Еңбек даулары, жұмыстан шығару, еңбек шарттары, жалақы және тараптардың құқықтарын қорғау бойынша заңгерлік кеңес.",
      keywords: "еңбек құқығы Алматы, еңбек дауы, жұмыстан шығару, еңбек шарты",
    },
    h1: "Еңбек құқығы",
    intro:
      "Еңбек шарттары, жұмыстан шығару, төлемдер және еңбек даулары бойынша заңгерлік кеңес.",
    includes: [
      "Еңбек даулары бойынша кеңес",
      "Еңбек шарттарын тексеру",
      "Жұмыстан шығару мәселелері",
      "Жалақы мен өтемақыны өндіріп алу",
      "Жұмысшы мен жұмыс беруші мүддесін қорғау",
    ],
    whenNeeded: [
      "Жұмыс берушімен немесе қызметкермен дау туындады",
      "Жұмыстан шығару бойынша сұрақ бар",
      "Жалақы төленбеді",
      "Еңбек шартын тексеру қажет",
    ],
    processSteps: [
      "Құжаттарды талдау",
      "Құқықтық позицияны бағалау",
      "Талап немесе өтініш дайындау",
      "Келіссөз немесе уәкілетті органға жүгіну",
      "Қажет болса сотта сүйемелдеу",
    ],
    documents: [
      "Еңбек шарты",
      "Жұмыс берушінің бұйрықтары",
      "Төлем құжаттары",
      "Хат алмасу",
    ],
    faq: [
      {
        question: "Заңсыз жұмыстан шығаруды даулауға бола ма?",
        answer:
          "Иә, егер заң немесе рәсім талаптары бұзылса, жұмыстан шығаруды даулауға болады.",
      },
    ],
    relatedSlugs: ["legal-consultation-almaty", "court-representation"],
  }),
  en: ru({
    meta: {
      title: "Labor Law in Almaty",
      description:
        "Legal consultations on labor disputes, dismissal, employment contracts, payments, and protection of employee and employer rights.",
      keywords: "labor law Almaty, employment dispute Kazakhstan, employment contract lawyer",
    },
    h1: "Labor Law",
    intro:
      "Legal advice and support on employment contracts, dismissal, payments, workplace disputes, and protection of rights.",
    includes: [
      "Labor dispute consultations",
      "Review and preparation of employment contracts",
      "Dismissal and reinstatement matters",
      "Salary and compensation claims",
      "Protection of employee and employer interests",
    ],
    whenNeeded: [
      "There is a dispute with an employer or employee",
      "Dismissal needs to be reviewed",
      "Salary or compensation was not paid",
      "An employment contract needs legal review",
    ],
    processSteps: [
      "Document and case review",
      "Legal position assessment",
      "Preparation of claim or application",
      "Negotiation or filing with authorities",
      "Court representation if needed",
    ],
    documents: [
      "Employment contract",
      "Employer orders",
      "Payslips",
      "Correspondence",
      "Payment documents",
    ],
    faq: [
      {
        question: "Can unlawful dismissal be challenged?",
        answer:
          "Yes, if the dismissal violated legal or procedural requirements, it may be challenged.",
      },
    ],
    relatedSlugs: ["legal-consultation-almaty", "court-representation"],
  }),
},
"ip-registration": {
  ru: ru({
    meta: {
      title: "Регистрация ИП в Алматы",
      description:
        "Помощь в регистрации индивидуального предпринимателя: выбор режима, подготовка документов, консультация по налоговым и правовым вопросам.",
      keywords:
        "регистрация ИП Алматы, открыть ИП Казахстан, юридическая помощь ИП, регистрация индивидуального предпринимателя",
    },
    h1: "Регистрация ИП",
    intro:
      "Юридическая помощь при регистрации индивидуального предпринимателя: консультация, выбор подходящего режима и подготовка необходимых документов.",
    includes: [
      "Консультация перед регистрацией ИП",
      "Выбор подходящего режима деятельности",
      "Подготовка документов",
      "Разъяснение прав и обязанностей ИП",
      "Первичная консультация по договорам и налоговым рискам",
    ],
    whenNeeded: [
      "Планируете начать предпринимательскую деятельность",
      "Нужно правильно выбрать форму и режим работы",
      "Есть вопросы по документам и обязательствам ИП",
      "Нужно оформить деятельность законно и без лишних рисков",
    ],
    processSteps: [
      "Первичная консультация",
      "Определение вида деятельности",
      "Подготовка данных и документов",
      "Сопровождение регистрации",
      "Разъяснение дальнейших правовых шагов",
    ],
    documents: [
      "Удостоверение личности",
      "Номер телефона",
      "Адрес регистрации",
      "Информация о виде деятельности",
      "Дополнительные документы при необходимости",
    ],
    faq: [
      {
        question: "Можно ли зарегистрировать ИП онлайн?",
        answer:
          "Да, в большинстве случаев регистрация ИП возможна онлайн, но важно заранее правильно определить вид деятельности и режим работы.",
      },
      {
        question: "Нужна ли консультация перед открытием ИП?",
        answer:
          "Консультация помогает избежать ошибок при выборе режима, оформлении документов и дальнейшей работе с договорами.",
      },
    ],
    relatedSlugs: ["business-legal-support", "contract-drafting", "legal-consultation-almaty"],
  }),
  kz: ru({
    meta: {
      title: "ЖК тіркеу | Алматы",
      description:
        "Жеке кәсіпкерді тіркеу, қызмет түрін таңдау, құжаттарды дайындау және құқықтық сұрақтар бойынша кеңес.",
      keywords: "ЖК тіркеу Алматы, жеке кәсіпкер ашу, ЖК заңгерлік көмек",
    },
    h1: "ЖК тіркеу",
    intro:
      "Жеке кәсіпкерді тіркеу бойынша заңгерлік көмек: кеңес, қызмет бағытын анықтау және құжаттарды дайындау.",
    includes: [
      "ЖК тіркеу алдындағы кеңес",
      "Қызмет бағытын анықтау",
      "Құжаттарды дайындау",
      "ЖК құқықтары мен міндеттерін түсіндіру",
      "Шарттар мен құқықтық тәуекелдер бойынша бастапқы кеңес",
    ],
    whenNeeded: [
      "Кәсіпкерлік қызметті бастағыңыз келеді",
      "Қызмет формасын дұрыс таңдау қажет",
      "Құжаттар бойынша сұрақтар бар",
      "Қызметті заңды түрде рәсімдеу керек",
    ],
    processSteps: [
      "Алғашқы кеңес",
      "Қызмет түрін анықтау",
      "Құжаттарды дайындау",
      "Тіркеуді сүйемелдеу",
      "Келесі құқықтық қадамдарды түсіндіру",
    ],
    documents: [
      "Жеке куәлік",
      "Телефон нөмірі",
      "Тіркеу мекенжайы",
      "Қызмет түрі туралы ақпарат",
    ],
    faq: [
      {
        question: "ЖК онлайн тіркеуге бола ма?",
        answer:
          "Иә, көп жағдайда ЖК онлайн тіркеледі, бірақ қызмет түрін және жұмыс режимін дұрыс анықтау маңызды.",
      },
    ],
    relatedSlugs: ["business-legal-support", "contract-drafting"],
  }),
  en: ru({
    meta: {
      title: "Individual Entrepreneur Registration in Almaty",
      description:
        "Assistance with individual entrepreneur registration, business activity selection, document preparation, and initial legal consultation.",
      keywords:
        "individual entrepreneur registration Almaty, IE registration Kazakhstan, business registration legal support",
    },
    h1: "Individual Entrepreneur Registration",
    intro:
      "Legal assistance with individual entrepreneur registration, including consultation, activity selection, and document preparation.",
    includes: [
      "Consultation before registration",
      "Selection of business activity",
      "Document preparation",
      "Explanation of rights and obligations",
      "Initial consultation on contracts and legal risks",
    ],
    whenNeeded: [
      "You plan to start business activity",
      "The proper business format needs to be selected",
      "There are questions about documents and obligations",
      "Business activity needs to be registered lawfully",
    ],
    processSteps: [
      "Initial consultation",
      "Business activity definition",
      "Preparation of documents",
      "Registration support",
      "Explanation of further legal steps",
    ],
    documents: [
      "Identity document",
      "Phone number",
      "Registration address",
      "Information about business activity",
    ],
    faq: [
      {
        question: "Can an individual entrepreneur be registered online?",
        answer:
          "Yes, in most cases registration can be completed online, but it is important to choose the proper activity and working format.",
      },
    ],
    relatedSlugs: ["business-legal-support", "contract-drafting"],
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
