$(function() {
    var pull 	= $('.menu__button');
    menu 		= $('.menu__ul');
    menuHeight	= menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 749 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

$(function() {
    var select = $(".slider__select");
    var slider = $("<div id='slider'></div>").insertAfter(select).slider({
        min: 1,
        max: 4,
        range: "min",
        value: select[ 0 ].selectedIndex + 1,
        slide: function( event, ui ) {
            select[ 0 ].selectedIndex = ui.value - 1;
        }
    });
    $(".slider__select").on( "change", function() {
        slider.slider( "value", this.selectedIndex + 1 );
    });
});
