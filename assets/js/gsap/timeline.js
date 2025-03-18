document.querySelectorAll('.card-focus__container').forEach((container) => {
    const content = container.querySelector('.card-focus__content'); // Sélectionne l'enfant .card-focus__content
    const parentContainer = content.closest('.card-focus__container');

    // Animation GSAP avec ScrollTrigger
    gsap.to(content, {
      scrollTrigger: {
        trigger: container, // Élément déclencheur (le conteneur parent)
        start: 'top center-=100', // Début : quand le haut du bloc atteint le centre de l'écran - 100px
        end: 'bottom center-=100', // Fin : quand le bas du bloc dépasse le centre de l'écran + 100px
        scrub: true, // Active le "scrubbing" pour une transition fluide
       // markers: true, // Affiche les marqueurs de déclenchement (debug)
        onEnter: () => {
          // Ajoute la classe active au contenu et change le fond en rose
          content.classList.add('active');
          parentContainer.classList.add('active');
          content.style.backgroundColor = 'var(--wp--preset--color--base-2)';
          content.style.boxShadow = 'var(--wp--preset--shadow--natural)';
        },
        onLeave: () => {
          // Retire la classe active et réinitialise le fond
          content.classList.remove('active');
          parentContainer.classList.remove('active');
          content.style.backgroundColor = '';
          content.style.boxShadow = '';
        },
        onEnterBack: () => {
          // Réapplique les styles lorsqu'on revient en arrière
          content.classList.add('active');
          parentContainer.classList.add('active');
          content.style.backgroundColor = 'var(--wp--preset--color--base-2)';
          content.style.boxShadow = 'var(--wp--preset--shadow--natural)';
        },
        onLeaveBack: () => {
          // Réinitialise les styles lorsqu'on quitte en remontant
          content.classList.remove('active');
          parentContainer.classList.remove('active');
          content.style.backgroundColor = '';
          content.style.boxShadow = '';
        },
      },
    });
  });