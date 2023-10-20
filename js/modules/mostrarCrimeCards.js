a
import { createCrimeCard } from './crimesCard.js';

const cardContainer = document.querySelector('.cardContainer')

export function mostrarCrimeCards() {
    const existingData = JSON.parse(localStorage.getItem('crimeCards')) || [];

    for(const cardData of existingData) {
        
        const { tipo, data, descricao } = cardData
        const crimeCard = createCrimeCard(tipo, data, descricao);
        const deleteBtn = document.createElement('span');
        
        deleteBtn.classList.add('material-symbols-outlined')
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.innerHTML = 'close'
        deleteBtn.addEventListener('click', () => {
            cardContainer.removeChild(crimeCard)
            const cardIndex = existingData.indexOf(cardData);
            if (cardIndex !== -1) {
                existingData.splice(cardIndex, 1);
                localStorage.setItem('crimeCards', JSON.stringify(existingData));
            }
            })
        crimeCard.firstChild.append(deleteBtn)
        cardContainer.append(crimeCard)       
    }
}

