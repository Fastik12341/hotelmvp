// src/components/ChatBot.jsx

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const chatData = {
  ru: {
    title: "Чат с консьержем",
    placeholder: "Напишите ваш вопрос...",
    greeting: "Здравствуйте! Я виртуальный консьерж Mövenpick Siam. Чем могу помочь?",
    typing: "Консьерж печатает...",
    questions: [
      "🍽️ Завтрак",
      "🏊 Бассейн",
      "🚗 Трансфер",
      "💆 Спа",
      "🍫 Шоколадный час",
      "🍷 Ресторан",
      "🏖️ Пляж",
      "📶 Wi-Fi"
    ],
    answers: {
      "🍽️ Завтрак": "Завтрак подаётся в ресторане отеля с 06:30 до 10:30. Включён в стоимость номера. Шведский стол: европейская и азиатская кухня, свежая выпечка, фрукты, сыры. Меню à la carte — по запросу.",
      "🏊 Бассейн": "Бассейн-инфинити с панорамным видом на Сиамский залив работает с 07:00 до 21:00. Температура воды 28°C круглый год. Полотенца, шезлонги и зонтики — бесплатно. Отдельная детская зона с глубиной 0.5 м. Бар у бассейна открыт с 11:00.",
      "🚗 Трансфер": "Трансфер из аэропорта Утапао (30 мин) — 1,200 THB. Из Бангкока (1.5 часа) — 2,500 THB. Встреча с табличкой, холодные полотенца и вода в авто. Бронируйте через услугу Airport Transfer или на ресепшене.",
      "💆 Спа": "Спа-центр работает с 10:00 до 22:00. Процедуры: тайский массаж (1ч — 1,200 THB), массаж горячими камнями (1.5ч — 1,800 THB), обертывание с водорослями (1ч — 1,500 THB). Рекомендуем бронировать за день через SPA Relax Package.",
      "🍫 Шоколадный час": "Наша фирменная традиция! Ежедневно в 16:00 в лобби. Бесплатно: швейцарский шоколад Mövenpick 5 видов, мороженое 8 вкусов, горячий шоколад. Живая фортепианная музыка.",
      "🍷 Ресторан": "Главный ресторан: завтрак 06:30-10:30, ужин 18:00-23:00. Beach BBQ: 18:00-22:00. Бар у бассейна: 11:00-21:00. Рум-сервис: круглосуточно. Дресс-код на ужин: smart casual.",
      "🏖️ Пляж": "Приватный пляж Na Jomtien — 2 минуты от отеля. Длина 150 метров. Шезлонги и полотенца бесплатно. Водные активности: каяки, сапборды (бесплатно), гидроциклы (1,500 THB/час). Пляжный сервис с 09:00 до 18:00.",
      "📶 Wi-Fi": "Бесплатный Wi-Fi на всей территории: скорость до 100 Мбит/с. Подключение: сеть 'Movenpick-Guest', пароль — номер комнаты. В бизнес-центре доступны компьютеры и принтер.",
      "🛎️ Заезд": "Заезд с 14:00, выезд до 12:00. Ранний заезд — 1,000 THB (при наличии). Поздний выезд до 18:00 — 50% от стоимости номера. Хранение багажа — бесплатно.",
      "👶 Дети": "Kids Club: 09:00-17:00, дети 3-12 лет. Бесплатные мастер-классы, игры, прогулки. Няня: 300 THB/час. Детское меню в ресторане. Кроватки и стульчики — бесплатно.",
      "🏋️ Фитнес": "Тренажёрный зал 24/7 на 1 этаже. Кардиозона (беговые дорожки, велосипеды), свободные веса, йога-коврики. Персональный тренер — 800 THB/час. Групповые занятия йогой в 07:00.",
      "💳 Оплата": "Visa, MasterCard, American Express, UnionPay. Наличные THB. Криптовалюта (BTC, ETH, USDT). Депозит при заезде — 3,000 THB.",
      "🐾 Животные": "Размещение с питомцами до 10 кг: 500 THB/ночь. Депозит 3,000 THB. Корм, миски, лежанка — бесплатно. Выгул — на территории сада.",
      "🎉 Мероприятия": "Организуем свадьбы, дни рождения, корпоративы. Банкетный зал до 100 гостей. Пляжная церемония. Конференц-зал на 40 человек с оборудованием.",
      "🏨 Номера": "Категории: Deluxe (35 м²), Suite (55 м²), Villa с бассейном (80 м²). Все номера с видом на море. Кондиционер, сейф, мини-бар, балкон или терраса."
    },
    fallback: "Я могу ответить на вопросы о завтраке, бассейне, трансфере, спа, шоколадном часе, ресторане, пляже, Wi-Fi, заезде/выезде, детях, фитнесе, оплате, животных, мероприятиях и номерах. Выберите тему или напишите свой вопрос.",
    send: "Отправить"
  },
  en: {
    title: "Concierge Chat",
    placeholder: "Type your question...",
    greeting: "Hello! I'm the virtual concierge at Mövenpick Siam. How can I help you?",
    typing: "Concierge is typing...",
    questions: [
      "🍽️ Breakfast",
      "🏊 Pool",
      "🚗 Transfer",
      "💆 Spa",
      "🍫 Chocolate Hour",
      "🍷 Restaurant",
      "🏖️ Beach",
      "📶 Wi-Fi"
    ],
    answers: {
      "🍽️ Breakfast": "Breakfast at the hotel restaurant from 06:30 to 10:30. Included in room rate. Buffet: European & Asian cuisine, fresh pastries, fruits, cheeses. À la carte menu — upon request.",
      "🏊 Pool": "Infinity pool with panoramic Gulf of Thailand views, 07:00-21:00. Water temperature 28°C year-round. Towels, sunbeds, umbrellas — complimentary. Kids area with 0.5m depth. Pool bar from 11:00.",
      "🚗 Transfer": "U-Tapao airport transfer (30 min) — 1,200 THB. Bangkok (1.5 hrs) — 2,500 THB. Meet & greet with name sign, cold towels and water. Book via Airport Transfer service or at front desk.",
      "💆 Spa": "Spa center: 10:00-22:00. Treatments: Thai massage (1h — 1,200 THB), hot stone massage (1.5h — 1,800 THB), seaweed wrap (1h — 1,500 THB). Book in advance via SPA Relax Package.",
      "🍫 Chocolate Hour": "Our signature tradition! Daily at 16:00 in the lobby. Complimentary: 5 types of Swiss Mövenpick chocolate, 8 ice cream flavors, hot chocolate. Live piano music.",
      "🍷 Restaurant": "Main restaurant: breakfast 06:30-10:30, dinner 18:00-23:00. Beach BBQ: 18:00-22:00. Pool bar: 11:00-21:00. Room service: 24/7. Dinner dress code: smart casual.",
      "🏖️ Beach": "Private Na Jomtien beach — 2 min walk. 150m long. Sunbeds & towels complimentary. Water activities: kayaks, SUP boards (free), jet skis (1,500 THB/hr). Beach service 09:00-18:00.",
      "📶 Wi-Fi": "Free Wi-Fi throughout the hotel: up to 100 Mbps. Network: 'Movenpick-Guest', password — room number. Business center has computers and printer.",
      "🛎️ Check-in": "Check-in from 14:00, check-out before 12:00. Early check-in — 1,000 THB (subject to availability). Late check-out until 18:00 — 50% of room rate. Luggage storage — free.",
      "👶 Kids": "Kids Club: 09:00-17:00, ages 3-12. Free workshops, games, outdoor activities. Nanny: 300 THB/hour. Kids menu in restaurant. Cribs and high chairs — complimentary.",
      "🏋️ Gym": "Fitness center 24/7 on 1st floor. Cardio (treadmills, bikes), free weights, yoga mats. Personal trainer — 800 THB/hour. Group yoga at 07:00.",
      "💳 Payment": "Visa, MasterCard, American Express, UnionPay. Cash THB. Cryptocurrency (BTC, ETH, USDT). Check-in deposit — 3,000 THB.",
      "🐾 Pets": "Pets up to 10 kg: 500 THB/night. Deposit 3,000 THB. Food, bowls, bed — complimentary. Walking area in the garden.",
      "🎉 Events": "We organize weddings, birthdays, corporate events. Banquet hall up to 100 guests. Beach ceremony. Conference room for 40 with equipment.",
      "🏨 Rooms": "Categories: Deluxe (35 m²), Suite (55 m²), Pool Villa (80 m²). All rooms with sea view. AC, safe, minibar, balcony or terrace."
    },
    fallback: "I can help with: breakfast, pool, transfer, spa, Chocolate Hour, restaurant, beach, Wi-Fi, check-in/out, kids, gym, payment, pets, events and rooms. Select a topic or type your question.",
    send: "Send"
  },
  th: {
    title: "แชทกับคอนเซียร์จ",
    placeholder: "พิมพ์คำถามของคุณ...",
    greeting: "สวัสดี! ฉันเป็นคอนเซียร์จเสมือนของ Mövenpick Siam มีอะไรให้ช่วยไหม?",
    typing: "คอนเซียร์จกำลังพิมพ์...",
    questions: [
      "🍽️ อาหารเช้า",
      "🏊 สระว่ายน้ำ",
      "🚗 รับส่ง",
      "💆 สปา",
      "🍫 ช็อกโกแลต",
      "🍷 ร้านอาหาร",
      "🏖️ ชายหาด",
      "📶 Wi-Fi"
    ],
    answers: {
      "🍽️ อาหารเช้า": "อาหารเช้าที่ห้องอาหาร 06:30-10:30 น. รวมในราคาห้อง บุฟเฟ่ต์: อาหารยุโรปและเอเชีย ขนมอบ ผลไม้ ชีส เมนูตามสั่ง — ตามคำขอ",
      "🏊 สระว่ายน้ำ": "สระว่ายน้ำอินฟินิตี้วิวอ่าวไทย 07:00-21:00 น. อุณหภูมิน้ำ 28°C ตลอดปี ผ้าเช็ดตัว เก้าอี้ ร่ม — ฟรี โซนเด็กลึก 0.5 ม. บาร์ริมสระ 11:00 น.",
      "🚗 รับส่ง": "รับส่งสนามบินอู่ตะเภา (30 นาที) — 1,200 บาท กรุงเทพฯ (1.5 ชม.) — 2,500 บาท จองผ่านบริการ Airport Transfer หรือที่ฟร้อนท์",
      "💆 สปา": "สปา: 10:00-22:00 น. นวดไทย (1ชม. — 1,200 บาท) นวดหินร้อน (1.5ชม. — 1,800 บาท) จองผ่าน SPA Relax Package",
      "🍫 ช็อกโกแลต": "ประเพณีของเรา! ทุกวัน 16:00 น. ที่ล็อบบี้ ฟรี: ช็อกโกแลตสวิส 5 ชนิด ไอศกรีม 8 รส ดนตรีเปียโนสด",
      "🍷 ร้านอาหาร": "ห้องอาหารหลัก: เช้า 06:30-10:30 น. เย็น 18:00-23:00 น. บาร์บีคิวชายหาด: 18:00-22:00 น. บาร์สระ: 11:00-21:00 น. รูมเซอร์วิส 24/7",
      "🏖️ ชายหาด": "ชายหาดส่วนตัวนาจอมเทียน — เดิน 2 นาที ยาว 150 ม. เก้าอี้ ผ้าเช็ดตัวฟรี กิจกรรม: เรือคายัค แพดเดิลบอร์ด (ฟรี) เจ็ตสกี (1,500 บาท/ชม.)",
      "📶 Wi-Fi": "Wi-Fi ฟรีทั่วโรงแรม ความเร็วสูงสุด 100 Mbps เครือข่าย: 'Movenpick-Guest' รหัสผ่าน — หมายเลขห้อง",
      "🛎️ เช็คอิน": "เช็คอิน 14:00 น. เช็คเอาท์ 12:00 น. เช็คอินเร็ว — 1,000 บาท เช็คเอาท์สายถึง 18:00 น. — 50% ของค่าห้อง ฝากกระเป๋าฟรี",
      "👶 เด็ก": "คิดส์คลับ: 09:00-17:00 น. เด็ก 3-12 ปี กิจกรรมฟรี พี่เลี้ยง: 300 บาท/ชม. เมนูเด็ก เปลและเก้าอี้เด็ก — ฟรี",
      "🏋️ ฟิตเนส": "ฟิตเนส 24/7 ชั้น 1 คาร์ดิโอ เวท โยคะ เทรนเนอร์ส่วนตัว — 800 บาท/ชม. โยคะกลุ่ม 07:00 น.",
      "💳 การชำระเงิน": "Visa, MasterCard, American Express, UnionPay เงินสดบาท คริปโต (BTC, ETH, USDT) เงินประกัน — 3,000 บาท",
      "🐾 สัตว์เลี้ยง": "สัตว์เลี้ยงไม่เกิน 10 กก.: 500 บาท/คืน เงินประกัน 3,000 บาท อาหาร ชาม ที่นอน — ฟรี",
      "🎉 งานอีเวนต์": "จัดงานแต่งงาน วันเกิด งานบริษัท ห้องจัดเลี้ยง 100 คน พิธีริมชายหาด ห้องประชุม 40 คนพร้อมอุปกรณ์",
      "🏨 ห้องพัก": "ประเภท: ดีลักซ์ (35 ตร.ม.) สวีท (55 ตร.ม.) วิลล่าพร้อมสระ (80 ตร.ม.) ทุกห้องวิวทะเล แอร์ ตู้เซฟ มินิบาร์ ระเบียง"
    },
    fallback: "ฉันตอบคำถามเกี่ยวกับ: อาหารเช้า สระว่ายน้ำ รับส่ง สปา ช็อกโกแลต ร้านอาหาร ชายหาด Wi-Fi เช็คอิน/เอาท์ เด็ก ฟิตเนส การชำระเงิน สัตว์เลี้ยง งานอีเวนต์ และห้องพัก เลือกหัวข้อหรือพิมพ์คำถาม",
    send: "ส่ง"
  }
}

function ChatBot() {
  const { lang } = useLanguage()
  const c = chatData[lang]
  
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ text: c.greeting, from: 'bot' }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const findAnswer = (text) => {
    const lower = text.toLowerCase()
    
    const keywords = {
      ru: {
        "🍽️ Завтрак": ["завтрак", "завтрака", "еда", "поесть", "кушать", "утро", "утром", "шведский", "буфет"],
        "🏊 Бассейн": ["бассейн", "бассейна", "плавать", "купаться", "вода", "купание"],
        "🚗 Трансфер": ["трансфер", "такси", "аэропорт", "дорога", "доехать", "машина", "утапао", "банкгок"],
        "💆 Спа": ["спа", "массаж", "процедуры", "расслабление", "сауна", "хаммам", "камни", "обертывание"],
        "🍫 Шоколадный час": ["шоколад", "мороженое", "chocolate", "десерт", "сладкое", "лакомство"],
        "🍷 Ресторан": ["ресторан", "ужин", "обед", "поесть", "бар", "меню", "рум-сервис", "доставка"],
        "🏖️ Пляж": ["пляж", "море", "пляжа", "берег", "песок", "каяк", "сапборд", "гидроцикл"],
        "📶 Wi-Fi": ["wi-fi", "wifi", "интернет", "вайфай", "сеть", "подключение"],
        "🛎️ Заезд": ["заезд", "выезд", "часы", "поздно", "рано", "багаж", "чемодан"],
        "👶 Дети": ["дети", "ребёнок", "детский", "ребенка", "няня", "малыш", "дитя"],
        "🏋️ Фитнес": ["фитнес", "тренажёр", "спорт", "гим", "тренировка", "зал", "йога"],
        "💳 Оплата": ["оплата", "карта", "деньги", "валюта", "заплатить", "крипто", "биткоин", "депозит"],
        "🐾 Животные": ["животные", "собака", "кошка", "питомец", "звери", "пес", "кот"],
        "🎉 Мероприятия": ["свадьба", "день рождения", "корпоратив", "банкет", "конференц", "праздник", "вечеринка"],
        "🏨 Номера": ["номер", "комната", "категория", "suite", "deluxe", "villa", "вилла", "балкон"]
      },
      en: {
        "🍽️ Breakfast": ["breakfast", "food", "eat", "morning", "meal", "dining", "buffet"],
        "🏊 Pool": ["pool", "swim", "swimming", "water", "dip", "sunbed"],
        "🚗 Transfer": ["transfer", "taxi", "airport", "drive", "car", "transport", "utapao", "bangkok"],
        "💆 Spa": ["spa", "massage", "treatment", "relax", "sauna", "wellness", "hot stone"],
        "🍫 Chocolate Hour": ["chocolate", "ice cream", "dessert", "sweet", "chocolate hour"],
        "🍷 Restaurant": ["restaurant", "dinner", "lunch", "bar", "menu", "food", "room service"],
        "🏖️ Beach": ["beach", "sea", "ocean", "sand", "shore", "coast", "kayak", "jet ski"],
        "📶 Wi-Fi": ["wi-fi", "wifi", "internet", "connection", "network"],
        "🛎️ Check-in": ["check-in", "checkout", "check-out", "late", "early", "luggage", "baggage"],
        "👶 Kids": ["kids", "child", "children", "baby", "nanny", "family", "crib"],
        "🏋️ Gym": ["gym", "fitness", "workout", "exercise", "training", "sport", "yoga"],
        "💳 Payment": ["payment", "pay", "card", "cash", "money", "currency", "crypto", "deposit", "bitcoin"],
        "🐾 Pets": ["pet", "dog", "cat", "animal"],
        "🎉 Events": ["wedding", "birthday", "corporate", "party", "conference", "event", "banquet"],
        "🏨 Rooms": ["room", "suite", "deluxe", "villa", "category", "balcony", "view"]
      },
      th: {
        "🍽️ อาหารเช้า": ["อาหารเช้า", "กิน", "เช้า", "มื้อ", "บุฟเฟ่ต์"],
        "🏊 สระว่ายน้ำ": ["สระ", "ว่ายน้ำ", "น้ำ", "ว่าย", "ที่นอน"],
        "🚗 รับส่ง": ["รับส่ง", "แท็กซี่", "สนามบิน", "รถ", "เดินทาง", "อู่ตะเภา", "กรุงเทพ"],
        "💆 สปา": ["สปา", "นวด", "ผ่อนคลาย", "ซาวน่า", "หินร้อน"],
        "🍫 ช็อกโกแลต": ["ช็อกโกแลต", "ไอศกรีม", "ขนม", "หวาน"],
        "🍷 ร้านอาหาร": ["ร้านอาหาร", "อาหาร", "เย็น", "กลางวัน", "บาร์", "รูมเซอร์วิส"],
        "🏖️ ชายหาด": ["ชายหาด", "ทะเล", "หาด", "ทราย", "เรือคายัค", "เจ็ตสกี"],
        "📶 Wi-Fi": ["wi-fi", "wifi", "อินเทอร์เน็ต", "เน็ต", "สัญญาณ"],
        "🛎️ เช็คอิน": ["เช็คอิน", "เช็คเอาท์", "เวลา", "สาย", "เร็ว", "กระเป๋า"],
        "👶 เด็ก": ["เด็ก", "ลูก", "ครอบครัว", "พี่เลี้ยง", "เด็กน้อย"],
        "🏋️ ฟิตเนส": ["ฟิตเนส", "ออกกำลังกาย", "กีฬา", "เทรน", "โยคะ"],
        "💳 การชำระเงิน": ["จ่าย", "เงิน", "บัตร", "คริปโต", "สกุลเงิน", "บิตคอยน์"],
        "🐾 สัตว์เลี้ยง": ["สัตว์", "หมา", "แมว", "สัตว์เลี้ยง"],
        "🎉 งานอีเวนต์": ["แต่งงาน", "วันเกิด", "ประชุม", "ปาร์ตี้", "งานเลี้ยง"],
        "🏨 ห้องพัก": ["ห้อง", "ห้องพัก", "ดีลักซ์", "สวีท", "วิลล่า", "ระเบียง"]
      }
    }

    const langKeywords = keywords[lang]
    
    for (const [topic, words] of Object.entries(langKeywords)) {
      if (words.some(word => lower.includes(word))) {
        return c.answers[topic]
      }
    }
    
    return null
  }

  const handleSend = (text) => {
    const msg = text || input
    if (!msg.trim()) return

    setMessages(prev => [...prev, { text: msg, from: 'user' }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const answer = findAnswer(msg) || c.fallback
      setMessages(prev => [...prev, { text: answer, from: 'bot' }])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-40 bg-[#8C7343] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#7A6338] hover:scale-110 transition-all duration-300"
        title={c.title}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-8 z-40 w-80 md:w-96 bg-white border border-[#E5E0D8] shadow-2xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#8C7343] to-[#A08050] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🏨</span>
              <h3 className="text-sm font-medium tracking-wide">{c.title}</h3>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-[#F5F2ED]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-[#8C7343] text-white rounded-2xl rounded-br-md'
                    : 'bg-white text-[#2E2E2E] rounded-2xl rounded-bl-md border border-[#E5E0D8] shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-[#B0A89A] text-sm px-4 py-2 rounded-2xl rounded-bl-md border border-[#E5E0D8] shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#B0A89A] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-[#B0A89A] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-[#B0A89A] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-3 py-2 bg-white border-t border-[#E5E0D8] flex flex-wrap gap-1">
            {c.questions.map(q => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs px-2.5 py-1.5 bg-[#F5F2ED] text-[#6B6B6B] hover:bg-[#8C7343] hover:text-white transition-all rounded-full"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="bg-white p-3 flex gap-2 border-t border-[#E5E0D8]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={c.placeholder}
              className="flex-1 text-sm border border-[#E5E0D8] px-3 py-2 rounded-full focus:outline-none focus:border-[#8C7343] bg-[#F5F2ED]"
            />
            <button
              onClick={() => handleSend()}
              className="bg-[#8C7343] text-white px-4 py-2 rounded-full text-sm hover:bg-[#7A6338] transition-colors flex-shrink-0"
            >
              {c.send}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot