<?php

$from = "jonatan.ostling@gmail.com";
$to = "chronusband@gmail.com";

$name = Trim(stripslashes($_POST['name']));
$email = Trim(stripslashes($_POST['email']));
$subject = Trim(stripslashes($_POST['subject']));
$message = Trim(stripslashes($_POST['message']));

$body ="";
$body .="Name: ";
$body .=$name;
$body .="\n";
$body .="E-mail: ";
$body .=$email;
$body .="\n";
$body .="Subject: ";
$body .=$subject;
$body .="\n";
$body .="Message: ";
$body .=$message;
$body .="\n";

$go = mail($to, $subject, $body, "From: <$from>");

if($go){
  print("Success!");
}
else {
  print("Unable to send message!");
}

?>
