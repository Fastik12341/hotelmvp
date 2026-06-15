function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Фон */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Mövenpick Pattaya" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Контент */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="inline-block mb-6">
          <span className="text-[#C4A86B] text-sm tracking-[.4em] uppercase">
            Na Jomtien, Pattaya
          </span>
        </div>
        <h1 className="text-4xl md:text-7xl font-normal text-white mb-4 tracking-wide">
          Mövenpick Siam
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-4 font-light">
          Welcome to Mövenpick Na Jomtien Siam Pattaya
        </p>
        <p className="text-white/60 max-w-xl mx-auto mb-12 leading-relaxed text-sm md:text-base">
          Discover restaurants, spa, transfers and special experiences in one place.
        </p>
        <a
          href="#services"
          className="inline-block bg-[#8C7343] text-white px-12 py-4 text-sm tracking-[.25em] uppercase hover:bg-[#A08050] transition-colors duration-300"
        >
          View Services
        </a>
      </div>
    </section>
  )
}

export default Hero