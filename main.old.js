

/// accéder à un élément du DOM



const ecran = document.querySelector('.ecran')
let operation  = ecran.value;
const boutonUn = document.querySelector('.un')
const boutonDeux = document.querySelector('.deux')
const boutonTrois = document.querySelector('.trois')
const boutonQuatre = document.querySelector('.quatre')
const boutonCinq = document.querySelector('.cinq')
const boutonSix = document.querySelector('.six')
const boutonSept = document.querySelector('.sept')
const boutonHuit = document.querySelector('.huit')
const boutonNeuf = document.querySelector('.neuf')
const boutonZero = document.querySelector('.zero')
const boutonPlus = document.querySelector('.plus')
const boutonMoins = document.querySelector('.moins')
const boutonX = document.querySelector('.multiplie')
const boutonDivision = document.querySelector('.divise')
const boutonPoint = document.querySelector('.point')
const boutonAC = document.querySelector(".effacer")
const boutonEgal = document.querySelector(".egal")

boutonUn.addEventListener('click', ()=>{
    addToDisplay(boutonUn.innerHTML)
} )

boutonDeux.addEventListener('click', ()=>{
    addToDisplay(boutonDeux.innerHTML)
} )

boutonTrois.addEventListener('click', ()=>{
    addToDisplay(boutonTrois.innerHTML)
} )

boutonQuatre.addEventListener('click', ()=>{
    addToDisplay(boutonQuatre.innerHTML)
} )

boutonCinq.addEventListener('click', ()=>{
    addToDisplay(boutonCinq.innerHTML)
} )

boutonSix.addEventListener('click', ()=>{
    addToDisplay(boutonSix.innerHTML)
} )

boutonSept.addEventListener('click', ()=>{
    addToDisplay(boutonSept.innerHTML)
} )

boutonHuit.addEventListener('click', ()=>{
    addToDisplay(boutonHuit.innerHTML)
} )

boutonNeuf.addEventListener('click', ()=>{
    addToDisplay(boutonNeuf.innerHTML)
} )

boutonZero.addEventListener('click', ()=>{
    addToDisplay(boutonZero.innerHTML)
} )

boutonPlus.addEventListener('click', ()=>{
    addToDisplay(boutonPlus.innerHTML)
} )

boutonMoins.addEventListener('click', ()=>{
    addToDisplay(boutonMoins.innerHTML)
} )

boutonX.addEventListener('click', ()=>{
    addToDisplay(boutonX.innerHTML)
} )

boutonDivision.addEventListener('click', ()=>{
    addToDisplay(boutonDivision.innerHTML)
} )

boutonPoint.addEventListener('click', ()=>{
    addToDisplay(boutonPoint.innerHTML)
} )



function addToDisplay(valeurDuBouton)
{
    let valeur = valeurDuBouton

    //  let lastChar = operation[operation.length-1]
    let lastChar = operation.slice(-1)
    let symbols = "+-/*."

    let lastCharIsSymbol =  symbols.includes(lastChar)
    let valeurIsSymbol =  symbols.includes(valeur)
    //  AND
    if(lastCharIsSymbol && valeurIsSymbol){
        return
    }

    if(operation == 0){
        operation = valeur
    }else{
        operation = operation + valeur
    }
    if (valeur == ""){

    }
    console.log("operation :" +operation)

    ecran.value = operation
}

boutonAC.addEventListener('click', () =>{
    effacer()
})

function effacer(){
    ecran.value = 0
    operation = '0'
}

boutonEgal.addEventListener('click', ()=>{
    calcul()
} )

function calcul(){
    ecran.value = eval(ecran.value)
    operation = ecran.value
}


const monBouton = document.querySelector('.monBouton')

monBouton.addEventListener('click', ()=>{
    changeColor()
    changeForme()
})

for( let i = 0   ; i <= 4  ; i++   )
{
    // console.log("coucou")
    console.log(i)

}



const monCercle = document.querySelector(".cercle")

function changeColor(){
    let color = "#"
    let caracteresPossibles = "abcdef1234567890";
    for (let i = 0 ; i < 6 ; i++){
        color +=  caracteresPossibles[Math.floor(Math.random() * caracteresPossibles.length)]
    }
    console.log(color)
    monCercle.style.backgroundColor = color
}

function changeForme() {
    let height = Math.floor(Math.random() * (300-30)) + 30
    let width = Math.floor(Math.random() * (300-30)) + 30
    let borderRadius = Math.floor(Math.random() * (50-10)) + 10
    console.log(height)
    console.log(width)
    console.log(borderRadius)
    monCercle.style.height = height+"px"
    monCercle.style.width = width+"px"
    monCercle.style.borderRadius = borderRadius+"%"

}










