<?php
     
            //     INSERCAO DE DADOS DO CADASTRO ALUNO 

    $nomeEscola = $_POST['txtNomeEsc'];
    $emailEscola = $_POST['txtEmailEsc'];
    $ufEscola = $_POST['txtUFEsc'];
    $cidadeEscola = $_POST['txtcidadeEsc'];
    $bairroEscola = $_POST['txtBairroEsc'];
    $logEscola = $_POST['txtLogEsc'];
    $numLogEscola = $_POST['txtNumLogEsc'];
    $cepEscola = $_POST['txtCEPEsc'];
    $foneEscola = $_POST['txtFoneEsc'];
    $senhaEscola = $_POST['txtSenhaEsc'];
    $confircaoSenhaEscola = $_POST['txtConfSenhaEsc'];

    include("conexao.php");

    try {
        
        $stmt = $pdo->prepare("insert into tbCadastroEscola values(null,'$nomeEscola','$emailEscola','$ufEscola','$cidadeEscola','$bairroEscola','$logEscola','$numLogEscola','$cepEscola','$senhaEscola','$confircaoSenhaEscola','null','$foneEscola')");
        $stmt ->execute();

        $pdo = null;

        header("Location:pagDeLogin/loginEscola.php");


    } catch (PDOExceptio $e) {
        echo "Erro: " . $e->getMessage();
    }

?>