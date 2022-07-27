
const h1 = document.querySelector("h1");

const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#resultConc');
const resultSum = document.querySelector('#resultSum');


btn.addEventListener('click',sumValues);

function sumValues(){
    
    //Para que no se recargue la página
    //event.preventDefault();

    const concateneInput = input1.value + input2.value;
    result.innerText = "Resultado concatenar:"+concateneInput;

    const sumaInput = Number(input1.value) + Number(input2.value);
    resultSum.innerText = "Resultado suma:"+sumaInput;

}

