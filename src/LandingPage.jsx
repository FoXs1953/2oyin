import React, { useEffect, useRef, useState } from "react";
import {
  Gamepad2,
  Sparkles,
  Star,
  Users,
  MapPin,
  Zap,
  Check,
  Menu,
  X,
  Rocket,
  MessageCircle,
  Instagram,
  Twitter,
  Github,
  PhoneCall,
  Heart,
} from "lucide-react";

const sections = [
  { id: "games", labelRu: "Игры", labelKz: "Ойындар" },
  { id: "how-it-works", labelRu: "Как работает", labelKz: "Қалай жұмыс істейміз" },
  { id: "pricing", labelRu: "Цены", labelKz: "Бағалар" },
  { id: "faq", labelRu: "FAQ", labelKz: "Сұрақтар" },
];

const translations = {
  ru: {
    heroBadge: "2oiyn — игры для мероприятий в Астане",
    heroTitle: "Национальные и интерактивные игры для мероприятий в Астане",
    heroSubtitle:
      "Мы проводим активные, интеллектуальные и национальные игры, которые превращают любое мероприятие в настоящее шоу.",
  },
  kz: {
    heroBadge: "2oiyn — Астанадағы іс-шараларға арналған ойындар",
    heroTitle:
      "Астанадағы іс-шараларға арналған ұлттық және интерактивті ойындар",
    heroSubtitle:
      "Біз кез келген шараны нағыз шоуға айналдыратын белсенді, зияткерлік және ұлттық ойындар өткіземіз.",
  },
};

const games = [
  {
    name: "Кач Мяч",
    type: "Командная игра",
    icon: Users,
    participants: "до 4 пар (до 8 человек).",
    short:
      "Динамичная командная игра с шлемами и насосами — кто первым лопнет шар, тот победил.",
    description:
      "Два участника надевают специальные шлемы с закреплённым воздушным шаром. По сигналу ведущего пары начинают активно накачивать шар насосом.",
    goal: "Кто первым лопнет шар, становится победителем. Игра создаёт азарт, драйв и много смеха.",
  },
  {
    name: "Алтыбакан",
    type: "Казахская национальная игра",
    icon: Star,
    participants: "две команды по 3–6 человек — по решению ведущего.",
    short:
      "Сборка традиционных казахских качелей на скорость и качество конструкции.",
    description:
      "Команды получают комплект деталей и по сигналу собирают традиционные казахские качели — алтыбакан. Важно не только скорость, но и устойчивость конструкции.",
    goal:
      "Побеждает команда, которая быстрее и аккуратнее соберёт устойчивые качели. Игра про командную работу, распределение ролей и стратегию.",
  },
  {
    name: "Асыки",
    type: "Казахская национальная игра",
    icon: Sparkles,
    participants: "от 3 человек и более.",
    short:
      "Классическая игра с асыками по принципу «бестас» с усложняющимися заданиями.",
    description:
      "Используются 5 асыков. По принципу классической игры «бестас» участники по очереди подбрасывают и ловят асыки, усложняя задания.",
    goal:
      "Формат этапов и сложность задаёт ведущий. Игра развивает ловкость, координацию и концентрацию, отлично подходит и для детей, и для взрослых.",
  },
  {
    name: "Арқан тарту",
    type: "Казахская национальная игра",
    icon: Users,
    participants: "от 3 человек, возможно 2–4 команды.",
    short: "Классическое перетягивание каната в формате командного соревнования.",
    description:
      "Классическое перетягивание каната в национальном формате. Команды становятся по разные стороны каната и по сигналу начинают тянуть на себя.",
    goal:
      "Команда, перетянувшая соперников на свою сторону, побеждает. При нескольких командах возможны отборочные раунды и яркий финал.",
  },
  {
    name: "Baby Battle",
    type: "Парная семейная игра",
    icon: Gamepad2,
    participants: "от 2 до 4 пар (4–8 человек), желательно супружеские пары.",
    short:
      "Весёлая парная игра: один участник кормит второго на скорость под аплодисменты гостей.",
    description:
      "Участники играют парами: один стоит впереди, второй — сзади и кормит партнёра. На скорость нужно съесть банан и запить водой.",
    goal:
      "Побеждает пара, которая первой выполнит задание. Очень весёлая и эмоциональная игра, которая нравится и гостям, и зрителям.",
  },
  {
    name: "Звёздный час",
    type: "Танцевальная игра",
    icon: Sparkles,
    participants: "2 или 4 пары, желательно супружеские.",
    short:
      "Танцевальная игра с импровизацией и заданиями от ведущего — для самых харизматичных гостей.",
    description:
      "Включается музыка, пары выходят танцевать. Ведущий даёт условия: подключить разные части тела, мимику, импровизацию и взаимодействие друг с другом.",
    goal:
      "Победитель определяется голосованием зала или решением ведущего. Игра помогает раскрепостить гостей и создать яркие, запоминающиеся моменты.",
  },
  {
    name: "Ракетомания",
    type: "Интерактивная цифровая игра",
    icon: Rocket,
    participants: "от 3 до 5 пар, с использованием LED-экрана или ТВ.",
    short:
      "Интерактивная цифровая игра: движения участника управляют ракетой на экране.",
    description:
      "Каждой паре выдаётся датчик, который крепится на разные части тела. Движения участника управляют ракетой на экране в реальном времени.",
    goal:
      "Чья ракета первой долетит до Луны — тот и побеждает. Игра создаёт современный вау-эффект и идеально подходит для ресторанов и караоке.",
    requirements:
      "Требуется LED-экран или телевизор, подходит для караоке-залов, ресторанов и домашних мероприятий.",
  },
  {
    name: "Горшкомания",
    type: "Динамичная игровая активность",
    icon: Sparkles,
    participants: "5 человек.",
    short:
      "Танцевальная игра на выбывание с горшками — всегда много смеха и эмоций.",
    description:
      "Пять участников переодеваются в подготовленные костюмы. В центре — четыре горшка. Под музыку игроки танцуют вокруг, а при остановке спешат занять свободный горшок.",
    goal:
      "В каждом раунде один участник остаётся без горшка и выбывает, а один горшок убирают. Побеждает тот, кто займёт последний оставшийся горшок.",
    props: "4 горшка, костюмы или игровые элементы одежды, музыкальное сопровождение.",
  },
  {
    name: "Сердце подскажет",
    type: "Парная игра для супружеских пар",
    icon: Heart,
    participants: "5–6 супружеских пар.",
    short:
      "Романтичная игра, в которой мужья пытаются узнать свою жену по движениям и энергетике, видя только спину.",
    description:
      "Жёны надевают одинаковые или похожие пальто, становятся в линию спиной к мужьям и двигаются под музыку — танцуют, покачиваются, используют жесты и походку. Мужья внимательно наблюдают и по окончании музыки встают за той женщиной, которую считают своей женой.",
    goal:
      "По команде женщины поворачиваются — проверяем, кто доверился своему сердцу и угадал свою вторую половинку. Побеждают мужья, которые правильно нашли свою жену.",
  },
  {
    name: "Шумомер",
    type: "Интерактивная шумовая игра",
    icon: Zap,
    participants:
      "Ограничений нет: можно играть командами, парами или отдельными столами (например, в ресторане каждый стол — отдельная команда).",
    short:
      "Игра на громкость и командный дух — кто дружнее и громче скандирует, поёт или поддерживает команду.",
    description:
      "Используется специальный датчик уровня голоса, который фиксирует громкость и передаёт данные в программу. По сигналу ведущего участники начинают петь, скандировать или громко поддерживать свою команду, а результаты в виде баллов выводятся на экран.",
    goal:
      "Команда, пара или стол, набравшие наибольшее количество баллов (самый высокий уровень громкости и слаженности), становятся победителями. Игра отлично подходит для корпоративов, банкетов и массовых мероприятий, создавая атмосферу азарта и вовлекая всех гостей.",
    requirements:
      "Обязательное наличие LED-экрана или телевизора для вывода результатов программы.",
  },
  {
    name: "Кокпар",
    type: "Казахская национальная игра",
    icon: Users,
    participants: "3 пары мужчин (6 человек).",
    short:
      "Адаптированная версия казахской национальной игры көкпар для праздников и тимбилдингов.",
    description:
      "В центре площадки находится игровой реквизит — имитация туши овцы. По сигналу ведущего участники начинают борьбу за трофей: перехватывают и отбирают «добычу» у соперников, двигаясь к воротам противника.",
    goal:
      "Побеждает команда, которая первой забросит трофей в ворота соперника. Запрещается садиться сверху на соперника и применять опасные приёмы, способные привести к травме.",
  },
];

const gamesKz = [
  {
    name: "Кач Мяч",
    type: "Командалық ойын",
    icon: Users,
    participants: "4 жұпқа дейін (8 адамға дейін).",
    short:
      "Шлемдер мен насостар арқылы допты тезірек жару керек болатын динамикалық командалық ойын.",
    description:
      "Екі қатысушыға үстіне шар бекітілген арнайы шлемдер беріледі. Жүргізушінің белгісімен жұптар шарды мүмкіндігінше тез үрлеуге тырысады.",
    goal:
      "Допты бірінші болып жарған жұп жеңімпаз атанады. Ойын көп күлкі, қозғалыс және эмоция сыйлайды.",
  },
  {
    name: "Алтыбакан",
    type: "Қазақтың ұлттық ойыны",
    icon: Star,
    participants: "Жүргізуші шешіміне қарай 3–6 адамнан екі команда.",
    short:
      "Дәстүрлі қазақ алтыбақанын жылдам әрі дұрыс құрастыруға арналған командалық ойын.",
    description:
      "Командалар алтыбақан құрастыруға арналған бөлшектер жиынтығын алады. Белгі бойынша олар жылдамдық пен тұрақтылықты ескере отырып конструкцияны жинайды.",
    goal:
      "Алтыбақанды тез әрі мықты етіп құрастырған команда жеңеді. Ойын командалық жұмысты, рөлдерді бөлу мен тактиканы дамытады.",
  },
  {
    name: "Асыки",
    type: "Қазақтың ұлттық ойыны",
    icon: Sparkles,
    participants: "3 және одан да көп адам.",
    short:
      "«Бестас» қағидасына ұқсас, асықтарды лақтыру мен қағып алу арқылы ойналатын классикалық ұлттық ойын.",
    description:
      "5 асық қолданылады. Қатысушылар кезекпен асықтарды әртүрлі тәсілмен лақтырып, қағып алып, жүргізуші белгілеген кезеңдер бойынша ойынды қиындатады.",
    goal:
      "Ойын ептілікті, үйлестіруді және зейінді дамытады. Балаларға да, ересектерге де қызықты формат.",
  },
  {
    name: "Арқан тарту",
    type: "Қазақтың ұлттық ойыны",
    icon: Users,
    participants: "3 адамнан бастап, 2–4 командаға дейін.",
    short: "Классикалық арқан тартыс командалық форматта.",
    description:
      "Қатысушылар екі не одан да көп командаға бөлінеді. Белгі берілген соң командалар арқанды өз жағына тартып, қарсыласты шекарадан асыруға тырысады.",
    goal:
      "Қарсылас команда(лар)ды өз жағына тартып алған команда жеңімпаз болады. Бірнеше команда болған жағдайда іріктеу және финалдық кезеңдер өткізіледі.",
  },
  {
    name: "Baby Battle",
    type: "Жұптық отбасылық ойын",
    icon: Gamepad2,
    participants: "2–4 жұп (4–8 адам), ерлі-зайыптылар үшін өте қолайлы.",
    short:
      "Бірі – алда, бірі – артта тұратын жұптық ойын: артта тұрған ойыншы серігін тезірек тамақтандыруы керек.",
    description:
      "Қатысушылар жұппен ойнайды: алда тұрған ойыншы бананды жеп, суды ішеді, ал артта тұрған серігі оны тамақтандырады. Барлығы жылдамдық пен үйлесімділікке байланысты.",
    goal:
      "Бананды бірінші болып жеп, суды ішіп үлгерген жұп жеңеді. Көңілді, эмоцияға толы және көрермендерге де қызықты ойын.",
  },
  {
    name: "Звёздный час",
    type: "Би ойыны",
    icon: Sparkles,
    participants: "2 немесе 4 жұп, ерлі-зайыптыларға ұсынылады.",
    short:
      "Импровизация, қимыл-қозғалыс және көрерменнің қолдауына негізделген көңілді би сайысы.",
    description:
      "Музыка қосылып, жұптар би алаңына шығады. Жүргізуші қол, аяқ, дене қимылдары мен мимикаға байланысты түрлі тапсырмалар береді.",
    goal:
      "Жеңімпаз көрермен дауыс беруі арқылы немесе жүргізушінің шешімімен анықталады. Ойын қонақтарды ашылуға және еркін сезінуге көмектеседі.",
  },
  {
    name: "Ракетомания",
    type: "Интерактивті цифрлық ойын",
    icon: Rocket,
    participants: "LED‑экран не теледидар қолдана отырып, 3–5 жұп.",
    short:
      "Қатысушының қимылы экрандағы ракетаны басқаратын заманауи интерактивті ойын.",
    description:
      "Әр жұпқа дененің әртүрлі бөлігіне (бас, қол, аяқ, кеуде және т.б.) бекітілетін датчик беріледі. Қозғалыс экрандағы ракетаның ұшуы мен жылдамдығына әсер етеді.",
    goal:
      "Айға бірінші болып ұшып жеткен ракета жеңімпаз болады. Мейрамхана, караоке мен заманауи форматтағы кештер үшін әсерлі шешім.",
    requirements:
      "LED‑экран немесе теледидар қажет. Караоке, мейрамхана немесе үй жағдайындағы іс-шараларға өте қолайлы.",
  },
  {
    name: "Горшкомания",
    type: "Қозғалысқа толы ойын",
    icon: Sparkles,
    participants: "5 қатысушы.",
    short:
      "Қатысушылар музыка тоқтағанда бос құмыраға үлгеріп отыруы керек болатын көңілді ойын.",
    description:
      "Бес ойыншы алдын ала дайындалған костюмдерге немесе ойын элементтері бар киімге ауысады. Алаң ортасына төрт құмыра қойылады. Музыка ойнағанда қатысушылар құмыралардың айналасында билейді, ал музыка тоқтаған сәтте барлығы бос құмыраға отыруға тырысады.",
    goal:
      "Әр раундта бір адам құмырасыз қалып, ойынан шығады, ал бір құмыра алынып тасталады. Соңғы құмыраға отырған ойыншы жеңімпаз атанады.",
    props: "4 құмыра, костюмдер немесе ойынға арналған киім элементтері, музыкалық сүйемелдеу.",
  },
  {
    name: "Сердце подскажет",
    type: "Жұптық романтикалық ойын",
    icon: Heart,
    participants: "5–6 ерлі-зайыпты жұп.",
    short:
      "Ер адамдар өз жұбайын тек қимылы мен жүрісінен тануға тырысатын көңілді әрі романтикалық ойын.",
    description:
      "Әйелдер бірдей не ұқсас пальто киіп, ерлерге арқасымен қатар түзіп тұрады. Музыка қосылғанда олар би билеп, жеңіл тербеліп, қол қимылдарын қолданады. Ер адамдар әйелдердің жүрісі мен қимылын бақылап, музыка тоқтағанда өз әйелім деп есептеген қатысушының артына тұрады.",
    goal:
      "Жүргізуші белгісінен кейін әйелдер бұрылып, кім дұрыс таңдағанын көреміз. Өз жарын дәл тапқан ер адамдар жеңімпаз атанады.",
  },
  {
    name: "Шумомер",
    type: "Интерактивті шу ойыны",
    icon: Zap,
    participants:
      "Шектеу жоқ: командалармен, жұппен немесе мейрамханада әр үстел бөлек команда ретінде ойнай алады.",
    short:
      "Қатысушылар дауыстың күшіне және командалық қолдауға жарысатын ойын — кім барынша жоғары және ұйымшыл шу шығарса, сол жеңімпаз.",
    description:
      "Арнайы дыбыс деңгейін өлшейтін датчик қолданылады. Жүргізуші белгі бергенде қатысушылар ән айтып, ұрандап немесе өз командасын барынша дауыстап қолдайды. Датчик дауыстың деңгейін өлшеп, нәтижелерді экранда ұпай түрінде көрсетеді.",
    goal:
      "Дыбыстың ең жоғары және үйлесімді деңгейін көрсеткен команда, жұп немесе үстел жеңеді. Ойын корпоративтерге, банкеттерге және көпшілік іс-шараларға өте қолайлы, барлығын процеске тартып, ортақ көңіл-күй қалыптастырады.",
    requirements:
      "Нәтижелерді көрсету үшін LED‑экран немесе теледидар қажет.",
  },
  {
    name: "Кокпар",
    type: "Қазақтың ұлттық ойыны",
    icon: Users,
    participants: "3 ерлер жұбы (6 адам).",
    short:
      "Мерекелер мен тимбилдингтерге арналған көкпар ойынының бейімделген нұсқасы.",
    description:
      "Алаңның ортасына қой ойынының имитациясы ретінде арнайы реквизит қойылады. Жүргізуші белгі берген сәтте қатысушылар «олжаны» тартып алу үшін күресті бастайды: қарсыластан трофейді тартып алып, қарсылас қақпасына жеткізуге тырысады.",
    goal:
      "Трофейді бірінші болып қарсылас қақпасына жеткізген команда жеңеді. Қатысушыларға қарсыластың үстіне отырып алу немесе жарақатқа әкелуі мүмкін қауіпті тәсілдерді қолдану қатаң тыйым салынады.",
  },
];

const stats = [
  { label: "мероприятий", value: 1000, suffix: "+" },
  { label: "компаний клиентов", value: 50, suffix: "+" },
  { label: "уникальных игр", value: 11, suffix: "" },
  { label: "wow-эффект", value: 100, suffix: "%" },
];

const steps = [
  {
    titleRu: "Выбираете игры",
    titleKz: "Ойындарды таңдайсыз",
    descriptionRu: "Подбираем под формат, количество гостей и бюджет.",
    descriptionKz:
      "Форматқа, қонақтар санына және бюджетке қарай ойындарды бірге таңдаймыз.",
  },
  {
    titleRu: "Мы доставляем и устанавливаем",
    titleKz: "Біз жеткізіп, орнатамыз",
    descriptionRu: "Привозим, собираем, тестируем и готовим к старту.",
    descriptionKz:
      "Барлық реквизитті өзіміз алып келеміз, жинаймыз, тексереміз және ойынды бастауға дайындаймыз.",
  },
  {
    titleRu: "Гости наслаждаются",
    titleKz: "Қонақтар ойынды тамашалайды",
    descriptionRu: "Инструктируем и сопровождаем в течение всего мероприятия.",
    descriptionKz:
      "Қонақтарға ережелерді түсіндіріп, ойын барысында толық сүйемелдеу жасаймыз.",
  },
];

const testimonials = [
  {
    roleRu: "Организатор мероприятий",
    roleKz: "Іс-шара ұйымдастырушысы",
    initials: "ОМ",
    textRu:
      "2oiyn стал нашим секретным ингредиентом для событий. Игры моментально включают гостей и создают живую атмосферу.",
    textKz:
      "2oiyn біздің іс-шараларымыздың жасырын құпиясы болды. Ойындар қонақтарды тез арада тартып, тірі атмосфера қалыптастырады.",
  },
  {
    roleRu: "HR менеджер",
    roleKz: "HR менеджер",
    initials: "HR",
    textRu:
      "Для тимбилдингов это находка. Коллеги раскрываются, больше общения и смеха, чем на любых классических активностях.",
    textKz:
      "Тимбилдинг үшін нағыз табыс. Әріптестер бір-бірін жақсырақ танып, еркін сөйлесіп, классикалық форматтарға қарағанда көбірек күледі.",
  },
  {
    roleRu: "Директор школы",
    roleKz: "Мектеп директоры",
    initials: "ДС",
    textRu:
      "Национальные игры в современном формате — идеальное сочетание. Дети вовлечены, при этом сохраняем культурный контекст.",
    textKz:
      "Ұлттық ойындарды заманауи форматпен ұштастыру — тамаша шешім. Балалар қызығып ойнайды, ал біз мәдени үндестікті сақтаймыз.",
  },
];

const plans = [
  {
    nameRu: "«Вечеринка под ключ»",
    nameKz: "«Толық кеш форматы»",
    descriptionRu:
      "Подходит для караоке, дома или небольших мероприятий до 40 человек. Мы полностью берём игру на себя.",
    descriptionKz:
      "Караоке, үй форматындағы кештер және 40 адамға дейінгі шағын іс-шаралар үшін ыңғайлы. Барлық ойын бөлігін толық біз жүргіземіз.",
    highlight: false,
    featuresRu: [
      "Ведущий от команды 2oiyn",
      "5 игр в программе",
      "Продолжительность программы: 1–1,5 часа",
      "Полная организация игрового процесса",
      "Заранее согласовываем время и формат мероприятия",
      "Подбираем игры под состав и настроение компании",
      "В стоимость входит доставка реквизита и проведение игр",
      "Полный игровой комплект от нашей команды",
    ],
    featuresKz: [
      "Ойындарды 2oiyn командасының жүргізушісі өткізеді",
      "Бағдарламада 5 ойын",
      "Бағдарламаның ұзақтығы: 1–1,5 сағат",
      "Ойын процесін толықтай өз мойнымызға аламыз",
      "Уақытын, форматын және қонақтар құрамын алдын ала келісеміз",
      "Компанияға сай ойындар жиынтығын таңдаймыз",
      "Құнына реквизитті жеткізу және ойындарды жүргізу кіреді",
      "Барлық ойын жабдығы біздің тараптан қамтамасыз етіледі",
    ],
    footerRu: "После мероприятия реквизит мы забираем самостоятельно.",
    footerKz: "Шарадан кейін реквизитті өзіміз жинап, алып кетеміз.",
  },
  {
    nameRu: "«Ресторанный формат»",
    nameKz: "«Мейрамхана форматы»",
    descriptionRu:
      "Идеальное решение для ресторанов и банкетных мероприятий, где уже есть свой ведущий.",
    descriptionKz:
      "Жүргізушісі бар мейрамханалар мен банкеттерге арналған ыңғайлы шешім.",
    highlight: true,
    featuresRu: [
      "Игры проводит ваш ведущий",
      "Мы привозим необходимый игровой реквизит",
      "Можно заказать от 1 до 5 игр",
      "Продолжительность одной игры: 10–15 минут",
      "Игры удобно интегрируются в программу мероприятия между активностями и тостами",
      "Присутствие нашей команды на площадке: до 1,5 часа",
      "За день до мероприятия консультируем ведущего и отправляем инструкции",
      "Помогаем встроить игры в общую программу вечера",
    ],
    featuresKz: [
      "Ойындарды сіздің жүргізушіңіз өткізеді",
      "Барлық қажетті ойын реквизитін біз алып келеміз",
      "1‑ден 5‑ке дейін ойын таңдауға болады",
      "Бір ойынның ұзақтығы: 10–15 минут",
      "Ойындар бағдарламаға, тосттар мен номерлердің арасына оңай кіріктіріледі",
      "Біздің команда алаңда 1,5 сағатқа дейін болады",
      "Іс-шараға дейін жүргізушімен кеңесіп, толық нұсқаулық жібереміз",
      "Ойындарды кештің жалпы сценарийіне дұрыс қосуға көмектесеміз",
    ],
    footerRu:
      "Доставка реквизита входит в пакет. После мероприятия мы самостоятельно забираем оборудование.",
    footerKz:
      "Реквизитті жеткізу пакетке кіреді. Шара аяқталған соң жабдықты өзіміз алып кетеміз.",
  },
  {
    nameRu: "«Играй сам»",
    nameKz: "«Өзің ойна» форматы",
    descriptionRu:
      "Формат для тех, кто хочет провести игры самостоятельно. Подходит для домашних праздников и небольших компаний.",
    descriptionKz:
      "Ойындарды өзіңіз жүргізгіңіз келетіндерге арналған формат. Үйдегі мерекелер мен шағын компаниялар үшін ыңғайлы.",
    highlight: false,
    featuresRu: [
      "Предоставляем игровой реквизит",
      "Подробная инструкция с правилами игр",
      "Рекомендации по проведению и таймингу",
      "Подходит для домашних праздников и дружеских встреч",
      "Хороший вариант для небольших тимбилдингов и выездов",
    ],
    featuresKz: [
      "Біз ойын реквизитін ұсынамыз",
      "Ережелері бар толық жазбаша нұсқаулық беріледі",
      "Отырыс сценарийі мен уақыт бойынша ұсыныстар қосылады",
      "Үйдегі мерекелер мен достық кездесулерге өте қолайлы",
      "Шағын тимбилдингтер мен демалыс базаларына да жарайды",
    ],
    footerRu: "Вы самостоятельно забираете и возвращаете реквизит.",
    footerKz: "Реквизитті алып кету және қайтару сіздің тарапыңыздан жүзеге асады.",
  },
];

const faqs = [
  {
    question: "Сколько длится одна игра?",
    answer:
      "Одна игра длится примерно 10–15 минут — этого достаточно, чтобы гости вовлеклись и не устали.",
  },
  {
    question: "Кто проводит игры?",
    answer:
      "Игры проводит профессиональный ведущий из команды 2oiyn или ваш ведущий — в зависимости от выбранного формата.",
  },
  {
    question: "Для каких мероприятий подходят ваши игры?",
    answer:
      "Наши игры подходят для свадеб, корпоративов, школьных мероприятий, фестивалей, домашних праздников и приватных вечеринок.",
  },
  {
    question: "Нужно ли готовить что-то заранее?",
    answer:
      "Нет, мы привозим весь необходимый реквизит и оборудование. Ведущему мы заранее отправляем правила и сценарные подсказки.",
  },
  {
    question: "Где вы работаете?",
    answer:
      "Наша команда базируется в городе Астана и проводит игры на площадках города и ближайших локациях.",
  },
];

const faqsKz = [
  {
    question: "Бір ойын қанша уақытқа созылады?",
    answer:
      "Бір ойын шамамен 10–15 минутқа созылады — қонақтар қызығып үлгеретін, бірақ шаршамайтын уақыт.",
  },
  {
    question: "Ойындарды кім жүргізеді?",
    answer:
      "Ойындарды 2oiyn командасының кәсіби жүргізушісі немесе сіздің жүргізушіңіз (таңдалған форматқа байланысты) жүргізе алады.",
  },
  {
    question: "Сіздердің ойындарыңыз қандай іс-шараларға жарайды?",
    answer:
      "Біздің ойындар тойлар, корпоративтер, мектеп кештері, фестивальдер, үйдегі мерекелер және жеке кештер үшін қолайлы.",
  },
  {
    question: "Алдын ала бірдеңе дайындау керек пе?",
    answer:
      "Жоқ, біз барлық қажетті жабдық пен реквизитті өзіміз ала келеміз. Жүргізушіге ойын ережелері мен сценарий бойынша нұсқаулықты алдын ала жібереміз.",
  },
  {
    question: "Қай қалада жұмыс істейсіздер?",
    answer:
      "Біздің команда Астана қаласында орналасқан және ойындарды қаладағы және жақын маңдағы алаңдарда өткізеді.",
  },
];

function useScrollReveal() {
  const refs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    // Older browsers: show everything.
    if (typeof IntersectionObserver === "undefined") {
      refs.current.forEach((el) => el?.classList.add("is-visible"));
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe anything that was registered before observer creation.
    refs.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const register = (el) => {
    if (!el) return;

    if (refs.current.includes(el)) return;
    refs.current.push(el);

    // If observer already exists (e.g. due to timing differences), observe immediately.
    if (observerRef.current) {
      observerRef.current.observe(el);
    } else if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
    }
  };

  return register;
}

function useCounters(targets) {
  const [values, setValues] = useState(targets.map(() => 0));

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();
    let frameId;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 0.2 + 0.8 * progress;

      setValues(targets.map((target) => Math.round(target * eased)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [targets]);

  return values;
}

const LandingPage = () => {
  const [lang, setLang] = useState("ru");
  const [navBlur, setNavBlur] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(faqs[0]?.question ?? null);
  const [phone, setPhone] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [particles, setParticles] = useState([]);

  const gameImageMap = {
    "Кач Мяч": "/images/games/kach-myach.jpg",
    Асыки: "/images/games/asyki.jpg",
    "Baby Battle": "/images/games/baby-battle.jpg",
    Ракетомания: "/images/games/raketomaniya.jpg",
    Алтыбакан: "/images/games/altybakan.jpg",
    "Арқан тарту": "/images/games/arkan-tartu.jpg",
    "Звёздный час": "/images/games/zvezdniy-chas.jpg",
    Горшкомания: "/images/games/gorshkomaniya.jpg",
    "Сердце подскажет": "/images/games/serde-podskazhet.jpg",
    Шумомер: "/images/games/shumomer.jpg",
    Кокпар: "/images/games/kokpar.png",
  };

  const registerReveal = useScrollReveal();
  const counters = useCounters(stats.map((s) => s.value));

  const t = translations[lang] || translations.ru;
  const gamesToRender = lang === "ru" ? games : gamesKz;
  const plansToRender = plans;
  const faqsToRender = lang === "ru" ? faqs : faqsKz;
  const testimonialsToRender =
    lang === "ru"
      ? testimonials
      : testimonials.map((tst) => ({
          ...tst,
          role: tst.roleKz,
          text: tst.textKz,
        }));

  useEffect(() => {
    const handleScroll = () => {
      setNavBlur(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const generated = Array.from({ length: 26 }).map((_, idx) => ({
      id: idx,
      top: `${10 + Math.random() * 60}%`,
      left: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 8}s`,
    }));
    setParticles(generated);
  }, []);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("lang");
      if (stored === "ru" || stored === "kz") {
        setLang(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    alert(
      `Спасибо! Мы свяжемся с вами по номеру: ${phone}${
        selectedGame ? ` по игре «${selectedGame}»` : ""
      }.`
    );
    setPhone("");
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <style>{`
        .hero-gradient-ring {
          background: radial-gradient(circle at 0 0, rgba(248,113,113,0.18), transparent 55%),
                      radial-gradient(circle at 100% 0, rgba(248,113,113,0.18), transparent 55%);
        }
      `}</style>

      {/* Floating blobs & grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob w-[420px] h-[420px] -top-24 -left-10" />
        <div className="blob blob-secondary w-[420px] h-[420px] -top-10 right-[-60px]" />
        <div className="blob blob-secondary w-[420px] h-[420px] bottom-[-120px] left-1/3" />
        <div className="grid-overlay" />
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all ${
          navBlur ? "nav-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2"
          >
            <div className="flex items-center text-2xl font-black tracking-tight">
              <span className="text-gradient-accent">2o</span>
              <span className="text-[var(--text-primary)]">iyn</span>
            </div>
            <span className="hidden text-xs font-medium text-[var(--text-secondary)] sm:inline">
              национальные и интерактивные игры
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {sections.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              >
                {lang === "ru" ? link.labelRu : link.labelKz}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div
              role="group"
              aria-label={lang === "ru" ? "Язык" : "Тіл"}
              className="hidden md:flex rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]/90 p-0.5 text-[0.7rem] font-semibold shadow-sm backdrop-blur"
            >
              <button
                type="button"
                onClick={() => setLang("ru")}
                className={`min-w-[2.25rem] rounded-full px-2.5 py-1 transition-all ${
                  lang === "ru"
                    ? "font-bold text-[var(--text-primary)] ring-2 ring-[#ff2d2d]/60 shadow-[0_0_10px_rgba(255,45,45,0.35)]"
                    : "font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLang("kz")}
                className={`min-w-[2.25rem] rounded-full px-2.5 py-1 transition-all ${
                  lang === "kz"
                    ? "font-bold text-[var(--text-primary)] ring-2 ring-[#ff2d2d]/60 shadow-[0_0_10px_rgba(255,45,45,0.35)]"
                    : "font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                KZ
              </button>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("cta")}
              className="hidden rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-400/40 transition hover:brightness-110 md:inline-flex"
            >
              Заказать
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/70 p-2.5 shadow-sm backdrop-blur md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Открыть меню"
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-[var(--text-primary)]" />
              ) : (
                <Menu className="h-5 w-5 text-[var(--text-primary)]" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-[var(--border)] bg-white/90 px-4 pb-4 pt-2 backdrop-blur md:hidden">
            <nav className="flex flex-col gap-2">
              {sections.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="rounded-xl px-3 py-2 text-left text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
                >
                  {lang === "ru" ? link.labelRu : link.labelKz}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToSection("cta")}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-400/40"
              >
                Заказать
              </button>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  {lang === "ru" ? "Язык:" : "Тіл:"}
                </span>
                <div
                  role="group"
                  aria-label={lang === "ru" ? "Язык" : "Тіл"}
                  className="flex rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]/90 p-0.5 text-[0.7rem] font-semibold"
                >
                  <button
                    type="button"
                    onClick={() => setLang("ru")}
                    className={`min-w-[2.25rem] rounded-full px-2.5 py-1 transition-all ${
                      lang === "ru"
                        ? "font-bold text-[var(--text-primary)] ring-2 ring-[#ff2d2d]/60 shadow-[0_0_10px_rgba(255,45,45,0.35)]"
                        : "font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    RU
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("kz")}
                    className={`min-w-[2.25rem] rounded-full px-2.5 py-1 transition-all ${
                      lang === "kz"
                        ? "font-bold text-[var(--text-primary)] ring-2 ring-[#ff2d2d]/60 shadow-[0_0_10px_rgba(255,45,45,0.35)]"
                        : "font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    KZ
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        {/* HERO */}
        <section
          id="hero"
          className="relative mb-16 grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center lg:mb-24"
        >
          <div className="fade-in-up space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/70 px-3 py-1 text-xs font-medium text-rose-500 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>{t.heroBadge}</span>
            </div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("games")}
                className="inline-flex items-center justify-center rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-400/50 transition hover:brightness-110"
              >
                {lang === "ru" ? "Арендовать игры" : "Ойындарды жалға алу"}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("games")}
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--text-primary)] shadow-sm backdrop-blur transition hover:bg-[var(--bg-secondary)]"
              >
                {lang === "ru" ? "Посмотреть каталог" : "Каталогты көру"}
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[var(--text-secondary)] sm:text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-rose-400" />
                <span>
                  {lang === "ru"
                    ? "Подходит для корпоративов, дома, свадеб и фестивалей"
                    : "Корпоративтерге, үйдегі кештерге, тойлар мен фестивальдерге жарайды"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-rose-400" />
                <span>
                  {lang === "ru"
                    ? "Работаем только в Астане"
                    : "Біз Астана қаласында жұмыс істейміз"}
                </span>
              </div>
            </div>
          </div>

          <div className="relative fade-in-up-delayed">
            <div className="hero-gradient-ring glass-card relative overflow-hidden rounded-3xl p-5 sm:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-rose-50/80" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                      {lang === "ru" ? "Каталог 2oiyn" : "2oiyn ойындар каталогы"}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {lang === "ru"
                        ? "Национальные и интерактивные игры в одном сетапе."
                        : "Ұлттық және интерактивті ойындар бір форматта жиналған."}
                    </p>
                  </div>
                  <div className="flex -space-x-2">
                    {["ОМ", "HR", "ДС"].map((initials) => (
                      <div
                        key={initials}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-accent text-xs font-semibold text-white shadow-md"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                  {games.map((game) => (
                    <button
                      key={game.name}
                      type="button"
                      onClick={() => scrollToSection("games")}
                      className="group flex items-center gap-2 rounded-2xl border border-white/60 bg-white/70 px-3 py-2 text-left shadow-sm backdrop-blur transition hover:bg-white"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-accent text-white shadow-sm shadow-red-300/70">
                        <game.icon className="h-4 w-4" />
                      </div>
                      <span className="font-semibold text-[var(--text-primary)]">
                        {game.name}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-dashed border-rose-200 bg-white/70 px-3 py-2.5 text-xs text-[var(--text-secondary)]">
                  <span>Продажа «Кач Мяч», «Кокпар» и «Бейби Баттл».</span>
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-[0.7rem] font-semibold text-rose-500">
                    Для агентств и школ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY 2OIYN */}
        <section
          ref={registerReveal}
          className="reveal-section mb-16 space-y-6 lg:mb-20"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="badge-gradient inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-rose-600">
                {lang === "ru" ? "Почему выбирают 2oiyn" : "Неліктен 2oiyn таңдайды"}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                {lang === "ru"
                  ? "Игровые программы, которые гости запоминают"
                  : "Қонақтар есінде қалатын ойын бағдарламалары"}
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {(lang === "ru"
              ? [
                  {
                    title: "Профессиональные ведущие",
                    icon: Users,
                    description:
                      "Наши ведущие умеют вовлекать гостей и создавать живую атмосферу праздника без неловких конкурсов.",
                  },
                  {
                    title: "Национальные игры",
                    icon: Star,
                    description:
                      "Мы бережно сохраняем казахские традиции и адаптируем национальные игры под современные форматы мероприятий.",
                  },
                  {
                    title: "Подходит для любых событий",
                    icon: Sparkles,
                    description:
                      "Свадьбы, корпоративы, школы, фестивали, дни рождения и домашние вечеринки — подберём формат под ваш сценарий.",
                  },
                  {
                    title: "Интерактив и эмоции",
                    icon: Gamepad2,
                    description:
                      "Каждый гость становится частью действия: игры построены на вовлечении и живой реакции зала.",
                  },
                  {
                    title: "Быстрая организация",
                    icon: Zap,
                    description:
                      "Мы приезжаем со всем реквизитом, быстро разворачиваем площадку и полностью берём проведение игр на себя.",
                  },
                ]
              : [
                  {
                    title: "Кәсіби жүргізушілер",
                    icon: Users,
                    description:
                      "Біздің жүргізушілер қонақтарды тарта біледі және ыңғайсыз конкурстарсыз мерекелік атмосфера жасайды.",
                  },
                  {
                    title: "Ұлттық ойындар",
                    icon: Star,
                    description:
                      "Біз қазақтың ұлттық ойындарын сақтап, оларды заманауи іс-шаралар форматына бейімдейміз.",
                  },
                  {
                    title: "Кез келген іс-шараға лайық",
                    icon: Sparkles,
                    description:
                      "Тойлар, корпоративтер, мектеп кештері, фестивальдер, туған күндер және үйдегі кештер — сіздің сценарийіңізге сай формат ұсынамыз.",
                  },
                  {
                    title: "Интерактив және эмоция",
                    icon: Gamepad2,
                    description:
                      "Әр қонақ ойынның бір бөлігіне айналады: ойындар залдың тірі реакциясына және қатысуына құрылған.",
                  },
                  {
                    title: "Жылдам ұйымдастыру",
                    icon: Zap,
                    description:
                      "Біз барлық реквизитпен келеміз, алаңды тез дайындап, ойындарды толықтай өзіміз жүргіземіз.",
                  },
                ]
            ).map((feature) => (
              <div
                key={feature.title}
                className="hover-lift glass-card flex flex-col gap-3 rounded-2xl border p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50">
                  <feature.icon className="h-4 w-4 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section
          ref={registerReveal}
          className="reveal-section mb-16 rounded-3xl border border-[var(--border)] bg-white/80 p-5 shadow-sm backdrop-blur lg:mb-20 lg:p-7"
        >
          <div className="grid gap-6 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center gap-1 sm:justify-start">
                  <span className="stat-number text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                    {counters[index]}
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          ref={registerReveal}
          className="reveal-section mb-16 space-y-8 lg:mb-20"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="badge-gradient inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-rose-600">
                {lang === "ru" ? "Как это работает" : "Бұл қалай жұмыс істейді"}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                {lang === "ru"
                  ? "От первой заявки до «вау» гостей — в три шага"
                  : "Алғашқы қоңыраудан қонақтардың «вау» әсеріне дейін — үш қадам"}
              </h2>
            </div>
          </div>

          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="pointer-events-none absolute left-10 right-10 top-10 hidden h-[1px] bg-gradient-to-r from-rose-200 via-rose-400/60 to-rose-200 md:block" />
            {steps.map((step, index) => (
              <div key={step.title} className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <div className="step-badge flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                    {lang === "ru" ? step.titleRu : step.titleKz}
                  </h3>
                </div>
                <p className="ml-12 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  {lang === "ru" ? step.descriptionRu : step.descriptionKz}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GAMES */}
        <section
          id="games"
          ref={registerReveal}
          className="reveal-section mb-16 space-y-8 lg:mb-20"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="badge-gradient inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-rose-600">
                {lang === "ru" ? "Каталог игр" : "Ойындар каталогы"}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                {lang === "ru"
                  ? "Национальные и интерактивные игры 2oiyn"
                  : "2oiyn ұлттық және интерактивті ойындары"}
              </h2>
            </div>
            <p className="max-w-sm text-xs text-[var(--text-secondary)] sm:text-sm">
              {lang === "ru"
                ? "Все игры могут быть адаптированы под ваш формат мероприятия, возраст аудитории и площадку."
                : "Барлық ойындарды сіздің іс-шара форматыңызға, қонақтар жасына және алаң ерекшелігіне қарай бейімдеуге болады."}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gamesToRender.map((game) => (
              <article
                key={game.name}
                className="hover-lift glass-card flex flex-col justify-between rounded-2xl border p-4"
              >
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-black/5">
                    <img
                      src={gameImageMap[game.name]}
                      alt={game.name}
                      className="h-32 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent text-white shadow-lg shadow-red-400/40">
                        <game.icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        {game.name}
                      </h3>
                    </div>
                    <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-rose-500">
                      {["Кач Мяч", "Baby Battle", "Сердце подскажет", "Кокпар"].includes(
                        game.name
                      )
                        ? "Аренда + продажа"
                        : "Аренда"}
                    </span>
                  </div>
                  <div className="space-y-1 text-[0.7rem] leading-relaxed text-[var(--text-secondary)] sm:text-xs">
                    <p>
                      <span className="font-bold text-[var(--text-primary)]">
                        {lang === "ru" ? "Формат:" : "Форматы:"}
                      </span>{" "}
                      {game.type}
                    </p>
                    {game.participants && (
                      <p>
                        <span className="font-bold text-[var(--text-primary)]">
                        {lang === "ru" ? "Количество участников:" : "Қатысушылар саны:"}  
                        </span>{" "}
                        {game.participants}
                      </p>
                    )}
                    {game.short && <p>{game.short}</p>}
                    <p>{game.description}</p>
                    {game.goal && <p>{game.goal}</p>}
                    {game.requirements && (
                      <p>
                        <span className="font-medium text-[var(--text-primary)]">
                          Технические требования:
                        </span>{" "}
                        {game.requirements}
                      </p>
                    )}
                    {game.props && (
                      <p>
                        <span className="font-medium text-[var(--text-primary)]">
                          Реквизит:
                        </span>{" "}
                        {game.props}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedGame(game.name);
                    scrollToSection("cta");
                  }}
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-rose-200 bg-white/80 px-3 py-2 text-xs font-semibold text-rose-600 shadow-sm transition hover:bg-rose-50"
                >
                  Арендовать
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          ref={registerReveal}
          className="reveal-section mb-16 space-y-8 lg:mb-20"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="badge-gradient inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-rose-600">
                Отзывы
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                2oiyn в жизни событий
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {testimonialsToRender.map((item) => (
              <article
                key={item.role}
                className="hover-lift glass-card flex h-full flex-col rounded-2xl border p-4"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-accent text-xs font-semibold text-white shadow-md">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">
                      {lang === "ru" ? item.roleRu : item.roleKz}
                    </p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="h-3 w-3 text-yellow-400"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  {lang === "ru" ? item.textRu : item.textKz}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section
          ref={registerReveal}
          className="reveal-section mb-16 space-y-6 lg:mb-20"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-3">
              <p className="badge-gradient inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-rose-600">
                {lang === "ru" ? "Команда" : "Команда"}
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                {lang === "ru" ? "Команда 2oiyn" : "2oiyn командасы"}
              </h2>
              <p className="max-w-xl text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                {lang === "ru"
                  ? "Мы — команда ведущих и организаторов мероприятий в Астане. Наша цель — сделать каждое событие ярким, интерактивным и запоминающимся. Мы объединяем национальные традиции и современные игровые форматы, чтобы гости чувствовали себя вовлечёнными и расслабленными."
                  : "Біз – Астанадағы іс-шараларды ұйымдастыратын жүргізушілер мен ұйымдастырушылар командасымыз. Мақсатымыз – әр шараны жарқын, интерактивті және есте қаларлық ету. Ұлттық дәстүрлерді заманауи ойын форматтарымен үйлестіріп, қонақтардың өзін еркін әрі жайлы сезінуіне көмектесеміз."}
              </p>
            </div>
            <div className="glass-card w-full max-w-sm rounded-2xl border p-3 sm:p-4">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-black/5">
                <img
                  src="/images/team/team-photo.jpg"
                  alt={lang === "ru" ? "Команда 2oiyn" : "2oiyn командасы"}
                  className="h-40 w-full object-cover sm:h-48"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          ref={registerReveal}
          className="reveal-section mb-16 space-y-8 lg:mb-20"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="badge-gradient inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-rose-600">
                  {lang === "ru" ? "Пакеты" : "Пакеттер"}
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                  {lang === "ru"
                    ? "Пакеты игр для мероприятий"
                    : "Іс-шараларға арналған ойын пакеттері"}
                </h2>
              </div>
            </div>
            <div className="glass-card inline-flex max-w-md flex-col gap-1 rounded-2xl border px-4 py-3 text-xs text-[var(--text-secondary)] sm:text-sm">
              <p className="font-semibold text-[var(--text-primary)]">
                {lang === "ru" ? "Стоимость игр:" : "Ойындардың құны:"}
              </p>
              <p>{lang === "ru" ? "1 игра — 30 000 тенге" : "1 ойын — 30 000 теңге"}</p>
              <p>{lang === "ru" ? "2 игры — 50 000 тенге" : "2 ойын — 50 000 теңге"}</p>
              <p>{lang === "ru" ? "3 игры — 70 000 тенге" : "3 ойын — 70 000 теңге"}</p>
              <p className="pt-1 text-[0.7rem] sm:text-xs">
                {lang === "ru"
                  ? "Продолжительность одной игры: 10–15 минут."
                  : "Бір ойынның ұзақтығы: 10–15 минут."}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {plansToRender.map((plan) => (
              <article
                key={plan.nameRu}
                className={`glass-card flex h-full flex-col rounded-2xl border p-5 hover-lift ${
                  plan.highlight ? "pricing-popular relative overflow-hidden" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute right-5 top-4 rounded-full bg-gradient-accent px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white shadow-md">
                    {lang === "ru" ? "Популярный" : "Танымал"}
                  </div>
                )}
                <div className="mb-4 space-y-1">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                    {lang === "ru" ? plan.nameRu : plan.nameKz}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] sm:text-sm">
                    {lang === "ru" ? plan.descriptionRu : plan.descriptionKz}
                  </p>
                </div>
                <ul className="mb-4 space-y-2 text-xs text-[var(--text-secondary)] sm:text-sm">
                  {(lang === "ru" ? plan.featuresRu : plan.featuresKz).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-[2px] h-3.5 w-3.5 text-rose-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.footerRu && (
                  <p className="mb-3 text-[0.7rem] text-[var(--text-secondary)] sm:text-xs">
                    {lang === "ru" ? plan.footerRu : plan.footerKz}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => scrollToSection("cta")}
                  className={`mt-auto inline-flex items-center justify-center rounded-full px-4 py-2.5 text-xs font-semibold shadow-sm sm:text-sm ${
                    plan.highlight
                      ? "bg-gradient-accent text-white shadow-red-400/60"
                      : "border border-[var(--border)] bg-white/80 text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                  }`}
                >
                  Обсудить пакет
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          ref={registerReveal}
          className="reveal-section mb-16 space-y-6 lg:mb-20"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="badge-gradient inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-rose-600">
                FAQ
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                {lang === "ru" ? "Частые вопросы" : "Жиі қойылатын сұрақтар"}
              </h2>
            </div>
          </div>

          <div className="space-y-2">
            {(lang === "ru" ? faqs : faqsKz).map((item) => (
              <article
                key={item.question}
                className="glass-card rounded-2xl border p-3 sm:p-4"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq((prev) => (prev === item.question ? null : item.question))
                  }
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-xs font-semibold text-rose-600 sm:h-8 sm:w-8">
                      ?
                    </div>
                    <p className="text-xs font-semibold text-[var(--text-primary)] sm:text-sm">
                      {item.question}
                    </p>
                  </div>
                  <span className="text-lg leading-none text-rose-500">
                    {openFaq === item.question ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`accordion-content mt-2 text-xs text-[var(--text-secondary)] sm:text-sm ${
                    openFaq === item.question ? "open" : ""
                  }`}
                >
                  <p className="border-t border-dashed border-[var(--border)] pt-3">
                    {item.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          ref={registerReveal}
          className="reveal-section mb-16 rounded-3xl bg-gradient-accent p-5 text-white shadow-xl shadow-red-400/50 lg:mb-20 lg:p-7"
        >
          <div className="grid gap-4 md:grid-cols-[1.3fr,1fr] md:items-center">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {lang === "ru"
                  ? "Сделайте ваше мероприятие незабываемым"
                  : "Іс-шараңызды ұмытылмас етіңіз"}
              </h2>
              <p className="text-xs text-rose-50/90 sm:text-sm">
                {lang === "ru"
                  ? "Оставьте номер телефона для обратного звонка или сразу перейдите в WhatsApp — выберите удобный для вас способ."
                  : "Кері байланыс үшін телефон нөміріңізді қалдырыңыз немесе бірден WhatsApp‑қа жазыңыз — өзіңізге ыңғайлы тәсілді таңдаңыз."}
              </p>
              {selectedGame && (
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-medium text-rose-50">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-200" />
                  {lang === "ru" ? "Запрос по игре:" : "Ойын бойынша сұрау:"}{" "}
                  <span className="font-semibold">{selectedGame}</span>
                </p>
              )}
              <div className="flex items-center gap-2 text-xs text-rose-50/80 sm:text-sm">
                <MessageCircle className="h-4 w-4" />
                <span>
                  {lang === "ru"
                    ? "Быстрый ответ по номеру +7 777 961 49 90."
                    : "+7 777 961 49 90 нөмірі бойынша жедел жауап береміз."}
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="rounded-full bg-white/15 p-1.5 shadow-md shadow-red-500/40 backdrop-blur">
                <div className="flex flex-col gap-2 rounded-full bg-white/95 px-3 py-1.5 sm:flex-row sm:items-center">
                  <input
                    type="tel"
                    required
                    placeholder="+7 ___ ___ __ __"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-8 flex-1 bg-transparent text-xs text-[var(--text-primary)] placeholder:text-rose-300 focus:outline-none sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-accent px-3 py-1.5 text-xs font-semibold text-white shadow-sm sm:px-4 sm:text-sm"
                  >
                    {lang === "ru" ? "Оставить номер" : "Нөмірді қалдыру"}
                  </button>
                </div>
              </div>
              <p className="text-[0.65rem] text-rose-100/90 sm:text-[0.7rem]">
                {lang === "ru"
                  ? "Мы используем ваш номер только для связи по заявке и не передаём его третьим лицам."
                  : "Сіздің нөміріңізді тек өтінім бойынша байланысу үшін пайдаланамыз және үшінші тұлғаларға бермейміз."}
              </p>
            </form>
            <div className="mt-4 flex flex-col items-start gap-2 text-xs sm:text-sm">
              <span className="text-rose-50/80">
                {lang === "ru"
                  ? "Или сразу напишите нам в WhatsApp:"
                  : "Немесе бірден WhatsApp‑қа жазыңыз:"}
              </span>
              <a
                href="https://wa.me/77779614990"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[var(--text-primary)] shadow-md shadow-red-400/40 sm:text-sm"
              >
                <MessageCircle className="h-4 w-4 text-emerald-500" />
                <span>
                  {lang === "ru"
                    ? "Открыть чат в WhatsApp"
                    : "WhatsApp чатын ашу"}
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] bg-white/90 pb-6 pt-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-xl font-black tracking-tight">
                <span className="text-gradient-accent">2o</span>
                <span className="text-[var(--text-primary)]">iyn</span>
              </div>
              <span className="text-[0.7rem] font-medium uppercase tracking-wide text-[var(--text-secondary)]">
                games
              </span>
            </div>
            <p className="max-w-xs text-xs text-[var(--text-secondary)] sm:text-sm">
              Игры, которые делают мероприятия живыми, тёплыми и по-настоящему запоминающимися.
            </p>
            <p className="text-[0.7rem] text-zinc-400">
              © {new Date().getFullYear()} 2oiyn. Все права защищены.
            </p>
          </div>

          <div className="grid flex-1 gap-6 text-xs text-[var(--text-secondary)] sm:grid-cols-3 sm:text-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[var(--text-primary)] sm:text-sm">
                Контакты
              </p>
              <ul className="space-y-1">
                <li>+7 777 961 49 90</li>
                <li>Астана, Казахстан</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[var(--text-primary)] sm:text-sm">
                Соцсети
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://www.instagram.com/2oiyn?igsh=d2s1MTRpcnc1cHpy"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://wa.me/77779614990"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                  aria-label="WhatsApp"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                  aria-label="Github"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                  aria-label="Twitter"
                >
                  <Twitter className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

