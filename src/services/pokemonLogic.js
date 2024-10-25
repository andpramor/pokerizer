import {
  AVAILABLE_NUMBER_OF_POKEMON,
  POKEMON_BY_ID_ENDPOINT
} from './constants.js'

export const getRandomPokemonNumber = () => {
  return Math.floor(Math.random() * AVAILABLE_NUMBER_OF_POKEMON) + 1
}

export const getRandomPokemon = async () => {
  return await getPokemonById(getRandomPokemonNumber())
}

export const getPokemonById = async (pokemonId) => {
  try {
    if (String(pokemonId).charAt(0) === 0) {
      pokemonId = pokemonId.slice(1) // Accept 01 = 1, instead of 01 = Missingno.
    }

    const response = await fetch(`${POKEMON_BY_ID_ENDPOINT}${pokemonId}`)

    if (!response.ok) {
      if (response.status === 404) {
        const missingno = {
          name: 'MissingNo',
          sprite:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/MissingNo.svg/200px-MissingNo.svg.png',
          sprite_shiny:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/MissingNo.svg/200px-MissingNo.svg.png',
          types: ['normal'],
          // movePool: [{ name: 'Water gun', type: 'water' }, { name: 'Tackle', type: 'normal' }, { name: 'Sky attack', type: 'flying' }],
          stats: [
            { base: 33, name: 'Hp' },
            { base: 136, name: 'Attack' },
            { base: 0, name: 'Defence' },
            { base: 6, name: 'Special-attack' },
            { base: 6, name: 'Special-defence' },
            { base: 29, name: 'Speed' }
          ]
        }
        return missingno
      }
      throw new Error('Failed to fetch Pokémon data')
    }

    const data = await response.json()

    const { id, name, sprites, types, stats } = data

    const newTypes = types.map((type) => type.type.name)

    const newStats = stats.map((stat) => ({
      name: stat.stat.name
        .charAt(0)
        .toUpperCase()
        .concat(stat.stat.name.slice(1)),
      base: stat.base_stat
    }))

    // const newMoves = []
    // getRandomMovePool(moves).then(moves => {
    //   moves.forEach(move =>
    //     newMoves.push(move)
    //   )
    // })

    const newPokemon = {
      id,
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
