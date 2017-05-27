$(document).ready(function(){
if($(window).width()<769){
            $(".video").delay(100).animate({opacity:1},900);
        $(".e").animate({opacity:.8},5000);
    $(".riv").delay(50).animate({opacity:.6},2000).animate({opacity:1},100)
    $(".about").delay(1500).animate({opacity:1},1500)
    
    
    $(window).scroll(function(){
        $(".video").css("opacity",1 - $(window).scrollTop() / $(".video").height());
        $(".infoCon").css("opacity",0 + $(window).scrollTop() / ($(".infoCon").height()/5));
        $(".riv").css("right",1 - $(window).scrollTop() / ($(".riv").height()/100));
    });

    
    
   // $(".infoCon").delay(1000).animate({opacity:.75},900);

    
  
    $(".butts").delay(100).animate({opacity:.3},700);
    $(".info").html(" <span class='1 h'><button class='moButs'>le projet</button></span><span class= '11 p'><span class='b'>Côte-des-Neiges</span> Jadis, un little french village de tanneurs et d’agriculteurs, exploitant le courant d’un étroit ruisseau. Aujourd’hui, un quartier cosmopolite où cohabitent étudiants, nouveaux arrivants, et familles, et où circulent des centaines de travailleurs des domaines de la santé et de l’éducation. Unterritoire dense qui abrite toutes les religions du monde, et où 110 langues se font écho. Avec le temps, Côte-des-Neiges est devenu une large rivière, dont le débit a fait affluer des milliers de vies, et où autant d’histoires de migrations se sont versées.<span class='b'>Rivières</span> Pour souligner le 375e anniversaire de la ville de Montréal, deux créatrices célébreront la diversité et le patrimoine culturel de la Côte-des-Neiges en chapeautant le projet théâtral Rivières. Rivières est une série de performances documentaires qui s’immiscera dans les lieux porteurs d’histoire du quartier. Ce spectacle est une tribune, où des citoyens se racontent et se rencontrent. En naviguant dans les lieux historiques de Côte-des-Neiges, le public sera amené à découvrir son voisin: le voir là où il ne s’y attend pas, à l’entendre pour la première fois, et à le connaître, le reconnaître. Produit par le Centre communautaire de loisirs de la Côte-des-Neiges (CELO), ce spectacle sera gratuit et aura lieu à la fin de l’été.<br>Plus de détails viendront. Suivez-nous!</span>                                                                                                                     <span class='2 h'><button>participez</button></span><span class='22 p'><span class='b'>On veut vous entendre...</span>Étant donné la nature documentaire de Rivières, l’équipe de création veut tendre l’oreille aux citoyens du quartier. Si vous habitez Côte-des-Neiges, ou avez un lien spécial avec ce territoire et que vous avez envie de le partager, s’il vous plaît contactez-nous!<br>Nous accueillons les témoignages dans toutes les langues.<span class='b'>Encouragez Rivières</span>Cette production est offerte gratuitement aux citoyens, et nous espérons qu’elle atteindra le maximum de gens dans la communauté. Si vous voulez nous commanditer, ou simplement nous encourager financièrement, voici le lien vers notre campagne de levée de fond: <a href='#'>Indiegogo</a></span>                                                                                                                                                                       <span class='3 h button'>les artistes</span><span class='33 p'><span class='b'>CELO</span>Le Centre communautaire de loisirs de la Côte-des- Neiges fêtera ses 40 ans cette année.Depuis ses débuts, cet organisme bien connu vise à offrir aux citoyens de Côte-des- Neiges un milieu de vie rassembleur, harmonieux, participatif, visant l’épanouissement personnel et le développement collectif par le loisir, l’action communautaire et l’éducation populaire. Le CELO est très heureux de coordonner Rivières avec les artistes Sofia Blondin et Veronica Mockler.<span class='b'>Sofia</span> Sofia a gradué en Interprétation de l’École Nationale de théâtre du Canada en 2016. Depuis, cette comédienne a collaboré à plusieurs productions théâtrales et a également eu la chance de se faire connaître par un plus large public dans l’émission District 31. Elle pratique le théâtre dans une perspective de renforcement des liens communautaires, d’où son intérêt pour l’enseignement (Collège-Jean-de-Brébeuf) et son travail avec des amateurs (Camp du Conservatoire de McGill).<span class='b'>Veronica</span>Veronica Mockler est une artiste visuelle qui fait de la vidéo et de la performance sociale. Suite à sa graduation de l’Université Concordia en arts visuels en 2014, sa pratique artistique, fondée sur la reconnaissance de l’autre, a été présentée tant au Canada (Dazibao Montréal, Redding Flagg Gallery Toronto), qu’à l’international. Son travail, à la fois conceptuel et politique, s’articulent autour du thème de la cohésion sociale. </span>                                                                                                                                                 <span class='4 h'> nous joindre </span><span class='44 p'> <a href='mailto:Rivieres375mtl@gmail.com'><span class='b'>Rivieres375mtl@gmail.com</span></a> <a href='https://www.instagram.com/rivieres375mtl/' target='_blank'><span class='b'>Instagram</span></a> <a href='https://www.facebook.com/rivieres375mtl/' target='_blank''> <span class='b'>Facebook</span></a></span>")
    
    $('.h').on('click', function(){
          $('.1').removeClass('rot');
          $('.2').removeClass('rot');
          $('.3').removeClass('rot');
          $('.4').removeClass('rot');
    });
    
    $(".1").on('click',function(){
    /*  if($('.p').css('display') !== 'none')
{
alert('yo');
}*/
        $('.p').css({display:'none'});
      $(".11").toggle().animate({opacity:.75,
                                    },1000);
        $(".1").addClass('rot');
        
        
    });
        $(".2").on('click',function(){
            $('.p').css({display:'none'});
      $(".22").toggle().animate({opacity:.75,
                                    },1000);
            $(".2").toggleClass('rot');
      
    });
           $(".3").on('click',function(){
               $('.p').css({display:'none'});
      $(".33").toggle().animate({opacity:.75,
                                    },1000);
               $(".3").toggleClass('rot');
      
    });
                $(".4").on('click',function(){
                    $('.p').css({display:'none'});
      $(".44").toggle().animate({opacity:.75,
                                    },1000);
                    $(".4").toggleClass('rot');
      
    });
          $(".5").on('click',function(){
      $(".55").toggle().animate({opacity:.75,
                                    },1000);
      
    });
    
    
}else{
    $(".riv").delay(10).animate({opacity:1},700);
    $(".butts").delay(100).animate({opacity:.85},700);



    
    $(".projet").on('click', function(){ 
        
    $(".info").html("<h1>Côte-des-Neiges</h1>Jadis, un little french village de tanneurs et d’agriculteurs, exploitant le courant d’un étroit ruisseau. Aujourd’hui, un quartier cosmopolite où cohabitent étudiants, nouveaux arrivants, et familles, et où circulent des centaines de travailleurs des domaines de la santé et de l’éducation. Unterritoire dense qui abrite toutes les religions du monde, et où 110 langues se font écho. Avec le temps, Côte-des-Neiges est devenu une large rivière, dont le débit a fait affluer des milliers de vies, et où autant d’histoires de migrations se sont versées.<h1>Rivières</h1> Pour souligner le 375e anniversaire de la ville de Montréal, deux créatrices célébreront la diversité et le patrimoine culturel de la Côte-des-Neiges en chapeautant le projet théâtral Rivières. Rivières est une série de performances documentaires qui s’immiscera dans les lieux porteurs d’histoire du quartier. Ce spectacle est une tribune, où des citoyens se racontent et se rencontrent. En naviguant dans les lieux historiques de Côte-des-Neiges, le public sera amené à découvrir son voisin: le voir là où il ne s’y attend pas, à l’entendre pour la première fois, et à le connaître, le reconnaître. Produit par le Centre communautaire de loisirs de la Côte-des-Neiges (CELO), ce spectacle sera gratuit et aura lieu à la fin de l’été.<br>Plus de détails viendront. Suivez-nous!");
        
     $(".info").hide().fadeIn(500);
     $(".info").hide().fadeIn(500);
       
        
        
    });
    
        $(".participez").on('click', function(){
 
         
    $(".info").html("<h1>On veut vous entendre...</h1>Étant donné la nature documentaire de Rivières, l’équipe de création veut tendre l’oreille aux citoyens du quartier. Si vous habitez Côte-des-Neiges, ou avez un lien spécial avec ce territoire et que vous avez envie de le partager, s’il vous plaît contactez-nous!<br>Nous accueillons les témoignages dans toutes les langues.<h1>Encouragez Rivières</h1>Cette production est offerte gratuitement aux citoyens, et nous espérons qu’elle atteindra le maximum de gens dans la communauté. Si vous voulez nous commanditer, ou simplement nous encourager financièrement, voici le lien vers notre campagne de levée de fond: <a href='#'>Indiegogo</a>");
    
               $(".info").hide().fadeIn(500);
        
    });
        
        $(".artistes").on('click', function(){
 
         
    $(".info").html("<h1>CELO</h1>Le Centre communautaire de loisirs de la Côte-des- Neiges fêtera ses 40 ans cette année.Depuis ses débuts, cet organisme bien connu vise à offrir aux citoyens de Côte-des- Neiges un milieu de vie rassembleur, harmonieux, participatif, visant l’épanouissement personnel et le développement collectif par le loisir, l’action communautaire et l’éducation populaire. Le CELO est très heureux de coordonner Rivières avec les artistes Sofia Blondin et Veronica Mockler.<h1>Sofia</h1> Sofia a gradué en Interprétation de l’École Nationale de théâtre du Canada en 2016. Depuis, cette comédienne a collaboré à plusieurs productions théâtrales et a également eu la chance de se faire connaître par un plus large public dans l’émission District 31. Elle pratique le théâtre dans une perspective de renforcement des liens communautaires, d’où son intérêt pour l’enseignement (Collège-Jean-de-Brébeuf) et son travail avec des amateurs (Camp du Conservatoire de McGill).<h1>Veronica</h1>Veronica Mockler est une artiste visuelle qui fait de la vidéo et de la performance sociale. Suite à sa graduation de l’Université Concordia en arts visuels en 2014, sa pratique artistique, fondée sur la reconnaissance de l’autre, a été présentée tant au Canada (Dazibao Montréal, Redding Flagg Gallery Toronto), qu’à l’international. Son travail, à la fois conceptuel et politique, s’articulent autour du thème de la cohésion sociale. ");
    
               $(".info").hide().fadeIn(500);
        
    });
            
        $(".joindre").on('click', function(){
 
         
    $(".info").html("<a href='mailto:Rivieres375mtl@gmail.com'><h2>Rivieres375mtl@gmail.com</h2></a> <a href='https://www.instagram.com/rivieres375mtl/' target='_blank'><h2>Instagram</h2></a> <a href='https://www.facebook.com/rivieres375mtl/' target='_blank''> <h2>Facebook</h2></a>");
    
               $(".info").hide().fadeIn(500);
        
    });
    
  
    
}

    
    
});
    
