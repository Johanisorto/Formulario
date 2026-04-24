const redcolor = document.querySelector('.red-btn');
const greycolor = document.querySelector('.grey-btn');
const CartButton = document.getElementById('cartButton');
const imageCard = document.querySelector('.image-card');

redcolor.addEventListener('click', function() {
    CartButton.style.backgroundColor = 'red';
    imageCard.style.backgroundImage = 'url("img/rojo.png")';
});

greycolor.addEventListener('click', function() {
    CartButton.style.backgroundColor = 'grey';
    imageCard.style.backgroundImage = 'url("img/gris.png")';
});