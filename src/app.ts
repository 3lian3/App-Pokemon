class Pokemon {
    constructor(public name: string, public health: number) {}
}

const pokemons: Pokemon[] = [
    new Pokemon('Arceus', 50),
    new Pokemon('Cyndaquil', 45),
    new Pokemon('Samurott', 25),
    new Pokemon('Shaymin', 60),
    new Pokemon('Zoroark', 30),
    new Pokemon('Zorua', 80),
];

    const updateHealthColor = (pokemonHealth: HTMLDivElement, health: number) => {
        if (health > 70) {
            pokemonHealth.classList.remove('bg-warning', 'bg-danger');
            pokemonHealth.classList.add('bg-success');
        } else if (health > 40) {
            pokemonHealth.classList.remove('bg-success', 'bg-danger');
            pokemonHealth.classList.add('bg-warning');
        } else {
            pokemonHealth.classList.remove('bg-success', 'bg-warning');
            pokemonHealth.classList.add('bg-danger');
        }
    };

const createPokemonCard = (pokemon: Pokemon, index: number) => {
    const pokemonCard = document.createElement('div');
    const pokemonImage = document.createElement('img');
    const pokemonName = document.createElement('h2');
    const pokemonHealth = document.createElement('div');
    const healButton  = document.createElement('button');

    pokemonCard.className = 'container';
    pokemonImage.className = 'pokemon-image';
    pokemonName.className = 'pokemon-name';
    pokemonHealth.className = 'progress-bar progress-bar-striped bg-info m-2 rounded-pill';
    healButton.className = 'btn btn-primary btn-lg m-2';
    pokemonHealth.style.transition = "width 1s ease-in-out";
    pokemonImage.src = `../ressources/${pokemon.name}.png`;

    healButton.innerHTML = 'Heal';
    pokemonHealth.innerHTML = `${pokemon.health}%`;
    pokemonHealth.style.width = `${pokemon.health}%`;
    pokemonName.innerHTML = pokemon.name;

    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonHealth);
    pokemonCard.appendChild(healButton);

    const updateHealthColor = (pokemonHealth: HTMLDivElement, health: number) => {
        if (health > 70) {
            pokemonHealth.classList.remove('bg-warning', 'bg-danger');
            pokemonHealth.classList.add('bg-success');
        } else if (health > 40) {
            pokemonHealth.classList.remove('bg-success', 'bg-danger');
            pokemonHealth.classList.add('bg-warning');
        } else {
            pokemonHealth.classList.remove('bg-success', 'bg-warning');
            pokemonHealth.classList.add('bg-danger');
        }
    };

    updateHealthColor(pokemonHealth, pokemon.health);

    healButton.addEventListener('click', () => {
        pokemonHealth.innerHTML = '100%';
        pokemonHealth.style.width = '100%';
        const audio = new Audio(`https://pokemoncries.com/cries-old/1.mp3`);
    audio.play();
    updateHealthColor(pokemonHealth, 100);
    });

    return pokemonCard;
};

const createAllPokemonCards = () => {
    const pokemonDeck = document.getElementById('pokemonDeck');
    if (!pokemonDeck) return;

    pokemons.forEach((pokemon, index) => {
        const pokemonCard = createPokemonCard(pokemon, index);
        pokemonDeck.appendChild(pokemonCard);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    createAllPokemonCards();

const healAllButton = document.getElementById('healAllButton');
if (healAllButton) {
    healAllButton.addEventListener('click', () => {
        document.querySelectorAll('.progress-bar').forEach((progressBar: HTMLDivElement) => {
            progressBar.innerHTML = '100%';
            progressBar.style.width = '100%';
            updateHealthColor(progressBar, 100);

            pokemons.forEach(pokemon => {
                const audio = new Audio(`https://pokemoncries.com/cries-old/1.mp3`);
                audio.play();
                });
            });
        });
    }
});
