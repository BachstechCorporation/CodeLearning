<?php
     session_start();
            //     INSERCAO DE DADOS DO LOGIN ESCOLA


    //recuperação dos valores digitados no formulario loginAluno
    $nomeEscola = $_POST['txtNomeEsc'];
    $emailEscola = $_POST['txtEmailEsc'];
    $senhaEscola = $_POST['txtSenhaEsc'];

    include("conexao.php");


    //variáveis para verificar com o banco de dados 
    $nomeEscolaBD = '';
    $emailEscolaBD = '';
    $senhaEscolaBD = '';


    try {
        
    
    $stmt = $pdo -> prepare("select idCadastroEscola,nomeEscola,emailEscola,senhaEscola from tbcadastroescola where nomeEscola='$nomeEscola' and emailEscola='$emailEscola' and senhaEscola='$senhaEscola'");


    $stmt ->execute();

        while ($row = $stmt->fetch(PDO::FETCH_BOTH)) {
        $nomeEscolaBD = $row['nomeEscola'];
        $emailEscolaBD = $row['emailEscola'];
        $senhaEscolaBD = $row['senhaEscola'];
        $idEscolaBd = $row['idCadastroEscola'];
        }
        
        
    } catch (PDOExceptio $e) {
        echo "Erro: " . $e->getMessage();
    }
    
    
    //verificação para autendicação
    if($nomeEscola == $nomeEscolaBD && $emailEscola == $emailEscolaBD && $senhaEscola == $senhaEscolaBD){
           
        //$valores = $pdo->prepare("insert into tbLoginEscola values(null,'$nomeEscola','$emailEscola','$senhaEscola')");
         //   $valores ->execute();


        //Login foi realizado com sucesso
            $_SESSION['id'] = $idEscolaBd;

            header ("Location:perfil/perfil-escola.php");

        } else {
            //Login e/ou senha incorretos
            "<script language='javascript' type='text/javascript'>
                alert('Login e/ou senha incorretos');</script>";
                header ("Location:../LoginEscola.php");

        }
?>