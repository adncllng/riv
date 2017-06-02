$(document).ready(function () { 
    $('#riv').addClass('huh');

    if ($(window).width() < 900) { /*PHONE*/
          $("#participateContent").insertAfter('#participateButton');
              $("#contactContent").insertAfter('#contactButton');
              $("#projectContent").insertAfter('#projectButton');
              $("#artistsContent").insertAfter('#artistsButton');
      
        $(".logo").appendTo('.social');
        $(".langCon").insertAfter('.buttCon');
  $(".social").insertAfter('.infoCon');
        
         
        
            $(window).scroll(function(){
        $(".video").css("opacity",1 - $(window).scrollTop() / $(".video").height());
        $(".buttCon").css("opacity",0 + $(window).scrollTop() / ($(".riv").height()));
                  $(".arrow").css("opacity",1 - $(window).scrollTop() / $(".buttCon").height());
    });


    } else {/* DESKTO*/

        $(".fade1").delay(10).animate({opacity:1},700);

    $(".fade2").delay(500).animate({opacity:1},700);
           } 
        
        
    
    
        $(".fade1").delay(10).animate({opacity:1},700);

    $(".fade2").delay(500).animate({opacity:1},700);
    
    
        $('.butt').on('click', function () {

            $('#participateContent').css({
                opacity: 0,
                display:'none'
            });
            $('#contactContent').css({
                opacity: 0,
                display:'none'
            });
            $('#projectContent').css({
                opacity: 0,
                display:'none'
            });
            $('#artistsContent').css({
                opacity: 0,
                display:'none'
            });
        });
        
        $('#participateButton').on('click', function () {
      $("#participateContent").toggle().animate({opacity:1,
                                    },1000);
            
        });
        
             $('#projectButton').on('click', function () {
      $("#projectContent").toggle().animate({opacity:1,
                                    },1000);
            
        });
                     $('#artistsButton').on('click', function () {
      $("#artistsContent").toggle().animate({opacity:.85,
                                    },1000);
            
        });
                     $('#contactButton').on('click', function () {
      $("#contactContent").toggle().animate({opacity:.85,
                                    },1000);
            
        });
    

});
