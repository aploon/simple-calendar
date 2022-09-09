<?php 
require_once($_SERVER['DOCUMENT_ROOT'] . '/simple-calendar/db.php');

$query = "SELECT * FROM user, event WHERE user.id_user = event.id_event AND user.id_user = :id_user";
$statement = $db->prepare($query);
$statement->execute([
    ':id_user' => $_SESSION['id']
]);
$result = $statement->fetchAll();

echo json_encode($result);

