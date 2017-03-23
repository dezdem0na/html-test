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
