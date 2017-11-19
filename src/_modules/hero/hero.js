'use strict';

// Constructor
var Hero = function() {
  this.name = 'hero';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Hero;
