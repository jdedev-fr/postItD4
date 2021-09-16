let tabPostIt = []

let numPostit = -1
let action = ""
let mPX = 0
let mpY = 0

document.getElementById('ajoutP').addEventListener('click', () => {
    tabPostIt.push(new PostIt(tabPostIt.length))
    tabPostIt[tabPostIt.length - 1].affichage()
})

document.addEventListener('mousemove', (event) => {
    mPX = event.clientX
    mpY = event.clientY
    if (numPostit !== -1 && action === "deplace") {
        tabPostIt[numPostit].deplace(mPX - tabPostIt[numPostit].largeur, mpY - tabPostIt[numPostit].hauteur)
        tabPostIt[numPostit].affichage()
    }
})

setInterval(() => {
    document.querySelector('.debug').innerHTML = "numpostit = " + numPostit + " | action = " + action + " | pos souris X = " + mPX + " | pos souris Y = " + mpY
}, 500);