import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

function AdminLogin({ onLogin, onBack }) {
  const { t } = useLanguage()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === 'Fastik') {
      onLogin(true)
      setError('')
    } else {
      setError(t.admin.error)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED] flex items-center justify-center p-4 relative">
      <button onClick={onBack}
        className="absolute top-6 left-6 text-[#B0A89A] hover:text-[#6B6B6B] transition-colors flex items-center gap-2 text-sm">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5m0 0l7 7m-7-7l7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {t.admin.back}
      </button>

      <div className="bg-white border border-[#E5E0D8] p-10 max-w-sm w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-normal text-[#2E2E2E] mb-2">{t.admin.title}</h1>
          <p className="text-sm text-[#B0A89A]">{t.admin.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#6B6B6B] mb-2">{t.admin.password}</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#E5E0D8] px-4 py-3 text-[#2E2E2E] focus:outline-none focus:border-[#8C7343] transition-colors bg-[#F5F2ED]" placeholder="..." />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit"
            className="w-full bg-[#8C7343] text-white py-3 text-sm tracking-[.2em] uppercase hover:bg-[#7A6338] transition-colors duration-300">
            {t.admin.login}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin