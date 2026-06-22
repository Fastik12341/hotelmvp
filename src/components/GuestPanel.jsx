import { useState } from 'react'
import GuestLogin from './GuestLogin'
import GuestDashboard from './GuestDashboard'
import { useLanguage } from '../context/LanguageContext'

function GuestPanel({ onBack }) {
  const [guestData, setGuestData] = useState(null)
  const { t } = useLanguage()

  const handleLogin = (roomNumber, requests) => {
    setGuestData({ roomNumber, requests })
  }

  const handleLogout = () => {
    setGuestData(null)
  }

  if (!guestData) {
    return (
      <div className="relative">
        <button onClick={onBack}
          className="absolute top-6 left-6 text-[#B0A89A] hover:text-[#6B6B6B] transition-colors flex items-center gap-2 text-sm z-10">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5m0 0l7 7m-7-7l7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t.guestPanel.back}
        </button>
        <GuestLogin onLogin={handleLogin} />
      </div>
    )
  }

  return (
    <div>
      <GuestDashboard
        roomNumber={guestData.roomNumber}
        requests={guestData.requests}
        onLogout={() => { handleLogout(); onBack() }}
      />
    </div>
  )
}

export default GuestPanel