//Exercicio 01 - Spread

//Spread - usamos os ... 3 pontinhos para que ele vire uma função, percorrendo cada elemento do array e trazendo o que pedimos.
let numeros = [52, 38, 24, 95];
//No exemplo Math.max, ele vai trazer o maior número que existe dentro do Array
console.log(Math.max(...numeros));

//Exercicio 02 - Rest
function lista(...args) {
    console.log(args)
}

lista('banana', 'maçã')

function soma(...args){
    let total = 0;

    for(let i in args){
        total += args[i]
    }
    return total;
}
console.log(soma(5,10,15))

//Exercicio 3 - Array com ForEach
const cores = ['azul', 'preto', 'lilás', 'amarelo', 'verde']

cores.forEach(item => console.log(item));

//Exercicio 4 - Array Map
let taboada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicar(valor){

    valor *= 2;
    return valor;
}

let taboada2 = taboada.map(multiplicar);

console.log(taboada);
console.log(taboada2);

let pets = [
    {nome: 'Sushi', idade: 7},
    {nome: 'Amora', idade: 6},
    {nome: 'Juca', idade: 10},
]

let idadeHumana = pets.map((p) =>{
    return {
        nome: p.nome,
        idade: p.idade*7
    }
})

console.log(idadeHumana)

//Exercicio 5 - Array Filter
const dadosDuplicados = ['Juca', 'Sushi', 'Amora', 'Aline', 'Amora', 'Juca'];

const listaNomes = dadosDuplicados.filter((element, index, arr) => arr.indexOf(element) === index);
console.log("Nova lista: ", listaNomes)

//Exercicio 6 - Array Find

const codigos = [28, 39, 105, 230, 4089]

const encontrarCodigos = codigos.find(element => element > 231);
console.log("codigos maiores que 231:",encontrarCodigos);

const animais = ['gato', 'cachorro', 'cavalo', 'leão'];
const encontrarAnimais = animais.find(p => p.startsWith('c'));
console.log("Animal:", encontrarAnimais);

//Exercicio 7 - Array Reduce

const numeroAssentos = [
    {sessao: 'A', assentos: 30},
    {sessao: 'B', assentos: 12},
    {sessao: 'C', assentos: 10},
    {sessao: 'D', assentos: 5},
    {sessao: 'E', assentos: 9},
]

const totalAssentos = numeroAssentos.reduce((prevValor, elem) => prevValor + elem.assentos, 0);
console.log("Quantidade de assentos:", totalAssentos);

const depositos = [220, 450 ,300, 1080];
const valorInicial = 0;

const somarDepositos = depositos.reduce((prevValor, elemento) =>prevValor + elemento, valorInicial);
console.log("Valor total depósitos:", somarDepositos);

//Exercicio 8 - Promise com Fetch API

const userName = 'alinerp'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})
.then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(`O nome do usuário é: ${data.name}`)
})
.catch((err) => {
    console.log(`Houve um erro: ${err}`)
})

//Exercicio 9 e 10 - Async e  Await

function encontrarUsuario(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}

async function mostrarNomeUsuario(id){
    try {
        const user = await encontrarUsuario(id)

        console.log(`O nome do usuário é: ${user.data.first_name}`)
    } catch (err) {
        console.log(`Erro: ${err}`)
    }
}

mostrarNomeUsuario(6);


