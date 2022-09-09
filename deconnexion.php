<?php 
    require_once(__DIR__.'/db.php');

    session_destroy();
    header("location:/simple-calendar");
    exit();
?>