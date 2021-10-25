import '../styles/globals.sass'
import 'swiper/css'
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { FetchLoading } from '../components/ui/FetchLoading'
import { LoaderGear } from '../components/ui/LoaderGear'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function handleStart() {
    setLoading(true)
    
  }
  
  function handleStop() {
    setTimeout(() => {

      setLoading(false)
    }, 100)
  }
  function handleStopErr() {
  }

  useEffect(() => {
    
    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeError', handleStopErr)
    Router.events.on('routeChangeComplete', handleStop)
  }, [Router])
  return (
    <>
      {loading ? <LoaderGear /> : <Component {...pageProps} />}
    </>)

}

export default MyApp
