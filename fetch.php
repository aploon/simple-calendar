<?php 
require_once($_SERVER['DOCUMENT_ROOT'] . '/simple-calendar/db.php');

$message = '';

if(isset($_POST['calendar_event_name'])){

    $name_event = $_POST['calendar_event_name'];
    $description_event = $_POST['calendar_event_description'];
    $location_event = $_POST['calendar_event_location'];
    $date_start_event = $_POST['calendar_event_start_date'];
    $date_end_event = $_POST['calendar_event_end_date'];

    if(isset($_POST['calendar_event_allday'])){
        $time_start_event = null;
        $time_end_event = null;
    }

    $query = "INSERT INTO `event`(`id_event`, `name_event`, `description_event`, `location_event`, `date_start_event`, `date_end_event`, `time_start_event`, `time_end_event`, `id_user`) 
    VALUES (NULL, :name_event, :description_event, :location_event, :date_start_event, :date_end_event, :time_start_event, :time_end_event, :id_user)
    ";
    $statement = $db->prepare($query);
    if(
        $statement->execute([
            ':name_event' => $name_event,
            ':description_event' => $description_event,
            ':location_event' => $location_event,
            ':date_start_event' => $date_start_event,
            ':date_end_event' => $date_end_event,
            ':time_start_event' => $time_start_event,
            ':time_end_event' => $time_end_event,
            ':id_user' => $_SESSION['id']
        ])
    ){
        $message = "Insertion éffectuée !";
    }

}else{

    $query = "SELECT * FROM user, event WHERE user.id_user = event.id_user AND event.id_user = :id_user";
    $statement = $db->prepare($query);
    $statement->execute([
        ':id_user' => $_SESSION['id']
    ]);
    $result = $statement->fetchAll();
    $message = $result;

}



echo json_encode($message);

