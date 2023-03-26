const btn = document.getElementById('btn--hamburguesa');
const menu = document.getElementById('menu');
const logout = document.getElementById('navbar--logout');

const cardsSeccion = document.getElementById('cards');

const cards = [
    {
        'id':1,
        'imagen':'Imagenes/hulk-listo.png',
        'nombre':'Hulk',
        'estado':'Imagenes/corazon-blanco.png',
        'estadoActual': 'blanco'
    },
    {
        'id':2,
        'imagen':'Imagenes/america-listo.png',
        'nombre':'Capitan America',
        'estado':'Imagenes/corazon-blanco.png',
        'estadoActual': 'blanco'
    },
    {
        'id':3,
        'imagen':'Imagenes/iroman-listo.png',
        'nombre':'Iroman',
        'estado':'Imagenes/corazon-blanco.png',
        'estadoActual': 'blanco'
    },
    {
        'id':4,
        'imagen':'Imagenes/spiderman-listo.png',
        'nombre':'Spiderman',
        'estado':'Imagenes/corazon-blanco.png',
        'estadoActual': 'blanco'
    }
];

btn.addEventListener('click',()=>{
    menu.classList.toggle('diplay-menu');
    logout.classList.toggle('diplay-logout');
});

window.addEventListener('load',()=>{
    if(window.innerWidth > 768){
        menu.style.display = 'block'
        logout.style.display = 'flex'
    }
});

document.addEventListener('DOMContentLoaded',()=>{
    agregarCards();
});

function agregarCards(){
    cards.forEach((card)=>{
        const article = document.createElement('article');
        article.classList.add('card');

        const imagenCard = document.createElement('img');
        imagenCard.classList.add('card--imagen');
        imagenCard.src = card.imagen;

        const div = document.createElement('div');
        div.classList.add('card--titulo');

        const imgCorazon = document.createElement('img');
        imgCorazon.src = card.estado;
        imgCorazon.id = card.id;
        imgCorazon.addEventListener('click',()=>{
            agregarEstado(card);
        });

        const tituloH3 = document.createElement('h3');
        tituloH3.textContent = card.nombre;

        div.append(imgCorazon);
        div.append(tituloH3);

        article.append(imagenCard);
        article.append(div);

        cardsSeccion.append(article);

    });
}
function agregarEstado(card) {
    const imagenCambiar = document.getElementById(card.id);
    if(card.estadoActual == 'blanco'){
        imagenCambiar.src = 'Imagenes/corazon-rojo.png';
        card.estadoActual = 'rojo';
    }else{
        imagenCambiar.src = 'Imagenes/corazon-blanco.png';
        card.estadoActual = 'blanco';
    }
}