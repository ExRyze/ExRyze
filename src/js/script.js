var $ = require('jquery');
require('bootstrap');
let expItem = $('.exp-item img');
if(expItem) {
  $.each(expItem, (key, item) => {
    $('.exp-item .exp-info')[key].addEventListener('mouseover', () => {$('.exp-item .exp-info')[key].classList.add('active');})
    $('.exp-item .exp-info')[key].addEventListener('mouseout', () => {$('.exp-item .exp-info')[key].classList.remove('active');})
    item.addEventListener('mouseover', () => {$('.exp-item .exp-info')[key].classList.add('active');})
    item.addEventListener('mouseout', () => {$('.exp-item .exp-info')[key].classList.remove('active');})
  })
}