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
    var espessuraContraPiso = document.getElementById('espessuraContraPiso').value = '' 
    var areaDoContraPiso = document.getElementById('areaContraPiso').value = '' 
}



var proporcaoCimento = document.getElementById('propCimento') // se transforma em A
var proporcaoAreia = document.getElementById('propAreia') // se transforma em B
var espessuraContraPiso = document.getElementById('espessuraContraPiso') // se transforma em C
var areaDoContraPiso = document.getElementById('areaContraPiso') // se transforma em D

const calcMaterialBtn =  document.getElementById('calcBtn')
const clean = document.getElementById('clean')

calcMaterialBtn.addEventListener('click', function () {

    var a = Number(proporcaoCimento.value)
    var b = Number(proporcaoAreia.value)
    var c = Number(espessuraContraPiso.value)
    var d = Number(areaDoContraPiso.value)

    var quantAreia = ((d*c*1.05/100)).toFixed(2)
    var quantCimento = Math.floor((quantAreia/b)*1400/50)

    if(a === 0 || b === 0 || c === 0 || d === 0 ) {
        alert("'ERRO: Está faltando dados, complete por favor'")
    } else {
    criarP(`Quantidade de cimento: ${quantCimento} saco de 50 kg
    \n Quantidade de areia: ${quantAreia} m³`)

    limparInput()  
    }

})

clean.addEventListener('click', function () {
    limparInput()
    removeText()
})

