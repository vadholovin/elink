<?php

// email address
$to = "your@email.com"; //вставить свой имейл
$from = "zajavka@elink.landing"; //отправитель

$subject = $_POST['subject'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$service = $_POST['service'];

$message = "Имя: {$name}<br>\r\n";
$message .= "Телефон: {$phone}<br>\r\n";
$message .= "Услуга: {$service}<br>\r\n";
  
$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
$headers .= "From: {$from}\r\n";
$headers .= "X-Priority: 1\r\n";


$sentMail = mail($to, $subject, $message, $headers);
if($sentMail) //output success or failure messages
{ 
  echo 'done';
}else{
  echo 'error';
}
