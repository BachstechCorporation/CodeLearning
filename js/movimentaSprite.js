
    // CONDICOES DE MOVIMENTO: valida cada direção com cada qtd. de passos
    // direita, esquerda e frente têm vários ids devido a qtd. no formulario
    // d1,d2 etc sao correspondentes a "direção"
    // a1,a2 etc sao correspondentes a "andar" -> qtd. de passos

$(".exec").click(function(){
    
    // Direita D1
    if($('.direcaoEsquerda').is(':checked') && $('.andar3').is(':checked')){
        let direita = 3;
        for(i = 0; i < direita; i++){
            $(".alvaroAnda").animate({
                "margin-top": "-=13px"
            }, "slow");
        }
    }
    else if ($('.direcaoEsquerda').is(':checked') && $('.andar4').is(':checked')){
        let direita = 4;
        for(i = 0; i < direita; i++){
            $(".alvaroAnda").animate({
                "margin-top": "-=20px"
            }, "slow");
        }
    }
    else if ($('.direcaoEsquerda').is(':checked') && $('.andar5').is(':checked')){
        let direita = 5;
        for(i = 0; i < direita; i++){
            $(".alvaroAnda").animate({
                "margin-top": "-=25px"
            }, "slow");
        }
    }

    // ESQUERDA
    if($('.direcaoDireita').is(':checked') && $('.andar3').is(':checked')){
        let esquerda = 2;
        for(i = 0; i < esquerda; i++){
            $(".alvaroAnda").animate({
                "margin-top": "+=13px"
            }, "slow");
        }
    }
    else if($('.direcaoDireita').is(':checked') && $('.andar4').is(':checked')){
        let esquerda = 4;
        for(i = 0; i < esquerda; i++){
            $(".alvaroAnda").animate({
                "margin-top": "+=20px"
            }, "slow");
        }
    }
    else if($('.direcaoDireita').is(':checked') && $('.andar5').is(':checked')){
        let esquerda = 5;
        for(i = 0; i < esquerda; i++){
            $(".alvaroAnda").animate({
                "margin-top": "+=25px"
            }, "slow");
        }
    }

    // FRENTE
    if($('.direcaoFrente').is(':checked') && $('.andar3').is(':checked')){
        let frente = 3;
        for(i = 0; i < frente; i++){
            $(".alvaroAnda").animate({
                "margin-left": "+=13px"
            }, "slow");
        }
    }
    else if($('.direcaoFrente').is(':checked') && $('.andar4').is(':checked')){
        let frente = 4;
        for(i = 0; i < frente; i++){
            $(".alvaroAnda").animate({
                "margin-left": "+=20px"
            }, "slow");
        }
    }
    else if($('.direcaoFrente').is(':checked') && $('.andar5').is(':checked')){
        let frente = 5;
        for(i = 0; i < frente; i++){
            $(".alvaroAnda").animate({
                "margin-left": "+=80px"
            }, "slow");
        }
    }
    

});