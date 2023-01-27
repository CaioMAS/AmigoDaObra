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
var propCimento = document.getElementById('propCimento').value = ''
var propCal = document.getElementById('propCal').value = ''
var propAreia = document.getElementById('propAreia').value = ''
var largJunta = document.getElementById('largJunta').value = ''
var largTijolo = document.getElementById('largTijolo').value = ''
var altTijolo = document.getElementById('altTijolo').value = ''
var compriTijolo = document.getElementById('compriTijolo').value = ''
var areaParede = document.getElementById('areaParede').value = ''
}



var propCimento = document.getElementById('propCimento') //proporção de cimento a
var propCal = document.getElementById('propCal') // proporção de cal b
var propAreia = document.getElementById('propAreia') // proporção de areia c
var largJunta = document.getElementById('largJunta') // largura da junta d
var largTijolo = document.getElementById('largTijolo') // largura do tijolo e
var altTijolo = document.getElementById('altTijolo') // altura do tijolo f
var compriTijolo = document.getElementById('compriTijolo') // comprimento do tijolo g
var areaParede = document.getElementById('areaParede') // area da parede h

const calcAlvenariaBtn =  document.getElementById('calcAlvenariaBtn')
const cleanAlvenaria = document.getElementById('cleanAlvenaria')

calcAlvenariaBtn.addEventListener('click', function () {
    var a = Number(propCimento.value)
    var b = Number(propCal.value)
    var c = Number(propAreia.value)
    var d = Number(largJunta.value)
    var e = Number(largTijolo.value)
    var f = Number(altTijolo.value)
    var g = Number(compriTijolo.value)
    var h = Number(areaParede.value)


    var quantAreia = Math.round((d*e* ( (2*f )+g )*(1.07/((f+1.5 )* (g+1.5 )/10000 ))*h/1000000*1.05))
    var quantCimento = Math.round(((quantAreia/c)*1400/50))
    var quantCal = Math.round((((quantAreia/c)*(b*670))/20))    
    var quantTijolo = Math.round(1.07/( (f+1.5 )* (g+1.5 )/10000 )*h)

    if(a === 0 || b === 0 || c === 0 || d === 0 || e === 0 || f === 0 || g === 0 || h === 0) {
        alert("'ERRO: Está faltando dados, complete por favor'")
    } else {
    criarP(`Quantidade de cimento: ${quantCimento} saco de 50 kg
    \n Quantidade de cal: ${quantCal} saco de 20 kg
    \n Quantidade de areia: ${quantAreia} m³
    \nQuantidade de tijolos: ${quantTijolo} unidades`)

    limparInput()  
    }

    
})

cleanAlvenaria.addEventListener('click', function () {
    limparInput()
    removeText()
})
