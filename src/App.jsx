import './App.css'
import { Navbar } from './components/navbar.jsx'
import { AcortadorTitle } from './components/cuttifyTitle.jsx'
import { Acortador } from './components/cuttifyInput.jsx'
import { Footer } from './components/footer.jsx'

export function App () {
  return (
    <>
      <Navbar />
      <main>
        <AcortadorTitle />
        <Acortador />
      </main>
      <Footer />
    </>
  )
}
