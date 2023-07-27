

// Menu de perfil

document.addEventListener('DOMContentLoaded', () => {
    let MenuDesplegado = document.querySelector('#menu');
    let AbrirMenu = document.querySelector('#drop');

    MenuDesplegado.addEventListener('click', () => {
        AbrirMenu.classList.toggle('dropmenu__open');
    });
});

// Menu responsive, navbar

let iconoMenu = document.querySelector('#bar__menu');
let abrirMenu = document.querySelector('#nav__celu-menu');

iconoMenu.addEventListener('click', () => {
 abrirMenu.classList.toggle('drop__celu-open');
 body.classList.toggle('noscrollmenu');
});



// Generacion dinamica de cards por javascript

const peliculasTerror = [

    { imagen: '/Portadas/1.jpg', 
     },

    { imagen: '/Portadas/2.jpg', 
  },

    {  imagen: '/Portadas/3.jpeg',
   },

    {  imagen: '/Portadas/4.jpg',
  },

   {  imagen: '/Portadas/5.jpeg'
  },

  {  imagen: '/Portadas/6.jpg'
  },

  {  imagen: '/Portadas/7.jpg ' 
  }

  ];
  
  const peliculasAccion = [

    { imagen: '/Portadas/8.jpg', 
  },

 { imagen: '/Portadas/9.jpg', 
},

 {  imagen: '/Portadas/10.jpg',
},

 {  imagen: '/Portadas/11.jpg',
},

{  imagen: '/Portadas/12.webp'
},

{  imagen: '/Portadas/13.webp'
},

{  imagen: '/Portadas/14.jpg ' 
}

  ];
  
  const peliculasComedia = [
    { imagen: '/Portadas/15.jpg', 
  },

 { imagen: '/Portadas/16.webp', 
},

 {  imagen: '/Portadas/17.jpg',
},

 {  imagen: '/Portadas/18.webp',
},

{  imagen: '/Portadas/19.jpg'
},

{  imagen: '/Portadas/20.jpg'
},

{  imagen: '/Portadas/21.jpg ' 
}


  ];
  
  const peliculasRomance = [

    { imagen: '/Portadas/22.jpg', 
  },

 { imagen: '/Portadas/23.jpg', 
},

 {  imagen: '/Portadas/24.jpg',
},

 {  imagen: '/Portadas/25.jpg',
},

{  imagen: '/Portadas/26.jpg'
},

{  imagen: '/Portadas/27.jpg'
},

{  imagen: '/Portadas/28.jpg ' 
}

   
  ];
  

  // Genera las tarjetas de películas para cada sección

  generarTarjetasPeliculas('movie-grid-terror', peliculasTerror);
  generarTarjetasPeliculas('movie-grid-accion', peliculasAccion);
  generarTarjetasPeliculas('movie-grid-comedia', peliculasComedia);
  generarTarjetasPeliculas('movie-grid-romance', peliculasRomance);
  
  // Generar HTML

  function generarTarjetasPeliculas(gridId, peliculas) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
  
    peliculas.forEach(pelicula => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
  
      const image = document.createElement('img');
      image.src = pelicula.imagen;
      image.alt = pelicula.titulo;

     
  
  
      // Añadimos al DOOM las cosas 
      movieCard.appendChild(image);
      grid.appendChild(movieCard);
    });
  }


  
  // Variables globales

const SLIDE_WIDTH = 300; // Ancho de cada tarjeta de película
const SLIDE_MARGIN = 20; // Margen entre tarjetas de película
const NUM_VISIBLE_SLIDES = 4; // Número de tarjetas de película visibles a la vez
let slidePosition = 0;

// Función para desplazar a la derecha

function desplazarDerecha(gridId) {
  const grid = document.getElementById(gridId);
  const numSlides = grid.children.length;
  const maxPosition = -(numSlides - NUM_VISIBLE_SLIDES) * (SLIDE_WIDTH + SLIDE_MARGIN);
  
  if (slidePosition > maxPosition) {
    slidePosition -= SLIDE_WIDTH + SLIDE_MARGIN;
    grid.style.transform = `translateX(${slidePosition}px)`;
  }
}

// Función para desplazar a la izquierda

function desplazarIzquierda(gridId) {
  const grid = document.getElementById(gridId);
  
  if (slidePosition < 0) {
    slidePosition += SLIDE_WIDTH + SLIDE_MARGIN;
    grid.style.transform = `translateX(${slidePosition}px)`;
  }
}






  // Aparecer ventana emergente al dar click en una card y hacer que no haya sccroll

  let ventanaEmergente = document.getElementById('Ventana-emergente');
  let secciones = document.querySelectorAll('.section');
  let botonCerrar = document.querySelector('.Ventana__emergente__contenido__cerrar');
  let body = document.body;

  secciones.forEach(function(seccion) {
    seccion.addEventListener('click', function(event) {
      let tarjeta = event.currentTarget.querySelector('.movie-grid');
      let clickedElement = event.target;

      
      if (
        clickedElement.classList.contains('arrow-right') ||
        clickedElement.classList.contains('arrow-left')
      ) {

       
        event.stopPropagation();
        return;
      }

      if (tarjeta) {
        ventanaEmergente.style.display = 'block';
        body.classList.add('mostrar-ventana-emergente');
      }
    });
  });


  // Cerrar ventana con la X

  botonCerrar.addEventListener('click', function() {
    ventanaEmergente.style.display = 'none';
    body.classList.remove('mostrar-ventana-emergente');
  });



  