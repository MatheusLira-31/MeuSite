const album = document.getElementById('albumFotos');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');

const movieAlbum = document.querySelector('.movieAlbum')
const movieCasamento = document.querySelector('.movieCasamento')
const movieBuffet = document.querySelector('.movieBuffet')


// Evento de Click
albumFotos.addEventListener("click", () => {
    //album.classList.toggle('active');
    movieAlbum.classList.toggle('active')
});
casamentos.addEventListener("click", () => {
    //casamentos.classList.toggle('active')
    movieCasamento.classList.toggle('active')
});
buffet.addEventListener("click", () => {
    //buffet.classList.toggle('active')
    movieBuffet.classList.toggle('active')
});






// tres constantes para referenciar as "ITEM" divs Projetos
/*const formulario = document.getElementById('formulario');
const site = document.getElementById('site');
const portfolio = document.getElementById('portfolio');
const movieform = document.querySelector('.movieform');
const moviesite = document.querySelector('.moviesite');
const movieport = document.querySelector('.movieport');


// evento de click
formulario.addEventListener("click",() => {
    form.classList.toggle('active');
    movieform.classList.toggle('active');
});
site.addEventListener("click",() => {
    site.classList.toggle('active');
    moviesite.classList.toggle('active');
});
portfolio.addEventListener("click",() => {
    port.classList.toggle('active');
    movieport.classList.toggle('active');
});*/