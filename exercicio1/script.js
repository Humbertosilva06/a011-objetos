//criação do array vazio
const sacolao =[]

//a) tres obejtos frutas com propriedades nome:string, preco:number e disponibilidade:boolean

const fruta1 = {
    nome: "pera",
    preco: 4.53,
    disponibilidade: true
}

const fruta2 = {
    nome: "maça",
    preco: 3.20,
    disponibilidade: false
}

const fruta3 = {
    nome: "abacaxi",
    preco: 10.47,
    disponibilidade: false
}

sacolao.push(fruta1)
sacolao.push(fruta2)
sacolao.push(fruta3)

console.log("impressão do array e seu tamanho", sacolao, sacolao.length)