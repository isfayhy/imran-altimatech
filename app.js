//On anime l'image qui tombe dans le chaudron
gsap.to("#logo", {duration: 1, x: 300}); //On définis la durée de l'animation et sa position finale sur l'axe X
gsap.to("#logo", {duration: 1.5, y: 350}); //On définis la durée de l'animation et sa position finale sur l'axe Y
//On fait pareil avec une autre image
gsap.from("#logo1", {duration: 1, x: 300});
gsap.to("#logo1", {duration: 1.5, y: 350});


//On va animer la barre du nutriscore
var repeat = $('#barre'); 
var tl = new TimelineMax({ repeat: 1 }) //L'animation va se répéter une fois de plus
  .to(repeat, 1, { left: 270 }) //On anime jusqu'ou elle doit aller 
  .to(repeat, 1, { left: 0 }) //On la fait revenir à sa position initiale

