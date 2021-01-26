import { getPokeRecords } from '../localstorageutils.js';
import { pokemon } from '../Pokedata.js';
import { findBySpeciesId } from '../utils.js';



const pokeGetResults = getPokeRecords();

const table = document.querySelector('table');

for (let item of pokeGetResults) {
    const tableRowDOM = renderLineItems(item);
    table.append(tableRowDOM);
}

export function renderLineItems(pokeGetResults) {
    const encounteredA = pokeGetResults.Encountered;
    const capturedB = pokeGetResults.Captured;
    const tr = document.createElement('tr');

    const pokeBase = findBySpeciesId(pokemon, pokeGetResults.species_id);

    const idTd = document.createElement('td');
    const encounteredTd = document.createElement('td');
    const capturedTd = document.createElement('td');
    const image = document.createElement('img');
    image.src = pokeBase.url_image;
    image.classList.add('pokemon-img');

    idTd.textContent = pokeGetResults.species_id;
    encounteredTd.textContent = encounteredA;
    capturedTd.textContent = capturedB;
    tr.append(idTd);
    tr.append(encounteredTd);
    tr.append(capturedTd);
    tr.append(image); 


    return tr;
}
