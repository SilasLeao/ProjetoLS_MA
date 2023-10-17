const addBtn = document.querySelector('#addBtn');
const container = document.querySelector('.container');

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
                            <option value="cacaIlegal">Caça Ilegal</option>
                            <option value="poluicaoAgua">Poluição de Águas</option>
                            <option value="queimada">Queimada</option>
                            <option value="lixo">Descarte inadequado de Lixo</option>
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
                            <textarea name="description" id="description" cols="30" rows="10"></textarea>
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

        // Append the form to the body
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
            alert('a')
        });
})

