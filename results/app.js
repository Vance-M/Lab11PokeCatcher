import { getPokeRecords } from '../localstorageutils.js';
import { pokemon } from '../Pokedata.js';
import { findBySpeciesId } from '../utils.js';
import { makeLabelsArray, makeEncounteredArray, makeCapturedArray } from './mungeUtils.js';
const ctx = document.getElementById('myChart').getContext('2d');
const pokeGetResults = getPokeRecords();


var chart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: makeLabelsArray(pokeGetResults), // LABELS ARRAY GOES HERE
        datasets: [
            {
                label: '# of times seen',
                data: makeEncounteredArray(pokeGetResults), // DATA ARRAY GOES HERE
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            },
            {
                label: '# of times caught',
                data: makeCapturedArray(pokeGetResults), // DATA ARRAY GOES HERE
                backgroundColor: 'lightblue',
                borderColor: 'steelblue',
                borderWidth: 2
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            // create x axis with step size 1 to show integers instead of ugly decimals
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});


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
    const nameTd = document.createElement('td');
    const image = document.createElement('img');
    image.src = pokeBase.url_image;
    image.classList.add('pokemon-img');
    


    nameTd.textContent = pokeBase.pokemon;
    idTd.textContent = pokeGetResults.species_id;
    encounteredTd.textContent = encounteredA;
    capturedTd.textContent = capturedB;
    tr.append(nameTd.innerHTML);
    tr.append(idTd);
    tr.append(encounteredTd);
    tr.append(capturedTd);
    tr.append(image); 


    return tr;
}
