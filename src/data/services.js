import bbqImg from '../assets/images/bbq.jpg'
import spaImg from '../assets/images/spa.jpg'
import transferImg from '../assets/images/transfer.jpg'
import kidsImg from '../assets/images/kids.jpg'
import romanticImg from '../assets/images/romantic.jpg'
import tourImg from '../assets/images/tour.jpg'

const services = [
  {
    id: 1,
    title: {
      ru: "BBQ Dinner by the Sea",
      en: "BBQ Dinner by the Sea",
      th: "บาร์บีคิวดินเนอร์ริมทะเล"
    },
    category: "Dining",
    description: {
      ru: "Премиум BBQ-ужин у моря со свежими морепродуктами и закатной атмосферой.",
      en: "Premium BBQ dinner by the sea with fresh seafood and sunset atmosphere.",
      th: "พรีเมียมบาร์บีคิวดินเนอร์ริมทะเลพร้อมอาหารทะเลสดและบรรยากาศพระอาทิตย์ตก"
    },
    price: "1,500 THB",
    time: "18:00 – 22:00",
    format: "Ужин",
    image: bbqImg,
    available: true
  },
  {
    id: 2,
    title: {
      ru: "SPA Relax Package",
      en: "SPA Relax Package",
      th: "แพ็กเกจสปาผ่อนคลาย"
    },
    category: "Wellness",
    description: {
      ru: "Полный спа-ритуал: массаж, ароматерапия и травяная сауна для полного расслабления.",
      en: "Complete spa ritual: massage, aromatherapy and herbal sauna for total relaxation.",
      th: "พิธีกรรมสปาเต็มรูปแบบ: นวด อโรมาเธอราพี และซาวน่าสมุนไพรเพื่อการผ่อนคลายอย่างเต็มที่"
    },
    price: "2,400 THB",
    time: "60 / 90 мин",
    format: "Процедура",
    image: spaImg,
    available: true
  },
  {
    id: 3,
    title: {
      ru: "Airport Transfer",
      en: "Airport Transfer",
      th: "บริการรับส่งสนามบิน"
    },
    category: "Transport",
    description: {
      ru: "Индивидуальный трансфер на премиум-автомобиле с водителем. Встреча с табличкой.",
      en: "Private transfer in a premium car with driver. Meet and greet with name sign.",
      th: "บริการรับส่งส่วนตัวด้วยรถพรีเมียมพร้อมคนขับ รับรองด้วยป้ายชื่อ"
    },
    price: "1,200 THB",
    time: "По запросу",
    format: "Трансфер",
    image: transferImg,
    available: true
  },
  {
    id: 4,
    title: {
      ru: "Kids Club Activities",
      en: "Kids Club Activities",
      th: "กิจกรรมคิดส์คลับ"
    },
    category: "Family",
    description: {
      ru: "Развивающие игры, творческие мастер-классы и прогулки для детей под присмотром.",
      en: "Educational games, creative workshops and supervised outdoor activities for children.",
      th: "เกมการศึกษา เวิร์กช็อปสร้างสรรค์ และกิจกรรมกลางแจ้งที่มีผู้ดูแลสำหรับเด็ก"
    },
    price: "800 THB",
    time: "09:00 – 17:00",
    format: "День",
    image: kidsImg,
    available: true
  },
  {
    id: 5,
    title: {
      ru: "Romantic Dinner",
      en: "Romantic Dinner",
      th: "ดินเนอร์สุดโรแมนติก"
    },
    category: "Dining",
    description: {
      ru: "Ужин при свечах на пляже с персональным официантом и живой музыкой.",
      en: "Candlelit dinner on the beach with a personal waiter and live music.",
      th: "ดินเนอร์ใต้แสงเทียนบนชายหาดพร้อมบริกรส่วนตัวและดนตรีสด"
    },
    price: "3,200 THB",
    time: "19:00 – 23:00",
    format: "Ужин",
    image: romanticImg,
    available: true
  },
  {
    id: 6,
    title: {
      ru: "Local Tour Experience",
      en: "Local Tour Experience",
      th: "ประสบการณ์ทัวร์ท้องถิ่น"
    },
    category: "Experience",
    description: {
      ru: "Индивидуальная экскурсия по Паттайе с местным гидом: храмы, рынки, секретные места.",
      en: "Private tour of Pattaya with a local guide: temples, markets, secret spots.",
      th: "ทัวร์ส่วนตัวในพัทยาพร้อมไกด์ท้องถิ่น: วัด ตลาด สถานที่ลับ"
    },
    price: "1,800 THB",
    time: "4 / 6 / 8 часов",
    format: "Экскурсия",
    image: tourImg,
    available: true
  }
]

export default services