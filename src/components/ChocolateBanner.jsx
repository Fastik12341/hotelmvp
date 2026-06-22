// src/components/ChocolateBanner.jsx

import { useState, useEffect } from 'react'

const images = [
  '/images/chocolate-1.jpg',
  '/images/chocolate-2.jpg',
  '/images/chocolate-3.jpg',
  '/images/chocolate-4.jpg',
  '/images/chocolate-5.jpg'
]

function ChocolateBanner() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden">
      {/* Смена картинок */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Chocolate Hour — фото ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Оверлей */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8C7343]/80 via-[#2E2E2E]/50 to-[#8C7343]/80"></div>

      {/* Контент */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-3xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl md:text-5xl">🍫</span>
            <h3 className="text-2xl md:text-4xl font-normal tracking-wide">
              Chocolate Hour
            </h3>
            <span className="text-4xl md:text-5xl">🍦</span>
          </div>
          <p className="text-lg md:text-2xl font-light text-white/90 mb-3">
            Ежедневно в 16:00
          </p>
          <p className="text-sm md:text-base text-white/70 font-light max-w-xl mx-auto">
            Бесплатная дегустация швейцарского шоколада и знаменитого мороженого Mövenpick для всех гостей отеля
          </p>

          {/* Индикаторы */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? 'bg-white w-7'
                    : 'bg-white/40 hover:bg-white/70'
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