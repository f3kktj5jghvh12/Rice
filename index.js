/*
let results = []
let quoteValue = document.getElementById('quotes')
for (i =1; i < 15; i++) {
    fetch(`https://swapi.dev/api/planets/${i}/`)
    .then(response => response.json())
    .then(data => quoteValue.innerHTML +=`<p>${data.name}</p>`)
}
*/
async function GetPlanets() {
    try {
        const name = document.querySelector(".planet_results")
        const count = await fetch(`https://swapi.dev/api/planets`)
        .then(response => response.json())
        .then(data => data.count)
        const getrandom = Math.floor(Math.random() * count)
    
        console.log(getrandom)

        fetch(`https://swapi.dev/api/planets/${getrandom}/`)
        .then(response => response.json())
        .then(data => name.innerHTML +=`<p>Your random planet: ${data.name}</p>`)
    } catch(err){
        console.log(err)
    }
}

async function GetStarships() {
    try {
        const name = document.querySelector(".species_results");
        const count = await fetch(`https://swapi.dev/api/species`)
        .then(response => response.json())
        .then(data => data.count)
        const getrandom = Math.floor(Math.random() * count)
    
        console.log(getrandom)

        fetch(`https://swapi.dev/api/species/${getrandom}/`)
        .then(response => response.json())
        .then(data => name.innerHTML +=`<p>Your random species: ${data.name}</p>`)
    } catch (err) {
        console.log(err)
    }
}