jQuery('#btn1').click(function(){
    $('#dialog-2').show();
    $('#dialog-1').hide();
});

jQuery('#btn2').click(function(){
    $('#dialog-3').show();
    $('#dialog-2').hide();
});

jQuery('#btn3').click(function(){
    $('#dialog-4').show();
    $('#dialog-3').hide();
});

jQuery('#btn4').click(function(){
    $('#dialog-5').show();
    $('#dialog-4').hide();
});

jQuery('#btn5').click(function(){
    $('#dialog-5').hide();
    $('#dialog-3').hide();
    $('#consolejg-div').show();
    $('#formulario-div').show();
    $('.alvaroAnda').show();
});