import { getPokeRecords } from '../localstorageutils.js';
let pokeResults = document.getElementById('poke-results');

console.log(getPokeRecords());

const pokeGetResults = JSON.stringify(getPokeRecords());
pokeResults.textContent = pokeGetResults;
