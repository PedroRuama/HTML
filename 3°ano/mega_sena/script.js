function montarSelect(){
    const elemSelect = document.getElementById('numeroPorJogo')
    let opcoes = ''
    for(let i = 6; i <= 15; i++){
        opcoes += `<option value="${i}">${i}</option>` 
    }
    elemSelect.innerHTML = opcoes
}

function gerarNumeroRandom(min, max){
    let numero = Math.floor(Math.random( ) * (max - min) + min)
    return numero
}

function gerarJogos(){
    let numeroDeJogo = document.getElementById('numeroDeJogos').value
    let numeroPorJogo = Number(document.getElementById('numeroPorJogo').value)

    let tabela = document.getElementById('jogosMegaSena')

    while(tabela.rows.length >= 1){
        tabela.deleteRow(0)
    }

    for(let jogos = 1; jogos <= numeroDeJogo; jogos++){ //linhas
        let qtdeLinhas = tabela.rows.length
        let linha = tabela.insertRow(qtdeLinhas)
        linha.insertCell(0).innerHTML = `Jogo ${jogos} : `

        let numeroSorteados = new Array() //ou só []

        for(let numeros = 1; numeros <= numeroPorJogo; numeros++){ //colunas
            let numero = gerarNumeroRandom(1, 60)
            //como adiciona um elemento no final do array
            if(numeroSorteados.includes(numero)){  //includes (se o numero já esta incluido no array)

                numeros--; //retira 1, logo que acabar o for é adicionado dnv e refaz o lance
            } else {
                numeroSorteados.push(numero)
            }
        }
        //adicionar os numeros sorteados na tabela
        let coluna = 1
        numeroSorteados.sort((x, y) => x - y) // facilita a ordenação
        numeroSorteados.forEach(function(numero){
            linha.insertCell(coluna).innerHTML = numero
            coluna++
            
        })
    }




}