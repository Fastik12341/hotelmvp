import { useLanguage } from '../context/LanguageContext'

function SuccessScreen({ requestData, requestCode, onClose, onReset }) {
  const { t } = useLanguage()
  if (!requestData) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-md w-full p-8 text-center relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#B0A89A] hover:text-[#6B6B6B] text-2xl leading-none">✕</button>

        <div className="w-16 h-16 bg-[#F5F2ED] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#8C7343]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <h3 className="text-2xl font-normal text-[#2E2E2E] mb-2">{t.success.thankYou}</h3>
        <p className="text-[#8C8C8C] mb-6">{t.success.sent}</p>

        <div className="bg-[#F5F2ED] border border-[#E5E0D8] p-6 mb-6">
          <span className="block text-xs text-[#B0A89A] uppercase tracking-wider mb-2">{t.success.requestCode}</span>
          <span className="text-2xl font-normal text-[#2E2E2E] tracking-[.15em]">{requestCode}</span>
        </div>

        <div className="bg-[#F5F2ED] p-4 mb-6 text-left space-y-2">
          <div className="flex justify-between text-sm"><span className="text-[#B0A89A]">{t.success.serviceLabel}</span><span className="text-[#2E2E2E]">{requestData.service}</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#B0A89A]">{t.success.guestLabel}</span><span className="text-[#2E2E2E]">{requestData.guestName}</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#B0A89A]">{t.success.roomLabel}</span><span className="text-[#2E2E2E]">{requestData.roomNumber}</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#B0A89A]">{t.success.dateLabel}</span><span className="text-[#2E2E2E]">{requestData.date}</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#B0A89A]">{t.success.timeLabel}</span><span className="text-[#2E2E2E]">{requestData.time}</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#B0A89A]">{t.success.guestsLabel}</span><span className="text-[#2E2E2E]">{requestData.guests}</span></div>
          {requestData.comment && (
            <div className="flex justify-between text-sm"><span className="text-[#B0A89A]">{t.success.commentLabel}</span><span className="text-[#2E2E2E]">{requestData.comment}</span></div>
          )}
        </div>

        <button onClick={onReset}
          className="w-full bg-[#8C7343] text-white py-3.5 text-sm tracking-[.15em] uppercase hover:bg-[#7A6338] transition-colors duration-300">
          {t.success.newRequest}
        </button>
      </div>
    </div>
  )
}

export default SuccessScreen