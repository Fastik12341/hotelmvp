function ServiceDetails({ service, onClose, onBook }) {
  if (!service) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white max-w-lg w-full border border-[#E5E0D8] overflow-hidden" onClick={e => e.stopPropagation()}>
        {/* Картинка */}
        <div className="h-56 overflow-hidden relative">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#2E2E2E] w-8 h-8 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>
        
        {/* Контент */}
        <div className="p-6">
          <span className="text-xs text-[#8C7343] tracking-wider uppercase bg-[#F5F2ED] px-3 py-1 inline-block mb-3">
            {service.category}
          </span>

          <h2 className="text-2xl font-normal text-[#2E2E2E] mb-3">
            {service.title}
          </h2>

          <p className="text-[#8C8C8C] leading-relaxed mb-5">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-5 pb-5 border-b border-[#E5E0D8]">
            <div>
              <span className="text-xs text-[#B0A89A] uppercase tracking-wider">Время</span>
              <p className="text-[#2E2E2E] mt-1">🕐 {service.time}</p>
            </div>
            <div>
              <span className="text-xs text-[#B0A89A] uppercase tracking-wider">Формат</span>
              <p className="text-[#2E2E2E] mt-1">📋 {service.format}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-[#B0A89A] uppercase tracking-wider">Стоимость</span>
              <p className="text-2xl font-normal text-[#2E2E2E] mt-1">From {service.price}</p>
            </div>
            <button
              onClick={() => onBook(service)}
              className="bg-[#8C7343] text-white px-7 py-3 text-sm tracking-wider hover:bg-[#7A6338] transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails