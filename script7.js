//Para cuando se copia un texto


const inputText = document.querySelector("#inputText");

inputText.addEventListener('copy',textCoppied);

function textCoppied(){
    alert("Has copiado el texto");
}