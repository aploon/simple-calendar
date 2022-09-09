<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/simple-calendar/db.php');

if(isset($_SESSION['name'])){

  header('Location:/simple-calendar');
  exit();

}else if (isset($_POST['name'])) {

  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  $query = "INSERT INTO user(id_user, name_user, email_user, password_user) VALUES (NULL, :name, :email, :password)";

  $statement = $db->prepare($query);

  $statement->execute([
    ':name' => $name,
    ':email' => $email,
    ':password' => $password
  ]);

} else if (isset($_POST['email'])) {

  $email = $_POST['email'];
  $password = $_POST['password'];

  $query = "
        SELECT * 
        FROM user
        WHERE email_user = '$email'
        ";

  $statement = $db->prepare($query);
  $statement->execute();
  $count = $statement->rowCount();

  if ($count > 0) {

    $data = $statement->fetch(PDO::FETCH_ASSOC);
    //Si le mot de passe de l'admin correspond 
    if ($password == $data['password_user']) {

      $_SESSION['id'] = $data['id_user'];
      $_SESSION['name'] = $data['name_user'];
      $_SESSION['email'] = $data['email_user'];
      $_SESSION['password'] = $data['password_user'];

      header('Location:/simple-calendar');
      exit();


    } else {

      $message = "Your password is wrong";
    }
  } else {
    $message = "Your email is invalid";
  }
}



?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Your planning calendar</title>
  <link rel="stylesheet" href="./style.css">
  <link rel="shortcut icon" href="assets/media/logos/logo.png" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap" rel="stylesheet">

</head>

  <body>
    <div class="main">
      <div class="container a-container" id="a-container">
        <form class="form" id="a-form" method="POST" action="connexion.php">
          <h2 class="form_title title">Create Account</h2>
          <input class="form__input" type="text" placeholder="Name" name="name" required>
          <input class="form__input" type="email" placeholder="Email" name="email" required>
          <input class="form__input" type="password" placeholder="Password" name="password" required>
          <button class="form__button button submit">SIGN UP</button>
        </form>
      </div>
      <div class="container b-container" id="b-container">
        <form class="form" id="b-form" method="POST" action="connexion.php">
          <h2 class="form_title title">Sign in to Website</h2>
          <span id="red_info" style="color: red;"><?= isset($message) ? $message : '' ?></span>
          <input class="form__input" type="text" placeholder="Email" name="email" required>
          <input class="form__input" type="password" placeholder="Password" name="password" required><a class="form__link">Forgot your password?</a>
          <button class="form__button button submit">SIGN IN</button>
        </form>
      </div>
      <div class="switch" id="switch-cnt">
        <div class="switch__circle"></div>
        <div class="switch__circle switch__circle--t"></div>
        <div class="switch__container is-hidden" id="switch-c1">
          <h2 class="switch__title title">Welcome Back !</h2>
          <p class="switch__description description">To keep connected with us please login with your personal info</p>
          <button class="switch__button button switch-btn">SIGN IN</button>
        </div>
        <div class="switch__container" id="switch-c2">
          <h2 class="switch__title title">Hello Friend !</h2>
          <p class="switch__description description">Enter your personal details and start journey with us</p>
          <button class="switch__button button switch-btn">SIGN UP</button>
        </div>
      </div>
    </div>
    <script src="./script.js"></script>

</body>

</html>