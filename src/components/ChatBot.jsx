// src/components/ChatBot.jsx

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const chatData = {
  ru: {
    title: "Чат с консьержем",
    placeholder: "Напишите ваш вопрос...",
    greeting: "Здравствуйте! Я виртуальный консьерж Mövenpick Siam. Я могу помочь с информацией об отеле, услугах, ресторанах, трансфере и многом другом. Просто спросите!",
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
      "приветствие": [
        "Здравствуйте! Рад вас видеть в Mövenpick Siam. Чем могу помочь?",
        "Добрый день! Я ваш виртуальный консьерж. Что вас интересует?",
        "Приветствую! Спрашивайте — я здесь чтобы помочь."
      ],
      "как дела": [
        "У меня всё отлично! Готов помочь вам с любым вопросом об отеле 😊",
        "Прекрасно! Особенно когда могу быть полезным гостям. Что хотите узнать?",
        "Замечательно! Жду ваших вопросов об услугах и возможностях отеля."
      ],
      "спасибо": [
        "Всегда пожалуйста! Обращайтесь, если понадобится ещё что-то.",
        "Рад был помочь! Хорошего отдыха в Mövenpick Siam!",
        "Не за что! Наслаждайтесь пребыванием в нашем отеле."
      ],
      "🍽️ Завтрак": "Завтрак сервируется в главном ресторане отеля с 06:30 до 10:30. Включён в стоимость проживания. Вас ждёт роскошный шведский стол: европейская и азиатская кухни, свежая выпечка, тропические фрукты, швейцарские сыры. Доступно меню à la carte с блюдами из яиц, блинчиками и здоровыми опциями. Для ранних выездов — континентальный завтрак с 05:00.",
      "🏊 Бассейн": "Наш знаменитый бассейн-инфинити с панорамным видом на Сиамский залив открыт с 07:00 до 21:00. Комфортная температура воды 28°C круглый год. Шезлонги, зонтики и полотенца — комплиментарно. Отдельная детская зона глубиной 0.5 м. Бар у бассейна работает с 11:00 до 19:00 — коктейли, смузи, закуски.",
      "🚗 Трансфер": "Трансфер из аэропорта Утапао (30 минут) — 1,200 THB. Из Бангкока Суварнабхуми (1.5 часа) — 2,500 THB. Встреча с именной табличкой, холодные полотенца, питьевая вода в автомобиле. Доступны автомобили бизнес-класса и минивэны для семей. Бронировать через услугу Airport Transfer на сайте или на стойке регистрации.",
      "💆 Спа": "Спа-центр отеля работает с 10:00 до 22:00. Предлагаем: тайский массаж (60 мин — 1,200 THB), массаж горячими камнями (90 мин — 1,800 THB), обертывание с водорослями (60 мин — 1,500 THB), ароматерапию. Есть парные процедуры. Рекомендуем бронировать за 24 часа через SPA Relax Package.",
      "🍫 Шоколадный час": "Легендарный Chocolate Hour — визитная карточка Mövenpick! Ежедневно в 16:00 в лобби отеля. Бесплатно для всех гостей: 5 видов швейцарского шоколада, 8 сортов мороженого, горячий шоколад. Живая фортепианная музыка создаёт особую атмосферу. Приходите пораньше — самые популярные вкусы разбирают быстро!",
      "🍷 Ресторан": "Главный ресторан: завтрак 06:30-10:30, ужин 18:00-23:00. Beach BBQ на пляже: 18:00-22:00 (только в сухой сезон). Бар у бассейна: 11:00-21:00. Room service 24/7 — доставка в номер. Дресс-код на ужин: smart casual. Рекомендуем забронировать столик заранее, особенно в выходные.",
      "🏖️ Пляж": "Приватный пляж Na Jomtien в 2 минутах ходьбы. Протяжённость 150 метров с мягким песком. Бесплатно: шезлонги, зонтики, полотенца, каяки, сапборды. Платно: гидроциклы 1,500 THB/час. Пляжный сервис 09:00-18:00 — напитки и закуски. Море тёплое круглый год.",
      "📶 Wi-Fi": "Бесплатный скоростной Wi-Fi до 100 Мбит/с на всей территории. Сеть: 'Movenpick-Guest', пароль — номер вашей комнаты. В бизнес-центре доступны компьютеры с принтером. Для видеозвонков рекомендуем зону лобби — там самый стабильный сигнал.",
      "🛎️ Заезд": "Расчётный час: заезд с 14:00, выезд до 12:00. Ранний заезд — 1,000 THB при наличии номеров. Поздний выезд до 18:00 — 50% от стоимости ночи. Бесплатно: хранение багажа, душ и комната отдыха для гостей после выезда.",
      "👶 Дети": "Kids Club работает 09:00-17:00 для детей 3-12 лет. Бесплатные мастер-классы, развивающие игры, outdoor активности. Няня — 300 THB/час (бронировать за 2 часа). Детское меню в ресторане. Бесплатно: кроватки, стульчики, радионяни.",
      "🏋️ Фитнес": "Круглосуточный фитнес-зал на первом этаже. Оборудование: беговые дорожки, эллипсы, велотренажёры, свободные веса до 30 кг, йога-коврики. Персональный тренер — 800 THB/час. Бесплатная групповая йога на пляже в 07:00.",
      "💳 Оплата": "Принимаем: Visa, MasterCard, American Express, UnionPay, наличные THB. Доступна оплата криптовалютой: BTC, ETH, USDT. При заезде блокируется депозит 3,000 THB (возвращается при выезде). Обмен валюты на ресепшене.",
      "🐾 Животные": "Размещение с питомцами до 10 кг: 500 THB/ночь. Депозит 3,000 THB. Бесплатно предоставляем: корм премиум-класса, миски, лежанку. Выгул разрешён в саду отеля. В номере вас ждёт welcome-набор для питомца.",
      "🎉 Мероприятия": "Организуем: свадьбы на пляже (до 80 гостей), дни рождения, корпоративы. Банкетный зал до 100 персон. Конференц-зал на 40 мест с проектором и флипчартом. Тимбилдинги на пляже. Индивидуальное меню от шеф-повара.",
      "🏨 Номера": "Категории номеров: Deluxe Sea View (35 м², балкон), Suite (55 м², гостиная), Pool Villa (80 м², приватный бассейн). Все номера с видом на море. В каждом: кондиционер, сейф, мини-бар, капсульная кофемашина, халаты и тапочки.",
      "🌅 Лучшее время": "Лучший сезон в Паттайе — с ноября по апрель: солнечно, море спокойное. Май-октябрь — сезон дождей, но дожди короткие. Закаты красивые круглый год! Рекомендуем бронировать заранее на Новый год и Songkran (апрель).",
      "📍 Расположение": "Отель находится в тихом районе Na Jomtien, в 20 минутах езды от центра Паттайи. Рядом: рынок Na Jomtien, храм Wat Yansangwararam, виноградники Silverlake. До Walking Street — 25 минут на такси."
    },
    fallback: "Я могу подробно рассказать о: завтраке, бассейне, трансфере, спа, шоколадном часе, ресторане, пляже, Wi-Fi, заезде/выезде, детях, фитнесе, оплате, животных, мероприятиях, номерах, лучшем времени для отдыха и расположении отеля. Просто напишите, что вас интересует!",
    send: "Отправить"
  },
  en: {
    title: "Concierge Chat",
    placeholder: "Type your question...",
    greeting: "Hello! I'm the virtual concierge at Mövenpick Siam. I can help with hotel info, services, restaurants, transfers and more. Just ask!",
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
      "приветствие": [
        "Hello! Welcome to Mövenpick Siam. How can I assist you?",
        "Good day! I'm your virtual concierge. What would you like to know?",
        "Greetings! I'm here to help with any questions about the hotel."
      ],
      "как дела": [
        "I'm doing great! Ready to help with anything about the hotel 😊",
        "Wonderful! Especially when I can be useful to our guests. What interests you?",
        "Excellent! Looking forward to your questions about our services."
      ],
      "спасибо": [
        "You're welcome! Feel free to ask if you need anything else.",
        "Happy to help! Enjoy your stay at Mövenpick Siam!",
        "My pleasure! Have a wonderful time at our hotel."
      ],
      "🍽️ Breakfast": "Breakfast at the main restaurant from 06:30 to 10:30. Included in room rate. Grand buffet: European & Asian cuisine, fresh pastries, tropical fruits, Swiss cheeses. À la carte menu available. Continental breakfast from 05:00 for early departures.",
      "🏊 Pool": "Our famous infinity pool overlooking the Gulf of Thailand is open 07:00-21:00. Comfortable 28°C water year-round. Sunbeds, umbrellas, towels — complimentary. Kids area 0.5m depth. Pool bar 11:00-19:00 — cocktails, smoothies, snacks.",
      "🚗 Transfer": "U-Tapao airport transfer (30 min) — 1,200 THB. Bangkok Suvarnabhumi (1.5 hrs) — 2,500 THB. Meet & greet with name sign, cold towels, water. Business class cars and minivans available. Book via Airport Transfer service.",
      "💆 Spa": "Spa center: 10:00-22:00. Thai massage (60 min — 1,200 THB), hot stone (90 min — 1,800 THB), seaweed wrap (60 min — 1,500 THB). Couples treatments available. Book 24h ahead via SPA Relax Package.",
      "🍫 Chocolate Hour": "Legendary Chocolate Hour — Mövenpick's signature! Daily at 16:00 in the lobby. Complimentary: 5 Swiss chocolate types, 8 ice cream flavors, hot chocolate. Live piano music. Come early — popular flavors go fast!",
      "🍷 Restaurant": "Main restaurant: breakfast 06:30-10:30, dinner 18:00-23:00. Beach BBQ: 18:00-22:00 (dry season only). Pool bar: 11:00-21:00. Room service 24/7. Dinner dress code: smart casual. Reservations recommended.",
      "🏖️ Beach": "Private Na Jomtien beach — 2 min walk. 150m soft sand. Complimentary: sunbeds, umbrellas, towels, kayaks, SUP. Paid: jet skis 1,500 THB/hr. Beach service 09:00-18:00. Warm sea all year.",
      "📶 Wi-Fi": "Free high-speed Wi-Fi up to 100 Mbps throughout. Network: 'Movenpick-Guest', password — room number. Business center with computers and printer. Lobby has the strongest signal for video calls.",
      "🛎️ Check-in": "Check-in from 14:00, check-out before 12:00. Early check-in — 1,000 THB subject to availability. Late check-out until 18:00 — 50% of night rate. Free: luggage storage, shower room after check-out.",
      "👶 Kids": "Kids Club 09:00-17:00 for ages 3-12. Free workshops, games, outdoor fun. Nanny — 300 THB/hr (book 2h ahead). Kids menu in restaurant. Complimentary: cribs, high chairs, baby monitors.",
      "🏋️ Gym": "24/7 fitness center on ground floor. Equipment: treadmills, ellipticals, bikes, free weights up to 30 kg, yoga mats. Personal trainer — 800 THB/hr. Free beach yoga at 07:00.",
      "💳 Payment": "We accept: Visa, MasterCard, American Express, UnionPay, cash THB. Crypto: BTC, ETH, USDT. Check-in deposit 3,000 THB (refundable). Currency exchange at reception.",
      "🐾 Pets": "Pets up to 10 kg: 500 THB/night. Deposit 3,000 THB. Complimentary: premium food, bowls, bed. Walking in hotel garden. Welcome pet kit in room.",
      "🎉 Events": "We organize: beach weddings (up to 80 guests), birthdays, corporate events. Banquet hall for 100. Conference room for 40 with projector. Beach team buildings. Custom menu by chef.",
      "🏨 Rooms": "Categories: Deluxe Sea View (35 m², balcony), Suite (55 m², living room), Pool Villa (80 m², private pool). All with sea view. AC, safe, minibar, capsule coffee machine, robes & slippers.",
      "🌅 Best Time": "Best season in Pattaya: November-April — sunny, calm sea. May-October — rainy season with short showers. Sunsets are beautiful year-round! Book early for New Year and Songkran (April).",
      "📍 Location": "Located in quiet Na Jomtien, 20 min from Pattaya center. Nearby: Na Jomtien market, Wat Yansangwararam temple, Silverlake vineyards. Walking Street — 25 min by taxi."
    },
    fallback: "I can tell you about: breakfast, pool, transfer, spa, Chocolate Hour, restaurant, beach, Wi-Fi, check-in/out, kids, gym, payment, pets, events, rooms, best time to visit and location. Just ask!",
    send: "Send"
  },
  th: {
    title: "แชทกับคอนเซียร์จ",
    placeholder: "พิมพ์คำถามของคุณ...",
    greeting: "สวัสดี! ฉันเป็นคอนเซียร์จเสมือนของ Mövenpick Siam ฉันช่วยเรื่องข้อมูลโรงแรม บริการ ร้านอาหาร รถรับส่ง และอื่นๆ ได้ ถามได้เลย!",
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
      "приветствие": [
        "สวัสดี! ยินดีต้อนรับสู่ Mövenpick Siam มีอะไรให้ช่วยไหม?",
        "สวัสดีค่ะ! ฉันเป็นคอนเซียร์จเสมือน สนใจเรื่องอะไรเป็นพิเศษไหม?",
        "ยินดีต้อนรับ! ถามได้ทุกเรื่องเกี่ยวกับโรงแรมเลยค่ะ"
      ],
      "как дела": [
        "สบายดีค่ะ! พร้อมช่วยเหลือคุณทุกเรื่อง 😊",
        "ดีมากเลยค่ะ! โดยเฉพาะเมื่อได้ช่วยแขกผู้เข้าพัก สนใจอะไรไหม?",
        "เยี่ยมเลย! รอคำถามจากคุณอยู่นะคะ"
      ],
      "спасибо": [
        "ยินดีค่ะ! ถ้ามีอะไรเพิ่มเติม ถามได้เลย",
        "ด้วยความยินดี! ขอให้มีความสุขที่ Mövenpick Siam นะคะ!",
        "ไม่เป็นไรค่ะ! สนุกกับการเข้าพักนะคะ"
      ],
      "🍽️ อาหารเช้า": "อาหารเช้าที่ห้องอาหารหลัก 06:30-10:30 น. รวมในราคาห้อง บุฟเฟ่ต์: อาหารยุโรปและเอเชีย ขนมอบสด ผลไม้เมืองร้อน ชีสสวิส มีเมนูตามสั่ง อาหารเช้าแบบคอนติเนนตัลตั้งแต่ 05:00 น. สำหรับผู้ที่ต้องออกเดินทางแต่เช้า",
      "🏊 สระว่ายน้ำ": "สระว่ายน้ำอินฟินิตี้ชื่อดังของเรามองเห็นวิวอ่าวไทย เปิด 07:00-21:00 น. อุณหภูมิน้ำ 28°C ตลอดปี เก้าอี้อาบแดด ร่ม ผ้าเช็ดตัว — ฟรี โซนเด็กลึก 0.5 ม. บาร์ริมสระ 11:00-19:00 น.",
      "🚗 รับส่ง": "รับส่งสนามบินอู่ตะเภา (30 นาที) — 1,200 บาท กรุงเทพฯ สุวรรณภูมิ (1.5 ชม.) — 2,500 บาท จองผ่านบริการ Airport Transfer",
      "💆 สปา": "สปา: 10:00-22:00 น. นวดไทย (60 นาที — 1,200 บาท) นวดหินร้อน (90 นาที — 1,800 บาท) จองล่วงหน้า 24 ชม. ผ่าน SPA Relax Package",
      "🍫 ช็อกโกแลต": "Chocolate Hour ในตำนาน — เอกลักษณ์ของ Mövenpick! ทุกวัน 16:00 น. ที่ล็อบบี้ ฟรี: ช็อกโกแลตสวิส 5 ชนิด ไอศกรีม 8 รส ช็อกโกแลตร้อน ดนตรีเปียโนสด",
      "🍷 ร้านอาหาร": "ห้องอาหารหลัก: เช้า 06:30-10:30 น. เย็น 18:00-23:00 น. บาร์บีคิวชายหาด: 18:00-22:00 น. บาร์สระ: 11:00-21:00 น. รูมเซอร์วิส 24/7",
      "🏖️ ชายหาด": "ชายหาดส่วนตัวนาจอมเทียน — เดิน 2 นาที ยาว 150 ม. ฟรี: เก้าอี้ ร่ม ผ้าเช็ดตัว เรือคายัค แพดเดิลบอร์ด เจ็ตสกี 1,500 บาท/ชม. บริการริมชายหาด 09:00-18:00 น.",
      "📶 Wi-Fi": "Wi-Fi ฟรีความเร็วสูงสุด 100 Mbps ทั่วโรงแรม เครือข่าย: 'Movenpick-Guest' รหัสผ่าน — หมายเลขห้อง",
      "🛎️ เช็คอิน": "เช็คอิน 14:00 น. เช็คเอาท์ 12:00 น. เช็คอินเร็ว — 1,000 บาท เช็คเอาท์สายถึง 18:00 น. — 50% ของค่าห้อง ฝากกระเป๋าฟรี",
      "👶 เด็ก": "คิดส์คลับ 09:00-17:00 น. สำหรับเด็ก 3-12 ปี กิจกรรมฟรี พี่เลี้ยง — 300 บาท/ชม. เมนูเด็ก เปลและเก้าอี้เด็กฟรี",
      "🏋️ ฟิตเนส": "ฟิตเนส 24/7 ชั้นล่าง เทรนเนอร์ส่วนตัว — 800 บาท/ชม. โยคะฟรีที่ชายหาด 07:00 น.",
      "💳 การชำระเงิน": "รับ: Visa, MasterCard, American Express, UnionPay, เงินสดบาท คริปโต: BTC, ETH, USDT เงินประกัน 3,000 บาท",
      "🐾 สัตว์เลี้ยง": "สัตว์เลี้ยงไม่เกิน 10 กก.: 500 บาท/คืน เงินประกัน 3,000 บาท ฟรี: อาหารพรีเมียม ชาม ที่นอน",
      "🎉 งานอีเวนต์": "จัดงานแต่งงานริมทะเล (80 คน) วันเกิด งานบริษัท ห้องจัดเลี้ยง 100 คน ห้องประชุม 40 คน",
      "🏨 ห้องพัก": "ประเภท: ดีลักซ์ Sea View (35 ตร.ม.) สวีท (55 ตร.ม.) พูลวิลล่า (80 ตร.ม.) ทุกห้องวิวทะเล",
      "🌅 เวลาที่ดีที่สุด": "ฤดูที่ดีที่สุดในพัทยา: พฤศจิกายน-เมษายน — แดดดี ทะเลสงบ พฤษภาคม-ตุลาคม — ฤดูฝน แต่ฝนสั้น จองล่วงหน้าสำหรับปีใหม่และสงกรานต์",
      "📍 ที่ตั้ง": "ตั้งอยู่ในนาจอมเทียนที่เงียบสงบ 20 นาทีจากใจกลางพัทยา ใกล้: ตลาดนาจอมเทียน วัดญาณสังวราราม ไร่องุ่นซิลเวอร์เลค"
    },
    fallback: "ฉันบอกข้อมูลเกี่ยวกับ: อาหารเช้า สระว่ายน้ำ รับส่ง สปา ช็อกโกแลต ร้านอาหาร ชายหาด Wi-Fi เช็คอิน/เอาท์ เด็ก ฟิตเนส การชำระเงิน สัตว์เลี้ยง งานอีเวนต์ ห้องพัก เวลาที่ดีที่สุด และที่ตั้ง ถามได้เลย!",
    send: "ส่ง"
  }
}

function ChatBot() {
  const { lang } = useLanguage()
  const c = chatData[lang]
  
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ text: c.greeting, from: 'bot' }])
      }, 300)
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const findAnswer = (text) => {
    const lower = text.toLowerCase().trim()
    
    // Приветствия
    const greetings = {
      ru: ["привет", "здравствуй", "здравствуйте", "добрый день", "доброе утро", "добрый вечер", "хелло", "хеллоу", "hi", "hello", "hey"],
      en: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "greetings", "howdy", "привет", "здравствуйте"],
      th: ["สวัสดี", "หวัดดี", "hi", "hello", "สวัสดีค่ะ", "สวัสดีครับ"]
    }

    const howAreYou = {
      ru: ["как дела", "как ты", "как жизнь", "как настроение", "как поживаешь", "how are you", "чё как"],
      en: ["how are you", "how's it going", "how you doing", "what's up", "how do you do", "how's life"],
      th: ["เป็นไง", "เป็นยังไง", "สบายดีไหม", "how are you"]
    }

    const thanks = {
      ru: ["спасибо", "спс", "благодарю", "отлично", "супер", "красава", "thanks", "thank you", "thx", "мерси"],
      en: ["thanks", "thank you", "thx", "thank", "appreciate", "спасибо", "awesome", "great"],
      th: ["ขอบคุณ", "ขอบใจ", "thanks", "thank you", "thank"]
    }

    const langGreetings = greetings[lang] || greetings.en
    const langHowAreYou = howAreYou[lang] || howAreYou.en
    const langThanks = thanks[lang] || thanks.en

    if (langGreetings.some(w => lower.includes(w))) {
      const arr = c.answers["приветствие"]
      return arr[Math.floor(Math.random() * arr.length)]
    }

    if (langHowAreYou.some(w => lower.includes(w))) {
      const arr = c.answers["как дела"]
      return arr[Math.floor(Math.random() * arr.length)]
    }

    if (langThanks.some(w => lower.includes(w))) {
      const arr = c.answers["спасибо"]
      return arr[Math.floor(Math.random() * arr.length)]
    }

    // Ключевые слова по темам (как и раньше)
    const keywords = {
      ru: {
        "🍽️ Завтрак": ["завтрак", "завтрака", "завтраку", "завтраком", "еда", "поесть", "кушать", "покушать", "утро", "утром", "утренний", "шведский", "буфет", "шведский стол", "трапеза", "завтракать", "накормить", "голоден", "голодный", "хочу есть", "что поесть", "где еда"],
        "🏊 Бассейн": ["бассейн", "бассейна", "бассейну", "бассейном", "плавать", "поплавать", "купаться", "искупаться", "купание", "вода", "водный", "глубина", "шезлонг", "полотенце", "поплавать", "пруд", "заплыв"],
        "🚗 Трансфер": ["трансфер", "трансфера", "такси", "аэропорт", "аэропорта", "аэропорту", "дорога", "доехать", "добраться", "машина", "автомобиль", "утапао", "банкгок", "банкок", "суварнабхуми", "приехать", "уехать", "встреча", "встретить", "встречают"],
        "💆 Спа": ["спа", "массаж", "массажа", "процедуры", "процедура", "расслабление", "расслабиться", "сауна", "хаммам", "камни", "горячий камень", "обертывание", "ароматерапия", "косметолог", "уход", "массажист"],
        "🍫 Шоколадный час": ["шоколад", "шоколада", "мороженое", "мороженого", "chocolate", "десерт", "сладкое", "сладости", "лакомство", "шоколадный час", "какао", "горячий шоколад", "шоколадный фонтан", "сладкий"],
        "🍷 Ресторан": ["ресторан", "ресторана", "ужин", "ужина", "обед", "обеда", "поесть", "бар", "бара", "меню", "рум-сервис", "рум сервис", "доставка", "доставку", "заказ", "заказать", "столик", "бронь", "бронировать", "кухня", "шеф", "повар"],
        "🏖️ Пляж": ["пляж", "пляжа", "море", "моря", "берег", "берега", "песок", "песка", "каяк", "каяки", "сапборд", "сап", "гидроцикл", "гидроциклы", "загар", "загорать", "пляжный", "купаться в море", "морской"],
        "📶 Wi-Fi": ["wi-fi", "wifi", "интернет", "интернета", "вайфай", "вайфая", "сеть", "сети", "подключение", "подключиться", "пароль", "роутер", "сигнал", "мбит", "скорость интернета"],
        "🛎️ Заезд": ["заезд", "выезд", "выезда", "заселение", "заселиться", "выселиться", "часы", "поздно", "поздний", "рано", "ранний", "багаж", "чемодан", "чемоданы", "вещи", "оставить вещи", "камера хранения"],
        "👶 Дети": ["дети", "ребёнок", "ребенок", "ребёнка", "ребенка", "детский", "детская", "няня", "няни", "малыш", "дитя", "детвора", "детсад", "аниматор", "воспитатель"],
        "🏋️ Фитнес": ["фитнес", "тренажёр", "тренажер", "спорт", "спорта", "гим", "тренировка", "тренироваться", "зал", "качалка", "йога", "йогой", "позаниматься", "упражнения", "гантели", "штанга", "беговая дорожка"],
        "💳 Оплата": ["оплата", "оплатить", "заплатить", "карта", "картой", "деньги", "денег", "валюта", "валюты", "крипто", "криптовалюта", "биткоин", "btc", "eth", "usdt", "депозит", "обмен", "обменять", "банкомат", "терминал"],
        "🐾 Животные": ["животные", "животное", "собака", "собаку", "кошка", "кошку", "питомец", "питомца", "звери", "пёс", "пес", "кот", "питомцы", "с собой животное", "можно с собакой"],
        "🎉 Мероприятия": ["свадьба", "свадьбу", "день рождения", "дня рождения", "др", "корпоратив", "банкет", "конференц", "конференция", "праздник", "праздника", "вечеринка", "вечеринку", "тимбилдинг", "event", "ивент"],
        "🏨 Номера": ["номер", "номера", "комната", "комнаты", "категория", "категории", "suite", "deluxe", "villa", "вилла", "балкон", "терраса", "кровать", "удобства", "минибар", "сейф", "халат"],
        "🌅 Лучшее время": ["сезон", "погода", "лучшее время", "когда ехать", "когда лучше", "период", "месяц", "новый год", "songkran", "сонгкран", "дожди", "солнечно"],
        "📍 Расположение": ["где находится", "расположение", "адрес", "локация", "где отель", "как найти", "местоположение", "рядом", "поблизости", "район", "na jomtien", "джомтьен", "джомтьен", "паттайя"]
      },
      en: {
        "🍽️ Breakfast": ["breakfast", "food", "eat", "eating", "morning", "meal", "dining", "buffet", "hungry", "starving", "feed", "breakfast time"],
        "🏊 Pool": ["pool", "swim", "swimming", "water", "dip", "sunbed", "towel", "depth", "swimwear", "bathing"],
        "🚗 Transfer": ["transfer", "taxi", "airport", "drive", "car", "transport", "transportation", "utapao", "bangkok", "suvarnabhumi", "pickup", "pick up", "ride", "driver", "arrival"],
        "💆 Spa": ["spa", "massage", "treatment", "relax", "sauna", "wellness", "hot stone", "wrap", "aromatherapy", "facial", "therapist"],
        "🍫 Chocolate Hour": ["chocolate", "ice cream", "dessert", "sweet", "chocolate hour", "cocoa", "treat", "confectionery"],
        "🍷 Restaurant": ["restaurant", "dinner", "lunch", "bar", "menu", "food", "room service", "order", "table", "reservation", "chef", "cuisine", "dining"],
        "🏖️ Beach": ["beach", "sea", "ocean", "sand", "shore", "coast", "kayak", "jet ski", "sunbathe", "tan", "beachfront"],
        "📶 Wi-Fi": ["wi-fi", "wifi", "internet", "connection", "network", "password", "signal", "mbps", "online"],
        "🛎️ Check-in": ["check-in", "checkout", "check-out", "late", "early", "luggage", "baggage", "bags", "storage", "check in time"],
        "👶 Kids": ["kids", "child", "children", "baby", "nanny", "family", "crib", "toddler", "young", "babysit"],
        "🏋️ Gym": ["gym", "fitness", "workout", "exercise", "training", "sport", "yoga", "treadmill", "weights", "trainer", "cardio"],
        "💳 Payment": ["payment", "pay", "card", "cash", "money", "currency", "crypto", "deposit", "bitcoin", "btc", "eth", "usdt", "atm", "exchange"],
        "🐾 Pets": ["pet", "dog", "cat", "animal", "puppy", "kitty", "furry", "pet friendly"],
        "🎉 Events": ["wedding", "birthday", "corporate", "party", "conference", "event", "banquet", "celebration", "team building"],
        "🏨 Rooms": ["room", "suite", "deluxe", "villa", "category", "balcony", "terrace", "bed", "amenities", "minibar", "safe", "robe", "view"],
        "🌅 Best Time": ["season", "weather", "best time", "when to go", "when to visit", "month", "new year", "songkran", "rainy", "sunny", "climate"],
        "📍 Location": ["location", "where", "address", "situated", "nearby", "close", "area", "na jomtien", "pattaya", "distance", "far"]
      },
      th: {
        "🍽️ อาหารเช้า": ["อาหารเช้า", "กิน", "เช้า", "มื้อ", "บุฟเฟ่ต์", "หิว", "อยากกิน", "อาหาร", "มื้อเช้า", " breakfast "],
        "🏊 สระว่ายน้ำ": ["สระ", "ว่ายน้ำ", "น้ำ", "ว่าย", "ที่นอน", "ผ้าเช็ดตัว", "สระว่าย", " pool "],
        "🚗 รับส่ง": ["รับส่ง", "แท็กซี่", "สนามบิน", "รถ", "เดินทาง", "อู่ตะเภา", "กรุงเทพ", "สุวรรณภูมิ", "รถรับ", " transfer "],
        "💆 สปา": ["สปา", "นวด", "ผ่อนคลาย", "ซาวน่า", "หินร้อน", "ทรีตเมนต์", " spa "],
        "🍫 ช็อกโกแลต": ["ช็อกโกแลต", "ไอศกรีม", "ขนม", "หวาน", "chocolate", "ของหวาน"],
        "🍷 ร้านอาหาร": ["ร้านอาหาร", "อาหาร", "เย็น", "กลางวัน", "บาร์", "รูมเซอร์วิส", " restaurant ", "อาหารค่ำ"],
        "🏖️ ชายหาด": ["ชายหาด", "ทะเล", "หาด", "ทราย", "เรือคายัค", "เจ็ตสกี", " beach "],
        "📶 Wi-Fi": ["wi-fi", "wifi", "อินเทอร์เน็ต", "เน็ต", "สัญญาณ", " wifi "],
        "🛎️ เช็คอิน": ["เช็คอิน", "เช็คเอาท์", "เวลา", "สาย", "เร็ว", "กระเป๋า", " check in", "check out"],
        "👶 เด็ก": ["เด็ก", "ลูก", "ครอบครัว", "พี่เลี้ยง", "เด็กน้อย", " kid"],
        "🏋️ ฟิตเนส": ["ฟิตเนส", "ออกกำลังกาย", "กีฬา", "เทรน", "โยคะ", " gym "],
        "💳 การชำระเงิน": ["จ่าย", "เงิน", "บัตร", "คริปโต", "สกุลเงิน", "บิตคอยน์", " payment"],
        "🐾 สัตว์เลี้ยง": ["สัตว์", "หมา", "แมว", "สัตว์เลี้ยง", " pet"],
        "🎉 งานอีเวนต์": ["แต่งงาน", "วันเกิด", "ประชุม", "ปาร์ตี้", "งานเลี้ยง", " event"],
        "🏨 ห้องพัก": ["ห้อง", "ห้องพัก", "ดีลักซ์", "สวีท", "วิลล่า", "ระเบียง", " room"],
        "🌅 เวลาที่ดีที่สุด": ["ฤดู", "อากาศ", "เวลาที่ดี", "ไปเมื่อไหร่", "ปีใหม่", "สงกรานต์", "ฝน", " weather"],
        "📍 ที่ตั้ง": ["ที่ตั้ง", "อยู่ที่ไหน", "地址", "ใกล้", "นาจอมเทียน", "พัทยา", " location"]
      }
    }

    const langKeywords = keywords[lang] || keywords.en
    
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
    }, 600 + Math.random() * 800)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-40 bg-[#8C7343] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#7A6338] hover:scale-110 transition-all duration-300"
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