a
export function criarAcaoCard(acao) {
    return `
    <div class="card">
        <div class="cardImg" style="background-image: url(${acao.url})">
        </div>
        <div class="cardTitle">
            <h3>
                ${acao.titulo}
            </h3>
        </div>
        <hr>
        <div class="cardContent">
            ${acao.conteudo}
        </div>
        <a href="${acao.linkBtn}">
            <button>
                Saiba mais
            </button>
        </a>    
    </div>
    `
}