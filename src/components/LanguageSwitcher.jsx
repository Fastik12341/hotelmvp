import { useLanguage } from '../context/LanguageContext'

const flags = {
  ru: '🇷🇺',
  en: '🇬🇧',
  th: '🇹🇭'
}

const labels = {
  ru: 'RU',
  en: 'EN',
  th: 'TH'
}

function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1">
      {Object.keys(flags).map(code => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`px-2 py-1 text-xs tracking-wide transition-all duration-200 ${
            lang === code
              ? 'bg-[#8C7343] text-white'
              : 'text-[#B0A89A] hover:text-[#8C7343]'
          }`}
        >
          {labels[code]}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher