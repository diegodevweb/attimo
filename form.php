<?php

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $surname = $_POST['surname'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    $subject = "Novo Contato.";

    $nameSanitize = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $surnameSanitize = htmlspecialchars($surname, ENT_QUOTES, 'UTF-8');
    $emailSanitize = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $messageSanitize = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    $to = "diego.devwebb@gmail.com"; // Altere para o seu e-mail
    $mailHeader = "From: $nameSanitize $surnameSanitize <$emailSanitize>\r\n";
    $mailHeader .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Envio do e-mail
    if (mail($to, $subject, $messageSanitize, $mailHeader)) {
        echo 'E-mail enviado com sucesso!';
    } else {
        echo 'Falha ao enviar o e-mail.';
    }
}
?>
