(function(){
    'use strict';


    jQuery(document).ready(function($){
        searchBox();
        searchBoxClose();
        menuIndicator();
        mobileMenuOptions();
        mobileMenuTrigger();
    });

    // Menu Item Dropdown Indicator
    function menuIndicator(){
        $('.menu_item > ul').before('<span><i class="fa fa-angle-down"></i></span>');
    }


    // Search box
    function searchBox(){
        $('.search_btn').on('click', function(){
            $('#searchBox').slideDown('slow');
        });
    }

    // search box close
    function searchBoxClose(){
        $('.search_box_close').on('click', function(){
           $('#searchBox').fadeOut(500);
        });
    }

    // Mobile Menu
    function mobileMenuTrigger(){
        $('.mobile_menu').on('click',function(){
            $(this).toggleClass('menu_open');
            if($(this).hasClass('menu_open')){
                $(".mobile_menu i").removeClass('fa-bars').addClass('fa-close');
            }else{
                $(".mobile_menu i").removeClass('fa-close').addClass('fa-bars');
            }
            
            $("#mainmenu").slideToggle();
        });
    }

    // Menu Behaviour
    function mobileMenuOptions(){
        var list = $('#mainmenu > li');
        $('#mainmenu > li > ul').addClass('sub_menu');

        list.each(function(i){

            if($(this).find('ul').hasClass('sub_menu')){
               
                var firstLink = $(this).find('a').first();
                
                firstLink.removeAttr('href');

                firstLink.on('click', function(e){
                    firstLink.toggleClass('active_menu');
                    firstLink.parent().find('ul').slideToggle('slow');
                    
                });

            }

        });

       

    }

}(jQuery));