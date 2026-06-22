// src/components/ChocolateBanner.jsx

function ChocolateBanner() {
  return (
    <section className="bg-gradient-to-r from-[#8C7343] via-[#A08050] to-[#8C7343] text-white py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-4xl">🍫</span>
          <h3 className="text-xl md:text-2xl font-normal tracking-wide">
            Chocolate Hour
          </h3>
          <span className="text-4xl">🍦</span>
        </div>
        <p className="text-lg md:text-xl font-light text-white/90 mb-2">
          Ежедневно в 16:00
        </p>
        <p className="text-sm md:text-base text-white/70 font-light">
          Бесплатная дегустация швейцарского шоколада и знаменитого мороженого Mövenpick для всех гостей отеля
        </p>
      </div>
    </section>
  )
}

export default ChocolateBanner