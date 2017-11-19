// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var ScrollBar = require('../_modules/scrollbar/scrollbar');
var Timeline = require('../_modules/timeline/timeline');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Slider();
    new ScrollBar();
    new Timeline();
});
