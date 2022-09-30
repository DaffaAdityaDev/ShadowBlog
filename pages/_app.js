import Header from "../components/Header"
import Container from '../container'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
