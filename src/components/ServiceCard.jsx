import { useLanguage } from '../context/LanguageContext'

function ServiceCard({ service, onBook }) {
  const { t } = useLanguage()

  return (
    <div className="bg-white border border-[#E5E0D8] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs text-[#8C7343] tracking-wider uppercase bg-[#F5F2ED] px-3 py-1">
            {t.categories[service.category]}
          </span>
        </div>
        
        <h3 className="text-lg font-normal text-[#2E2E2E] mb-2">
          {service.title}
        </h3>
        
        <p className="text-[#8C8C8C] text-sm leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-[#6B6B6B] mb-4">
          <span>🕐 {service.time}</span>
          <span>📋 {service.format}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#E5E0D8]">
          <span className="text-base font-normal text-[#2E2E2E]">
            {t.services.from} {service.price}
          </span>
          <button
            onClick={(e) => { e.stopPropagation(); onBook(service); }}
            className="bg-[#8C7343] text-white px-5 py-2 text-sm tracking-wider hover:bg-[#7A6338] transition-colors duration-300"
          >
            {t.services.bookNow}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard