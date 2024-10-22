import { AVAILABLE_NUMBER_OF_POKEMON, POKEMON_BY_ID_ENDPOINT } from './constants.js'

const getRandomPokemonNumber = () => {
  return Math.floor(Math.random() * AVAILABLE_NUMBER_OF_POKEMON) + 1
}

export const getRandomPokemon = async () => {
  return await getPokemonById(getRandomPokemonNumber())
}

export const getPokemonById = async (id) => {
  try {
    if (Number(String(id).charAt(0)) === 0) {
      id = id.slice(1) // Accept 01 = 1, instead of 01 = Missingno.
    }

    const response = await fetch(`${POKEMON_BY_ID_ENDPOINT}${id}`)

    if (!response.ok) {
      if (response.status === 404) {
        const missingno = {
          name: 'MissingNo',
          sprite: '/missingno.webp',
          sprite_shiny: '/missingno.webp',
          types: ['normal'],
          // movePool: [{ name: 'Water gun', type: 'water' }, { name: 'Tackle', type: 'normal' }, { name: 'Sky attack', type: 'flying' }],
          stats: [
            { base: 33, name: 'hp' },
            { base: 136, name: 'attack' },
            { base: 0, name: 'defence' },
            { base: 6, name: 'special-attack' },
            { base: 6, name: 'special-defence' },
            { base: 29, name: 'speed' }
          ]
        }
        return missingno
      } else {
        throw new Error('Failed to fetch Pokémon data')
      }
    }

    const data = await response.json()

    const { name, sprites, types, stats } = data

    const newTypes = []
    types.forEach((type) => {
      newTypes.push(type.type.name)
    })

    const newStats = []
    stats.forEach((stat) => {
      newStats.push({ name: stat.stat.name, base: stat.base_stat })
    })

    // const newMoves = []
    // getRandomMovePool(moves).then(moves => {
    //   moves.forEach(move =>
    //     newMoves.push(move)
    //   )
    // })

    const newPokemon = {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      // sprite: sprites.front_default,
      sprite: sprites.other['official-artwork'].front_default,
      sprite_shiny: sprites.other['official-artwork'].front_shiny,
      types: newTypes,
      // movePool: newMoves,
      stats: newStats
    }
    return newPokemon
  } catch (error) {
    console.error('Error fetching pokemon data: ', error)
    throw error
  }
}


