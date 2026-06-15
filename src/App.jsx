import { useState } from 'react'
import services from './data/services'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import ServiceDetails from './components/ServiceDetails'
import RequestForm from './components/RequestForm'
import SuccessScreen from './components/SuccessScreen'
import AdminPanel from './components/admin/AdminPanel'
import { generateRequestCode, saveRequest } from './utils/requestUtils'

function App() {
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

  const handleCloseBooking = () => {
    setBookingService(null)
  }

  const handleReset = () => {
    setRequestCode(null)
    setRequestData(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogout = () => {
    setPage('main')
  }

  if (page === 'admin') {
    return <AdminPanel onLogout={handleLogout} />
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED]" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
      
      <Header onAdminClick={() => setPage('admin')} />
      <Hero />

      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-[#8C7343] text-sm tracking-[.3em] uppercase">Services</span>
          <h2 className="text-3xl md:text-4xl font-normal text-[#2E2E2E] mt-3">
            Выберите услугу
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-sm tracking-wide transition-colors duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#8C7343] text-white'
                  : 'bg-white text-[#6B6B6B] hover:bg-[#F0EDE7] border border-[#E5E0D8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              onClick={() => setDetailsService(service)}
              className="cursor-pointer"
            >
              <ServiceCard service={service} onBook={handleBook} />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#E5E0D8] py-8 text-center">
        <p className="text-sm text-[#B0A89A]">
          Mövenpick Siam Hotel Na Jomtien Pattaya
        </p>
      </footer>

      {detailsService && (
        <ServiceDetails
          service={detailsService}
          onClose={() => setDetailsService(null)}
          onBook={handleBook}
        />
      )}

      {bookingService && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseBooking}
              className="absolute top-4 right-4 text-[#B0A89A] hover:text-[#6B6B6B] text-2xl leading-none transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-10">
              <span className="text-[#8C7343] text-sm tracking-[.3em] uppercase">Booking</span>
              <h2 className="text-2xl md:text-3xl font-normal text-[#2E2E2E] mt-3">
                Забронировать услугу
              </h2>
              <p className="text-[#8C7343] mt-3 text-lg">
                {bookingService.title}
              </p>
            </div>

            <RequestForm
              selectedService={bookingService}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}

      {requestCode && requestData && (
        <SuccessScreen
          requestData={requestData}
          requestCode={requestCode}
          onClose={() => {}}
          onReset={handleReset}
        />
      )}
    </div>
  )
}

export default App