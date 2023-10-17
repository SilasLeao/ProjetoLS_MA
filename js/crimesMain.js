// import crimes from './crimes.js'
// import { createCrimeCard } from './crimesCard.js'

// const crimesContainer = document.querySelector('.cardContainer')
// crimesContainer.innerHTML = crimes.map((crime) => createCrimeCard(crime)).join('');

import crimes from './crimes.js'
import { createCrimeCard } from './crimesCard.js'

const crimesContainer = document.querySelector('.cardContainer')
for (let index = 0; index < crimes.length; index++) {
    const crimeCard = createCrimeCard(crimes[index].tipo, crimes[index].data, crimes[index].descricao);
    crimesContainer.append(crimeCard)
}

