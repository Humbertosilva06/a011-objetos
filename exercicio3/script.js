const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "grama",
    nivel: 5
};

//A) criar copia do objeto, trocando nome por "squirtle" e tipo por "agua"

const copiaPokemon1 ={...pokemon1}
copiaPokemon1.nome = "Squirtle"
copiaPokemon1.tipo = "Água"

console.log(copiaPokemon1)

//B) no objeto original, adicionar propriedade "ataques" que deve guardar um ARRAY DE OBJETOS com a estrutura pedida. iniciar propriedade com array vazio e incluir objetos com push

pokemon1.ataques = []

console.log ("objeto original com array vazia ",pokemon1)

pokemon1.ataques.push({
    nome: "investida",
    dano: 40,
    tipo: "normal",
    precisao: 100
})

console.log("objeto original com array de obejtos ataque", pokemon1)


//c) na copia, adicionar a propriedade ataque a partir de espalhamento da propiedade criada para o original
// entao da pra usar o spread para copiar apenas a propiedade tbm, tava esquecendo de por a propiredade ataques na copia(copiaobjeto.propriedadeAserIncluida = {...objetoOriginal.propreidade a ser copiada})
//OBS: tentei fazer o spread com {} e deppis não consehgui incluir outra coisa, depois fiz com [] e foi; imagino que fazendo com [] eu copei o conteudo da propriedade que é um array de obejtos?
copiaPokemon1.ataques = [...pokemon1.ataques]

console.log("copia com a propriedade ataques copiada atraves do spread", copiaPokemon1)

//d) para o objeto original. adicione o ataque"folha navalha", dano 45, 100 de precisao e tipo grama

pokemon1.ataques.push({
    nome: "folha navalha",
    dano: 40,
    tipo: "grama",
    precisao: 100
})

console.log("pokemon1 com o novo ataque adcionado a lista de ataques", pokemon1)

//e) na copia, criar ataque jato de agua, 40 de dano, 100 precisao, tipo agua

copiaPokemon1.ataques.push({
    nome: "jato de agua",
    dano: 40,
    tipo: "Água",
    precisao:100
})
//D) imprimri os dois pokemons
console.log(pokemon1, copiaPokemon1 )
