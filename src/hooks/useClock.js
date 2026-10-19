import { useEffect, useState } from 'react'

export default function useClock(timeZone) {
  const read = () => {
    try {
      return new Intl.DateTimeFormat('es-MX', { hour: 'numeric', minute: '2-digit', hour12: false, timeZone }).format(new Date())
    } catch { return '--:--' }
  }
  const [time, setTime] = useState(read)
  useEffect(() => {
    const id = setInterval(() => setTime(read()), 30000)
    return () => clearInterval(id)
  }, [timeZone])
  return time
}
