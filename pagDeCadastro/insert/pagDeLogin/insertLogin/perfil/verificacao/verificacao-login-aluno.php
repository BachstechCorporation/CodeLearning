<?php
     session_start();

if ((!isset($_SESSION['autorizacao'])==true)) {
        unset($_SESSION['autorizacao']);
        
}

?>