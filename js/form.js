import { createCrimeCard } from './crimesCard.js';
const addBtn = document.querySelector('#addBtn');
const container = document.querySelector('.container');
const cardContainer = document.querySelector('.cardContainer')

function mostrarCrimeCards() {
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
            // Update localStorage without the deleted card
            localStorage.setItem('crimeCards', JSON.stringify(existingData));
        }
        })

        crimeCard.append(deleteBtn)
        cardContainer.append(crimeCard)
        
    }
//<span id="removeBtn" class="material-symbols-outlined">close</span>

}

window.addEventListener('load', () => {
    mostrarCrimeCards();
});

addBtn.addEventListener('click', () => {

    container.style.pointerEvents = 'none';
    const form = document.createElement("form");
        form.innerHTML = `
            <form>
                <div class="formContainer">
                    <div class="formHeader">
                        <p>Cadastrar nova denúncia de crime ambiental</p>
                    </div>
                    <div class="formContent">
                        <section>
                        <label for="type">Tipo:</label>
                        <br>
                        <select name="type" id="type">
                            <option value="Caça Ilegal">Caça Ilegal</option>
                            <option value="Poluição de Águas">Poluição de Águas</option>
                            <option value="Queimada">Queimada</option>
                            <option value="Descarte inadequado de Lixo">Descarte inadequado de Lixo</option>
                        </select>
                        </section>
                        <section>
                            <label for="date">Data:</label>
                            <br>
                            <input type="date" name="date" id="date">
                        </section>
                        <section>
                            <label for="description">Descrição:</label>
                            <br>
                            <textarea name="description" id="description" cols="30" rows="10" maxlength="180"></textarea>
                        </section>
                    </div>
                    <div class="formFooter">
                        <button class="addCrimeBtn">
                            <span style="font-size: 36px" class="material-symbols-outlined">
                                add
                            </span>
                            Cadastrar
                        </button>
                        <button class="cancelBtn">
                            <span style="font-size: 36px" class="material-symbols-outlined">
                                close
                            </span>
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>       
        `;

        document.body.insertAdjacentHTML('afterbegin', form.innerHTML);
        container.classList.add('blur')

        const cancelBtn = document.querySelector('.cancelBtn')
        const formContainer = document.querySelector('.formContainer')
        cancelBtn.addEventListener('click', () => {
            formContainer.style.display = 'none';
            container.classList.remove('blur')
            container.style.pointerEvents = 'auto';
        })

        const addCrimeBtn = document.querySelector('.addCrimeBtn');
        addCrimeBtn.addEventListener('click', () => {
            const tipo = document.querySelector('#type').value;
            let data = document.querySelector('#date').value;           
            const descricao = document.querySelector('#description').value;           
            if(data == '' || descricao == '') {
                alert('Por favor, preencha a data e/ou a descrição!')
                return
            }
            let reversedData = data.split('-')
            data = `${reversedData[2]}/${reversedData[1]}/${reversedData[0]}`


            const crimeCard = createCrimeCard(tipo, data, descricao);

            cardContainer.append(crimeCard);

            const cardData = {
                tipo,
                data,
                descricao,
            };

            const existingData = JSON.parse(localStorage.getItem('crimeCards')) || [];

            existingData.push(cardData);
            localStorage.setItem('crimeCards', JSON.stringify(existingData));
            
            const deleteBtn = document.createElement('span');
            deleteBtn.classList.add('material-symbols-outlined')
            deleteBtn.classList.add('deleteBtn')
            deleteBtn.innerHTML = 'close'
            deleteBtn.addEventListener('click', () => {
            cardContainer.removeChild(crimeCard)
            const cardIndex = existingData.indexOf(cardData);
            if (cardIndex !== -1) {
                existingData.splice(cardIndex, 1);
                // Update localStorage without the deleted card
                localStorage.setItem('crimeCards', JSON.stringify(existingData));
            }
            })

            crimeCard.append(deleteBtn)
            cardContainer.append(crimeCard)

            formContainer.style.display = 'none';
            container.classList.remove('blur')
            container.style.pointerEvents = 'auto';
        });
        
})

