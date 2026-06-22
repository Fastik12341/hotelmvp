function Header({ onAdminClick, onGuestClick }) {
  return (
    <header className="bg-white border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/images/movenpick-logo.png" alt="Mövenpick" className="h-14" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-[#6B6B6B] hover:text-[#8C7343] transition-colors tracking-wide">
            Services
          </a>
          <a href="#booking" className="text-sm text-[#6B6B6B] hover:text-[#8C7343] transition-colors tracking-wide">
            Booking
          </a>
          <button
            onClick={onGuestClick}
            className="text-sm text-[#6B6B6B] hover:text-[#8C7343] transition-colors tracking-wide"
          >
            My Bookings
          </button>
          <button
            onClick={onAdminClick}
            className="text-sm text-[#B0A89A] hover:text-[#8C7343] transition-colors tracking-wide ml-4"
          >
            Admin
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header