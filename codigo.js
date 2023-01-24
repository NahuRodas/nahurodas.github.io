

    //------------------------------------
    // Botones de la barra de navegacion
    //------------------------------------

    // Declaracion de variables

    var btnSobreMi = document.getElementById('btn-sobre-mi'),
        btnCv = document.getElementById('btn-cv'),
        btnProyectos = document.getElementById('btn-proyectos'),
        btnContacto = document.getElementById('btn-contacto'),
        mi = document.getElementById('sobre-mi-xl'),
        ccurriculum = document.getElementById('curriculum'),
        proyectos = document.getElementById('proyectos-xl'),
        contacto = document.getElementById('contactos');
    
    //Eventos para cada botón al hacer click

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








    //--------------------------------
    // Cambiar lenguaje de la pagina
    //--------------------------------

    // Declaracion de variables

    let lenguageSelector = document.getElementById('check');

    // Evento del "toggle" para cambiar entre ingles y español

    lenguageSelector.addEventListener('click', function(){
        let isChecked = check.checked;

        if (isChecked === true) {
            location.href = "/index.html";
        }else{
            location.href = "/index_eng.html";
        }
    });








    //-----------------------------
    // Cambiar a modo oscuro y claro
    //-----------------------------
    
    // ----Pantallas grandes----
    // Declaracion de variables

    let modoOscuroXL = document.getElementById('modo-oscuro-xl');

    // Evento del "toggle" para cambiar entre modo oscuro y modo claro

    modoOscuroXL.addEventListener('click', function(){
        document.documentElement.classList.toggle('dark-mode');
    })

    // ----Pantallas chicas----
    // Declaracion de variables

    let modoOscuroSm = document.getElementById('modo-oscuro-sm');

    // Evento del "toggle" para cambiar entre modo oscuro y modo claro

    modoOscuroSm.addEventListener('click', function(){
        document.documentElement.classList.toggle('dark-mode');
    })







    
    //----------------------------------------------------------------
    // Enviar mensaje desde el formulario de la página hacia mi email
    //----------------------------------------------------------------

    // Declaracion de variables

    let btnEnviar = document.getElementById('btn-enviar'),
        nombre = document.getElementById('nombre'),
        email = document.getElementById('email'),
        mensaje = document.getElementById('mensaje'),
        subject = "";

    // Funcion para la creacion del mensaje de confirmacion de envio

    function mensajeDeEnvio() {
        if( location.href === "https://nahurodas.github.io/" ) {
            alert("Mensaje enviado. Me comunicaré lo mas rápido posible. <3")
        }else{
            alert("Message sent. I will communicate as quickly as possible. <3")
        }
    }

    // Evento para el boton de envio del formulario

    btnEnviar.addEventListener('click', e=> {
        e.preventDefault();
        Email.send({
            SecureToken : "2d1f208f-5a22-4a3b-befb-8cacd7388b28",
            To : 'cesarnrodas@gmail.com',
            From : 'cesarnrodas@gmail.com',
            Subject :"Mensaje de " + nombre.value + " desde página web.",
            Body : "Email: " + email.value + " | Mensaje: " + mensaje.value
        }).then(
            mensajeDeEnvio()
        );
    })