import bbqImg from '../assets/images/bbq.jpg'
import spaImg from '../assets/images/spa.jpg'
import transferImg from '../assets/images/transfer.jpg'
import kidsImg from '../assets/images/kids.jpg'
import romanticImg from '../assets/images/romantic.jpg'
import tourImg from '../assets/images/tour.jpg'

const services = [
  {
    id: 1,
    title: "BBQ Dinner by the Sea",
    category: "Dining",
    description: "Премиум BBQ-ужин у моря со свежими морепродуктами и закатной атмосферой.",
    price: "1,500 THB",
    time: "18:00 – 22:00",
    format: "Ужин",
    image: bbqImg,
    available: true
  },
  {
    id: 2,
    title: "SPA Relax Package",
    category: "Wellness",
    description: "Полный спа-ритуал: массаж, ароматерапия и травяная сауна.",
    price: "2,400 THB",
    time: "60 / 90 мин",
    format: "Процедура",
    image: spaImg,
    available: true
  },
  {
    id: 3,
    title: "Airport Transfer",
    category: "Transport",
    description: "Индивидуальный трансфер на премиум-автомобиле с водителем.",
    price: "1,200 THB",
    time: "По запросу",
    format: "Трансфер",
    image: transferImg,
    available: true
  },
  {
    id: 4,
    title: "Kids Club Activities",
    category: "Family",
    description: "Развивающие игры, творческие мастер-классы и прогулки для детей.",
    price: "800 THB",
    time: "09:00 – 17:00",
    format: "День",
    image: kidsImg,
    available: true
  },
  {
    id: 5,
    title: "Romantic Dinner",
    category: "Dining",
    description: "Ужин при свечах на пляже с персональным официантом и живой музыкой.",
    price: "3,200 THB",
    time: "19:00 – 23:00",
    format: "Ужин",
    image: romanticImg,
    available: true
  },
  {
    id: 6,
    title: "Local Tour Experience",
    category: "Experience",
    description: "Индивидуальная экскурсия по Паттайе с местным гидом.",
    price: "1,800 THB",
    time: "4 / 6 / 8 часов",
    format: "Экскурсия",
    image: tourImg,
    available: true
  }
]

export default services