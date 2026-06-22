import { useState } from 'react'
import services from '../data/services'
import { useLanguage } from '../context/LanguageContext'

function RequestForm({ selectedService, onSubmit }) {
  const { t } = useLanguage()
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

  const guestWord = (n) => {
    const num = parseInt(n)
    if (num === 1) return t.booking.guest
    if (num < 5) return t.booking.guests2
    return t.booking.guests5
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#6B6B6B] mb-2">{t.booking.guestName}</label>
          <input type="text" name="guestName" required value={formData.guestName} onChange={handleChange}
            className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" placeholder={t.booking.placeholderName} />
        </div>
        <div>
          <label className="block text-sm text-[#6B6B6B] mb-2">{t.booking.roomNumber}</label>
          <input type="text" name="roomNumber" required value={formData.roomNumber} onChange={handleChange}
            className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" placeholder={t.booking.placeholderRoom} />
        </div>
      </div>

      <div>
        <label className="block text-sm text-[#6B6B6B] mb-2">{t.booking.service}</label>
        <select name="service" required value={formData.service} onChange={handleChange}
          className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]">
          <option value="" disabled>{t.booking.selectService}</option>
          {services.map(s => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#6B6B6B] mb-2">{t.booking.date}</label>
          <input type="date" name="date" required value={formData.date} onChange={handleChange}
            className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" />
        </div>
        <div>
          <label className="block text-sm text-[#6B6B6B] mb-2">{t.booking.time}</label>
          <input type="time" name="time" required value={formData.time} onChange={handleChange}
            className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-[#6B6B6B] mb-2">{t.booking.guests}</label>
        <select name="guests" required value={formData.guests} onChange={handleChange}
          className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
            <option key={n} value={n}>{n} {guestWord(n)}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm text-[#6B6B6B] mb-2">{t.booking.comment}</label>
        <textarea name="comment" rows="3" value={formData.comment} onChange={handleChange}
          className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED] resize-none" placeholder={t.booking.placeholderComment}></textarea>
      </div>

      <button type="submit"
        className="w-full bg-[#8C7343] text-white py-4 text-sm tracking-[.2em] uppercase hover:bg-[#7A6338] transition-colors duration-300">
        {t.booking.generate}
      </button>
    </form>
  )
}

export default RequestForm