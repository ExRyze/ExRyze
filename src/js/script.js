const $ = require('jquery');
require('bootstrap');

// Fixed Footer
const footer = $('.footer');
const bodyH = $('body').height();
if (footer && (bodyH - footer.height()) <= footer.offset().top) {
  footer.addClass('fixed');
}
