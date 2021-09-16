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

document.addEventListener('click', () => {
    numPostit = -1
    action = ""
})

document.addEventListener('keydown', (e) => {
    console.log(e)
    if (numPostit !== -1 && action === "edit") {
        if (e.key === "Shift" || e.key === "Control") { }
        else if (e.key === "Enter") {
            tabPostIt[numPostit].edition(tabPostIt[numPostit].contenu + "<br>")
            tabPostIt[numPostit].affichage()
        }
        else if (e.key === "Backspace") {
            tabPostIt[numPostit].edition(tabPostIt[numPostit].contenu.substr(0, tabPostIt[numPostit].contenu.length - 1))
            tabPostIt[numPostit].affichage()
        }
        else {
            tabPostIt[numPostit].edition(tabPostIt[numPostit].contenu + e.key)
            tabPostIt[numPostit].affichage()
        }
    }
})
setInterval(() => {
    document.querySelector('.debug').innerHTML = "numpostit = " + numPostit + " | action = " + action + " | pos souris X = " + mPX + " | pos souris Y = " + mpY
}, 500);