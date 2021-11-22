const pessoa = {
nome:"Jonias" ,
idade: 21,
altura: 179,
endereco: {

    rua:"Goncalvalves ledo" ,
    numero:189 ,  
}

}

const {nome,idade}=pessoa;   // Destructuring usado para extrair apenas dados selecionados 

console.log(nome,idade);

const {nome: a , idade:b}= pessoa;

console.log(a,b);

const{ cep = 60060325} = pessoa


console.log(cep);




