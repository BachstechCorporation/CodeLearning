<?php

    require("conexao.php");

    $idAl = $_POST['txIdAluno'];
    $nomeAl = $_POST['txNomeAluno'];
    $emailAl = $_POST['txEmail'];
    $senhaAl = $_POST['txSenhaAl'];
    

    //imagem
    $erro = 0;
	
			if(isset($_FILES["fotoAl"])){
				$arqNome = $_FILES["fotoAl"]["name"];
				$arqTipo = $_FILES["fotoAl"]["type"];
				$arqTamanho = $_FILES["fotoAl"]["size"];
				$arqNomeTemp = $_FILES["fotoAl"]["tmp_name"];
				$erro = $_FILES["fotoAl"]["error"];
				
				if($erro==0){
					if(is_uploaded_file($arqNomeTemp)){
						if(move_uploaded_file($arqNomeTemp,"imagens/". $arqNome)){
							//echo "Sucesso!";
									
							$produto = $_POST['txProduto'];
							$imagemProduto = 'imagens/' .$arqNome;

                            
                        }
						else{
							$erro = "Falha ao mover o arquivo";
						}
					}
					else{
						$erro = "Erro no envio: arquivo não recebido.";
					}
									
				}
				else{
					$erro = "Erro no envio: " . $erro;			
				}								
			}
			else{
				$erro = "Arquivo enviado não encontrado";
			}

    try {

        $stmt = $pdo -> prepare("update tbCadastroAluno set nomeAluno ='$nomeAl',emailAluno='$emailAl',senhaAluno='$senhaAl',ConfirSenAluno='$senhaAl',imgAluno='$imagemProduto' where idCadastroAluno = '$idAl'");
        $stmt -> execute();

        echo "<script> alert('Dados alterados com sucesso'); </script>";
        echo "<script> window.location ='../perfil-Aluno.php'; </script>";

    } catch (PDOExecption $e) {
        echo "Erro: " . $e ->getMessage();
    }

?>