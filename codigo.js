 
 // Cambio del estilo de los logos de gris a color

 var imagenes = [ html = document.getElementById('HTML'),  
 csss = document.getElementById('CSS'),
 javaScript = document.getElementById('javaScript'), 
 jQuery = document.getElementById('jQuery'), 
 jason = document.getElementById('json'),   
 ajax = document.getElementById('ajax'), 
 bootsrap = document.getElementById('Bootstrap'), 
 java = document.getElementById('Java'),  
 cs = document.getElementById('C#'), 
 cp = document.getElementById('C++'),    
 php = document.getElementById('php'),   
 python = document.getElementById('Python'), 
 mysql = document.getElementById('MySQL'),   
 vsCode = document.getElementById('VSCode'),  
 eclipse = document.getElementById('Eclipse'),  
 wordPress = document.getElementById('WordPress'),  
 afterEffects = document.getElementById('AfterEffects'),  
 photoshop = document.getElementById('Photoshop') ];
 var elemento;
 var padre;

imagenes.forEach(e => {
 e.addEventListener('mouseover',function(){
     e.src = e.src.replace("G","");
     padre = e.parentNode;
     elemento = document.createElement('h1');
     elemento.className = "logo";
     elemento.innerHTML = e.id;
     padre.append(elemento);

     
 })
 e.addEventListener('mouseout',function(){
     e.src = e.src.slice(0,-4)+"G.png";
     padre.removeChild(padre.lastChild);    })
});

// ----------------------------------------------------------------------

// Botones de la barra de navegacion

var sobreMi = document.getElementById('btn-sobre-mi'),
    btnProyectos = document.getElementById('btn-proyectos'),
    contactame = document.getElementById('btn-contactame'),
    mi = document.getElementById('mi'),
    proyectos = document.getElementById('proyectos'),
    contacto = document.getElementById('contacto');
 
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