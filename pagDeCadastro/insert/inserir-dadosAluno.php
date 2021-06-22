<?php
     
            //     INSERCAO DE DADOS DO CADASTRO ALUNO 

    $nomeAluno = $_POST['txtNomeAl'];
    $classeAluno = $_POST['txtClasseAl'];
    $emailAluno = $_POST['txtEmailAl'];
    $senhaALuno = $_POST['txtSenhaAl'];
    $confircaoSenhaAluno = $_POST['txtConfSenhaAl'];
    include("conexao.php");

    try {
        
        $stmt = $pdo->prepare("insert into tbCadastroAluno values(null,'$nomeAluno','$emailAluno','$classeAluno','$senhaALuno','$confircaoSenhaAluno','null')");
        $stmt ->execute();

        $pdo = null;

        header("Location:pagDeLogin/loginAluno.php");


    } catch (PDOExceptio $e) {
        echo "Erro: " . $e->getMessage();
    }

?>