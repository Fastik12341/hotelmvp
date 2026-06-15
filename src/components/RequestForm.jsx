import { useState } from 'react'
import services from '../data/services'

function RequestForm({ selectedService, onSubmit }) {
  const [formData, setFormData] = useState({
    guestName: '',
    roomNumber: '',
    service: selectedService?.title || '',
    date: '',
    time: '',
    guests: '1',
    comment: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#6B6B6B] mb-2">Имя гостя</label>
          <input type="text" name="guestName" required value={formData.guestName} onChange={handleChange}
            className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" placeholder="Ваше имя" />
        </div>
        <div>
          <label className="block text-sm text-[#6B6B6B] mb-2">Номер комнаты *</label>
          <input type="text" name="roomNumber" required value={formData.roomNumber} onChange={handleChange}
            className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" placeholder="Например: 1205" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-[#6B6B6B] mb-2">Выбранная услуга</label>
        <select name="service" required value={formData.service} onChange={handleChange}
          className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]">
          <option value="" disabled>Выберите услугу</option>
          {services.map(s => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#6B6B6B] mb-2">Дата</label>
          <input type="date" name="date" required value={formData.date} onChange={handleChange}
            className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" />
        </div>
        <div>
          <label className="block text-sm text-[#6B6B6B] mb-2">Время</label>
          <input type="time" name="time" required value={formData.time} onChange={handleChange}
            className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-[#6B6B6B] mb-2">Количество гостей</label>
        <select name="guests" required value={formData.guests} onChange={handleChange}
          className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
            <option key={n} value={n}>{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm text-[#6B6B6B] mb-2">Комментарий</label>
        <textarea name="comment" rows="3" value={formData.comment} onChange={handleChange}
          className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED] resize-none" placeholder="Особые пожелания..."></textarea>
      </div>

      <button type="submit"
        className="w-full bg-[#8C7343] text-white py-4 text-sm tracking-[.2em] uppercase hover:bg-[#7A6338] transition-colors duration-300">
        Generate Request Code
      </button>
    </form>
  )
}

export default RequestForm