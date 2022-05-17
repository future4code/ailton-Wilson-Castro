//**********EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO**********
//Exercício 1
//Letra A)
//Resposta = Matheus Nachtergaele | Virg[inia Cavendish | Canal: Globo, Horário: 14h
/*const filme = {
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
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length-1])
console.log(filme.transmissoesHoje[2])*/

//Exercício 2
//Letra A)
//Resposta = Será impresso a primeira constante completo como está no código, depois na constante gato será espelhado o código e substituido Juca por juba, depois será espelhado de novo na constante tartaruga, a partir da constante Gato e o "a" do Juba será substituido por "o" - Jubo

//Letra B)
//Resposta = os 3 pontos servem para clonar um objeto


/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

//Exercício 3
//Letra A)
//Resposta = false e undefined

//Letra B)
// O primeiro console a informação de backender no obejto é false, ao ser chamado no console, apareceu o que estava informado ou configurado. Já no segundo console, não existe a informação "altura" dentro do objeto, então não tem como ser chamado.

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/


//**********EXERCÍCIO DE ESCRITA DE CÓDIGO**********
//Exercício 1
//Letra A)

    /*const nickname = {
        nome: 'Rodrigo',
        apelidos: ['fumaça', 'pé de pano', 'caçarola']    
        }	
    

	function objeto(nickname){
		const nomeApelido = {
			nome: 'Rodrigo',
			apelidos: ['fumaça', 'pé de pano', 'caçarola']   
		}
	

    console.log(`Eu sou ${nomeApelido.nome}, mas pode me chamar de: ${nomeApelido.apelidos[0]} ou ${nomeApelido.apelidos[1]} ou ${nomeApelido.apelidos[2]}.`)
}
objeto(nickname)*/

//Letra B)

/*const nickname = {
	nome: 'Rodrigo',
	apelidos: ['Farofa', 'Tuco', 'Xicó']    
	}	


function objeto(parametro){
	const nomeApelido = {
		...parametro
	}


console.log(`Eu sou ${nomeApelido.nome}, mas pode me chamar de: ${nomeApelido.apelidos[0]} ou ${nomeApelido.apelidos[1]} ou ${nomeApelido.apelidos[2]}.`)
}
objeto(nickname)*/

Não deu pra fazer hoje o restante dos exercícios porque tive um contra-tempo de git e github que a Elaian me ajudou a resolver por boa parte da tarde e depois tive que resolver um situação familiar que me deixou desgastado. Mas vou fazer esses exercícios junto com os demais amanhã.
