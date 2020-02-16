(function(win, doc) {
  'use strict';
  /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
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

   var $cep = doc.querySelector('[data-js="cep-input"]');
   var $submit = doc.querySelector('[data-js="submit"]');
   var ajax = new XMLHttpRequest();
   var $divInfo = doc.querySelector('[data-js="cep-info"]').children;

   $submit.addEventListener('click', (e) => {
    e.preventDefault();
    $cep.value = formatCep($cep.value);
    returnCepRequestHtml($cep.value);
    console.log(ajax.status, ajax.readyState);
   }, false);

   function returnCepRequestHtml(cep){
     ajax.open('GET', 'https://viacep.com.br/ws/'+ cep +'/json/');
     ajax.send();
     ajax.addEventListener('readystatechange', handleReadyStateChange, false);
   }

   function formatCep(cep) {
    cep = cep.replace(/\D+/g, '');
    return cep;
   }

   function handleReadyStateChange() {
     if( ajax.readyState === 4 && ajax.status === 200 ) {
        console.log('Ajax pronto', ajax.respondeText);
        populateInputs();
     }
     console.log('Carregando...');
    }
     

   function populateInputs() {
    var data = JSON.parse(ajax.responseText);
    Array.prototype.forEach.call($divInfo, function( valor ) {
      var child = valor.firstElementChild;
      var atributo = child.getAttribute("data-js");
      var conteudoP = doc.createTextNode(data[atributo]);
      child.appendChild(conteudoP);
    });  
  }

})(window, document);