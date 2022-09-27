import Header from "../components/Header"
import style from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
