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
    afterEffects = document.getElementById('After Effects'),  
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

