function validarNomeAl() {
  var nomeAl = document.getElementById("txtNomeAl").value;

  if (nomeAl.length > 3) {
    return true;
  } else {
    document.getElementById("msgErro").innerHTML = "Digite um nome válido"
    document.getElementById("txtNomeAl").focus();
    return false;
  }
}

function validarEmailAl() {
  var emailAl = document.getElementById("txtEmailAl").value;

  if (emailAl.length > 5) {
    return true;
  }
  else {
    document.getElementById("msgErro").innerHTML =
      "Insira um email válido."
    document.getElementById("txtEmailAl").focus();
    return false;
  }
}

function validarSenhaAl() {
  var senhaAl = document.getElementById("txtSenhaAl").value;

  if (senhaAl.length > 5) {
    return true;
  }
  else {
    document.getElementById("msgErro").innerHTML =
      "Insira uma senha válida"
    document.getElementById("txtSenhaAl").focus();
    return false;
  }
}

function validarTudoAl() {
  if (validarNomeAl() && validarEmailAl() && validarSenhaAl()) {
    return true;

  } else {
    return false;
  }
}