import { useState } from 'react'
import services from './data/services'
import Header from './components/Header'
import Hero from './components/Hero'
import ChocolateBanner from './components/ChocolateBanner'
import ServiceCard from './components/ServiceCard'
import ServiceDetails from './components/ServiceDetails'
import RequestForm from './components/RequestForm'
import SuccessScreen from './components/SuccessScreen'
import Reviews from './components/Reviews'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import AdminPanel from './components/admin/AdminPanel'
import GuestPanel from './components/GuestPanel'
import { useLanguage } from './context/LanguageContext'
import { generateRequestCode, saveRequest } from './utils/requestUtils'

function App() {
  const { t } = useLanguage()
  const [page, setPage] = useState('main')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [detailsService, setDetailsService] = useState(null)
  const [bookingService, setBookingService] = useState(null)
  const [requestData, setRequestData] = useState(null)
  const [requestCode, setRequestCode] = useState(null)

  const categories = ['All', 'Dining', 'Wellness', 'Transport', 'Family', 'Experience']

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory)

  const handleBook = (service) => {
    setBookingService(service)
    setDetailsService(null)
    setRequestCode(null)
    setRequestData(null)
  }

  const handleSubmit = (formData) => {
    const code = generateRequestCode(formData.service, formData.roomNumber)
    saveRequest(formData, code)
    setRequestData(formData)
    setRequestCode(code)
    setBookingService(null)
  }

  const handleCloseBooking = () => setBookingService(null)

  const handleReset = () => {
    setRequestCode(null)
    setRequestData(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToMain = () => setPage('main')

  if (page === 'admin') return <AdminPanel onLogout={handleBackToMain} />
  if (page === 'guest') return <GuestPanel onBack={handleBackToMain} />

  return (
    <div className="min-h-screen bg-[#F5F2ED]" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
      
      <Header onAdminClick={() => setPage('admin')} onGuestClick={() => setPage('guest')} />
      <Hero />
      <ChocolateBanner />

      {/* Услуги */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-[#8C7343] text-sm tracking-[.3em] uppercase">{t.services.title}</span>
          <h2 className="text-3xl md:text-4xl font-normal text-[#2E2E2E] mt-3">{t.services.subtitle}</h2>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-sm tracking-wide transition-colors duration-300 ${
                selectedCategory === cat ? 'bg-[#8C7343] text-white' : 'bg-white text-[#6B6B6B] hover:bg-[#F0EDE7] border border-[#E5E0D8]'
              }`}>
              {t.categories[cat]}
            </button>
          ))}
        </div>

        {/* Карточки услуг с анимацией */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => setDetailsService(service)} 
              className="cursor-pointer"
            >
              <ServiceCard 
                service={service} 
                onBook={handleBook} 
                delay={index * 150}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Отзывы */}
      <Reviews />

      {/* Футер */}
      <Footer />

      {/* Кнопка наверх */}
      <ScrollToTop />

      {/* Чат-бот */}
      <ChatBot />

      {/* Модальное окно — детали услуги */}
      {detailsService && (
        <ServiceDetails service={detailsService} onClose={() => setDetailsService(null)} onBook={handleBook} />
      )}

      {/* Модальное окно — форма бронирования */}
      {bookingService && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseBooking}
              className="absolute top-4 right-4 text-[#B0A89A] hover:text-[#6B6B6B] text-2xl leading-none transition-colors">✕</button>
            <div className="text-center mb-10">
              <span className="text-[#8C7343] text-sm tracking-[.3em] uppercase">{t.booking.title}</span>
              <h2 className="text-2xl md:text-3xl font-normal text-[#2E2E2E] mt-3">{t.booking.subtitle}</h2>
              <p className="text-[#8C7343] mt-3 text-lg">{bookingService.title}</p>
            </div>
            <RequestForm selectedService={bookingService} onSubmit={handleSubmit} />
          </div>
        </div>
      )}

      {/* Модальное окно — код и детали заказа */}
      {requestCode && requestData && (
        <SuccessScreen requestData={requestData} requestCode={requestCode} onClose={() => {}} onReset={handleReset} />
      )}
    </div>
  )
}

export default App