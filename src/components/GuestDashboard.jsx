function GuestDashboard({ roomNumber, requests, onLogout }) {
  const statusLabels = {
    new: 'Новая',
    confirmed: 'Подтверждена',
    cancelled: 'Отменена',
    completed: 'Выполнена'
  }

  const statusColors = {
    new: 'bg-blue-100 text-blue-700',
    confirmed: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
    completed: 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED]" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
      
      {/* Хедер */}
      <header className="bg-white border-b border-[#E5E0D8]">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-normal text-[#2E2E2E]">Мои заявки</h1>
            <p className="text-xs text-[#B0A89A]">Комната {roomNumber}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#8C7343]">
              {requests.length} заявок
            </span>
            <button
              onClick={onLogout}
              className="bg-[#8C7343] text-white px-4 py-1.5 text-sm tracking-wider hover:bg-[#7A6338] transition-colors"
            >
              Выйти
            </button>
          </div>
        </div>
      </header>

      {/* Список заявок */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {requests.length === 0 ? (
          <div className="bg-white border border-[#E5E0D8] p-16 text-center">
            <p className="text-[#B0A89A] text-lg">Заявок нет</p>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map(request => (
              <div
                key={request.id}
                className="bg-white border border-[#E5E0D8] p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium text-[#2E2E2E] tracking-wider">
                      {request.code}
                    </span>
                    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${statusColors[request.status]}`}>
                      {statusLabels[request.status]}
                    </span>
                  </div>
                  <span className="text-sm text-[#B0A89A]">
                    {new Date(request.createdAt).toLocaleString('ru-RU')}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <span className="text-xs text-[#B0A89A] uppercase">Услуга</span>
                    <p className="text-[#2E2E2E] mt-1 text-sm">{request.service}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#B0A89A] uppercase">Дата</span>
                    <p className="text-[#2E2E2E] mt-1 text-sm">{request.date}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#B0A89A] uppercase">Время</span>
                    <p className="text-[#2E2E2E] mt-1 text-sm">{request.time}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#B0A89A] uppercase">Гостей</span>
                    <p className="text-[#2E2E2E] mt-1 text-sm">{request.guests}</p>
                  </div>
                  {request.comment && (
                    <div className="col-span-2 md:col-span-4">
                      <span className="text-xs text-[#B0A89A] uppercase">Комментарий</span>
                      <p className="text-[#2E2E2E] mt-1 text-sm">{request.comment}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default GuestDashboard