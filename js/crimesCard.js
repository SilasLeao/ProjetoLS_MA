export function createCrimeCard(crime) {
    return `
    <div class="card">
        <section class="cardTitle">
            <h3>${crime.tipo}</h3>
        </section>
        <section class="cardContent">
            <p>${crime.data}</p>
            <hr>
            <p>${crime.descricao}</p>
        </section>
    </div>
    `
}