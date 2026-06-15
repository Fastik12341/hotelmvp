export function generateRequestCode(serviceTitle, roomNumber) {
  const prefix = serviceTitle
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 4)
  
  const room = roomNumber.replace(/\D/g, '').slice(0, 4)
  const random = Math.floor(1000 + Math.random() * 9000)
  
  return `${prefix}-${room}-${random}`
}

export function saveRequest(requestData, requestCode) {
  const requests = JSON.parse(localStorage.getItem('hotelRequests') || '[]')
  requests.push({
    ...requestData,
    code: requestCode,
    status: 'new',
    id: Date.now(),
    createdAt: new Date().toISOString()
  })
  localStorage.setItem('hotelRequests', JSON.stringify(requests))
  return requests
}

export function getRequests() {
  return JSON.parse(localStorage.getItem('hotelRequests') || '[]')
}

export function updateRequestStatus(id, status) {
  const requests = getRequests()
  const updated = requests.map(r => r.id === id ? { ...r, status } : r)
  localStorage.setItem('hotelRequests', JSON.stringify(updated))
  return updated
}

export function deleteRequest(id) {
  const requests = getRequests().filter(r => r.id !== id)
  localStorage.setItem('hotelRequests', JSON.stringify(requests))
  return requests
}