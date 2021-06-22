<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Login Escola</title>
	<link rel="stylesheet" href="css/bootstrap.min.css"  type="text/css">
</head>

<style>

  h2{
    margin-left: 39%;
  }
</style>

  <body>

 <!--CLASS MODIFICADA-->
 <nav class="navbar navbar-expand-lg navbar navbar-light" style="background-image: linear-gradient(to left, rgba(169, 210, 233, 0.8), rgba(139, 192, 223, 0.8), rgba(183, 210, 226, 0.8))">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
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

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarRightAlignExample">
		<div class="collapse navbar-collapse" id="navbarLeftAlignExample">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><img src="img/LogoCodeLearning.png" height="60px" width="100px"/></a>
        </li>
		</ul>
		</div>
      <!-- Left links -->
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#"><img src="img/group-icon.png"/>Sobre nós</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-white" href="#"><img src="img/ajuda-icon.png"/>Ajuda</a>
        </li>
        <!-- Navbar dropdown -->
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
  
    <section>
      <p id="msgErro" class="campMsg"></p>
  
  

			<h2> Login da Escola </h2><br>
    <div class="container-sm">
      <!-- POPRIEDADE PARA CENTRALIZAR: class="ol-md-6 offset-md-3" -->
      <form action="insertLogin/inserir-dadosLoginEscola.php" method="POST" onsubmit="return validarTudoEsc()" class="ol-md-8 offset-md-4"> 
          <div class="col-5 mb-4">
            <div class="form-outline">
              <label class="form-label" for="form3Example1">Nome da escola:</label>
              <input type="text" name="txtNomeEsc" class="form-control" placeholder="Insira o nome da instituição"
              required oninvalid="setCustomValidity('Insira o nome da escola.')" oninput="setCustomValidity('')"/>
            </div>
          </div>
          <div class="col-5 mb-4">
            <div class="form-outline">
              <label class="form-label" for="form3Example2">E-mail da escola:</label>
            <input type="email" name="txtEmailEsc" class="form-control" placeholder="Insira seu e-mail"
            required oninvalid="setCustomValidity('Insira o e-mail da escola.')" oninput="setCustomValidity('')"/>
            </div>
          </div>
        <div class="col-5 mb-4">
          <div class="form-outline">
            <label class="form-label" for="form3Example2">Senha da escola:</label>
            <input type="password" name="txtSenhaEsc" class="form-control" placeholder="Insira sua senha de acesso"
            required oninvalid="setCustomValidity('Confirme sua senha de acesso.')" oninput="setCustomValidity('')"/>
          </div>
  
            <center>
            <br>
            <input type="submit" class="btn btn-primary btn-block mb-4"></input>
          </center>
          
        
          <!-- Submit button -->
        
          <!-- Register buttons -->
          <div class="text-center">
            <p>Ou entre com</p>
            
              <img src="img/face-icon.png" alt="" height="32px" width="32px" class="mx-2">
            
        
            
              <img src="img/google-icone.png" alt="" height="32px" width="32px" class="mx-2">
            
        
              <img src="img/windows-icon.png" height="32px" width="32px" class="mx-2">
  
          </div>
        </div>
        </form><br>
  
      </section>
  
     <!-- Footer -->
     <footer class="text-center text-white" style="background-image: linear-gradient(to left, rgba(169, 210, 233, 0.8), rgba(139, 192, 223, 0.8), rgba(183, 210, 226, 0.8))">
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
    <script src="js/scriptLEscola.js"></script> 
    