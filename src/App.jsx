import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import { Home } from './components/pages/Home/Home'
import { About } from './components/pages/About/About'
import { Error404 } from './components/pages/Error404/Error404'

function App() {
  const router = createBrowserRouter([
    {
      path: '/pokerizer',
      element: <Home />,
      errorElement: <Error404 />
    },
    {
      path: '/pokerizer/about',
      element: <About />
    }
  ])

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
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  )
}

export default App
