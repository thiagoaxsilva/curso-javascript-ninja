(function (win, doc) {
  'use strict';
  function DOM(str) {
    this.element = document.querySelectorAll(str);
  }

  DOM.on = function (event, listener) {
    Array.prototype.forEach.call(this.element, element => {
      element.addEventListener(event, listener, false);
    });
  }
  DOM.off = function (event, listener) {
    Array.prototype.forEach.call(this.element, element => {
      element.removeEventListener(event, listener, false);
    });
  }
  DOM.get = function () {
    return this.element;
  }
  DOM.isArray = (obj) => {
    return is(obj) === '[object Array]';
  };
  DOM.isObject = (obj) => {
    return is(obj) === '[object Object]';
  };
  DOM.isFunction = (obj) => {
    return is(obj) === '[object Function]';
  };
  DOM.isNumber = (obj) => {
    return is(obj) === '[object Number]';
  };
  DOM.isString = (obj) => {
    return is(obj) === '[object String]';
  };
  DOM.isBoolean = (obj) => {
    return is(obj) === '[object Boolean]';
  };
  DOM.isNull = (obj) => {
    return is(obj) === '[object Null]' || is(obj) === '[object Undefined]';
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  function is(ar) {
    return Object.prototype.toString.call(ar);
  }

  win.DOM = DOM;

})(window, document);