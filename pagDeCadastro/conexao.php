<?php

    //dados parao acesso ao bando de dados
    $servidor = "localhost";
    $banco = "bdCodeLearning";
    $usuario = "root";
    $senha = "";

    $pdo = new PDO("mysql:host=$servidor;dbname=$banco",$usuario,$senha);

?>