// src/components/ChatBot.jsx

import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const chatData = {
  ru: {
    title: "Чат с консьержем",
    placeholder: "Напишите ваш вопрос...",
    greeting: "Здравствуйте! Я виртуальный консьерж Mövenpick Siam. Чем могу помочь?",
    questions: [
      "Завтрак",
      "Бассейн",
      "Трансфер",
      "Спа",
      "Шоколадный час",
      "Ресторан",
      "Пляж",
      "Wi-Fi"
    ],
    answers: {
      "Завтрак": "Завтрак подаётся в ресторане отеля с 06:30 до 10:30. Для гостей доступен шведский стол и меню à la carte.",
      "Бассейн": "Бассейн-инфинити работает с 07:00 до 21:00. Полотенца и шезлонги предоставляются бесплатно. Есть детская зона.",
      "Трансфер": "Трансфер из аэропорта Утапао (30 мин) — 1,200 THB. Из Бангкока (1.5 часа) — 2,500 THB. Заказать можно на стойке регистрации или в услуге Airport Transfer.",
      "Спа": "Спа-центр работает с 10:00 до 22:00. Доступны: тайский массаж, ароматерапия, обертывания, хаммам. Рекомендуем бронировать через услугу SPA Relax Package.",
      "Шоколадный час": "Chocolate Hour проходит ежедневно в 16:00 в лобби отеля. Бесплатно для всех гостей: фирменный швейцарский шоколад и мороженое Mövenpick.",
      "Ресторан": "В отеле два ресторана: основной с европейской и тайской кухней, и BBQ у моря. Также есть бар у бассейна. Рум-сервис доступен 24/7.",
      "Пляж": "Собственный приватный пляж отеля находится в 2 минутах ходьбы. Шезлонги, зонтики и полотенца — бесплатно. Доступен пляжный сервис.",
      "Wi-Fi": "Бесплатный высокоскоростной Wi-Fi доступен на всей территории отеля: в номерах, лобби, ресторанах и у бассейна.",
      "Заезд": "Заезд с 14:00, выезд до 12:00. Ранний заезд и поздний выезд — по запросу и при наличии номеров.",
      "Дети": "Детский клуб работает с 09:00 до 17:00. Для детей до 12 лет — бесплатно. Доступны няни, аниматоры и мастер-классы.",
      "Фитнес": "Тренажёрный зал открыт 24/7. Кардиозона, свободные веса, йога-зона. Персональные тренировки — по записи.",
      "Оплата": "Принимаем карты Visa, MasterCard, American Express, а также наличные THB. Возможна оплата криптовалютой.",
      "Животные": "Размещение с животными возможно в отдельных номерах. Депозит — 3,000 THB. Корм и лежанка предоставляются."
    },
    fallback: "Я могу ответить на вопросы о: завтраке, бассейне, трансфере, спа, шоколадном часе, ресторане, пляже, Wi-Fi, заезде/выезде, детях, фитнесе, оплате и животных. Выберите тему или напишите ваш вопрос.",
    send: "Отправить"
  },
  en: {
    title: "Concierge Chat",
    placeholder: "Type your question...",
    greeting: "Hello! I'm the virtual concierge at Mövenpick Siam. How can I help you?",
    questions: [
      "Breakfast",
      "Pool",
      "Transfer",
      "Spa",
      "Chocolate Hour",
      "Restaurant",
      "Beach",
      "Wi-Fi"
    ],
    answers: {
      "Breakfast": "Breakfast is served at the hotel restaurant from 06:30 to 10:30. Buffet and à la carte menu available.",
      "Pool": "Infinity pool is open from 07:00 to 21:00. Towels and sunbeds are complimentary. Kids area available.",
      "Transfer": "Airport transfer from U-Tapao (30 min) — 1,200 THB. From Bangkok (1.5 hrs) — 2,500 THB. Book at front desk or via Airport Transfer service.",
      "Spa": "Spa center is open from 10:00 to 22:00. Available: Thai massage, aromatherapy, body wraps, hammam. Book via SPA Relax Package service.",
      "Chocolate Hour": "Chocolate Hour is held daily at 16:00 in the hotel lobby. Free for all guests: Swiss chocolate and Mövenpick ice cream.",
      "Restaurant": "Two restaurants: main with European & Thai cuisine, and beach BBQ. Pool bar also available. Room service 24/7.",
      "Beach": "Private hotel beach is a 2-minute walk. Sunbeds, umbrellas and towels — complimentary. Beach service available.",
      "Wi-Fi": "Free high-speed Wi-Fi is available throughout the hotel: rooms, lobby, restaurants and pool area.",
      "Check-in": "Check-in from 14:00, check-out until 12:00. Early check-in and late check-out — upon request and availability.",
      "Kids": "Kids Club is open from 09:00 to 17:00. Free for children under 12. Nannies, animators and workshops available.",
      "Gym": "Fitness center is open 24/7. Cardio zone, free weights, yoga area. Personal training — by appointment.",
      "Payment": "We accept Visa, MasterCard, American Express, and cash THB. Cryptocurrency payments available.",
      "Pets": "Pet-friendly rooms available. Deposit — 3,000 THB. Food and bed provided."
    },
    fallback: "I can answer questions about: breakfast, pool, transfer, spa, Chocolate Hour, restaurant, beach, Wi-Fi, check-in/out, kids, gym, payment and pets. Select a topic or type your question.",
    send: "Send"
  },
  th: {
    title: "แชทกับคอนเซียร์จ",
    placeholder: "พิมพ์คำถามของคุณ...",
    greeting: "สวัสดี! ฉันเป็นคอนเซียร์จเสมือนของ Mövenpick Siam มีอะไรให้ช่วยไหม?",
    questions: [
      "อาหารเช้า",
      "สระว่ายน้ำ",
      "รับส่ง",
      "สปา",
      "ช็อกโกแลตชั่วโมง",
      "ร้านอาหาร",
      "ชายหาด",
      "Wi-Fi"
    ],
    answers: {
      "อาหารเช้า": "อาหารเช้าให้บริการที่ห้องอาหารตั้งแต่ 06:30 น. ถึง 10:30 น. มีบุฟเฟ่ต์และเมนูตามสั่ง",
      "สระว่ายน้ำ": "สระว่ายน้ำอินฟินิตี้เปิดตั้งแต่ 07:00 น. ถึง 21:00 น. มีผ้าเช็ดตัวและเก้าอี้อาบแดดฟรี มีโซนเด็ก",
      "รับส่ง": "บริการรับส่งจากสนามบินอู่ตะเภา (30 นาที) — 1,200 บาท จากกรุงเทพฯ (1.5 ชม.) — 2,500 บาท สั่งได้ที่ฟร้อนท์หรือผ่านบริการ Airport Transfer",
      "สปา": "สปาเปิดตั้งแต่ 10:00 น. ถึง 22:00 น. มีบริการ: นวดไทย อโรมาเธอราพี พอกตัว ฮัมมัม จองผ่านบริการ SPA Relax Package",
      "ช็อกโกแลตชั่วโมง": "Chocolate Hour จัดทุกวันเวลา 16:00 น. ที่ล็อบบี้ ฟรีสำหรับแขกทุกท่าน: ช็อกโกแลตสวิสและไอศกรีม Mövenpick",
      "ร้านอาหาร": "มีร้านอาหารสองแห่ง: ร้านหลักอาหารยุโรปและไทย และบาร์บีคิวริมทะเล มีบาร์ริมสระว่ายน้ำ บริการรูมเซอร์วิส 24/7",
      "ชายหาด": "ชายหาดส่วนตัวของโรงแรมเดิน 2 นาที เก้าอี้อาบแดด ร่ม และผ้าเช็ดตัว — ฟรี มีบริการริมชายหาด",
      "Wi-Fi": "Wi-Fi ความเร็วสูงฟรีทั่วโรงแรม: ห้องพัก ล็อบบี้ ร้านอาหาร และบริเวณสระว่ายน้ำ",
      "เช็คอิน": "เช็คอินตั้งแต่ 14:00 น. เช็คเอาท์ก่อน 12:00 น. เช็คอินเร็วและเช็คเอาท์ช้า — ตามคำขอและความพร้อม",
      "เด็ก": "คิดส์คลับเปิดตั้งแต่ 09:00 น. ถึง 17:00 น. ฟรีสำหรับเด็กอายุต่ำกว่า 12 ปี มีพี่เลี้ยงและกิจกรรม",
      "ฟิตเนส": "ฟิตเนสเปิด 24/7 โซนคาร์ดิโอ เวทฟรี โยคะ เทรนเนอร์ส่วนตัว — ตามนัดหมาย",
      "การชำระเงิน": "รับ Visa, MasterCard, American Express และเงินสดบาท มีการชำระด้วยคริปโต",
      "สัตว์เลี้ยง": "มีห้องสำหรับสัตว์เลี้ยง เงินประกัน — 3,000 บาท มีอาหารและที่นอนให้"
    },
    fallback: "ฉันตอบคำถามเกี่ยวกับ: อาหารเช้า สระว่ายน้ำ รับส่ง สปา ช็อกโกแลตชั่วโมง ร้านอาหาร ชายหาด Wi-Fi เช็คอิน/เอาท์ เด็ก ฟิตเนส การชำระเงิน และสัตว์เลี้ยง เลือกหัวข้อหรือพิมพ์คำถามของคุณ",
    send: "ส่ง"
  }
}

function ChatBot() {
  const { t, lang } = useLanguage()
  const c = chatData[lang]
  
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ text: c.greeting, from: 'bot' }])
  const [input, setInput] = useState('')

  const findAnswer = (text) => {
    const lower = text.toLowerCase()
    
    const keywords = {
      ru: {
        "Завтрак": ["завтрак", "завтрака", "еда", "поесть", "кушать", "утро", "утром"],
        "Бассейн": ["бассейн", "бассейна", "плавать", "купаться", "вода"],
        "Трансфер": ["трансфер", "такси", "аэропорт", "дорога", "доехать", "машина"],
        "Спа": ["спа", "массаж", "процедуры", "расслабление", "сауна"],
        "Шоколадный час": ["шоколад", "мороженое", "chocolate", "десерт", "сладкое"],
        "Ресторан": ["ресторан", "ужин", "обед", "поесть", "бар", "меню"],
        "Пляж": ["пляж", "море", "пляжа", "берег", "песок"],
        "Wi-Fi": ["wi-fi", "wifi", "интернет", "вайфай", "сеть"],
        "Заезд": ["заезд", "выезд", "время", "часы", "поздно", "рано"],
        "Дети": ["дети", "ребёнок", "детский", "ребенка", "няня"],
        "Фитнес": ["фитнес", "тренажёр", "спорт", "гим", "тренировка", "зал"],
        "Оплата": ["оплата", "карта", "деньги", "валюта", "заплатить", "крипто"],
        "Животные": ["животные", "собака", "кошка", "питомец", "звери"]
      },
      en: {
        "Breakfast": ["breakfast", "food", "eat", "morning", "meal", "dining"],
        "Pool": ["pool", "swim", "swimming", "water", "dip"],
        "Transfer": ["transfer", "taxi", "airport", "drive", "car", "transport"],
        "Spa": ["spa", "massage", "treatment", "relax", "sauna", "wellness"],
        "Chocolate Hour": ["chocolate", "ice cream", "dessert", "sweet", "chocolate hour"],
        "Restaurant": ["restaurant", "dinner", "lunch", "bar", "menu", "food"],
        "Beach": ["beach", "sea", "ocean", "sand", "shore", "coast"],
        "Wi-Fi": ["wi-fi", "wifi", "internet", "connection", "network"],
        "Check-in": ["check-in", "checkout", "check-out", "late", "early", "time"],
        "Kids": ["kids", "child", "children", "baby", "nanny", "family"],
        "Gym": ["gym", "fitness", "workout", "exercise", "training", "sport"],
        "Payment": ["payment", "pay", "card", "cash", "money", "currency", "crypto"],
        "Pets": ["pet", "dog", "cat", "animal"]
      },
      th: {
        "อาหารเช้า": ["อาหารเช้า", "กิน", "เช้า", "มื้อ"],
        "สระว่ายน้ำ": ["สระ", "ว่ายน้ำ", "น้ำ", "ว่าย"],
        "รับส่ง": ["รับส่ง", "แท็กซี่", "สนามบิน", "รถ", "เดินทาง"],
        "สปา": ["สปา", "นวด", "ผ่อนคลาย", "ซาวน่า"],
        "ช็อกโกแลตชั่วโมง": ["ช็อกโกแลต", "ไอศกรีม", "ขนม", "หวาน"],
        "ร้านอาหาร": ["ร้านอาหาร", "อาหาร", "เย็น", "กลางวัน", "บาร์"],
        "ชายหาด": ["ชายหาด", "ทะเล", "หาด", "ทราย"],
        "Wi-Fi": ["wi-fi", "wifi", "อินเทอร์เน็ต", "เน็ต"],
        "เช็คอิน": ["เช็คอิน", "เช็คเอาท์", "เวลา", "สาย", "เร็ว"],
        "เด็ก": ["เด็ก", "ลูก", "ครอบครัว", "พี่เลี้ยง"],
        "ฟิตเนส": ["ฟิตเนส", "ออกกำลังกาย", "กีฬา", "เทรน"],
        "การชำระเงิน": ["จ่าย", "เงิน", "บัตร", "คริปโต", "สกุลเงิน"],
        "สัตว์เลี้ยง": ["สัตว์", "หมา", "แมว", "สัตว์เลี้ยง"]
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

    const answer = findAnswer(msg) || c.fallback
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: answer, from: 'bot' }])
    }, 500)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-40 bg-[#8C7343] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#7A6338] transition-all duration-300"
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
        <div className="fixed bottom-24 left-8 z-40 w-80 bg-white border border-[#E5E0D8] shadow-xl">
          <div className="bg-[#8C7343] text-white px-4 py-3">
            <h3 className="text-sm font-medium tracking-wide">{c.title}</h3>
          </div>

          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 text-sm ${
                  msg.from === 'user'
                    ? 'bg-[#8C7343] text-white'
                    : 'bg-[#F5F2ED] text-[#2E2E2E]'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {c.questions.map(q => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs px-2.5 py-1.5 bg-[#F5F2ED] text-[#6B6B6B] hover:bg-[#E5E0D8] transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="border-t border-[#E5E0D8] p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={c.placeholder}
              className="flex-1 text-sm border border-[#E5E0D8] px-3 py-2 focus:outline-none focus:border-[#8C7343] bg-[#F5F2ED]"
            />
            <button
              onClick={() => handleSend()}
              className="bg-[#8C7343] text-white px-3 py-2 text-sm hover:bg-[#7A6338] transition-colors"
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