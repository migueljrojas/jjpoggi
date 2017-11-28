'use strict';

var Filter = function() {
    console.log('filter');

    var filter = $('.portfolio__showcase__filter');

    if (filter.length) {
        var trigger = filter.find('.portfolio__showcase__filter__label');

        trigger.on('click', function() {
            filter.toggleClass('-open');
        });
    }
}

module.exports = Filter;
