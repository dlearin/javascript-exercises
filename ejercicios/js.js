const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');

content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

/**añadiendo un <p> **/

//primero añadimos un contenedor que se dirija a body

const container2 = document.querySelector("body")

//añadimos p

const paragrafo = document.createElement("p");

paragrafo.style.color = "red";

paragrafo.textContent = "Hey I’m red!";

container2.appendChild(paragrafo);

// añadiendo un <h3>

const titulo = document.createElement("h3");

titulo.style.color = "blue"

titulo.textContent = "I’m a blue h3!"

container2.appendChild(titulo);

/** añadiendo un div con borde negro y pink background 
 * con elementos hijos:h1,p **/

const divPadre = document.createElement("div");

divPadre.style.border = "black 5px solid";

divPadre.style.background = "pink";



//creando hijo h1

const h1DivPadre= document.createElement("h1");

h1DivPadre.textContent = "I’m in a div";

divPadre.appendChild(h1DivPadre);

//creando hijo p


const h2DivPadre = document.createElement("p");

h2DivPadre.textContent = "ME TOO!";

divPadre.appendChild(h2DivPadre);

//apprend el container

container2.appendChild(divPadre);





