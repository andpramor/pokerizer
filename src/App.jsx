import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import { Home } from './components/pages/Home/Home'
import { About } from './components/pages/About/About'
import { Error404 } from './components/pages/Error404/Error404'
import { RandomCard } from './components/pages/RandomCard/RandomCard'

function App() {
  return (
    <BrowserRouter basename='/pokerizer'>
      <div className='app'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/randomPokemon' element={<RandomCard />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
