import Header from "../components/Header"
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
      <div className="container max-xl m-auto">
        <Component {...pageProps} />
      </div>
    
    </>
  )
}

export default MyApp
