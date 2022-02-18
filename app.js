const btns = document.querySelectorAll('.bouton-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const fermetureModale = document.querySelector('.fermeture-modale');
const imgIndex = document.querySelector('.bloc-modale img');

// responsive por dire que en dessous de 850px on ne pourra plus ouvrir les photos

if (window.matchMedia("(min-width: 850px)").matches) {

    // Affichage de la photo que l'on vient de cliquer

    btns.forEach(btn => {

        btn.addEventListener('click', (e) => {

            imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
            modaleEquipement.classList.add('active-modale');

        })

    });

    // Fermeture de l'image afficher

    modaleEquipement.addEventListener('click', () => {

        modaleEquipement.classList.remove('active-modale');

    });

};


// ---------- Anim NavBar -------------------


const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 30) {

        nav.classList.add('anim-nav');

    } else {

        nav.classList.remove('anim-nav');

    }

});