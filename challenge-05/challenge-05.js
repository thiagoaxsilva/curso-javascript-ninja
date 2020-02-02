/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray (ar) {
    return ar;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(myVar)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function indiceArray (ary, indice) {
    return ary[ indice ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valores = ['thiago', 26, true, 2.2, {}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaArray(valores);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book ( nomeLivro ) {
    var livros = {
        'Do mil ao milhão': {
            quantidadePaginas: 224,
            autor: 'Thiago Nigro',
            editora: 'Harper Collins' 
        },
        'Mais esperto que o diabo': {
            quantidadePaginas: 208,
            autor: 'Napoleon Hill',
            editora: 'Citadel Editora' 
        },
        'Akira': {
            quantidadePaginas: 440,
            autor: 'Katsuhiro Otomo',
            editora: 'JBC'
        }
    };

    return !nomeLivro ? livros : livros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console. log ( book () );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livroNome = 'Do mil ao milhao';
console.log ('O livro ' + livroNome + ' ' + book( livroNome ).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log ('O autor do livro Mais esperto que o diabo é ' + book('Mais esperto que o diabo').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log ('O livro Akira foi publicado pela editora ' + book('Akira').editora );
 var a,
 b = 2,
 c;

 function myFunc() {
     var x = 0;
     return (x += 1, x);
 }