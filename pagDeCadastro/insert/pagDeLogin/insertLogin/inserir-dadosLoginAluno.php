<?php

            //     INSERCAO DE DADOS DO LOGIN ALUNO

    session_start();


    //recuperação dos valores digitados no formulario loginAluno
    $nomeAl = $_POST['txtNomeAl'];
    $emailAl = $_POST['txtEmailAl'];
    $senhaAl = $_POST['txtSenhaAl'];
    include("conexao.php");

        

    //variáveis para verificar com o banco de dados 
    $nomeAlBD = '';
    $emailAlBD = '';
    $senhaAlBD = '';


    try{

    $stmt = $pdo -> prepare("select idCadastroAluno,nomeAluno,emailAluno,senhaAluno from tbcadastroaluno where nomeAluno='$nomeAl' and emailAluno='$emailAl' and senhaAluno='$senhaAl'");
    $stmt ->execute();

        while ($row = $stmt->fetch(PDO::FETCH_BOTH)) {
        $nomeAlBD = $row['nomeAluno'];
        $emailAlBD = $row['emailAluno'];
        $senhaAlBD = $row['senhaAluno'];
        $idAlunoBd = $row['idCadastroAluno'];
        }
        
        
    } catch (PDOExceptio $e) {
        echo "Erro: " . $e->getMessage();
    }
    
    
    if($nomeAl == $nomeAlBD && $emailAl == $emailAlBD && $senhaAl == $senhaAlBD){
        
        //$valores = $pdo->prepare("insert into tbLoginAluno values(null,'$idAlunoBd','null')");
        //$valores ->execute();

            $_SESSION['autorizacao'] = true;
            $_SESSION['id'] = $idAlunoBd;
            header ("Location:perfil/perfil-Aluno.php");

        } else {
            //Login e/ou senha incorretos
            echo "<script> alert('Login e/ou senha incorretos')</script>";
            echo "<script> window.location='../LoginAluno.php';</script>";
                $_SESSION['autorizacao'] = false;
                unset($_SESSION['autorizacao']);
                session_destroy();
        }
?>