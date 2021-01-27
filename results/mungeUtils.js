import { findBySpeciesId } from '../utils.js';
export function makeEncounteredArray(arrayOfObjects) {
    const encounteredArray = [];
    for (let item of arrayOfObjects) {

        encounteredArray.push(item.Encountered);
    }
    return encounteredArray;
}

export function makeCapturedArray(arrayOfObjects) {
    const capturedArray = [];
    for (let item of arrayOfObjects) {
        capturedArray.push(item.Captured);
    }
    return capturedArray;
}


export function makeLabelsArray(arrayOfObjects, pokemon) {

    const nameArray = [];
    for (let item of arrayOfObjects) {
        const pokeName = findBySpeciesId(pokemon, item.species_id);
        nameArray.push(pokeName.pokemon);
    }
    return nameArray;
}