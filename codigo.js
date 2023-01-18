

// Botones de la barra de navegacion

var btnSobreMi = document.getElementById('btn-sobre-mi'),
    btnCv = document.getElementById('btn-cv'),
    btnProyectos = document.getElementById('btn-proyectos'),
    btnContacto = document.getElementById('btn-contacto'),
    irContactos = document.getElementById("ir-contactos"),
    mi = document.getElementById('sobre-mi-xl'),
    ccurriculum = document.getElementById('curriculum'),
    proyectos = document.getElementById('proyectos-xl'),
    contacto = document.getElementById('contactos');
    
 
btnSobreMi.addEventListener('click', e =>{
    window.scrollTo({
        top: 0,
        left: 0
    });
})

btnCv.addEventListener('click', e =>{
    window.scrollTo({
        top: ccurriculum.offsetTop,
        left: ccurriculum.offsetLeft
    });
})

btnProyectos.addEventListener('click', e =>{
    window.scrollTo({
        top: proyectos.offsetTop,
        left: proyectos.offsetLeft
    });
})

btnContacto.addEventListener('click', e =>{
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
