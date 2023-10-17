const cercle = document.querySelector('.cercle')
const timer = document.querySelector('.time')
let time = 0
let newTime = 0
let finalTime = 0


cercle.addEventListener('click',()=>{

    changeAll()
    timer.innerHTML = finalTime/1000 +" secondes"


    )


function changeAll(){
    //couleur au hasard
    newTime = new Date().getTime()
    finalTime = newTime - time
    console.log(finalTime)
    cercle.style.backgroundColor = "transparent"

    setTimeout(()=>{

        let hexChars = "abcdef0123456789"
        let color = "#"
        for(let i = 0; i<6;i++)
        {
            color += hexChars[Math.floor(Math.random()*hexChars.length)]
        }

        //hauteur, largeur et border radius au hasard
        // h & w   =  30 à 300 px     br = 10% a 50%

        let height = Math.random()*270 +30
        let width = Math.random()*270 +30
        let borderRadius = Math.random()*40 + 10
        let top = Math.random()*80
        let left = Math.random()*80

        cercle.style.backgroundColor = color
        cercle.style.height = height + "px"
        cercle.style.width = width + "px"
        cercle.style.borderRadius = borderRadius + "%"
        cercle.style.top = top + "%"
        cercle.style.left = left + "%"
        time = new Date().getTime()


    },Math.random()*3000 )

}







