import { useEffect, useState } from "react"

function useOnlineStatus() {
  const [ isOnline, setIsOnline ] = useState<boolean>( navigator.onLine )

  useEffect( () => {
    const handleOnline = () => setIsOnline( true )
    const handleOffline = () => setIsOnline( false )

    // Add event listeners
    window.addEventListener( "online", handleOnline )
    window.addEventListener( "offline", handleOffline )

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener( "online", handleOnline )
      window.removeEventListener( "offline", handleOffline )
    }
  }, [] )

  return isOnline
}

export default useOnlineStatus
