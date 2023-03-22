// function corG(){
//     const cod = "0123456789ABCDEF"
//     const cor = '#'
//     for(let i = 0; i < 6; i++){
//         cor += Math.floor(Math.random() * cod.length)

//     }
//     return cor
    
// }

function cor_add(){
    document.getElementById("instrucao").style = "display: none"
    document.getElementById("div_corG").style = "display:  flex"

    let cod = "0123456789ABCDEF"
    let cor = "#"

    for(let i = 0; i < 6; i++){
        cor += cod.charAt(Math.floor(Math.random() * cod.length))
    }
    
    
    document.getElementById("div_corG").innerText = cor 

    document.getElementById("conteiner").style = `background-color: ${cor};`

    




    
}