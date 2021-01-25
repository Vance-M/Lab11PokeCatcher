// import { pokemon } from './Pokedata.js';


export function findBySpeciesId(array, id) {
    for (let item of array) {
        if (item.species_id === id) return item;
    }
}