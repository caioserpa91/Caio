const tabuleiro = document.querySelector('#Tabuleiro')

const linhas = tabuleiro.querySelectorAll("tr")

linhas.forEach((linha, indexL) => {

    const colunas = linha.querySelectorAll("td")

    colunas.forEach((td, indexC) => {

        atribuirBombasAosCampos(indexL, indexC)

        const campo = td.querySelectorAll('.campo')[0]
        campo.addEventListener('click', () => {
            alert("fui clicado com botão esquerdo")
        })

        campo.addEventListener('contextmenu', () => {
            alert("fui clicado com o botão direito")

            if (!campo.className.includes("aberto")) {
                if (campo.className.includes("marcado")) {
                    campo.className = "campo"
                    campo.innerText = ""
                } else {
                    campo.className = "campo marcado"
                    campo.innerText = "M"
                }
            }
        })
    })
})

// function getRandom(numero) {
//     return Math.random(numero);
// }

// var numeroPronto = getRandom()
// console.log(numeroPronto)

// function atribuirBombasAosCampos(indexL, indexC) {
//     function getRandom(numero) {
//         return Math.random(numero);
//     }

//     var numeroPronto = getRandom()

}

function getRandom(numero) {
    return Math.random(numero);
}

var numeroPronto = getRandom()
console.log(numeroPronto)

function atribuirBombasAosCampos(indexL, indexC) {
    if (numeroPronto > 0.5) {
        campo.innerText = "B"
    } else {
        campo.innerText = "_"
    }

}

forEach((campo, ) => {

})