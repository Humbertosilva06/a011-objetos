const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

//a) imprimir nome do primeiro ator/atriz
console.log("primeiro ator/atriz:",filme.elenco[0])

//b) imprimir ultimo ator/atriz
console.log("ultimoator/atriz:", filme.elenco[3])

//c) imprimir array com todas as trnasmissoes
console.log("todas as transmissões do filme", filme.transmissoesHoje)

//d) imprimir horario de transmissão do canal brasil
console.log("horario de transmissão do canal Brasil: ", filme.transmissoesHoje[1].horario)