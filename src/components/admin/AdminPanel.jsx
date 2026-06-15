// src/components/admin/AdminPanel.jsx

import { useState } from 'react'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'

function AdminPanel({ onLogout }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <AdminLogin 
        onLogin={setIsLoggedIn} 
        onBack={onLogout} 
      />
    )
  }

  return (
    <AdminDashboard 
      onLogout={() => { 
        setIsLoggedIn(false)
        onLogout() 
      }} 
    />
  )
}

export default AdminPanel