let artistas = [
    {imagen: '/src/img/img1.jpg', nombre: 'NASH',tipo: 'Productor', ubicacion: 'Viña del mar, Chile', puntuacion: '5/5', descripcionCorta: '', descripcionLarga:''},
    {imagen: '/src/img/img2.jpg', nombre: 'Steve Aoki',tipo: 'Productor', ubicacion: 'San Francisco, EEUU', puntuacion: '4/5', descripcionCorta: '', descripcionLarga:''},
    {imagen: '/src/img/img3.jpg', nombre: 'Rene Puente',tipo: 'Artista', ubicacion: 'Santiago, Chile', puntuacion: '5/5', descripcionCorta: '', descripcionLarga:''},
    {imagen: '/src/img/img4.jpg', nombre: 'Bizarrap',tipo: 'Artista, Productor', ubicacion: 'Buenos aires, Argentina', puntuacion: '5/5', descripcionCorta: '', descripcionLarga:''},
    {imagen: '/src/img/img5.jpg', nombre: 'Musico 1',tipo: 'Pianista', ubicacion: 'Ottawa, Canada', puntuacion: '5/5', descripcionCorta: '', descripcionLarga:''},
    {imagen: '/src/img/img6.jpg', nombre: 'Director',tipo: 'Director de cine', ubicacion: 'Chicago, EEUU', puntuacion: '5/5', descripcionCorta: '', descripcionLarga:''},
    {imagen: '/src/img/img7.jpg', nombre: 'Musico 3',tipo: 'Tecladista', ubicacion: 'Paris, Francia', puntuacion: '4/5', descripcionCorta: '', descripcionLarga:''}
]
const containerCards = document.querySelector('.container-cards') 
window.addEventListener('DOMContentLoaded', mostrarArtistas)

function mostrarArtistas(){

    artistas.forEach(artista =>{
        const card = document.createElement('div')
        const cardTop = document.createElement('div')
        const cardBottom = document.createElement('div')

        card.classList.add('card')
        cardTop.classList.add('card-top')
        cardBottom.classList.add('card-bottom')

        cardTop.innerHTML = 
        `
        <img src="${artista.imagen}">
        `

        cardBottom.innerHTML = 
        `
        <h5>${artista.nombre}</h5>
        <p>${artista.tipo}</p>
        <p>${artista.ubicacion}</p>
        <p>${artista.puntuacion}</p>
        `
        card.appendChild(cardTop)
        card.appendChild(cardBottom)

        containerCards.appendChild(card)

    })
}