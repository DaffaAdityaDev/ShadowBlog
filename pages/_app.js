import Header from "../components/Header"
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <ChakraProvider>
      <Container maxW='1200px' >
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
    
    </>
  )
}

export default MyApp
