import {
  AVAILABLE_NUMBER_OF_POKEMON,
  POKEMON_BY_ID_ENDPOINT,
  POKEMON_SPECIES_ENDPOINT
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
          ],
          games: []
        }
        return missingno
      }
      throw new Error('Failed to fetch Pokémon data')
    }

    const data = await response.json()

    const { id, name, sprites, game_indices, types, stats } = data

    const newTypes = types.map((type) => type.type.name)

    const newStats = stats.map((stat) => ({
      name: stat.stat.name
        .charAt(0)
        .toUpperCase()
        .concat(stat.stat.name.slice(1)),
      base: stat.base_stat
    }))

    const games = game_indices.map((game) => game.version.name)

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
      games,
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

export const getEvolutionChain = async (pokemonId) => {
  try {
    const response = await fetch(`${POKEMON_SPECIES_ENDPOINT}${pokemonId}`)
    if (!response.ok) throw new Error('Error fetching the species data')
    const data = await response.json()

    const { url } = data.evolution_chain

    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('Error fetching the evolution chain')
      const { chain } = await response.json()

      return extractEvolutionData(chain)
    } catch (error) {
      console.error('Failed to fetch the evolution chain')
      throw error
    }
  } catch (error) {
    console.error('Failed to fetch the species data:', error)
    throw error
  }
}

// Recursively traverse the evolution chain json to extract every pokémon in the chain, preserving the predecessor.
const extractEvolutionData = (evolutionChain) => {
  const groupedByStage = {};

  const traverseChain = ({ node, stage = 0 }) => {
    if (node.species && node.evolution_details) {
      const pokemonData = {
        id: node.species.url.match(/\/(\d+)\/$/)[1],
        name: node.species.name,
        trigger: node.evolution_details[0]?.trigger?.name || 'unknown',
        minLevel: node.evolution_details[0]?.min_level || null,
        item: node.evolution_details[0]?.item?.name || null
      };

      // Add the current Pokémon under its stage in the grouped object
      if (!groupedByStage[stage]) {
        groupedByStage[stage] = [];
      }
      groupedByStage[stage].push(pokemonData);
    }

    // Traverse each subsequent evolution, incrementing the stage
    node.evolves_to.forEach((evolution) =>
      traverseChain({ node: evolution, stage: stage + 1 })
    );
  };

  // Initial call with the full evolution chain starting at stage 0
  traverseChain({ node: evolutionChain });

  return groupedByStage;
};

