/* ids
msgErro
txtNome
txtEmail
txtClasse
txtSenha
txtConfSenha
*/

function validarNomeAl() {
  var nomeAl = document.getElementById("txtNomeAl").value;

  if (nomeAl.length > 3) {
    return true;
  }
  else {
    document.getElementById("msgErro").innerHTML =
      "Insira o nome do aluno a ser cadastrado"

    document.getElementById("txtNomeAl").focus();
    return false;
  }
}

function validarEmailAl() {
  var emailAl = document.getElementById("txtEmailAl").value;

  if (emailAl.length > 5) {
    return true;
  } else {
    document.getElementById("msgErro").innerHTML = "Insira o email do aluno a ser cadastrado"
    document.getElementById("txtEmailAl").focus();
    return false;

  }

}

function validarClasseAl() {
  var classeAl = document.getElementById("txtClasseAl").value;

  if (classeAl.length > 2) {
    return true;
  }
  else {
    document.getElementById("msgErro").innerHTML =
      "Informe a classe do aluno."

    document.getElementById("txtClasseAl").focus();
    return false;

  }
}

  function validarSenhasAl() {
    var senha1Al = document.getElementById("txtSenhaAl").value;
    var senha2Al = document.getElementById("txtConfSenhaAl").value;

    if ((document.getElementById("txtSenhaAl").value == document.getElementById("txtConfSenhaAl").value) &&
    senha1Al.length > 5 &&
    senha2Al.length > 5) {

      return true;
    } else {
      document.getElementById("msgErro").innerHTML = "Senhas inválidas"
      document.getElementById("txtSenhaAl").focus();
      document.getElementById("txtConfSenhaAl").focus();
      return false;
    }

  }

  function validarTudoAl() {
    if (validarNomeAl() && validarEmailAl() && validarClasseAl() && validarSenhasAl()) {
      return true;
    } else {
      return false;
    }
  }