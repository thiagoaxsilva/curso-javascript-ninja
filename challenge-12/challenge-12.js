(function () {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        'name': 'Thiago',
        'lastname': 'Silva',
        'age': 26
    }
    console.log('Propriedades de "person":', Object.keys(person));

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({ name: 'Os miseráveis', pages: 207 });
    books.push({ name: 'O Nome da Rosa', pages: 612 });
    books.push({ name: '1984', pages: 644 });
    console.log('\nLista de livros:', books);

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log('\nLivro que está sendo removido:', books.pop());


    /*
    Mostre no console os livros restantes.
    */
    console.log('\nAgora sobraram somente os livros:', books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var string = JSON.stringify(books);


    /*
    Mostre os livros nesse formato no console:
    */
    console.log('\nLivros em formato string:', string);

    /*
    Converta os livros novamente para objeto.
    */
    string = JSON.parse(string);
    console.log('\nAgora os livros são objetos novamente:', string);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
        for (var i = 0; i < books.length; i++) {
            for (var propriedade in books[i]) {
                console.log (propriedade + ': ' + books[i][propriedade])
            }
        }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['T', 'h', 'i', 'a', 'g', 'o', ' ', 'A', 'n', 't', 'o', 'n', 'i', 'o'];

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log('\nMeu nome é:', myName.join(''));



    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log('\nMeu nome invertido é:', myName.reverse());


    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log('\nAgora em ordem alfabética:', myName.sort());
})();