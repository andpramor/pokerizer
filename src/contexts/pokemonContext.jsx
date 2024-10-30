import { createContext } from 'react'
import { usePokemonList } from '../hooks/usePokemonList'

export const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const { pokemonList, loading } = usePokemonList()

  return (
    <PokemonContext.Provider value={{ pokemonList, loading }}>
      {children}
    </PokemonContext.Provider>
  )
}
