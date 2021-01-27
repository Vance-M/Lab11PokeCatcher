
import { pokemon } from './Pokedata.js';
import { incrementEncountered, incrementCaptured, } from './localstorageutils.js';

let battles = 0;

export function findBySpeciesId(array, id) {
    for (let item of array) {
        if (item.species_id === id) return item;
    }
}

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function setThreePokemon() {
    battles++;

    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();


    while (pokeOne.species_id === pokeTwo.species_id || pokeOne.species_id === pokeThree.species_id || pokeTwo.species_id === pokeThree.species_id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }

    const img1 = renderPokemonImage(pokeOne);
    const img2 = renderPokemonImage(pokeTwo);
    const img3 = renderPokemonImage(pokeThree);

    incrementEncountered(pokeOne.species_id);
    incrementEncountered(pokeTwo.species_id);
    incrementEncountered(pokeThree.species_id);


    const div = document.getElementById('pokemon');

    div.textContent = '';

    div.append(img1, img2, img3);
}

export function renderPokemonImage(pokemonImage){
    const image = document.createElement('img');

    image.src = pokemonImage.url_image;

    image.classList.add('pokemon-img');

    image.addEventListener('click', () => {
        incrementCaptured(pokemonImage.species_id);

        if (battles < 5) {
            setThreePokemon();
        } else {
            window.location = 'results';
        }
    
    });

    return image;
}