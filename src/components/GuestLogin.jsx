import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function GuestLogin({ onLogin }) {
  const { t } = useLanguage()
  const [roomNumber, setRoomNumber] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const requests = JSON.parse(localStorage.getItem('hotelRequests') || '[]')
    const guestRequests = requests.filter(r => r.roomNumber === roomNumber.trim())
    
    if (guestRequests.length === 0) {
      setError(t.guestPanel.error)
    } else {
      setError('')
      onLogin(roomNumber.trim(), guestRequests)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED] flex items-center justify-center p-4">
      <div className="bg-white border border-[#E5E0D8] p-10 max-w-sm w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-normal text-[#2E2E2E] mb-2">{t.guestPanel.title}</h1>
          <p className="text-sm text-[#B0A89A]">{t.guestPanel.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#6B6B6B] mb-2">{t.guestPanel.roomNumber}</label>
            <input type="text" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} required
              className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" placeholder="1205" />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button type="submit"
            className="w-full bg-[#8C7343] text-white py-3 text-sm tracking-[.2em] uppercase hover:bg-[#7A6338] transition-colors duration-300">
            {t.guestPanel.login}
          </button>
        </form>
      </div>
    </div>
  )
}

export default GuestLogin