// src/data/reviews.js

const reviews = [
  {
    id: 1,
    name: "Анна и Сергей",
    country: "Россия, Москва",
    rating: 5,
    text: "Один из лучших отелей в Паттайе! Закат с террасы номера — просто незабываемо. Mövenpick Siam Na Jomtien превзошёл все ожидания. Шоколадный час каждый день радовал всю семью. Мороженое — выше всех похвал!",
    date: "Февраль 2025",
    room: "Skyline Suite"
  },
  {
    id: 2,
    name: "Michael & Sarah",
    country: "United Kingdom",
    rating: 5,
    text: "Mövenpick Siam Na Jomtien is exceptional! The SPA package was divine — Thai massage with sea view is unforgettable. Best BBQ dinner we've ever had right on their private beach. Staff knew our names by day two.",
    date: "Январь 2025",
    room: "Ocean View Deluxe"
  },
  {
    id: 3,
    name: "Дмитрий К.",
    country: "Россия, Санкт-Петербург",
    rating: 5,
    text: "Трансфер из аэропорта встретили с табличкой Mövenpick, холодным полотенцем и водой. Ребёнок в восторге от Kids Club в Na Jomtien. Обязательно вернёмся именно в этот отель. До центра Паттайи 20 минут на такси.",
    date: "Март 2025",
    room: "Family Suite"
  },
  {
    id: 4,
    name: "Lisa & Tom",
    country: "Australia",
    rating: 4,
    text: "Mövenpick Na Jomtien is beautiful — right on the beach, away from busy Pattaya. The infinity pool overlooking the Gulf of Thailand is stunning. Romantic dinner on the sand was perfect. Gym could be bigger.",
    date: "Декабрь 2025",
    room: "Pool Villa"
  },
  {
    id: 5,
    name: "Елена М.",
    country: "Казахстан, Алматы",
    rating: 5,
    text: "Отдыхали с подругами в спа-туре Mövenpick Siam. Массаж, обертывания, хаммам — всё на высшем уровне. Косметолог в спа-центре отеля просто волшебница. Сделали полную программу за 3 дня.",
    date: "Январь 2025",
    room: "Deluxe Twin"
  },
  {
    id: 6,
    name: "Pierre & Marie",
    country: "France",
    rating: 5,
    text: "Le Mövenpick Siam Na Jomtien est magnifique! Their restaurant has a French chef — a pleasant surprise in Pattaya. The wine list is impressive. We extended our stay for 3 more days just to enjoy the hotel.",
    date: "Февраль 2025",
    room: "Beachfront Suite"
  },
  {
    id: 7,
    name: "Алексей П.",
    country: "Россия, Новосибирск",
    rating: 4,
    text: "Отличный бизнес-центр в Mövenpick Siam, провёл конференцию на 20 человек без проблем. Интернет быстрый, оборудование новое. Завтраки в ресторане отеля великолепные — особенно швейцарские сыры.",
    date: "Март 2025",
    room: "Business Suite"
  },
  {
    id: 8,
    name: "Sophie & Jack",
    country: "Canada",
    rating: 5,
    text: "Our honeymoon at Mövenpick Na Jomtien was perfect! Rose petals in the room, champagne on arrival, private dinner on the beach. The concierge arranged everything — even fireworks. Best hotel in Pattaya!",
    date: "Январь 2025",
    room: "Honeymoon Villa"
  },
  {
    id: 9,
    name: "Ирина и Павел",
    country: "Беларусь, Минск",
    rating: 5,
    text: "Детский клуб в Mövenpick Siam — спасение для родителей! Няня прекрасная, дети не хотели уходить. Сами наконец сходили на романтический ужин при свечах прямо на пляже Na Jomtien.",
    date: "Февраль 2025",
    room: "Family Suite"
  },
  {
    id: 10,
    name: "Robert K.",
    country: "Germany",
    rating: 4,
    text: "Mövenpick Na Jomtien has a great location — quiet, away from noisy Pattaya center. The local tour they arranged was very informative. Hotel organised everything perfectly. Recommended for families and couples.",
    date: "Март 2025",
    room: "Deluxe Sea View"
  },
  {
    id: 11,
    name: "Марина С.",
    country: "Россия, Екатеринбург",
    rating: 5,
    text: "Прилетели поздно ночью, трансфер Mövenpick ждал. В номере комплимент — фрукты и шампанское. Сервис на 5+. Вид из окна на Сиамский залив потрясающий! Уборка дважды в день.",
    date: "Апрель 2025",
    room: "Skyline Suite"
  },
  {
    id: 12,
    name: "Tanaka Family",
    country: "Japan",
    rating: 5,
    text: "Mövenpick Siam hotel has Japanese speaking staff — very helpful! BBQ dinner with fresh seafood on Na Jomtien beach exceeded expectations. Kids loved the chocolate hour and the giant pool.",
    date: "Февраль 2025",
    room: "Family Suite"
  },
  {
    id: 13,
    name: "Ольга и Максим",
    country: "Россия, Краснодар",
    rating: 5,
    text: "Вертолётная прогулка от Mövenpick Siam — это что-то невероятное! Виды на Паттайю и Na Jomtien с высоты захватывают дух. Шампанское в полёте — высший класс. Организовали за полдня.",
    date: "Январь 2025",
    room: "Penthouse Suite"
  },
  {
    id: 14,
    name: "David & Emma",
    country: "USA",
    rating: 5,
    text: "Mövenpick Na Jomtien is worth every dollar! The SPA is world-class — had Thai massage every day. Concierge booked us the best rooftop table at Horizon bar in Pattaya. Already planning our return.",
    date: "Март 2025",
    room: "Spa Suite"
  },
  {
    id: 15,
    name: "Татьяна К.",
    country: "Россия, Казань",
    rating: 4,
    text: "Отель Mövenpick Siam Na Jomtien очень красивый, завтраки разнообразные. Единственный минус — далековато до центра Паттайи, но трансфер отеля решает проблему за 20 минут. Море чистейшее!",
    date: "Апрель 2025",
    room: "Deluxe Garden View"
  },
  {
    id: 16,
    name: "Андрей Б.",
    country: "Россия, Сочи",
    rating: 5,
    text: "Новый год 2026 в Mövenpick Na Jomtien — это сказка! Фейерверки над морем, праздничный ужин в ресторане отеля, живая музыка. Дети были в восторге от аниматоров. Шампанское в полночь на пляже.",
    date: "Январь 2026",
    room: "Grand Suite"
  },
  {
    id: 17,
    name: "Jessica & Mark",
    country: "New Zealand",
    rating: 5,
    text: "Came to Mövenpick Siam for our 10th anniversary. The staff decorated our room beautifully with flowers. Sunset views from the infinity pool are breathtaking! Na Jomtien is Pattaya's hidden gem.",
    date: "Февраль 2026",
    room: "Sunset Villa"
  },
  {
    id: 18,
    name: "Виктор Л.",
    country: "Россия, Владивосток",
    rating: 5,
    text: "Лучший консьерж-сервис в моей жизни именно здесь, в Mövenpick Siam! За сутки организовали яхту, вертолёт и ужин на острове. Ребята из Na Jomtien творят чудеса. Отель — легенда!",
    date: "Март 2026",
    room: "Presidential Suite"
  },
  {
    id: 19,
    name: "Kim Min-ji",
    country: "South Korea",
    rating: 5,
    text: "한국어 가능한 직원이 있어서 정말 편했어요! Mövenpick Siam 스파는 최고였고, 해변에서 먹는 BBQ는 평생 잊지 못할 거예요. 다음에 또 올게요! Na Jomtien 최고의 호텔!",
    date: "Февраль 2026",
    room: "Ocean Suite"
  },
  {
    id: 20,
    name: "Николай и Юлия",
    country: "Россия, Самара",
    rating: 4,
    text: "Отдыхали с двумя детьми в Mövenpick Na Jomtien. Kids Club работает отлично, дети каждый день с новыми поделками. Для взрослых — тишина и спа. Рекомендуем семейные сьюты. Пляж чистый, море тёплое.",
    date: "Апрель 2026",
    room: "Family Suite"
  },
  {
    id: 21,
    name: "Marco & Lucia",
    country: "Italy",
    rating: 5,
    text: "La cucina del Mövenpick Siam è eccellente! Anche la pasta italiana è autentica. Il servizio in spiaggia a Na Jomtien è impeccabile. Torneremo a Pattaya solo per questo hotel l'anno prossimo.",
    date: "Март 2026",
    room: "Beachfront Villa"
  },
  {
    id: 22,
    name: "Алёна Д.",
    country: "Россия, Тюмень",
    rating: 5,
    text: "Майские праздники 2026 в Mövenpick Siam удались! Отель полностью оправдал рейтинг 5 звёзд. Уборка дважды в день, полотенца меняют постоянно. Сервис королевский! Пляж Na Jomtien — лучший в Паттайе.",
    date: "Май 2026",
    room: "Deluxe Sea View"
  },
  {
    id: 23,
    name: "Ahmed & Fatima",
    country: "UAE, Dubai",
    rating: 5,
    text: "The halal food options at Mövenpick Na Jomtien were excellent. Private pool villa was worth every dirham. Staff respected all our needs during Ramadan. Truly 5-star experience in Pattaya!",
    date: "Апрель 2026",
    room: "Private Pool Villa"
  },
  {
    id: 24,
    name: "Руслан и Айгуль",
    country: "Казахстан, Астана",
    rating: 5,
    text: "Свадебное путешествие в Mövenpick Siam удалось! Украшение номера лепестками роз, шампанское, клубника. Романтический ужин на пляже Na Jomtien — мечта! Консьерж помог с кольцом для предложения.",
    date: "Май 2026",
    room: "Honeymoon Suite"
  },
  {
    id: 25,
    name: "Carlos M.",
    country: "Spain",
    rating: 4,
    text: "El Mövenpick Na Jomtien es precioso y muy tranquilo. Perfecto para desconectar del ruido de Pattaya. Lo único mejorable es el gimnasio. El resto, de 10. Volveré en Navidad 2026.",
    date: "Июнь 2026",
    room: "Deluxe Garden"
  },
  {
    id: 26,
    name: "Светлана П.",
    country: "Россия, Нижний Новгород",
    rating: 5,
    text: "Юбилей мужа отмечали в Mövenpick Siam Na Jomtien. Заказали BBQ ужин на 10 человек прямо у моря — всё организовали идеально. Огромное спасибо команде отеля! Шоколадный торт был божественным.",
    date: "Май 2026",
    room: "Skyline Suite"
  },
  {
    id: 27,
    name: "John & Linda",
    country: "Canada, Toronto",
    rating: 5,
    text: "Third time at Mövenpick Na Jomtien and it keeps getting better! The new rooftop bar has amazing views of Pattaya bay. Staff remembered us from our last visit. That's real Swiss hospitality in Thailand.",
    date: "Июнь 2026",
    room: "Rooftop Suite"
  },
  {
    id: 28,
    name: "Артур Х.",
    country: "Россия, Уфа",
    rating: 5,
    text: "Бизнес-трансфер Mövenpick из аэропорта Утапао — чётко и вовремя. Конференц-зал в Na Jomtien оборудован всем необходимым. Партнёры из Сингапура остались под впечатлением от отеля.",
    date: "Март 2026",
    room: "Business Suite"
  },
  {
    id: 29,
    name: "Yuki S.",
    country: "Japan, Tokyo",
    rating: 5,
    text: "Mövenpick Siamのチョコレートアワーが最高でした！毎日16時が待ち遠しかったです。Na Jomtienのタイ式マッサージも本格的で、毎日受けていました。絶対また来ます！",
    date: "Апрель 2026",
    room: "Spa Suite"
  },
  {
    id: 30,
    name: "Екатерина В.",
    country: "Россия, Калининград",
    rating: 5,
    text: "Июнь 2026 — только что вернулись из Mövenpick Na Jomtien, и уже скучаем! Местная экскурсия открыла Паттайю с новой стороны. Гид знал такие места, о которых мы даже не слышали. До встречи зимой!",
    date: "Июнь 2026",
    room: "Deluxe Sea View"
  }
]

export default reviews