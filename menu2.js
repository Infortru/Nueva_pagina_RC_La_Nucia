function crearMenu (){

    let navegador = document.createElement("div");
    navegador.className = "Menu";
    navegador.innerHTML = "";
    document.body.append(navegador);
    navegador.style.cssText = `background-color: whitesmoke; width: 100%; border: none
        ; font-size: 1.2em; padding:15px; position: fixed; top: 5px; left: 250px;`;
    return;
    
    
}   
    function informa(){
        let navegador = document.createElement("div");
        navegador.className = "Menu";
        navegador.innerHTML = "";
        document.body.append(navegador);
        navegador.style.cssText = `background-color: whitesmoke; width: 100%; border: none
            ; font-size: 1.2em; padding:15px; position: fixed; top: 5px; left: 250px;`;

        let informacion = document.createElement("a");
        informacion.setAttribute("href", "informacion.html");
        informacion .className = "informacion";
        informacion.innerHTML = "+ Info";
        navegador.append(informacion);
        return;
    }
    function gal(){
        let navegador = document.createElement("div");
        navegador.className = "Menu";
        navegador.innerHTML = "";
        document.body.append(navegador);
        navegador.style.cssText = `background-color: whitesmoke; width: 100%; border: none
            ; font-size: 1.2em; padding:15px; position: fixed; top: 5px; left: 250px;`;
    
        let galeria = document.createElement("a");
        galeria.setAttribute("href", "galeria.html");
        galeria.className = "galeria";
        galeria.innerHTML = "Multimedia";
        navegador.append(galeria);
        return;
    }
    function cont(){
        let navegador = document.createElement("div");
        navegador.className = "Menu";
        navegador.innerHTML = "";
        document.body.append(navegador);
        navegador.style.cssText = `background-color: whitesmoke; width: 100%; border: none
            ; font-size: 1.2em; padding:15px; position: fixed; top: 5px; left: 250px;`;

    let contacto = document.createElement("a");
    contacto.setAttribute("href", "contacto.html");
    contacto.className = "contacto";
    contacto.innerHTML = "Contacto";
    navegador.append(contacto);
    return;
    }
    function tutor(){
    let tutoriales = document.createElement("a");
    tutoriales.setAttribute("href", "noticias.html");
    tutoriales.className = "tutoriales";
    tutoriales.innerHTML = "Tutoriales";
    navegador.append(tutoriales);
    return;
    }
    function curioso(){
    let curiosidades = document.createElement("a");
    curiosidades.setAttribute("href", "curiosidades.html");
    curiosidades.className = "curiosidades";
    curiosidades.innerHTML = "Curiosidades";
    navegador.append(curiosidades);
    return;
    }
   
    
   