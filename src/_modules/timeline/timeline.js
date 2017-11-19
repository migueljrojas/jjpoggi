'use strict';

var Timeline = function() {
    var timeline = $('.timeline');

    if (timeline) {
        var list = $('.timeline__list');
        var attachment = false, lastPosition, position, difference;
        var leftBtn = $('.timeline__nav--left');
        var rightBtn = $('.timeline__nav--right');
        var scroll = 0;
        var listItemLength = list.children('li').length;
        var listItemWidth = list.children('li').outerWidth();
        var listScrollWidth = listItemLength * listItemWidth;
        var listScrollLimit = (listItemLength - 1) * 213;

        list.on("mousedown mouseup mousemove",function(e){
            if( e.type == "mousedown" ){
                attachment = true, lastPosition = [e.clientX, e.clientY];
            }
            if( e.type == "mouseup" ) {
                attachment = false;
            }
            if( e.type == "mousemove" && attachment == true ){
                position = [e.clientX, e.clientY];
                difference = [ (position[0]-lastPosition[0]), (position[1]-lastPosition[1]) ];
                $(this).scrollLeft( $(this).scrollLeft() - difference[0] );
                $(this).scrollTop( $(this).scrollTop() - difference[1] );
                lastPosition = [e.clientX, e.clientY];
            }
        });

        list.on("mouseenter mouseleave", function(){
            attachment = false;
        });

        rightBtn.on("click", function(){
            if( scroll <= listScrollLimit ) {
                scroll = scroll > listScrollLimit - 213 ? listScrollLimit : scroll+213;
                list.animate({
                    scrollLeft:  scroll
                });
            }
        });

        leftBtn.on("click", function(){
            if( scroll >= 213 ) {
                scroll = scroll-213;
                list.animate({
                    scrollLeft:  scroll
                });
            }
        });
    }
};

module.exports = Timeline;
