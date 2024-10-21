import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>
      <Header />
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        (Router placeholder)
      </main>
      <Footer />
    </div>
  )
}

export default App
