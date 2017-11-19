'use strict';

var Hero = require('../hero');

describe('Hero View', function() {

  beforeEach(function() {
    this.hero = new Hero();
  });

  it('Should run a few assertions', function() {
    expect(this.hero);
  });

});
