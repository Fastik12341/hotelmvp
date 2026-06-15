function SuccessScreen({ requestData, requestCode, onClose, onReset }) {
  if (!requestData) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-md w-full p-8 text-center">
        {/* Иконка успеха */}
        <div className="w-16 h-16 bg-[#F5F2ED] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#8C7343]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <h3 className="text-2xl font-normal text-[#2E2E2E] mb-2">
          Thank you!
        </h3>
        <p className="text-[#8C8C8C] mb-6">
          Your request has been sent
        </p>

        {/* Код */}
        <div className="bg-[#F5F2ED] border border-[#E5E0D8] p-6 mb-6">
          <span className="block text-xs text-[#B0A89A] uppercase tracking-wider mb-2">
            Your Request Code
          </span>
          <span className="text-2xl font-normal text-[#2E2E2E] tracking-[.15em]">
            {requestCode}
          </span>
        </div>

        {/* Детали заказа */}
        <div className="bg-[#F5F2ED] p-4 mb-6 text-left space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#B0A89A]">Услуга</span>
            <span className="text-[#2E2E2E]">{requestData.service}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#B0A89A]">Гость</span>
            <span className="text-[#2E2E2E]">{requestData.guestName}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#B0A89A]">Комната</span>
            <span className="text-[#2E2E2E]">{requestData.roomNumber}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#B0A89A]">Дата</span>
            <span className="text-[#2E2E2E]">{requestData.date}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#B0A89A]">Время</span>
            <span className="text-[#2E2E2E]">{requestData.time}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#B0A89A]">Гостей</span>
            <span className="text-[#2E2E2E]">{requestData.guests}</span>
          </div>
        </div>

        {/* Кнопка */}
        <button
          onClick={onReset}
          className="w-full bg-[#8C7343] text-white py-3.5 text-sm tracking-[.15em] uppercase hover:bg-[#7A6338] transition-colors duration-300"
        >
          Make another request
        </button>

        {/* Крестик закрытия */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#B0A89A] hover:text-[#6B6B6B] text-2xl leading-none"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default SuccessScreen