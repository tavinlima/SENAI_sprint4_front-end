/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = (arg) =>{
    return !!arg
} 

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log("Parametros 'False'");

console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(NaN));
console.log(isTruthy(''));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log("Parametros 'True'");

console.log(isTruthy(true));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(42));
console.log(isTruthy("foo"));
console.log(isTruthy(new Date()));
console.log(isTruthy(-42));
console.log(isTruthy(3.14));
console.log(isTruthy(-3.14));
console.log(isTruthy(Infinity));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = new Object();
carro.marca = 'Toyota';
carro.modelo = 'Corolla';
carro.placa = 'AAA1A11';
carro.ano = 2012;
carro.cor = 'Preto';
carro.quantasPortas = 4;
carro.assentos = 5;
carro.quantidadePessoas = [0];

console.log(carro);

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor= (cor) =>
{ 
    return carro.cor = cor;
}

carro.mudaCor('Azul');

console.log(carro);

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => carro.cor;

carro.obterCor();

console.log(carro.obterCor());

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => carro.modelo;

carro.obterModelo();

console.log(carro.obterModelo());

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => carro.marca;

carro.obterMarca();

console.log(carro.obterMarca());

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () =>
{ 
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`;
}

console.log(carro.obterMarcaModelo());

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = (quantidadePessoas) =>
{
    carro.quantidadePessoas += quantidadePessoas
    let assentoDisponivel = carro.assentos - carro.quantidadePessoas;
    let pessoa = 'pessoas'
    if (carro.quantidadePessoas >= carro.assentos) {
        carro.quantidadePessoas = carro.assentos
        return "O carro já está lotado!"
    }
    else if (quantidadePessoas < carro.assentos) {
        if (assentoDisponivel == 1) {
            pessoa = 'pessoa'
        }
        return `Só cabem mais ${assentoDisponivel} ${pessoa}!`
    }
    return `Já temos ${quantidadePessoas} pessoas no carro!`
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()) // Retorna a cor do carro

// Mude a cor do carro para vermelho.
carro.mudaCor('Vermelho');

// E agora, qual a cor do carro?
console.log(carro.obterCor()) // Retorna a cor do carro

// Mude a cor do carro para verde musgo.
carro.mudaCor('Verde musgo');

// E agora, qual a cor do carro?
console.log(carro.obterCor()) // Retorna a cor do carro

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.
console.log(carro.addPessoas(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.addPessoas(4));

// Faça o carro encher.
console.log(carro.addPessoas(5));

// Tire 4 pessoas do carro.
console.log(carro.addPessoas(-4));

// Adicione 10 pessoas no carro.
console.log(carro.addPessoas(10));

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);