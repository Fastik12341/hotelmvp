import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

function Header({ onAdminClick, onGuestClick }) {
  const { t } = useLanguage()

  return (
    <header className="bg-white border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/images/movenpick-logo.png" alt="Mövenpick" className="h-14" />
        </a>
        <nav className="flex items-center gap-6">
          <a href="#services" className="text-sm text-[#6B6B6B] hover:text-[#8C7343] transition-colors tracking-wide">
            {t.header.services}
          </a>
          <button
            onClick={onGuestClick}
            className="text-sm text-[#6B6B6B] hover:text-[#8C7343] transition-colors tracking-wide"
          >
            {t.header.myBookings}
          </button>
          <button
            onClick={onAdminClick}
            className="text-sm text-[#B0A89A] hover:text-[#8C7343] transition-colors tracking-wide"
          >
            {t.header.admin}
          </button>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}

export default Header