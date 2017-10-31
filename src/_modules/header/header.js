'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuClose = $('.header__menu li a');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    menuClose.on('click', function(){
        header.removeClass('-open');
        body.removeClass('-hideOverflow');
    });
};

module.exports = Header;
