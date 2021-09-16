let tabPostIt = []

document.getElementById('ajoutP').addEventListener('click', () => {
    tabPostIt.push(new PostIt(tabPostIt.length))
    tabPostIt[tabPostIt.length - 1].affichage()
})