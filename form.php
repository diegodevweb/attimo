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
    $subjectSanitize = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');

    echo "<h2>Mensagem enviada!</h2>";
    echo "<p><strong>Nome:</strong> $nameSanitize</p>";
    echo "<p><strong>Sobrenome:</strong> $surnameSanitize</p>";
    echo "<p><strong>Email:</strong> $emailSanitize</p>";
    echo "<p><strong>Mensagem:</strong> " . nl2br($messageSanitize) . "</p>";

    $to = "diego.devwebb@gmail.com";

    $mailHeader = "From: $nameSanitize $surnameSanitize <$emailSanitize>\r\n";
    $mailHeader .= "Content-Type: text/html; charset=UTF-8\r\n";


     
    // if (mail($to, $subject, $messageSanitize, $mailHeader)) {
    //     echo 'E-mail enviado com sucesso!';
    //     exit();
    // } else {
    //     error_log('Erro ao enviar o e-mail. Dados do formulário: ' . print_r($_POST, true));
    //     echo "<p style='color: red;'>Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.</p>";
    // }

    if (mail($to, $subjectSanitize, $messageSanitize, $mailHeader)) {
        echo 'E-mail enviado com sucesso!';
    } else {
        echo 'Falha ao enviar o e-mail.';
    }
}