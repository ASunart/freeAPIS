const fetchFact = document.querySelector('#fact')
const factText = document.querySelector('#factText');

async function getFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        factText.innerHTML = `<p>${data.fact}</p>`;
    } catch (error) {
     console.error(error);   
    }
}

fetchFact.addEventListener('click', getFact);


const fetchDog = document.querySelector('#dog');
const dogImage = document.querySelector('#dogImage');

async function getDog() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        dogImage.innerHTML = `<img src="${data.message}">`;
    } catch (error) {
        console.error(error)
    }
}

fetchDog.addEventListener('click', getDog);

const fetchPopulation = document.querySelector('#us');
const showPopulation = document.querySelector('#usPopu');

async function getPopulation(){
    try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await response.json();
        showPopulation.innerHTML = `<p>The population for ${data.data[0].Nation} in ${data.data[0]["ID Year"]} is ${data.data[0].Population} people</p>`;
    } catch (error) {
        console.error(error);
    }
}

fetchPopulation.addEventListener('click', getPopulation);

const fetchBitcoin = document.querySelector('#bitcoin');
const bitcoinPrice = document.querySelector('#bitPrice');

async function getBitPrice(){
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        console.log(data)
        bitcoinPrice.innerHTML = `<p>The current price of Bitcoin is ${data.bpi.USD.rate} american dollars </p>`;
    } catch (error) {
        console.error(error);
    }
}

fetchBitcoin.addEventListener('click', getBitPrice);

const fetchUser = document.querySelector('#user');
const randomUser = document.querySelector('#randomUser');

async function getUser(){
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        console.log(data)
        randomUser.innerHTML = `<img src="${data.results[0].picture.large}"/>
        <h3>${data.results[0].name.first} ${data.results[0].name.last}</h3>
        `;
    } catch (error) {
        console.error(error);
    }
}

fetchUser.addEventListener('click', getUser);