(function (win, doc) {
  'use strict';
  /*
  Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
  `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
  */

  function Pessoa(name, lastName) {
    return this.name = name, this.lastName = lastName;
  }

  var pessoa1 = new Pessoa('Thiago', 'Xavier');
  var pessoa2 = new Pessoa('Raphael', 'Guedes');

  /*
  Agora crie uma função chamada `getFullName` que retorne as propriedades
  `name` e `lastName` dos objetos acima, formando um nome completo.
  A função não deve receber nenhum parâmetro, mas as propriedades `name` e
  `lastName` devem ser dinâmicas.
  A mesma função deve servir para as duas pessoas (ou qualquer outra que for
  criada).
  Depois disso, invoque essa função, mostrando no console o nome completo das
  pessoas que foram criadas anteriormente, passando as pessoas acima como
  contexto da função. Use um console.log por pessoa.
  */
  console.log('O nome das pessoas é:');
  Pessoa.prototype.getFullName = function () {
    return this.name + ' ' + this.lastName;
  }
  console.log(pessoa1.getFullName(), pessoa2.getFullName());

  /*
  Crie uma função chamada `sum`. Essa função pode receber uma lista de
  parâmetros variável, e deverá retornar a soma de todos eles.
  Não use estruturas de repetição para somar os argumentos.
  Na primeira linha, dentro da função, deixe um console.log para mostrar todos
  os parâmetros passados para essa função.
  */
  function sum() {
    var soma = Array.prototype.reduce.call(arguments, function (acumulador, atual) {
      return acumulador + atual;
    });
    console.log(soma);
  }

  /*
  Mostre no console que a função acima funciona, invocando-a em 3 console.log
  diferentes, com quantidades variáveis de parâmetros passados.
  */
  console.log('\nSomar alguns números:');
  console.log(sum(5, 6, 7, 9));
  console.log(sum(1, 2, 3, 4, 5));
  console.log(sum(3, 6, 9, 12));

  /*
  Declare uma variável chamada `userEntry`, que irá receber alguns valores
  entrados pelo usuário. Mostre para o usuário a seguinte frase:
  "Entre com alguns números que serão somados:"
  */
  var $input = doc.querySelector('[data-js="input"]');
  var $button = doc.querySelector('[data-js="button"]');
  var userEntry;
  function recebeValor() {
    return userEntry = $input.value;
  }
  $button.addEventListener('click', recebeValor, false);

  /*
  Mostre no console o valor entrado pelo usuário:
  */
  console.log('\nEntrada do usuário:');
  /*
  Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
  e remove tudo o que não for número, retornando um array somente com os números
  da string. Mostre a representação em string dessa função no console.
  */
  console.log('\nFunção que limpa entrada do usuário (somente números):');
  function justNumbers(str) {
    var myRe = /\d+/g;
    return str.match(myRe).map(x=>+x);
  }
  console.log(justNumbers.toString());

  /*
  Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
  atribuindo o resultado à uma variável `numbers`.
  */
  console.log('\nEntrada do usuário limpa. Somente números:');
  var numbers = justNumbers('25 joão jose 22 149, 2345, 67, 1');
  console.log (numbers);

  /*
  Agora com o array de números, utilize a função `sum` para somar todos os
  números desse array e mostre o resultado no console.
  */
  console.log('\nSomar números entrados pelo usuário:');
  sum.apply(this, numbers);
})(window, document);