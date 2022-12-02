var imagenes = [ html = document.getElementById('html'),  
    csss = document.getElementById('css'),
    javaScript = document.getElementById('javaScript'), 
    jQuery = document.getElementById('jQuery'), 
    jason = document.getElementById('json'),   
    ajax = document.getElementById('ajax'), 
    bootsrap = document.getElementById('bootstrap'), 
    java = document.getElementById('java'),  
    cs = document.getElementById('c#'), 
    cp = document.getElementById('c++'),    
    php = document.getElementById('php'),   
    python = document.getElementById('python'), 
    mysql = document.getElementById('mysql'),   
    vsCode = document.getElementById('vsCode'),  
    eclipse = document.getElementById('eclipse'),  
    wordPress = document.getElementById('wordPress'),  
    afterEffects = document.getElementById('afterEffects'),  
    photoshop = document.getElementById('photoshop') ];
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

