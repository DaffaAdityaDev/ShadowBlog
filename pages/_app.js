import Header from "../components/Header"
import '../styles/globals.css'
import { ThemeProvider } from "next-themes"
import ToggleButton from "../components/Button/ToggleDark"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider attribute="class">
    <div className="fixed top-1/2 right-0 m-5 z-10">
      <ToggleButton />
    </div>
    <Header />
      <div className="container max-xl m-auto relative"> 
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
    </>
  )
}

export default MyApp
