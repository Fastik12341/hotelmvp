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
      "Шоколадный час"
    ],
    answers: {
      "Завтрак": "Завтрак подаётся в ресторане отеля с 06:30 до 10:30. Для гостей доступен шведский стол и меню à la carte.",
      "Бассейн": "Бассейн-инфинити работает с 07:00 до 21:00. Полотенца и шезлонги предоставляются бесплатно.",
      "Трансфер": "Трансфер из аэропорта Утапао (30 мин) — 1,200 THB. Из Бангкока (1.5 часа) — 2,500 THB. Заказать можно на стойке регистрации.",
      "Спа": "Спа-центр работает с 10:00 до 22:00. Доступны массаж, обертывания, хаммам. Рекомендуем бронировать заранее.",
      "Шоколадный час": "Chocolate Hour проходит ежедневно в 16:00 в лобби. Бесплатно для всех гостей: шоколад и мороженое Mövenpick."
    },
    notFound: "Пожалуйста, обратитесь на стойку регистрации. Я передам ваш вопрос консьержу.",
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
      "Chocolate Hour"
    ],
    answers: {
      "Breakfast": "Breakfast is served at the hotel restaurant from 06:30 to 10:30. Buffet and à la carte menu available.",
      "Pool": "Infinity pool is open from 07:00 to 21:00. Towels and sunbeds are complimentary.",
      "Transfer": "Airport transfer from U-Tapao (30 min) — 1,200 THB. From Bangkok (1.5 hrs) — 2,500 THB. Order at the front desk.",
      "Spa": "Spa center is open from 10:00 to 22:00. Massage, body wraps, hammam available. Advance booking recommended.",
      "Chocolate Hour": "Chocolate Hour is held daily at 16:00 in the lobby. Free for all guests: Mövenpick chocolate and ice cream."
    },
    notFound: "Please contact the front desk. I'll forward your question to the concierge.",
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
      "ช็อกโกแลตชั่วโมง"
    ],
    answers: {
      "อาหารเช้า": "อาหารเช้าให้บริการที่ห้องอาหารของโรงแรมตั้งแต่ 06:30 น. ถึง 10:30 น. มีบุฟเฟ่ต์และเมนูตามสั่ง",
      "สระว่ายน้ำ": "สระว่ายน้ำอินฟินิตี้เปิดตั้งแต่ 07:00 น. ถึง 21:00 น. มีผ้าเช็ดตัวและเก้าอี้อาบแดดฟรี",
      "รับส่ง": "บริการรับส่งจากสนามบินอู่ตะเภา (30 นาที) — 1,200 บาท จากกรุงเทพฯ (1.5 ชม.) — 2,500 บาท สั่งได้ที่ฟร้อนท์",
      "สปา": "สปาเปิดตั้งแต่ 10:00 น. ถึง 22:00 น. มีบริการนวด พอกตัว ฮัมมัม แนะนำให้จองล่วงหน้า",
      "ช็อกโกแลตชั่วโมง": "Chocolate Hour จัดทุกวันเวลา 16:00 น. ที่ล็อบบี้ ฟรีสำหรับแขกทุกท่าน: ช็อกโกแลตและไอศกรีม Mövenpick"
    },
    notFound: "กรุณาติดต่อฟร้อนท์ ฉันจะส่งคำถามของคุณให้คอนเซียร์จ",
    send: "ส่ง"
  }
}

function ChatBot() {
  const { t, lang } = useLanguage()
  const c = chatData[lang]
  
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ text: c.greeting, from: 'bot' }])
  const [input, setInput] = useState('')

  const handleSend = (text) => {
    const msg = text || input
    if (!msg.trim()) return

    setMessages(prev => [...prev, { text: msg, from: 'user' }])
    setInput('')

    const answer = c.answers[msg] || c.notFound
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: answer, from: 'bot' }])
    }, 500)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      {/* Кнопка открытия */}
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

      {/* Окно чата */}
      {isOpen && (
        <div className="fixed bottom-24 left-8 z-40 w-80 bg-white border border-[#E5E0D8] shadow-xl">
          {/* Заголовок */}
          <div className="bg-[#8C7343] text-white px-4 py-3">
            <h3 className="text-sm font-medium tracking-wide">{c.title}</h3>
          </div>

          {/* Сообщения */}
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

          {/* Быстрые вопросы */}
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

          {/* Ввод */}
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