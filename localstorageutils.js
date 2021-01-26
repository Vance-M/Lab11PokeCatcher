const pokemonRecords = 'pokemonRecords';
import { findBySpeciesId } from './utils.js';

export function getPokeRecords(){
    let record = JSON.parse(localStorage.getItem(pokemonRecords));

    if (!record) {
        record = [];
        localStorage.setItem(pokemonRecords, JSON.stringify(record));
    }

    return record;
}

export function setPokeRecords(newRecord) {
    localStorage.setItem(pokemonRecords, JSON.stringify(newRecord));
}

export function incrementEncountered(species_id) {
    const record = getPokeRecords();

    const pokemon = findBySpeciesId(record, species_id);

    if (!pokemon) {
        const newRecord = {
            species_id: species_id,
            Encountered: 1,
            Captured: 0,
        };
        record.push(newRecord);
    } else {
        pokemon.Encountered++;
    }

    setPokeRecords(record);
}

export function incrementCaptured(species_id) {
    const record = getPokeRecords();
    const pokemon = findBySpeciesId(record, species_id);
    pokemon.Captured++;
    setPokeRecords(record);
} 