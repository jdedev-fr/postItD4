class PostIt {
    x
    y
    largeur
    hauteur
    couleur
    contenu
    num

    constructor(num, x = 100, y = 100, l = 200, h = 200, couleur = "pink", contenu = "") {
        this.num = num
        this.x = x
        this.y = y
        this.contenu = contenu
        this.largeur = l
        this.hauteur = h
        this.couleur = couleur
    }

    deplace(x, y) {
        this.x = x
        this.y = y
    }

    redim(a, b) {
        this.largeur = a
        this.hauteur = b
    }

    edition(t) {
        this.contenu = t
    }

    affichage() {
        let newPost = false
        let monPost = document.getElementById("postit" + this.num)
        if (monPost === null) {
            newPost = true
            monPost = document.createElement('div')
            monPost.id = "postit" + this.num
        }

        monPost.style.position = "fixed"
        monPost.style.top = this.y + "px"
        monPost.style.left = this.x + "px"
        monPost.style.width = this.largeur + "px"
        monPost.style.height = this.hauteur + "px"
        monPost.style.backgroundColor = this.couleur
        monPost.innerHTML = this.contenu

        if (newPost) {
            document.body.appendChild(monPost)
        }

    }
}