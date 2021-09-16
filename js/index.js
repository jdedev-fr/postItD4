let lePost = new PostIt(1)
lePost.affichage()

lePost.deplace(300, 400)
lePost.affichage()

lePost.redim(50, 300)
lePost.affichage()

lePost.edition("coucou")
lePost.affichage()