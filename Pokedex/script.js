const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const Body = document.getElementById("img-body");
const pokeImg = document.getElementById("poke-img");
const pokeType = document.getElementById("types");

const resetData = () => {

    pokeType.textContent = "";
}

const fetchData = async () => {
    try {
        const userInput = searchInput.value.toLowerCase()
        const PokeApi = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${userInput}`;
        const res = await fetch(PokeApi);
        const data = await res.json();

        const { name, id, height, weight, sprites, stats, types } = data;


        pokemonName.textContent = name.toUpperCase();
        pokemonId.textContent = `#${id}`;
        pokeWeight.textContent = `Weight: ${weight}`;
        pokeHeight.textContent = `Height: ${height}`;

        const { front_default } = sprites;
        pokeImg.src = front_default;
        pokeImg.alt = name;

        const typeNames = types.map(el => el.type.name);
        typeNames.forEach(el => {
            pokeType.innerHTML += `<span id="${el}">${el.toUpperCase()}</span>`;
        })

        const pokeStats = stats.map(el => ({ key: el.stat.name, value: el.base_stat }));

        pokeStats.forEach(el => {
            const element = document.getElementById(`${el.key}`)
            if (element) {
                element.textContent = el.value;
            }
        })

    } catch (err) {
        alert("Pokemon not found");
    }
}


const pokemonData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

}


searchBtn.addEventListener("click", () => {
    resetData();
    fetchData();
});