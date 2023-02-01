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
    var comprimentoPeca = document.getElementById('comprimentoPeca').value = ''
    var larguraPeca = document.getElementById('larguraPeca').value = ''
    var espessuraPeca = document.getElementById('espessuraPeca').value = ''
    var larguraJunta = document.getElementById('larguraJunta').value = ''
    var areaPiso = document.getElementById('areaPiso').value = ''
    
    
}



var comprimentoPeca = document.getElementById('comprimentoPeca') // se transforma em A
var larguraPeca = document.getElementById('larguraPeca') // se transforma em B
var espessuraPeca = document.getElementById('espessuraPeca') // se transforma em C
var larguraJunta = document.getElementById('larguraJunta') // se transforma em D
var areaPiso = document.getElementById('areaPiso') // se transforma em E


const calcMaterialBtn =  document.getElementById('calcBtn')
const clean = document.getElementById('clean')

calcMaterialBtn.addEventListener('click', function () {

    var a = Number(comprimentoPeca.value)
    var b = Number(larguraPeca.value)
    var c = Number(espessuraPeca.value)
    var d = Number(larguraJunta.value)
    var e = Number(areaPiso.value)
    
    var quantArgamassa = Math.ceil(e/4)
    var quantRejunte = Math.ceil(e * 10 * 1.05 * ( (a + b) * (d / 10 ) * (c / 10 )* 1.75 )/ (a * b ))
    
    

    if(a === 0 || b === 0 || c === 0 || d === 0 || e === 0 ) {
        alert("'ERRO: Está faltando dados, complete por favor'")
    } else {
    criarP(`Quantidade de argamassa: ${quantArgamassa} saco de 20 kg
    \n Quantidade de rejunte: ${quantRejunte} kg`)

    limparInput()  
    }

})

clean.addEventListener('click', function () {
    limparInput()
    removeText()
})

