let vitorias = 100
let derrotas = 50
let saldo = vitorias - derrotas
let returnDoRank = determinadorDeRank(saldo)
console.log("O Herói tem saldo de " + saldo +" vitórias e está no ranking " + returnDoRank)


function determinadorDeRank(saldo){
    let resultado
    if (saldo < 10){
        resultado = "Ferro"
    } else if (saldo >= 10 && saldo < 20){
       resultado = "Bronze"
    } else if (saldo >= 20 && saldo < 50){
        resultado = "Prata"
    } else if (saldo >= 50 && saldo < 80){
        resultado = "Ouro"
    } else if (saldo >= 80 && saldo < 90){
        resultado = "Diamante"
    } else if (saldo >= 90 && saldo < 100){
        resultado = "Lendário"
    } else if (saldo >= 100){
        resultado = "Imortal"
    }

    return resultado
}