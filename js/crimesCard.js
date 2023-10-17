export function createCrimeCard(tipo, data, descricao) {
    // return `
    // <div class="card">
    //     <section class="cardTitle">
    //         <h3>${tipo}</h3>
    //     </section>
    //     <section class="cardContent">
    //         <p>${data}</p>
    //         <hr>
    //         <p>${descricao}</p>
    //     </section>
    // </div>
    // `
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