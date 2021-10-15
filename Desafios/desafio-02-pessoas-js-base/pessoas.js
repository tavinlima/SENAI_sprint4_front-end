// Declarar uma variável qualquer, que receba um objeto vazio.
let qualquer = new Object();

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = new Object();
pessoa.nome = "Gustavo";
pessoa.sobrenome = "Lima";
pessoa.sexo = "Masculino";
pessoa.idade = 16;
pessoa.altura = 1.84;
pessoa.peso = 90;
pessoa.andando = false;
pessoa.caminhouQuantosMetros = 0;

console.log(pessoa);

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
console.log(pessoa.idade);

pessoa.fazerAniversario = function(){
    return pessoa.idade += 1;
}

pessoa.fazerAniversario();

console.log(pessoa.idade);

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function(metros){
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;

    return pessoa;
}

pessoa.andar(4);

console.log(pessoa);

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function(){
    return pessoa.andando = false;
}

pessoa.parar();

console.log(pessoa);

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function(){
    return pessoa.nome + " " + pessoa.sobrenome;
}

pessoa.nomeCompleto();

console.log(`Olá! Meu nome é ${pessoa.nomeCompleto()}!`);
/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function(){
    return console.log("Olá, eu tenho",pessoa.idade,"anos");
}

pessoa.mostrarIdade();
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function(peso){
    peso = pessoa.peso;
    return console.log("Eu peso",peso,"KG");
}
pessoa.mostrarPeso(pessoa.peso);

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function(altura){
    altura = pessoa.altura;
    return console.log("Minha altura é",altura,"m");
}

pessoa.mostrarAltura(pessoa.altura);
/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto() //Retorna os atributos pessoa.nome e pessoa.sobrenome

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade(); // Retorna o atributo pessoa.idade

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarPeso(pessoa.peso); // Retrona o atributo pessoa.peso

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarAltura(pessoa.altura); // Retrona o atributo pessoa.altura

/*
Faça a `pessoa` fazer 3 aniversários.
*/
console.log(pessoa.fazerAniversario());
console.log(pessoa.fazerAniversario());
console.log(pessoa.fazerAniversario());

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
pessoa.mostrarIdade(pessoa.idade) // Retrona o atributo pessoa.idade

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(2);
pessoa.andar(50);
pessoa.andar(90);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.andando); // Retorna o atributo pessoa.andando

/*
Se a pessoa ainda está andando, faça-a parar.
*/
if (pessoa.andando) {
    pessoa.parar() // Muda o atributo 'andando' para false
    console.log(pessoa);
}


/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.andando); // Retorna o atributo pessoa.andando

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.caminhouQuantosMetros,"m"); // Retorna o atributo pessoa.caminhouQuantosMetros

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = function(){
    let artigo = "o";
    let ano = "anos";
    let metro = "metros";

    pessoa.nomeCompleto()

    if (pessoa.sexo == "Feminino") {
        artigo = "a";
    }

    if (pessoa.idade == 1) {
        ano = `ano`;
    }
    if (pessoa.caminhouQuantosMetros == 1) {
        metro = `metro`;
    }
    return console.log(`Olá!, eu sou ${artigo} ${pessoa.nomeCompleto()}, tenho ${pessoa.idade} ${ano}, ${pessoa.altura}m meu peso é ${pessoa.peso}kg, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${metro}`);
}

// Agora, apresente-se ;)
pessoa.apresentacao();
