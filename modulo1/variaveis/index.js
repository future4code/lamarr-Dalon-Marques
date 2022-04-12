/*
// 1. Analise o programa abaixo e diga o que será impresso no console, 
// SEM EXECUTAR o programa:
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
// 10 5


// 2. Analise o programa abaixo e diga o que será impresso no console, 
// SEM EXECUTAR o programa:

let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)
//  10 10 10


// 3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem 
// começar com números ou caracteres especiais:

let horasDia = prompt("Quantas horas você trabalha por dia?")
let valorSalario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasDia/valorSalario} por hora`)

*/

//<---------------------------------------------------------------------------->



// **Exercícios de escrita de código**


// 1.Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
let nome;

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log(typeof(nome))
console.log(typeof(idade))

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// [RESPOSTA]: A variável foi inicializada mas, nenhum valor foi atribuído a ela. Portanto o comando retorna 'undefined'.

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
nome = prompt('Digite seu nome')
idade = prompt('Digite sua idade')

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(typeof(nome))
console.log(typeof(idade))

// [RESPOSTA]: Ambos se tornaram do tipo string

// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". 
// Onde nome e idade são os valores que o usuário inseriu


alert(`Olá ${nome}, você tem ${idade} anos`)


// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
// Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

const pergunta1='Você gosta de chocolate?'
const pergunta2='Você tomou banho hoje?'
const pergunta3='você é casado(a)'

let resposta1=prompt(pergunta1)
let resposta2=prompt(pergunta2)
let resposta3=prompt(pergunta3)

alert(resposta1)
alert(resposta2)
alert(resposta3)

// 3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial

let a = 10
let b = 25

/*
Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` 
passe a ter o valor de `a`. 

Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

let a = 10
let b = 25

Aqui faremos uma lógica para trocar os valores
*/

let c=a
a=b
b=c

// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

/*
Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, 
independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` 
porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).
*/

