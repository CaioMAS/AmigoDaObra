import { inputValues } from './infrastructure/inputValues'

const createResultElement = (text = `No result found`) => {
    const resultDiv = document.querySelector('#res');
    const newParagraphElement = document.createElement('p');
    newParagraphElement.innerText = text;
    newParagraphElement.classList = 'pClass';
    resultDiv.appendChild(newParagraphElement);
}

const clearResultElement = () => {
    const resultElement = document.querySelector('#res');
    const paragraphElement = document.querySelector('#res p');
    resultElement.removeChild(paragraphElement);
}

const clearInput = () => {
    /* Object.values(inputValues).map(elementId => {...}) */
    [`propCimento`, `propAreia`, `propBrita`, `volumeConcreto`].map(elementId => {
        document.querySelector(`#${elementId}`).value = '';
    })
}

document.querySelector(`#calcBtn`).addEventListener('click', () => {
    const values = {}

    /* Object.values(inputValues).map(elementId => {...}) */
    [`propCimento`, `propAreia`, `propBrita`, `volumeConcreto`].map(elementId => {
        values[elementId] = Number(document.querySelector(`#${elementId}`));
    })

    const gravelAmount = (values.volumeConcreto * 1.05 / 1 * 0.7).toFixed(2);
    const sandAmount = ((gravelAmount / values.propBrita) * values.propAreia).toFixed(2);
    const cementAmount = Math.ceil((gravelAmount / values.propBrita) * 1400 / 50);

    if (Object.values(values).some(value => value === 0)) {
        alert(`ERRO: Está faltando dados, complete por favor`);
        return;
    }

    createResultElement(
        `Quantidade de cimento: ${cementAmount} saco de 50 kg
        Quantidade de areia: ${sandAmount} m³
        Quantidade de brita: ${gravelAmount} m³`
    );

    clearInput();
});

document.querySelector(`#clean`).addEventListener('click', () => {
    clearInput();
    clearResultElement();
});

