import { useState, useEffect } from 'react'
import { getRequests, updateRequestStatus, deleteRequest } from '../../utils/requestUtils'
import { useLanguage } from '../../context/LanguageContext'

function AdminDashboard({ onLogout }) {
  const { t } = useLanguage()
  const [requests, setRequests] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => { loadRequests() }, [])

  const loadRequests = () => setRequests(getRequests().reverse())

  const handleStatusChange = (id, status) => {
    updateRequestStatus(id, status)
    loadRequests()
  }

  const handleDelete = (id) => {
    if (window.confirm(t.admin.delete + '?')) {
      deleteRequest(id)
      loadRequests()
    }
  }

  const statusLabels = {
    new: t.guestPanel.statusNew,
    confirmed: t.guestPanel.statusConfirmed,
    cancelled: t.guestPanel.statusCancelled,
    completed: t.guestPanel.statusCompleted
  }

  const statusColors = {
    new: 'bg-blue-100 text-blue-700',
    confirmed: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
    completed: 'bg-gray-100 text-gray-700'
  }

  const filteredRequests = filter === 'all' ? requests : requests.filter(r => r.status === filter)

  const filters = [
    { value: 'all', label: t.admin.all },
    { value: 'new', label: t.admin.new },
    { value: 'confirmed', label: t.admin.confirmed },
    { value: 'completed', label: t.admin.completed },
    { value: 'cancelled', label: t.admin.cancelled }
  ]

  return (
    <div className="min-h-screen bg-[#F5F2ED]" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
      <header className="bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-normal text-[#2E2E2E]">{t.admin.title}</h1>
            <p className="text-xs text-[#B0A89A]">{t.admin.subtitle}</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-[#8C7343]">{requests.length} {t.admin.requestsCount}</span>
            <button onClick={onLogout}
              className="bg-[#8C7343] text-white px-4 py-1.5 text-sm tracking-wider hover:bg-[#7A6338] transition-colors">
              {t.admin.logout}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <button key={f.value} onClick={() => setFilter(f.value)}
              className={`px-4 py-2 text-sm tracking-wide transition-colors duration-300 ${
                filter === f.value ? 'bg-[#8C7343] text-white' : 'bg-white text-[#6B6B6B] hover:bg-[#F0EDE7] border border-[#E5E0D8]'
              }`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {filteredRequests.length === 0 ? (
          <div className="bg-white border border-[#E5E0D8] p-16 text-center">
            <p className="text-[#B0A89A] text-lg">{t.admin.noRequests}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRequests.map(request => (
              <div key={request.id} className="bg-white border border-[#E5E0D8] p-6 hover:shadow-sm transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-normal text-[#2E2E2E] tracking-wider">{request.code}</span>
                    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${statusColors[request.status]}`}>
                      {statusLabels[request.status]}
                    </span>
                  </div>
                  <span className="text-sm text-[#B0A89A]">{new Date(request.createdAt).toLocaleString('ru-RU')}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div><span className="text-xs text-[#B0A89A] uppercase">{t.success.guestLabel}</span><p className="text-[#2E2E2E] mt-1">{request.guestName}</p></div>
                  <div><span className="text-xs text-[#B0A89A] uppercase">{t.success.roomLabel}</span><p className="text-[#2E2E2E] mt-1">{request.roomNumber}</p></div>
                  <div><span className="text-xs text-[#B0A89A] uppercase">{t.success.serviceLabel}</span><p className="text-[#2E2E2E] mt-1">{request.service}</p></div>
                  <div><span className="text-xs text-[#B0A89A] uppercase">{t.success.dateLabel} / {t.success.timeLabel}</span><p className="text-[#2E2E2E] mt-1">{request.date} / {request.time}</p></div>
                  <div><span className="text-xs text-[#B0A89A] uppercase">{t.success.guestsLabel}</span><p className="text-[#2E2E2E] mt-1">{request.guests}</p></div>
                  {request.comment && (
                    <div className="col-span-2 md:col-span-3">
                      <span className="text-xs text-[#B0A89A] uppercase">{t.success.commentLabel}</span>
                      <p className="text-[#2E2E2E] mt-1">{request.comment}</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E5E0D8]">
                  <span className="text-xs text-[#B0A89A] mr-2">{t.admin.status}:</span>
                  {['new', 'confirmed', 'completed', 'cancelled'].map(status => (
                    <button key={status} onClick={() => handleStatusChange(request.id, status)}
                      className={`px-3 py-1 text-xs transition-colors ${
                        request.status === status ? 'bg-[#8C7343] text-white' : 'bg-[#F5F2ED] text-[#6B6B6B] hover:bg-[#E5E0D8]'
                      }`}>
                      {statusLabels[status]}
                    </button>
                  ))}
                  <button onClick={() => handleDelete(request.id)}
                    className="ml-auto px-3 py-1 text-xs text-red-500 hover:bg-red-50 transition-colors">
                    {t.admin.delete}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard