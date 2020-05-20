//On anime l'image qui tombe dans le chaudron
gsap.to("#logo", {duration: 1, x: 300}); //On définis la durée de l'animation et sa position finale sur l'axe X
gsap.to("#logo", {duration: 1.5, y: 350}); //On définis la durée de l'animation et sa position finale sur l'axe Y
//On fait pareil avec une autre image
gsap.from("#logo1", {duration: 1, x: 300});
gsap.to("#logo1", {duration: 1.5, y: 350});




//On va animer la barre du nutriscore en fonction du bouton choisi

$('.bouton-A').on('click', function(){
  var repeat = $('#barre'); 
  var tl = new TimelineMax({ repeat: 0 }) //Le nombre de fois que l'animation entière va se répéter
    .to(repeat, 1, { left: 270 }) //On anime jusqu'ou elle doit aller 
    .to(repeat, 1, { left: 0 }) //On la fait revenir à sa position initiale
    .to(repeat, 1, { left: 30 }) //On l'envoie à sa position finale  

});

$('.bouton-B').on('click', function(){
  var repeat = $('#barre'); 
  var tl = new TimelineMax({ repeat: 0 }) //Le nombre de fois que l'animation entière va se répéter
    .to(repeat, 1, { left: 270 }) //On anime jusqu'ou elle doit aller 
    .to(repeat, 1, { left: 0 }) //On la fait revenir à sa position initiale
    .to(repeat, 1, { left: 80 }) //On l'envoie à sa position finale  

});

$('.bouton-C').on('click', function(){
  var repeat = $('#barre'); 
  var tl = new TimelineMax({ repeat: 0 }) //Le nombre de fois que l'animation entière va se répéter
    .to(repeat, 1, { left: 270 }) //On anime jusqu'ou elle doit aller 
    .to(repeat, 1, { left: 0 }) //On la fait revenir à sa position initiale
    .to(repeat, 1, { left: 140 }) //On l'envoie à sa position finale  

});

$('.bouton-D').on('click', function(){
  var repeat = $('#barre'); 
  var tl = new TimelineMax({ repeat: 0 }) //Le nombre de fois que l'animation entière va se répéter
    .to(repeat, 1, { left: 270 }) //On anime jusqu'ou elle doit aller 
    .to(repeat, 1, { left: 0 }) //On la fait revenir à sa position initiale
    .to(repeat, 1, { left: 190 }) //On l'envoie à sa position finale  

});

$('.bouton-E').on('click', function(){
  var repeat = $('#barre'); 
  var tl = new TimelineMax({ repeat: 0 }) //Le nombre de fois que l'animation entière va se répéter
    .to(repeat, 1, { left: 270 }) //On anime jusqu'ou elle doit aller 
    .to(repeat, 1, { left: 0 }) //On la fait revenir à sa position initiale
    .to(repeat, 1, { left: 250 }) //On l'envoie à sa position finale  

});