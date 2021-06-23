// MUNDO 1

$('#F2tentarDnvModal').click(function(){
    // volta os botoes antes de confirmar MUNDO 1 FASE 2
    $('#confirmarModal').css('display', 'block');
    $('#btnPularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 1 FASE 3
    $('#F3confirmarModal').css('display', 'block');
    $('#F3btnPularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 1 FASE 4
    $('#F4confirmarModal').css('display', 'block');
    $('#F4btnPularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 1 FASE 5
    $('#F5confirmarModal').css('display', 'block');
    $('#F5btnPularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 2 FASE 2
    $('#M2F2confirmarModal').css('display', 'block');
    $('#M2F2PularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 2 FASE 3
    $('#M2F3confirmarModal').css('display', 'block');
    $('#M2F3PularModal').css('display', 'block');
    $('#M2F2PularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 2 FASE 4
    $('#M2F4confirmarModal').css('display', 'block');
    $('#M2F4PularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 2 FASE 5
    $('#M2F5confirmarModal').css('display', 'block');
    $('#M2F5PularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 3 FASE 2
    $('#M3F2ConfirmarModal').css('display', 'block');
    $('#M3F2btnPularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 3 FASE 3
    $('#M3F3ConfirmarModal').css('display', 'block');
    $('#M3F3btnPularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 3 FASE 4
    $('#M3F4ConfirmarModal').css('display', 'block');
    $('#M3F4btnPularModal').css('display', 'block');

    // volta os botoes antes de confirmar MUNDO 3 FASE 5
    $('#M3F5ConfirmarModal').css('display', 'block');
    $('#M3F5btnPularModal').css('display', 'block');

    // tira o botao de tentar de novo
    $('#F2tentarDnvModal').css('display', 'none');

    // tira a messagem fracasso
    $('#msgFracasso').css('display', 'none');
    $('#msgSucesso').css('display', 'none');

    //tira menasgem fracasso / sucesso mundo 3
    $('#msgFracassoM3').css('display', 'none');
    $('#msgSucessoM3').css('display', 'none');
});


$('#F2continuarModal').click(function(){
    // fecha o modal de missao
    $('.abrir-modal').css('display', 'none');
});

// FASE 2
$('#confirmarModal').click(function(){
    if($('#F1D1').val() == 'Frente' && $('#F1A1').val() == 5){

        // faz mensagem sucesso aparecer
        $('#msgSucesso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#confirmarModal').css('display', 'none');
        $('#btnPularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }
    else

        $('#msgFracasso').fadeIn(450);
        $('#confirmarModal').css('display', 'none');
        $('#btnPularModal').css('display', 'none');
        // botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    
});

// FASE 3
$('#F3confirmarModal').click(function(){
    if($('#F3A1').val() == 3
    && $('#F3D1').val() == 'Esquerda'

    && $('#F3A2').val() == 3
    && $('#F3D2').val() == 'Frente'
    
    && $('#F3A3').val() == 3
    && $('#F3D3').val() == 'Esquerda'
    
    && $('#F3A4').val() == 3)
    {
        // faz mensagem sucesso aparecer
        $('#msgSucesso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#F3confirmarModal').css('display', 'none');
        $('#F3btnPularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }
    else{
        // faz mensagem fracasso aparecer
        $('#msgFracasso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#F3confirmarModal').css('display', 'none');
        $('#F3btnPularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});

// FASE 4
$('#F4confirmarModal').click(function(){
    if(
       $('#F4A1').val() == 3
    && $('#F4D1').val() == 'Esquerda' || $('#F4D1').val() == 'Direita'

    && $('#F4A2').val() == 3
    && $('#F4AT1').val() == 5
    
    && $('#F4D2').val() == 'Tras'
    && $('#F4A3').val() == 3

    && $('#F4AT2').val() == 5
    && $('#F4D3').val() == 'Tras'
    
    && $('#F4A4').val() == 4
    && $('#F4D4').val() == 'Frente'

    && $('#F4A5').val() == 5
    && $('#F4D5').val() == 'Esquerda'

    && $('#F4A6').val() == 4
    && $('#F4AT3').val() == 5

    && $('#F4D6').val() == 'Tras'
    && $('#F4A7').val() == 4

    && $('#F4D7').val() == 'Esquerda'
    && $('#F4A8').val() == 2)
    {
        // faz mensagem sucesso aparecer
        $('#msgSucesso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#F4confirmarModal').css('display', 'none');
        $('#F4btnPularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }
    else{
        // faz mensagem fracasso aparecer
        $('#msgFracasso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#F4confirmarModal').css('display', 'none');
        $('#F4btnPularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});

// FASE 5
$('#F5confirmarModal').click(function(){
    if(
        $('#F5A1M').val() == 5
    && $('#F5D1M').val() == 'Direita'
    
    && $('#F5A2M').val() == 2
    && $('#F5D2M').val() == 'Direita'
    
    && $('#F5A3M').val() == 3
    && $('#F5D3M').val() == 'Esquerda'
    
    && $('#F5A4M').val() == 4
    && $('#F5D4M').val() == 'Esquerda'
    
    && $('#F5A5M').val() == 5
    && $('#F5D5M').val() == 'Esquerda'
    
    && $('#F5A6M').val() == 5
    && $('#F5D6M').val() == 'Direita'
    
    && $('#F5A7M').val() == 2
    )
    {
        // faz mensagem sucesso aparecer
        $('#msgSucesso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#F5confirmarModal').css('display', 'none');
        $('#F5btnPularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }
    else{
        // faz mensagem fracasso aparecer
        $('#msgFracasso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#F5confirmarModal').css('display', 'none');
        $('#F5btnPularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});

// MUNDO 2
// FASE 2
$('#M2F2confirmarModal').click(function(){
    if($('#L1M2F2').val() == 2
        && $('#D1M2F2').val() == 'Frente'
        && $('#A1M2F2').val() == 3
        && $('#D2M2F2').val() == 'Esquerda'
        && $('#A2M2F2').val() == 3
        && $('#A3M2F2').val() == 3
    ){
        // faz mensagem sucesso aparecer
        $('#msgSucesso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M2F2confirmarModal').css('display', 'none');
        $('#M2F2PularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }
    else{
        // faz mensagem fracasso aparecer
        $('#msgFracasso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M2F2confirmarModal').css('display', 'none');
        $('#M2F2PularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});

// FASE 3
$('#M2F3confirmarModal').click(function(){
    if($('#L1M2F3').val() == 2
        && $('#A1M2F2').val() == 5
        && $('#D1M2F2').val() == 'Direita'
    ){
        // faz mensagem sucesso aparecer
        $('#msgSucesso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M2F3confirmarModal').css('display', 'none');
        $('#M2F3PularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }
    else{
        // faz mensagem fracasso aparecer
        $('#msgFracasso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M2F3confirmarModal').css('display', 'none');
        $('#M2F3PularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});

// FASE 4
$('#M2F4confirmarModal').click(function(){
    if($('#L1M2F4').val() == 5
        && $('#A1M2F4').val() == 3
    ){
        // faz mensagem sucesso aparecer
        $('#msgSucesso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M2F4confirmarModal').css('display', 'none');
        $('#M2F4PularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }
    else{
        // faz mensagem fracasso aparecer
        $('#msgFracasso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M2F4confirmarModal').css('display', 'none');
        $('#M2F4PularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});

// FASE 5
$('#M2F5confirmarModal').click(function(){
    if($('#A1M2F5').val() == 3 && $('#D1M2F5').val() == 'Direita'
        && $('#L1M2F5').val() == 4 & $('#A2M2F5').val() == 3
        && $('#AT1M2F5').val() == 5 && $('#D2M2F5').val() == 'Esquerda'
        && $('#A3M2F5').val() == 3 && $('#D3M2F5').val() == 'Esquerda'
        && $('#A4M2F5').val() == 5
    ){
        // faz mensagem sucesso aparecer
        $('#msgSucesso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M2F5confirmarModal').css('display', 'none');
        $('#M2F5PularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }
    else{
        // faz mensagem fracasso aparecer
        $('#msgFracasso').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M2F5confirmarModal').css('display', 'none');
        $('#M2F5PularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});



// MUNDO 3 
// FASE 2 
// M3F2ConfirmarModal - M3F2btnPularModal - F2continuarModal - F2tentarDnvModal
// M3F2L1(1) - M3F2A1(5) - M3F2D1(frente) - M3F2S1(0)
$('#M3F2ConfirmarModal').click(function(){
    if(
            $('#M3F2L1').val() == 1
        &&  $('#M3F2A1').val() == 4
        &&  $('#M3F2D1').val() == 'Frente'
        &&  $('#M3F2S1').val() == 0
    ){
        // faz mensagem sucesso aparecer
        $('#msgSucessoM3').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M3F2ConfirmarModal').css('display', 'none');
        $('#M3F2btnPularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }else{
        // faz mensagem fracasso aparecer
        $('#msgFracassoM3').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M3F2ConfirmarModal').css('display', 'none');
        $('#M3F2btnPularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});

//FASE 3 
// M3F3ConfirmarModal - M3F3btnPularModal - F2continuarModal - F2tentarDnvModal
//M3F3L1(1) - M3F3D1(frente) - M3F3A1(5) - M3F3D2(Direita) - M3F3A2(5) - M3F3D3(frente) - M3F3A3(1) - M3F3S1(0)
$('#M3F3ConfirmarModal').click(function(){
    if(
            $('#M3F3L1').val() == 1
        &&  $('#M3F3D1').val() == 'Frente'
        &&  $('#M3F3A1').val() == 5
        &&  $('#M3F3D2').val() == 'Direita'
        &&  $('#M3F3A2').val() == 5
        &&  $('#M3F3D3').val() == 'Frente'
        &&  $('#M3F3A3').val() == 1
        &&  $('#M3F3S1').val() == 0
    ){
        // faz mensagem sucesso aparecer
        $('#msgSucessoM3').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M3F3ConfirmarModal').css('display', 'none');
        $('#M3F3btnPularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);
    }else{
        // faz mensagem fracasso aparecer
        $('#msgFracassoM3').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M3F3ConfirmarModal').css('display', 'none');
        $('#M3F3btnPularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});

//FASE 4
// M3F4ConfirmarModal - M3F4btnPularModal - F2continuarModal - F2tentarDnvModal
//M3F4L1(1) - M3F4A1(5) - M3F4D1(F) - M3F4S1(0)
$('#M3F4ConfirmarModal').click(function(){
    if(
            $('#M3F4L1').val() == 1
        &&  $('#M3F4A1').val() == 5
        &&  $('#M3F4D1').val() == 'Frente'
        &&  $('#M3F4S1').val() == 0
    ){
        // faz mensagem sucesso aparecer
        $('#msgSucessoM3').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M3F4ConfirmarModal').css('display', 'none');
        $('#M3F4btnPularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);        
    }else{
        // faz mensagem fracasso aparecer
        $('#msgFracassoM3').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M3F4ConfirmarModal').css('display', 'none');
        $('#M3F4btnPularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});

//FASE 5 
// M3F5ConfirmarModal - M3F5btnPularModal - F2continuarModal - F2tentarDnvModal
//M3F5L1(1) - M3F5D1(F) - M3F5A1(5) - M3F5D2(E) - M3F5A2(5) - M3F5D3(F) - M3F5A3(5) - M3F5S1(0)
$('#M3F5ConfirmarModal').click(function(){
    if(
            $('#M3F5L1').val() == 1
        &&  $('#M3F5D1').val() == 'Frente'
        &&  $('#M3F5A1').val() == 5
        &&  $('#M3F5D2').val() == 'Esquerda'
        &&  $('#M3F5A2').val() == 5
        &&  $('#M3F5D3').val() == 'Frente'
        &&  $('#M3F5A3').val() == 5
        &&  $('#M3F5S1').val() == 0
    ){
        // faz mensagem sucesso aparecer
        $('#msgSucessoM3').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M3F5ConfirmarModal').css('display', 'none');
        $('#M3F5btnPularModal').css('display', 'none');
        // botoes tentar de novo e prosseguir
        $('#F2tentarDnvModal').fadeIn(450);
        $('#F2continuarModal').fadeIn(450);   
    }else{
        // faz mensagem fracasso aparecer
        $('#msgFracassoM3').fadeIn(450);
        // tira botoes antes de confirmar 
        $('#M3F5ConfirmarModal').css('display', 'none');
        $('#M3F5btnPularModal').css('display', 'none');
        // mostra botao tentar de novo
        $('#F2tentarDnvModal').css('display', 'block');
    }
});