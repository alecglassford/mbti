'use strict';

var start = document.querySelector('#start');
start.addEventListener('click', fade.bind(start.parentNode));

var yes = document.querySelector('#yes');
yes.addEventListener('click', fade.bind(yes.parentNode.parentNode));

var no = document.querySelector('#no');
no.addEventListener('click', end.bind(no.parentNode.parentNode));

function fade() {
  this.addEventListener('animationend', swap);
  this.className = 'fadeout';
}

function swap() {
  var hidden = document.querySelector('.hide');
  hidden.removeEventListener('animationend', swap);
  this.className = 'hide';
  hidden.className = '';
}

function end() {
  this.textContent = '👌';
}
