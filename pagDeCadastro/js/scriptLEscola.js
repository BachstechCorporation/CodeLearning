
function validarNomeEsc(){
  var nomeEsc = document.getElementById("txtNomeEsc").value;

  //validar com o cadastro
  if (nomeEsc.length > 10){
    return true;
  }
  else {
    document.getElementById("msgErro").innerHTML = 
    "Insira um nome válido"
    document.getElementById("txtNomeEsc").focus();
    return false;
  }

}

function validarEmailEsc(){
  var emailEsc = document.getElementById("txtEmailEsc").value;

  //validar com o cadastro
  if (emailEsc.length > 5) {
    return true;
  }
  else {
    document.getElementById("msgErro").innerHTML = 
    "Insira um email válido."
    document.getElementById("txtEmailEsc").focus();
    return false;
  }

}

function validarSenhaEsc(){
  var senhaEsc = document.getElementById("txtSenhaEsc").value;

  //validar com o cadastro
  if (senhaEsc.length > 5){
    return true;
  }
  else {
    document.getElementById("msgErro").innerHTML = "Senha inválida";
    document.getElementById("txtSenhaEsc").focus();
    return false;
  }
}

function validarTudoEsc(){
  if(validarNomeEsc() && validarEmailEsc() && validarSenhaEsc()){
    return true;

  }else{
    return false;
  }
  
}