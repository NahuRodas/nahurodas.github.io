

// Botones de la barra de navegacion

var sobreMi = document.getElementById('btn-sobre-mi'),
    cv = document.getElementById('btn-cv'),
    btnProyectos = document.getElementById('btn-proyectos'),
    contactame = document.getElementById('btn-contacto'),
    irContactos = document.getElementById("ir-contactos"),
    mi = document.getElementById('sobre-mi-xl'),
    cv = document.getElementById('curriculum'),
    proyectos = document.getElementById('proyectos'),
    contacto = document.getElementById('contactos');
    
 
sobreMi.addEventListener('click', e =>{
    window.scrollTo({
        top: 0,
        left: 0
    });
})

btnProyectos.addEventListener('click', e =>{
    window.scrollTo({
        top: proyectos.offsetTop,
        left: proyectos.offsetLeft
    });
})

contactame.addEventListener('click', e =>{
    window.scrollTo({
        top: contacto.offsetTop,
        left: contacto.offsetLeft
    })
})



if (window.offsetTop === contacto.offsetTop) {
    irContactos.style.display = "none";
    } else {
    irContactos.style.display = "block";
    }


irContactos.addEventListener('click', e =>{
    window.scrollTo({
        top: contacto.offsetTop,
        left: contacto.offsetLeft
    })
});
