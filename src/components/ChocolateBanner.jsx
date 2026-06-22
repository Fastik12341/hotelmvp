import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const images = [
  '/images/chocolate-1.jpg',
  '/images/chocolate-2.jpg',
  '/images/chocolate-3.jpg',
  '/images/chocolate-4.jpg',
  '/images/chocolate-5.jpg'
]

function ChocolateBanner() {
  const [currentImage, setCurrentImage] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={img} alt={`Chocolate Hour ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#8C7343]/85 via-[#2E2E2E]/55 to-[#8C7343]/85"></div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-2xl">
          <div className="inline-block border-t border-b border-white/30 py-3 mb-5">
            <h3 className="text-xl md:text-3xl font-light tracking-[.25em] uppercase">
              {t.chocolate.title}
            </h3>
          </div>
          <p className="text-sm md:text-base text-white/80 font-light tracking-[.15em] uppercase mb-6">
            {t.chocolate.time}
          </p>
          <div className="w-12 h-px bg-white/40 mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-lg mx-auto italic">
            {t.chocolate.description}
          </p>

          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImage ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChocolateBanner