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
  galar: { name: '', url: `${POKEDEX_ENDPOINT}/27/` },
  'isle-of-armor': { name: 'Isle of Armor', url: `${POKEDEX_ENDPOINT}/28/` },
  'crown-tundra': { name: 'Crown Tundra', url: `${POKEDEX_ENDPOINT}/29/` },
  hisui: { name: 'Hisui', url: `${POKEDEX_ENDPOINT}/30/` },
  paldea: { name: 'Paldea', url: `${POKEDEX_ENDPOINT}/31/` },
  kitakami: { name: 'Kitakami', url: `${POKEDEX_ENDPOINT}/32/` },
  blueberry: { name: 'Blueberry', url: `${POKEDEX_ENDPOINT}/33/` }
}
