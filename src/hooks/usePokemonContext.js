import { useContext } from 'react'
import { PokemonContext } from '../contexts/pokemonContext'

export const usePokemonContext = () => {
  const context = useContext(PokemonContext)

  // Si context es undefined, es que la parte de la aplicación que llama al custom hook no está envuelta en el provider del contexto, y por tanto no puede leerlo
  if (context === undefined) {
    throw new Error('usePokemonContext must be used within a PokemonProvider')
  }

  return context
}
