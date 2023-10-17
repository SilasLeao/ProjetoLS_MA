export function createCrimeCard(tipo, data, descricao) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('section');
    cardTitle.classList.add('cardTitle');
    cardTitle.innerHTML = `<h3>${tipo}</h3>`;

    const cardContent = document.createElement('section');
    cardContent.classList.add('cardContent');
    cardContent.innerHTML = `
        <p>${data}</p>
        <hr>
        <p>${descricao}</p>
    `

    card.appendChild(cardTitle)
    card.appendChild(cardContent)

    return card
}