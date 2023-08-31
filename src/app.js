var Pokemon = /** @class */ (function () {
    function Pokemon(name, health) {
        this.name = name;
        this.health = health;
    }
    return Pokemon;
}());
var pokemons = [
    new Pokemon('Arceus', 50),
    new Pokemon('Cyndaquil', 45),
    new Pokemon('Samurott', 25),
    new Pokemon('Shaymin', 60),
    new Pokemon('Zoroark', 30),
    new Pokemon('Zorua', 80),
];
var updateHealthColor = function (pokemonHealth, health) {
    if (health > 70) {
        pokemonHealth.classList.remove('bg-warning', 'bg-danger');
        pokemonHealth.classList.add('bg-success');
    }
    else if (health > 40) {
        pokemonHealth.classList.remove('bg-success', 'bg-danger');
        pokemonHealth.classList.add('bg-warning');
    }
    else {
        pokemonHealth.classList.remove('bg-success', 'bg-warning');
        pokemonHealth.classList.add('bg-danger');
    }
};
var createPokemonCard = function (pokemon, index) {
    var pokemonCard = document.createElement('div');
    var pokemonImage = document.createElement('img');
    var pokemonName = document.createElement('h2');
    var pokemonHealth = document.createElement('div');
    var healButton = document.createElement('button');
    pokemonCard.className = 'container';
    pokemonImage.className = 'pokemon-image';
    pokemonName.className = 'pokemon-name';
    pokemonHealth.className = 'progress-bar progress-bar-striped bg-info m-2 rounded-pill';
    healButton.className = 'btn btn-primary btn-lg m-2';
    pokemonHealth.style.transition = "width 1s ease-in-out";
    pokemonImage.src = "../ressources/".concat(pokemon.name, ".png");
    healButton.innerHTML = 'Heal';
    pokemonHealth.innerHTML = "".concat(pokemon.health, "%");
    pokemonHealth.style.width = "".concat(pokemon.health, "%");
    pokemonName.innerHTML = pokemon.name;
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonHealth);
    pokemonCard.appendChild(healButton);
    var updateHealthColor = function (pokemonHealth, health) {
        if (health > 70) {
            pokemonHealth.classList.remove('bg-warning', 'bg-danger');
            pokemonHealth.classList.add('bg-success');
        }
        else if (health > 40) {
            pokemonHealth.classList.remove('bg-success', 'bg-danger');
            pokemonHealth.classList.add('bg-warning');
        }
        else {
            pokemonHealth.classList.remove('bg-success', 'bg-warning');
            pokemonHealth.classList.add('bg-danger');
        }
    };
    updateHealthColor(pokemonHealth, pokemon.health);
    healButton.addEventListener('click', function () {
        pokemonHealth.innerHTML = '100%';
        pokemonHealth.style.width = '100%';
        var audio = new Audio("https://pokemoncries.com/cries-old/1.mp3");
        audio.play();
        updateHealthColor(pokemonHealth, 100);
    });
    return pokemonCard;
};
var createAllPokemonCards = function () {
    var pokemonDeck = document.getElementById('pokemonDeck');
    if (!pokemonDeck)
        return;
    pokemons.forEach(function (pokemon, index) {
        var pokemonCard = createPokemonCard(pokemon, index);
        pokemonDeck.appendChild(pokemonCard);
    });
};
document.addEventListener('DOMContentLoaded', function () {
    createAllPokemonCards();
    var healAllButton = document.getElementById('healAllButton');
    if (healAllButton) {
        healAllButton.addEventListener('click', function () {
            document.querySelectorAll('.progress-bar').forEach(function (progressBar) {
                progressBar.innerHTML = '100%';
                progressBar.style.width = '100%';
                updateHealthColor(progressBar, 100);
                pokemons.forEach(function (pokemon) {
                    var audio = new Audio("https://pokemoncries.com/cries-old/1.mp3");
                    audio.play();
                });
            });
        });
    }
});
