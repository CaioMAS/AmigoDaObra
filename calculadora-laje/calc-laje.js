function criarP(text) {
    const divTexto = document.getElementById('res')
     const newText = document.createElement('p')
     newText.innerText = text
     newText.classList = 'pClass'
     divTexto.appendChild(newText) 
     
 }
 
 function removeText() {
     const divTexto = document.querySelector('#res') 
     const texto = document.querySelector('#res p') 
     divTexto.removeChild(texto)
     
 }

 function limparInput () {
    var proporcaoCimento = document.getElementById('propCimento').value = ''
    var proporcaoAreia = document.getElementById('propAreia').value = ''
    var proporcaoBrita = document.getElementById('propBrita').value = ''
    var espessuraLaje = document.getElementById('espessuraLaje').value = ''
    var areaDaLaje = document.getElementById('areaDaLaje').value = ''
    
}



var proporcaoCimento = document.getElementById('propCimento') // se transforma em A
var proporcaoAreia = document.getElementById('propAreia') // se transforma em B
var proporcaoBrita = document.getElementById('propBrita') // se transforma em C
var espessuraLaje = document.getElementById('espessuraLaje') // se transforma em D
var areaDaLaje = document.getElementById('areaDaLaje') // se transforma em E

const calcMaterialBtn =  document.getElementById('calcBtn')
const clean = document.getElementById('clean')

calcMaterialBtn.addEventListener('click', function () {

    var a = Number(proporcaoCimento.value)
    var b = Number(proporcaoAreia.value)
    var c = Number(proporcaoBrita.value)
    var d = Number(espessuraLaje.value)
    var e = Number(areaDaLaje.value)

    var quantBrita = (d*e*1.05/100*0.7).toFixed(2)
    var quantAreia = ((quantBrita/c)*b).toFixed(2)
    var quantCimento = Math.ceil(((quantBrita/c)*1400/50))
    

    if(a === 0 || b === 0 || c === 0 || d === 0 || e === 0 ) {
        alert("'ERRO: Está faltando dados, complete por favor'")
    } else {
    criarP(`Quantidade de cimento: ${quantCimento} saco de 50 kg
    \n Quantidade de areia: ${quantAreia} m³
    \n Quantidade de cal: ${quantBrita} m³`)

    limparInput()  
    }

})

clean.addEventListener('click', function () {
    limparInput()
    removeText()
})
