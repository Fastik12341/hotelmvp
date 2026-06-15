function ServiceIcon({ icon, className = "w-12 h-12" }) {
  const icons = {
    bbq: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#F5F2ED"/>
        <path d="M14 36H34L30 18H18L14 36Z" stroke="#8C7343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 18V14C20 12.8954 20.8954 12 22 12H26C27.1046 12 28 12.8954 28 14V18" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 6V12" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="28" r="1.5" fill="#8C7343"/>
        <circle cx="24" cy="26" r="1.5" fill="#8C7343"/>
        <circle cx="32" cy="28" r="1.5" fill="#8C7343"/>
        <path d="M12 36H36" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    spa: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#F5F2ED"/>
        <path d="M14 32C14 32 18 20 24 20C30 20 34 32 34 32" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19 32C19 32 22 24 24 24C26 24 29 32 29 32" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 20V12" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 14L24 12L27 14" stroke="#8C7343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 36H34" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="36" r="2" fill="#8C7343"/>
      </svg>
    ),
    car: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#F5F2ED"/>
        <path d="M10 28V32H38V28" stroke="#8C7343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 28L14 20H34L36 28" stroke="#8C7343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 32V34" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 32V34" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="28" r="3" fill="#F5F2ED" stroke="#8C7343" strokeWidth="2"/>
        <circle cx="32" cy="28" r="3" fill="#F5F2ED" stroke="#8C7343" strokeWidth="2"/>
        <path d="M20 22H28" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    kids: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#F5F2ED"/>
        <circle cx="16" cy="16" r="4" fill="#F5F2ED" stroke="#8C7343" strokeWidth="2"/>
        <circle cx="32" cy="16" r="4" fill="#F5F2ED" stroke="#8C7343" strokeWidth="2"/>
        <path d="M10 36C10 28 16 22 24 22C32 22 38 28 38 36" stroke="#8C7343" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 26L20 30L24 28" stroke="#8C7343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="14" r="2" fill="#8C7343"/>
        <circle cx="14" cy="12" r="1" fill="#8C7343"/>
        <circle cx="34" cy="12" r="1" fill="#8C7343"/>
      </svg>
    ),
    romantic: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#F5F2ED"/>
        <path d="M24 38C24 38 10 28 10 20C10 14.4772 14.4772 10 20 10C23.2092 10 26.1043 11.4768 28 13.7654C29.8957 11.4768 32.7908 10 36 10C41.5228 10 46 14.4772 46 20C46 28 32 38 24 38Z" stroke="#8C7343" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="17" cy="18" r="1.5" fill="#8C7343"/>
        <circle cx="31" cy="18" r="1.5" fill="#8C7343"/>
      </svg>
    ),
    tour: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#F5F2ED"/>
        <circle cx="24" cy="24" r="14" stroke="#8C7343" strokeWidth="2"/>
        <path d="M24 10V38" stroke="#8C7343" strokeWidth="1.5"/>
        <path d="M10 24H38" stroke="#8C7343" strokeWidth="1.5"/>
        <path d="M16 14C20 18 20 30 16 34" stroke="#8C7343" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 14C28 18 28 30 32 34" stroke="#8C7343" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="3" fill="#8C7343"/>
      </svg>
    )
  }

  return icons[icon] || (
    <div className={`${className} bg-[#F5F2ED] rounded-lg flex items-center justify-center`}>
      <span className="text-[#8C7343] text-lg">●</span>
    </div>
  )
}

export default ServiceIcon