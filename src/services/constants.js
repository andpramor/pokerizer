export const AVAILABLE_NUMBER_OF_POKEMON = 1025

export const POKEMON_BY_ID_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'

export const TYPES = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'stellar'
]

export const POKEMON_TYPE_URLS = [
  'https://pokeapi.co/api/v2/type/normal/',
  'https://pokeapi.co/api/v2/type/fighting/',
  'https://pokeapi.co/api/v2/type/flying/',
  'https://pokeapi.co/api/v2/type/poison/',
  'https://pokeapi.co/api/v2/type/ground/',
  'https://pokeapi.co/api/v2/type/rock/',
  'https://pokeapi.co/api/v2/type/bug/',
  'https://pokeapi.co/api/v2/type/ghost/',
  'https://pokeapi.co/api/v2/type/steel/',
  'https://pokeapi.co/api/v2/type/fire/',
  'https://pokeapi.co/api/v2/type/water/',
  'https://pokeapi.co/api/v2/type/grass/',
  'https://pokeapi.co/api/v2/type/electric/',
  'https://pokeapi.co/api/v2/type/psychic/',
  'https://pokeapi.co/api/v2/type/ice/',
  'https://pokeapi.co/api/v2/type/dragon/',
  'https://pokeapi.co/api/v2/type/dark/',
  'https://pokeapi.co/api/v2/type/fairy/',
  'https://pokeapi.co/api/v2/type/stellar/'
]

export const POKEMON_LIST_ENDPOINT = `https://pokeapi.co/api/v2/pokemon/?limit=${AVAILABLE_NUMBER_OF_POKEMON}`

export const POKEMON_SPECIES_ENDPOINT =
  'https://pokeapi.co/api/v2/pokemon-species/'

export const SPRITE_IMG =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

export const SPRITE_SHINY_IMG =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/'

export const GAMES = {
  red: 'Red',
  blue: 'Blue',
  yellow: 'Yellow',
  gold: 'Gold',
  silver: 'Silver',
  crystal: 'Crystal',
  ruby: 'Ruby',
  sapphire: 'Sapphire',
  emerald: 'Emerald',
  firered: 'Fire Red',
  leafgreen: 'Leaf Green',
  diamond: 'Diamond',
  pearl: 'Pearl',
  platinum: 'Platinum',
  heartgold: 'Heart Gold',
  soulsilver: 'Soul Silver',
  black: 'Black',
  white: 'White',
  colosseum: 'Colosseum',
  xd: 'XD',
  'black-2': 'Black 2',
  'white-2': 'White 2',
  x: 'X',
  y: 'Y',
  'omega-ruby': 'Omega Ruby',
  'alpha-sapphire': 'Alpha Sapphire',
  sun: 'Sun',
  moon: 'Moon',
  'ultra-sun': 'Ultra Sun',
  'ultra-moon': 'Ultra Moon',
  'lets-go-pikachu': "Let's go Pikachu",
  'lets-go-eevee': "Let's go Eevee",
  sword: 'Sword',
  shield: 'Shield',
  'the-isle-of-armor': 'The Isle of Armor',
  'the-crown-tundra': 'The Crown Tundra',
  'brilliant-diamond': 'Brilliant Diamond',
  'shining-pearl': 'Shining Pearl',
  'legends-arceus': 'Legends: Arceus',
  scarlet: 'Scarlet',
  violet: 'Violet',
  'the-teal-mask': 'The Teal Mask',
  'the-indigo-disk': 'The Indigo Disk'
}

const POKEDEX_ENDPOINT = 'https://pokeapi.co/api/v2/pokedex'

export const POKEDEXES = {
  national: { name: 'National', url: `${POKEDEX_ENDPOINT}/1/` },
  kanto: { name: 'Kanto', url: `${POKEDEX_ENDPOINT}/2/` },
  'original-johto': { name: 'Johto', url: `${POKEDEX_ENDPOINT}/3/` },
  hoenn: { name: 'Hoenn', url: `${POKEDEX_ENDPOINT}/4/` },
  'original-sinnoh': { name: 'Sinnoh', url: `${POKEDEX_ENDPOINT}/5/` },
  'extended-sinnoh': {
    name: 'Sinnoh (Updated)',
    url: `${POKEDEX_ENDPOINT}/6/`
  },
  'updated-johto': { name: 'Johto (Updated)', url: `${POKEDEX_ENDPOINT}/7/` },
  'original-unova': { name: 'Unova', url: `${POKEDEX_ENDPOINT}/8/` },
  'updated-unova': { name: 'Unova (Updated)', url: `${POKEDEX_ENDPOINT}/9/` },
  'conquest-gallery': {
    name: 'Conquest Gallery',
    url: `${POKEDEX_ENDPOINT}/11/`
  },
  'kalos-central': { name: 'Central Kalos', url: `${POKEDEX_ENDPOINT}/12/` },
  'kalos-coastal': { name: 'Coastal Kalos', url: `${POKEDEX_ENDPOINT}/13/` },
  'kalos-mountain': { name: 'Mountain Kalos', url: `${POKEDEX_ENDPOINT}/14/` },
  'updated-hoenn': { name: 'Hoenn (Updated)', url: `${POKEDEX_ENDPOINT}/15/` },
  'original-alola': { name: 'Alola', url: `${POKEDEX_ENDPOINT}/16/` },
  'original-melemele': { name: 'Melemele', url: `${POKEDEX_ENDPOINT}/17/` },
  'original-akala': { name: 'Akala', url: `${POKEDEX_ENDPOINT}/18/` },
  'original-ulaula': { name: 'Ulaula', url: `${POKEDEX_ENDPOINT}/19/` },
  'original-poni': { name: 'Poni', url: `${POKEDEX_ENDPOINT}/20/` },
  'updated-alola': { name: 'Alola (Updated)', url: `${POKEDEX_ENDPOINT}/21/` },
  'updated-melemele': {
    name: 'Melemele (Updated)',
    url: `${POKEDEX_ENDPOINT}/22/`
  },
  'updated-akala': { name: 'Akala (Updated)', url: `${POKEDEX_ENDPOINT}/23/` },
  'updated-ulaula': {
    name: 'Ulaula (Updated)',
    url: `${POKEDEX_ENDPOINT}/24/`
  },
  'updated-poni': { name: 'Poni (Updated)', url: `${POKEDEX_ENDPOINT}/25/` },
  'letsgo-kanto': { name: "Let's go Kanto", url: `${POKEDEX_ENDPOINT}/26/` },
  galar: { name: 'Galar', url: `${POKEDEX_ENDPOINT}/27/` },
  'isle-of-armor': { name: 'Isle of Armor', url: `${POKEDEX_ENDPOINT}/28/` },
  'crown-tundra': { name: 'Crown Tundra', url: `${POKEDEX_ENDPOINT}/29/` },
  hisui: { name: 'Hisui', url: `${POKEDEX_ENDPOINT}/30/` },
  paldea: { name: 'Paldea', url: `${POKEDEX_ENDPOINT}/31/` },
  kitakami: { name: 'Kitakami', url: `${POKEDEX_ENDPOINT}/32/` },
  blueberry: { name: 'Blueberry', url: `${POKEDEX_ENDPOINT}/33/` }
}
