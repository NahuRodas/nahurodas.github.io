

    // Botones de la barra de navegacion

var btnSobreMi = document.getElementById('btn-sobre-mi'),
    btnCv = document.getElementById('btn-cv'),
    btnProyectos = document.getElementById('btn-proyectos'),
    btnContacto = document.getElementById('btn-contacto'),
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


    // Boton mensaje de pantallas pequeñas 

let irContactos = document.getElementById("ir-contactos");
irContactos.addEventListener('click', e =>{
    window.scrollTo({
        top: contacto.offsetTop,
        left: contacto.offsetLeft
    })
});


    // Cambiar lenguaje de la pagina

    let lenguageSelector = document.getElementById('check');

    lenguageSelector.addEventListener('click', function(){
        let isChecked = check.checked;

        if (isChecked === true) {
            location.href = "/index.html";
        }else{
            location.href = "/index_eng.html";
        }
    });



    // Cambiar a modo dark y light
    //
    // Pantallas grandes

    let modoOscuroXL = document.getElementById('modo-oscuro-xl');

    modoOscuroXL.addEventListener('click', function(){
        document.documentElement.classList.toggle('dark-mode');
    })

    // Pantallas chicas

    let modoOscuroSm = document.getElementById('modo-oscuro-sm');

    modoOscuroSm.addEventListener('click', function(){
        document.documentElement.classList.toggle('dark-mode');
    })


        // Enviar mensaje desde la pagina a mi email

    let btnEnviar = document.getElementById('btn-enviar'),
        nombre = document.getElementById('nombre'),
        email = document.getElementById('email'),
        mensaje = document.getElementById('mensaje'),
        subject = "";

    btnEnviar.addEventListener('click', e=> {
        e.preventDefault();
        Email.send({
            SecureToken : "2d1f208f-5a22-4a3b-befb-8cacd7388b28",
            To : 'cesarnrodas@gmail.com',
            From : 'cesarnrodas@gmail.com',
            Subject : nombre.value + " mensaje desde página web.",
            Body : "Email: " + email.value + " | Mensaje: " + mensaje.value
        }).then(
          message => alert(message)
        );
    })