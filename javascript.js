$(document).ready(function(){
if($(window).width()<769){
    $(window).scroll(function(){
        $(".video").css("opacity",2 - $(window).scrollTop() / $(".video").height());
    });
        $(".video").delay(1500).animate({opacity:1},900);
    $(".riv").delay(10).animate({opacity:1},900);
    
  
    $(".butts").delay(100).animate({opacity:.3},700);
    $(".info").html(" <span class='1 h'>histoire</span><span class= '11 p'>Côte-des-Neiges.Jadis, un little french village de tanneurs et d’agriculteurs, exploitant le courant d’un étroit ruisseau. Aujourd’hui, un quartier cosmopolite, où cohabitent étudiants, nouveaux arrivants, et familles. Un territoire dense où circulent des centaines de travailleurs des domaines de la santé et de l’éducation.Une plaque tournante qui abrite toutes les religions du monde, et où 110 langues se font écho. <br>Avec le temps, Côte-des-Neiges est devenu une large rivière, dont le débit a fait affluer des milliers de vies, et où autant d’histoires de migrations se sont versées.</span><span class='2 h'>le projet</span><span class='22 p'>Pour souligner le 375e anniversaire de la ville de Montréal, deux créatrices célébreront le caractère unique de la Côte-des-Neiges en chapeautant le projet Rivières un projet théâtral présenté dans les lieux porteurs d’histoire du quartier.<br>Rivières est une série de performances documentaires.<br><br>C’est une tribune, où des citoyens se racontent et se rencontrent. C’est le dévoilement d’une communauté qui se révèle à elle-même. C’est une performance à la croisée des genres, où surgiront les voix de ces voisins inconnus, dans le contexte d’une balade dans le quartier.Rivières fera naviguer ses spectateurs dans les lieux historiques de Côte-des-Neiges, devenu un musée de récits, une galerie de consciences. Réalisé par Sofia Blondin et Veronica Mockler, produit par le Centre communautaire de loisirs de la Côte-des-Neiges, ce spectacle aura lieu à la fin de l’été 2017.Il sera offert gratuitement au citoyens.Plus de détails viendront. Suivez-nous!</span>  <span class='3 h'>  artistes </span><span class='33 p'> XXXXXXXXXXXXXXXXXX</span>")
    $(".1").on('click',function(){
      $(".11").toggle().animate({opacity:.75,
                                    },1000);
      
    });
        $(".2").on('click',function(){
      $(".22").toggle().animate({opacity:.75,
                                    },1000);
      
    });
           $(".3").on('click',function(){
      $(".33").toggle().animate({opacity:.75,
                                    },1000);
      
    });
    
    
}else{
    $(".riv").delay(10).animate({opacity:1},700);
    $(".butts").delay(100).animate({opacity:.85},700);

        $(".info").slimScroll({
        height:'72vh',
        color:'#fff',
        railVisible: true,
        alwaysVisable:true,
        disableFadeOut: false
    });

    
    $(".projet").on('click', function(){

    $(".info").html(" <p><h1>Histoire</h1>Côte-des-Neiges.<br><br>Jadis, un little french village de tanneurs et d’agriculteurs, exploitant le courant d’un étroit ruisseau.<br><br> Aujourd’hui, un quartier cosmopolite, où cohabitent étudiants, nouveaux arrivants, et familles. Un territoire dense où circulent des centaines de travailleurs des domaines de la santé et de l’éducation.Une plaque tournante qui abrite toutes les religions du monde, et où 110 langues se font écho. <br><BR>Avec le temps, Côte-des-Neiges est devenu une large rivière, dont le débit a fait affluer des milliers de vies, et où autant d’histoires de migrations se sont versées.<h1>Le Projet</h1>Pour souligner le 375e anniversaire de la ville de Montréal, deux créatrices célébreront le caractère unique de la Côte-des-Neiges en chapeautant le projet Rivières un projet théâtral présenté dans les lieux porteurs d’histoire du quartier.<br><br>Rivières est une série de performances documentaires.<br><br>C’est une tribune, où des citoyens se racontent et se rencontrent. C’est le dévoilement d’une communauté qui se révèle à elle-même. C’est une performance à la croisée des genres, où surgiront les voix de ces voisins inconnus, dans le contexte d’une balade dans le quartier.<br> <br> Rivières fera naviguer ses spectateurs dans les lieux historiques de Côte-des-Neiges, devenu un musée de récits, une galerie de consciences. Réalisé par Sofia Blondin et Veronica Mockler, produit par le Centre communautaire de loisirs de la Côte-des-Neiges, ce spectacle aura lieu à la fin de l’été 2017.<br><br>Il sera offert gratuitement au citoyens.<br><br>Plus de détails viendront. Suivez-nous!</p>");
        
     $(".info").css("display", "-ms-flexbox").hide().fadeIn(500);
     $(".info").css("display", "flex").hide().fadeIn(500);
       
        
        
    });
    
        $(".benefice").on('click', function(){
 
         
    $(".info").html("<h1>Une soirée bénéfice, c'est le Côte-à-Côte!</h1><p>Rivières est une série de performances documentaires qui sera offerte gratuitement à la fin de l'été 2017. Afin de nous encourager à produire un spectacle accessible à un maximum de citoyens, c'est avec plaisir que nous vous convions à une soirée bénéfice intitulée Côte-à-Côte. L’achat de votre billet vous donnera accès à un cocktail dînatoire accompagné d’une série d’interventions engagées sur le quartier par plusieurs acteurs de la communauté. Joignez-vous à nous pour une soirée sympa remplie de vins, de bouchées et d'interventions sur le vivre ensemble!<h1>C’est où?<br>C’est quand?<br>C’est combien?<br></h1>De plus amples détails suivront. Restez à l’affût!</p>");
    
               $(".info").css("display", "flex").hide().fadeIn(500);
        
    });
        
        $(".artistes").on('click', function(){
 
         
    $(".info").html("<h1>Sofia</h1>Sofia Blondin a gradué en Interprétation de l’École Nationale de théâtre du Canada en 2016. Depuis, cette comédienne a collaboré à plusieurs productions théâtrales et a également eu la chance de se faire connaître par un plus large public dans l’émission District 31. Elle pratique le théâtre dans une perspective de renforcement des liens communautaires, d’où son intérêt pour l’enseignement et son travail avec des amateurs. Elle fait la mise en scène de la troupe étudiante collégiale du Collège Jean-de- Brébeuf, le théâtre du Vaisseau d’Or, enseigne le théâtre et le chant au Camp du conservatoire de McGill, et est chroniqueuse littéraire pour Les Herbes Folles à CISM 89,3 FM. Sofia a pour projet à long terme de créer une communauté théâtrale à Côte-des-Neiges, un quartier qu’elle a longtemps côtoyée en tant qu’étudiante, et maintenant comme artiste.<br><h1>Veronica</h1>Veronica Mockler est une artiste visuelle qui fait du vidéo et de la performance documentaire. Suite à sa graduation de l’Université Concordia en Arts Visuels en 2014, sa recherche artistique, portant sur la reconnaissance d’autrui, a été présenté ici (Dazibao, MONTRÉAL, Redding Flagg Gallery, TORONTO, La Rotonde, QUEBEC) tant qu’à l’international. Veronica utilise l’intéraction humaine comme véhicule politique et conceptuel afin d’aborder un progressisme social. L’artiste a été récipiendaire de bourses privées et publiques pour ses démarches artistiques en plus d’avoir travaillé en tant que commissaire et médiatrice. Veronica veut offrir une plateforme aux expériences de migrations qui composent la Côte-des-Neiges d’aujourd’hui. Selon l’artiste, la considération de ce quartier diversifié est nécessaire plus que jamais.<h1>Le CELO</h1>Le Centre communautaire de loisirs de la Côte-des-Neiges fêtera ses 40 ans cette année. Depuis ses débuts, cet organisme bien connu vise à offrir aux citoyens de Côte-des-Neiges un milieu de vie rassembleur, harmonieux, participatif, visant l’épanouissement personnel et le développement collectif par le loisir, l’action communautaire et l’éducation populaire. Le CELO est très heureux de coordonner ce projet avec ces deux créatrices Montréalaises. ");
    
               $(".info").css("display", "flex").hide().fadeIn(500);
        
    });
            
        $(".encouragez").on('click', function(){
 
         
    $(".info").html("<p><h1>Encouragez-nous</h1>Vous ne pouvez malheureusement pas être des nôtres pour Côte-à-Côte, notre soirée bénéfice, mais vous voulez tout de même nous encourager à produire un spectacle gratuit et accessible à un maximum de citoyens?<br><br>Encouragez-nous via et<br>M E R C I ! <br><br> Nous sommes également à la recherche de commandites. N'hésitez-pas à nous contacter si vous êtes intéressé par l'énorme visibilité qu'apportera être un commandite officiel de Rivières, un projet à Côte-des-Neiges célébrant le 375e anniversaire de la ville de Montréal. <a href='mailto:rivieres375mtl@gmail.com'>rivieres375mtl@gmail.com</a><h1>Témoignages recherchés</h1>Rivières est une série de performances documentaires qui tend l’oreille aux citoyens du quartier. Si vous habitez Côte-des-Neiges, ou avez un lien spécial avec ce territoire et que vous avez envie de le partager, s’il vous plaît contactez-nous!Le français ou l'angais n’est pas votre première langue, et vous préférez vous exprimer dans votre langue maternelle? Nous accueillons avec fierté les témoignages dans toutes les langues! Vos témoignages seront la matière première de notre projet.<br>Contactez-nous pour plus de détails<br>ou pour simplement en savoir d'avantage sur Rivières: <a href='mailto:rivieres375mtl@gmail.com'>rivieres375mtl@gmail.com</a></p>");
    
               $(".info").css("display", "flex").hide().fadeIn(500);
        
    });
    
  
    
}

    
    
});
    
