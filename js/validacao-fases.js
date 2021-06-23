
// 1 mundo

// retira a sombra vermelha do botão
$("#resetar").click(function(){ 
    $('.btn-tentarNov').css("box-shadow", "3px 3px 3px transparent");
});
    
// FASE 1
$("#execM1F1").click(function(){

    if(($('.frenteM1F1').is(':checked')) && ($('.andar5M1F1').is(':checked'))){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 2
$("#execM1F2").click(function(){

    if(($('.frenteM1F2').is(':checked')) && ($('.andar1M1F2').is(':checked'))
        && ($('.esquerda1F2').is(':checked')) && ($('.andar2M1F2').is(':checked'))
        && ($('.direita1F2').is(':checked')) && ($('.andar3M1F2').is(':checked'))){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);

    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 3
$("#execM1F3").click(function(){

    if(($('.andar1M1F3').is(':checked')) && ($('.direita1M1F3').is(':checked')) 
        && ($('.atacar1M1F3').is(':checked')) && ($('.direita2M1F2').is(':checked')) && ($('.andar3M1F3').is(':checked')) 
        && ($('.atacar2M1F3').is(':checked')) && ($('.direita3M1F2').is(':checked')) && ($('.andar4M1F3').is(':checked'))
        && ($('.frente1M1F3').is(':checked')) && ($('.andar5M1F3').is(':checked')) && ($('.esquerda2M1F3').is(':checked'))
        && ($('.andar6M1F3').is(':checked')) && ($('.atacar3M1F3').is(':checked')) && ($('.direita4M1F2').is(':checked'))
        && ($('.andar7M1F3').is(':checked'))  && ($('.esquerda3M1F3').is(':checked')) && ($('.andar8M1F3').is(':checked'))
        ){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 4
$("#execM1F4").click(function(){

    if(($('.andar1M1F4').is(':checked')) && ($('.direita1M1F4').is(':checked'))
        && ($('.andar2M1F4').is(':checked')) && ($('.direita2M1F4').is(':checked'))
        && ($('.andar3M1F4').is(':checked')) && ($('.esquerda1M1F4').is(':checked'))
        && ($('.andar4M1F4').is(':checked')) && ($('.esquerda2M1F4').is(':checked'))
        && ($('.andar5M1F4').is(':checked')) && ($('.esquerda3M1F4').is(':checked'))
        && ($('.andar6M1F4').is(':checked')) && ($('.esquerda4M1F4').is(':checked'))
        && ($('.andar7M1F4').is(':checked'))
        ){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 5
$("#execM1F5").click(function(){

    if(($('.esquerda1M1F5').is(':checked')) && ($('.andar1M1F5').is(':checked'))){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// MUNDO 2
// FASE 1
$("#execM2F1").click(function(){

    if(($('.laco1M2F1').is(':checked')) && ($('.frente1M2F1').is(':checked'))
        && ($('.andar1M2F1').is(':checked')) && ($('.esquerda1M2F1').is(':checked'))
        && ($('.andar2M2F1').is(':checked')) && ($('.andar3M2F1').is(':checked'))
    ){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 2
$("#execM2F2").click(function(){

    if(($('.laco1M2F2').is(':checked')) && ($('.andar1M2F2').is(':checked'))
        && ($('.direcao1M2F2').is(':checked'))
    ){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});


// FASE 3
$("#execM2F3").click(function(){

    if(($('.lacoM2F3').is(':checked')) && ($('.andarM2F3').is(':checked'))
    ){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 4
$("#execM2F4").click(function(){

    if(($('.andar1M2F4').is(':checked')) && ($('.direcao1M2F4').is(':checked'))
        && ($('.laco1M2F4').is(':checked')) && ($('.andar2M2F4').is(':checked'))
        && ($('.atacar1M2F4').is(':checked')) && ($('.direcao2M2F4').is(':checked'))
        && ($('.andar3M2F4').is(':checked')) && ($('.direcao3M2F4').is(':checked'))
        && ($('.andar4M2F4').is(':checked'))
    ){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 5
$("#execM2F5").click(function(){

    if(($('.laco1M2F5').is(':checked')) && ($('.direcao1M2F5').is(':checked'))
        && ($('.andar1M2F5').is(':checked')) && ($('.direcao2M2F5').is(':checked'))
        && ($('.andar2M2F5').is(':checked'))
    ){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }
    else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});


// MUNDO 3
$('#resetar').click(function(){
    $('.btn-tentarNov').css("box-shadow", "3px 3px 3px transparent");
});


// FASE 1 
//frenteM3F1 / repeatM3F1 (1) / andarM3F1 (5) / atacarM3F1 (0) 
// 1-5-F-N
$('#execM3F1').click(function(){
    if(($('.repeatM3F1').is(':checked')) && ($('.andarM3F1').is(':checked'))
    && ($('.frenteM3F1').is(':checked')) && ($('.atacarM3F1').is(':checked'))){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);

    }else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 2
//repeatM3F2 (1) / frenteM3F2 / andarM3F2 (5)/ direitaM3F2 / andar2M3F2 (5) / frente2M3F2 / andar3M3F2(1)
$('#execM3F2').click(function(){
    if(($('.repeatM3F2').is(':checked')) && ($('.frenteM3F2').is(':checked'))
    && ($('.andarM3F2').is(':checked')) && ($('.direitaM3F2').is(':checked'))
    && ($('.andar2M3F2').is(':checked')) && ($('.frente2M3F2').is(':checked'))
    && ($('.andar3M3F2').is(':checked'))){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 3
//andarM3F3 (5) / frenteM3F3 / atacarM3F3 (0) / repeatM3F3
$('#execM3F3').click(function(){
    if(($('.andarM3F3').is(':checked')) && ($('.frenteM3F3').is(':checked'))
    && ($('.atacarM3F3').is(':checked')) && ($('.repeatM3F3').is(':checked'))){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 4
//repeatM3F4 (1) /  frenteM3F4 / andarM3F4 (5) / esquerdaM3F4 / andar2M3F4 (5) / frente2M3F4 / andar3M3F4 (5) / atacarM3F4
$('#execM3F4').click(function(){
    if(($('.repeatM3F4').is(':checked')) && ($('.frenteM3F4').is(':checked'))
    &&($('.andarM3F4').is(':checked')) && ($('.esquerdaM3F4').is(':checked'))
    &&($('.andar2M3F4').is(':checked')) && ($('.frente2M3F4').is(':checked'))
    &&($('.andar3M3F4').is(':checked')) && ($('.atacarM3F4').is(':checked'))){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});

// FASE 5
//repeatM3F5 (1) / frenteM3F5 / andarM3F5 (5) / atacarM3F5 (0)
$('#execM3F5').click(function(){
    if(($('.repeatM3F5').is(':checked')) && ($('.frenteM3F5').is(':checked'))
    && ($('.andarM3F5').is(':checked')) && ($('.atacarM3F5').is(':checked'))){
        $("#msgCmnhCer").css("display", "block");
        $('#msgCmnhCer').fadeOut(5500);
    }else{
        $('#msgCmnhErr').css("display", "block");
        $('#msgCmnhErr').fadeOut(4500);
    }
});