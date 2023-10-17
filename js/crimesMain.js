import crimes from './crimes.js'
import { createCrimeCard } from './crimesCard.js'

const crimesContainer = document.querySelector('.cardContainer')
crimesContainer.innerHTML = crimes.map((crime) => createCrimeCard(crime)).join('');