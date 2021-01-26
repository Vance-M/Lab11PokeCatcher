// import functions and grab DOM elements

import { setThreePokemon } from './utils.js';
import { setPokeRecords } from './localstorageutils.js';

// initialize state
setPokeRecords([]);
// set event listeners to update state and DOM

setThreePokemon();