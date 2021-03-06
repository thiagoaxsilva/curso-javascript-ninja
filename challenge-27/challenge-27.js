(function (win, doc) {
    'use strict';
/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
function DOM( str ){
    this.element = document.querySelectorAll( str );
    this.on = function (event, listener) {
      Array.prototype.forEach.call( this.element, element => {
        element.addEventListener(event, listener, false);
      });
    }
    this.off = function (event, listener) {
      Array.prototype.forEach.call( this.element, element => {
        element.removeEventListener(event, listener, false);
      }); 
    }
    this.get = function () {
      return this.element;
    }
    this.isArray = ( obj ) => {
        return is( obj ) === '[object Array]';
    };
    this.isObject = ( obj ) => {
        return is( obj ) === '[object Object]';
    };
    this.isFunction = ( obj ) => {
        return is( obj ) === '[object Function]';
    };
    this.isNumber = ( obj ) => {
        return is( obj ) === '[object Number]';
    };
    this.isString = () => {
        return is( obj ) === '[object String]';
    };
    this.isBoolean = () => {
        return is( obj ) === '[object Boolean]';
    };
    this.isNull = () => {
        return is( obj ) === '[object Null]' || is( obj ) === '[object Undefined]' ;
    };
  }

  DOM.prototype.forEach = function forEach() {
      return Array.prototype.forEach.apply( this.element, arguments);
  };

  DOM.prototype.map = function map() {
      return Array.prototype.map.apply( this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
      return Array.prototype.filter.apply( this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
      return Array.prototype.reduce.apply( this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
      return Array.prototype.reduceRight.apply( this.element, arguments);
  };

  DOM.prototype.every = function every() {
      return Array.prototype.every.apply( this.element, arguments);
  };

  DOM.prototype.some = function some() {
      return Array.prototype.some.apply( this.element, arguments);
  };
  
  function is(ar) {
      return Object.prototype.toString.call(ar);
  }

  var $a = new DOM('[data-js="link"]');
  console.log ($a.isFunction(function(){}));
  $a.forEach(function(item) {
      console.log(item);
  });
})(window, document);