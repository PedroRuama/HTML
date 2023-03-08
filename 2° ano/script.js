function hello () {
    alert ("Hola Mundo!")
}

function condSimples (){
    var idade = prompt ("Digite sua idade!")
    if (idade <= 2){
        alert ("Bebê");
    }else if (idade <= 12){
        alert ("Criança!");
    }else if (idade <= 17){
        alert ("adolescente!");
    }else {
        alert ("adulto!");
    }
}

function lacoWhile(){
    var numero = prompt("Digite um número!");
    var contador = 0;
    while (contador <= 10){
        let resultado = numero * contador;
        alert (numero + "x" + contador + "=" + resultado);
        contador ++;
    }
}

function estado(){
    var sigla = document.getElementById("estado").value;
    var resultado = document.getElementById("info");
    switch(sigla){
        case "SP":
            resultado.innerText = "Estado: São Paulo \n Capital: São Paulo";
            break;
        case "RJ":
            resultado.innerText = "Estado: Rio de Janeiro \n Capital: Rio de Janeiro";
            break;
        case "MG":
            resultado.innerText = "Estado: Minas Gerais \n Capital: Belo Horizonte";
            break;
        case "ES":
            resultado.innerText = "Estado: Espirito Santo \n Capital: Vitória";
            break
        default:
            resultado.innerText = "Estado Inválido!";
            break;
    }
}