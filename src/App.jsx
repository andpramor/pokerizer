import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import { Home } from './components/pages/Home/Home'
import { About } from './components/pages/About/About'
import { Error404 } from './components/pages/Error404/Error404'

function App() {
  return (
    <BrowserRouter basename='/pokerizer'>
      <div className='app'>
        <Header />
        <main
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Routes>
            <Route
              path='/'
              element={<Home />}
              errorElement={<Error404 />}
            />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
