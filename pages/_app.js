import Header from "../components/Header"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    {/* divs */}
      <div className="container max-xl m-auto"> 
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
