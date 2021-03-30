
const navigation = document.querySelector('nav');// pour la navbar
const couleur = document.querySelector('.col li #un'); // pour le logo
const couleur1 = document.querySelector('.col li #deux');// pour Reserver
const couleur2 = document.querySelector('.col li #trois');// pour contacter
window.addEventListener('scroll', () => {

    if(window.scrollY > 930){
        navigation.classList.add('anim-nav');
        couleur.classList.add('couleur');
        couleur1.classList.add('couleur');
        couleur2.classList.add('couleur');
        
    } 
    // si non la couleur redevient comme avant
    else {
        navigation.classList.remove('anim-nav');
        couleur.classList.remove('couleur');
        couleur1.classList.remove('couleur');
        couleur2.classList.remove('couleur');
    }

})
