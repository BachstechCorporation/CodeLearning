<?php require("conexao.php"); ?>

<!DOCTYPE html>

<html lang="pt-br">
  
<head>
  <link rel="stylesheet" href="cssperfil/perfilCadastro.css">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Perfil</title>
  <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
	<link href="css/mdb.min.css" rel="stylesheet">
	<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
</head>

<body style="background-color: rgb(248, 248, 248);">

    <!--CLASS MODIFICADA-->
<nav class="navbar navbar-expand-lg navbar navbar-light" style="background-image: linear-gradient(to left, rgba(169, 210, 233, 0.8), rgba(139, 192, 223, 0.8), rgba(183, 210, 226, 0.8))">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarRightAlignExample"
      aria-controls="navbarRightAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarRightAlignExample">
		<div class="collapse navbar-collapse" id="navbarLeftAlignExample">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="../../../../../Mundos/index.html"><img src="img/LogoCodeLearning.png" height="60px" width="100px"/></a>
        </li>
		</ul>
		</div>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#"><img src="img/group-icon.png"/>Sobre nós</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-white" href="#"><img src="img/ajuda-icon.png"/>Ajuda</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  <div id="perfilAlunoEs">
    <!-- PARTE 1 -->
    <div class="headerPerfil">
      <div class="conteudoPerfil">
        <p class="tituloHeaderPerfil"> Perfil</p>   
        <div class="grid-headerPerfil">

        <?php
            include("conexao.php");
            session_start();

            $id = $_SESSION['id'];

            try {
              
              $stmt = $pdo->prepare("select * from tbCadastroEscola where idCadastroEscola=$id ");
              $stmt->execute();
          
              while ($row = $stmt->fetch(PDO::FETCH_BOTH)) {
                    echo "<div scope='row'><img src='img/anonima.jpg' class='imgPerfil'/></div>";
                    echo "<div class='dadosHeaderPerfil'>";
                      $row['idCadastroEscola'];
                      echo "<p class='nomeheaderPerfil'>".$row['nomeEscola']."</p>";
                      echo "<p class='emailheaderPerfil'>".$row['emailEscola']."</p>";
                      echo "<p class='emailheaderPerfil'>Telefone: ".$row['telefoneEscola']."</p>";
                      $row['senhaEscola'];
                      
                        echo "<a href='?idEs=$row[idCadastroEscola]&nomeEs=$row[nomeEscola]&emailEs=$row[emailEscola]&senhaEs=$row[senhaEscola]'>";
                            echo "Alterar";
                        echo "</a>";
                    // echo "</div>";
                    
                    echo "<div>";
                        echo "<p class='emailheaderPerfil'>UF Escola: ";
                        echo $row['ufEscola']."</p>";
                        echo "<p class='emailheaderPerfil'>Cidade: ";
                        echo $row['cidadeEscola']."</p>";
                    echo "</div>";

                  echo "</div>";
              }
          
          } catch (PDOException $e) {
              echo "Erro" . $e -> getMessage();
          }

        ?>
        </div>
      </div>
      <!-- fim parte 1 abaixo -->
    </div>
          
    <!-- PARTE 2 -->
    <div class="conteudoPerfil">
      <p class="tituloHeaderPerfil">Alteração de dados</hp>    
      <div class="grid-corpoPerfil">
        
      <div>
        <form>
          <label for="exampleFormControlFile1">Foto
            <input type="file" id="exampleFormControlFile1">
          </label>
        </form>
        
        <form action="genero-alterar.php" method="post">
          <label>ID
            <input type="text" class="inputAlterar" placeholder="ID Escola" name ="txIdEscola" value="<?php echo @$_GET['idEs']; ?>"/>
          </label>

          <label> Nome Escola
            <input type="text" class="inputAlterar" placeholder="Nome Escola" name ="txNomeEscola" value="<?php echo @$_GET['nomeEs']; ?>"/>
          </label>
          <input type="submit" class="btnAlterar" placeholder="Enviar"/>

        </div>

        <div>
          <label> E-mail Escola
            <input type="text" class="inputAlterar" placeholder="Email Escola" name ="txEmailEscola" value="<?php echo @$_GET['emailEs']; ?>"/>
          </label>

          <label>Senha
            <input type="password" class="inputAlterar" placeholder="Nova Senha" name ="txSenhaAl" value="<?php echo @$_GET['senhaAl']; ?>" />
          </label>
          
          <label>Confirme sua senha
            <input type="password" class="inputAlterar" placeholder="Confirmar senha" name ="txCSenhaAl"/>
          </label>
        </div>
        </form>
      <!-- fim parte 2 abaixo-->
      </div>
    </div>
  </div>

<!-- Footer -->
<footer class="text-center text-white" style="background-color: #7ac3e0;">
  <!-- Grid container -->
  <div class="container p-4">

    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-6 col-md-6 mb-6 mb-md-0">
          <h5 class="text-uppercase">Fale Conosco</h5><hr>

          <ul class="list-unstyled mb-0">
            <li> 
			   <img src="img/email-icon.png"/>contatobachstech@gmail.com</i>
            </li>
            <li>
              <img src="img/tel-icon.png"/>+55 4002 - 8922</i>
            </li>
            <li>
			  <img src="img/group-icon.png"/>11 96314 - 2524</i>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        
        <!--Grid column-->
        <div class="col-lg-6 col-md-6 mb-6 mb-md-0">
          <h5 class="text-uppercase">Quem Somos</h5><hr>

          <ul class="list-unstyled mb-0">
            <li>
              <img src="img/youtube-icon.png"/>Bachstech Company</i>
            </li>
            <li>
		      <img src="img/twitter-icon.png"/>@Bachstech</i>
            </li>
            <li>
              <img src="img/insta-icon.png"/>Bachstech
            </li>
            <li>
              <img src="img/github-icon.png"/>Bachstech Company</i>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </section>
    <!-- Section: Links -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div
    class="text-center p-3"
    style="background-color: rgba(0, 0, 0, 0.2)">
    © 2021 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">Bachstech</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
  </body>
</html>