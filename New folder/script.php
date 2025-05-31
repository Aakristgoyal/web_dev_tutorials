<?php

if ($_POST['email']) {
 $name = $_POST['name'];
 $phone = $_POST['phone'];
 $message='
	Name : = '.$name.' 
	Phone : = '.$phone.'
	';
	$to      = 'aakristgoyal2511@gmail.com';
$subject = 'back2source';
$message = $message;
$headers = 'From: aakristgoyal2511@gmail.com' . "\r\n" .
    'Reply-To: aakristgoyal2511@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
}
else {

}
?>