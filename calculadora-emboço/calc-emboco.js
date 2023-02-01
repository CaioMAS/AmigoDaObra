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
    var proporcaoCal = document.getElementById('propCal').value = ''
    var proporcaoAreia = document.getElementById('propAreia').value = '' 
    var espessuraEmboco = document.getElementById('espessuraEmboco').value = '' 
    var areaDoEmboco = document.getElementById('areaDoEmboco').value = '' 
}



var proporcaoCimento = document.getElementById('propCimento') // se transforma em A
var proporcaoCal = document.getElementById('propCal') // se transforma em B
var proporcaoAreia = document.getElementById('propAreia') // se transforma em C
var espessuraEmboco = document.getElementById('espessuraEmboco') // se transforma em D
var areaDoEmboco = document.getElementById('areaDoEmboco') // se transforma em E

const calcMaterialBtn =  document.getElementById('calcBtn')
const clean = document.getElementById('clean')

calcMaterialBtn.addEventListener('click', function () {

    var a = Number(proporcaoCimento.value)
    var b = Number(proporcaoCal.value)
    var c = Number(proporcaoAreia.value)
    var d = Number(espessuraEmboco.value)
    var e = Number(areaDoEmboco.value)

    var quantAreia = ((e*d*1.05/100)).toFixed(2)
    var quantCimento = Math.ceil((quantAreia/c)*1400/50)
    var quantCal = Math.ceil(((quantAreia/c) * (b * 670)) / 20)

    if(a === 0 || b === 0 || c === 0 || d === 0 || e === 0 ) {
        alert("'ERRO: Está faltando dados, complete por favor'")
    } else {
    criarP(`Quantidade de cimento: ${quantCimento} saco de 50 kg
    \n Quantidade de areia: ${quantAreia} m³
    \n Quantidade de cal: ${quantCal} saco de 20 kg`)

    limparInput()  
    }

})

clean.addEventListener('click', function () {
    limparInput()
    removeText()
})

