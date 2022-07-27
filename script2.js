//Same as css
//For example for css:
// .parrafito{....}
// #id{...}

//Se puede usar el querySelector y también el getelementByClass, id, etc

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input});

h1.innerHTML = "Patito <br> feo";
h1.innerText = "Patito <br> feo";

//console.log(h1.getAttribute('pantalla'));
//h1.setAttribute('class','verde');

h1.classList.add('rojo'); //Agrega rojo como clase
h1.classList.remove('verde'); //quita lo que habíamos puesto de clase verde

input.value = "456";

//Para crear el elemento HTML que nosotros queramos
const img = document.createElement('img');

img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');

pid.append(img);