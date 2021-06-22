/*
	validarNomeEsc
	validarEmailEsc
	validarUfEsc
	validarBairroEsc
	validarCidadeEsc
	validarCepEsc
	validarLogEsc
	validarNumEsc
	validarSenhasEsc
	validarTelEsc
	validarTudoEsc


	txtNomeEsc -- nomeEsc
	txtEmailEsc --  emailEsc
	txtUFEsc --  ufEsc
	txtCEPEsc -- cepEsc
	txtCidadeEsc -- cidEsc
	txtBairroEsc -- bairroEsc
	txtLogEsc -- logEsc
	txtNumLogEsc -- numLogEsc
	txtFoneEsc - foneEsc
	txtConfSenhaEsc -- senha2Esc
	txtSenhaEsc -- senha1Esc
	msgErro
*/

function validarNomeEsc(){
	  var nomeEsc = document.getElementById("txtNomeEsc").value;
	  
	  if (nomeEsc.length > 10){
		return true;
		
	  }else{
		document.getElementById("msgErro").innerHTML ="Insira um nome válido";
		document.getElementById("txtNomeEsc").focus();
		return false;
	  }
}

function validarEmailEsc(){
	  var emailEsc = document.getElementById("txtEmailEsc").value;

	  if(emailEsc.length > 5){
		return true;

	  }else{
		document.getElementById("msgErro").innerHTML = "Insira um email válido";
		document.getElementById("txtEmailEsc").focus();
		return false;
	  }
}

function validarUfEsc(){
	  var ufEsc = document.getElementById("txtUFEsc").value;

	  if (ufEsc.length > 10){
		return true;
		
	  }else{
		document.getElementById("msgErro").innerHTML ="Insira uma UF válida";
		document.getElementById("txtUFEsc").focus();
		return false;
	  }
}

function validarCidadeEsc(){
	  var cidEsc = document.getElementById("txtCidadeEsc").value;

	  if(cidEsc.length > 5 ){
		return true;
		
	  }else{
	   document.getElementById("msgErro").innerHTML = "Insira uma cidade válida";
	   document.getElementById("txtCidadeEsc").focus();
	   return false; 
	  }
}

function validarBairroEsc(){
	  var bairroEsc = document.getElementById("txtBairroEsc").value;

	  if (bairroEsc.length > 10){
		return true;
		
	  }else{
		document.getElementById("msgErro").innerHTML ="Informe um bairro válido";
		document.getElementById("txtBairroEsc").focus();
		return false; 
	 } 
}

function validarLogEsc(){
	  var logEsc = document.getElementById("txtLogEsc").value;
	  
	  if (logEsc.length > 10){
		return true;
		
	  }else{
		document.getElementById("msgErro").innerHTML ="Insira um logradouro válido";
	   document.getElementById("txtLogEsc").focus();
	   return false; 
	  }
}

function validarNumEsc(){
	  var numLogEsc = document.getElementById("txtNumLogEsc").value;

	  if(numLogEsc.length > 1){
		return true;
		
	  }else{
		document.getElementById("msgErro").innerHTML = "Insira um número de logradouro válido";
		document.getElementById("txtNumLogEsc").focus();
		return false;
	  }
}

function validarCepEsc(){
	  var cepEsc = document.getElementById("txtCEPEsc").value;
	  
	  if(cepEsc.length > 8){
		return true;
		
	  }else{
		document.getElementById("msgErro").innerHTML ="Informe um CEP válido";
	   document.getElementById("txtCEPEsc").focus();
	   return false; 
	  }
}

function validarTelEsc(){
	  var foneEsc = document.getElementById("txtFoneEsc").value;
	  
	  if(foneEsc.length > 11){
		return true;
		
	  }else{
	   document.getElementById("msgErro").innerHTML ="Insira um número de contato válido";
	   document.getElementById("txtFoneEsc").focus();
	   return false; 
	 }
}

function validarSenhasEsc() {
  var senha1Esc = document.getElementById("txtSenhaEsc").value;
  var senha2Esc = document.getElementById("txtConfSenhaEsc").value;

  if (senha1Esc.value === senha2Esc.value &&
  senha1Esc.length > 5 &&
  senha2Esc.length > 5) {

    return true;
  } else {
    document.getElementById("msgErro").innerHTML = "Senhas inválidas"
    document.getElementById("txtSenhaEsc").focus();
    document.getElementById("txtConfSenhaEsc").focus();
    return false;
  }
}

function validarTudoEsc(){
	  if(validarNomeEsc() && validarEmailEsc() && validarUfEsc() && validarCidadeEsc() && validarBairroEsc() && validarLogEsc() && validarNumEsc() && validarCepEsc() && validarTelEsc() && validarSenhasEsc()){
		return true;
	  
	  }else{
		return false;
	  }
}