(function (doc, win) {
    'use strict';
    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    x1. Crie um arquivo index.html e adicione esse script a ele;
    x2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    x3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */


    let $counter = doc.querySelector('[data-js="counter"]');
    let $start = doc.querySelector('[data-js="start"]');
    let $stop = doc.querySelector('[data-js="stop"]');
    let $reset = doc.querySelector('[data-js="reset"]');
    let temporizador;

    function timer() {
        $counter.value = +$counter.value + 1;
        temporizador = setTimeout(timer, 1000);
    }

    function stopTimer() {
        clearTimeout(temporizador);
    }

    function resetTimer() {
        $counter.value = 0;
        stopTimer();
    }

    $start.addEventListener('click', timer, false);

    $stop.addEventListener('click', stopTimer, false);

    $reset.addEventListener('click', resetTimer, false);


})(document, window);