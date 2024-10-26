import './App.css'

import { HashRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import { Home } from './components/pages/Home/Home'
import { About } from './components/pages/About/About'
import { Error404 } from './components/pages/Error404/Error404'
import { RandomCard } from './components/pages/RandomCard/RandomCard'
import { PokemonDetail } from './components/Pokemon/PokemonDetail/PokemonDetail'

function App() {
  return (
    <HashRouter>
      <div className='app'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/randomPokemon' element={<RandomCard />} />
            <Route path='/about' element={<About />} />
            <Route path='/pokemonDetails/:pokemonId' element={<PokemonDetail />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
