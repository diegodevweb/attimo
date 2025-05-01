<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

$response = array('status' => '', 'message' => '');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $surname = filter_input(INPUT_POST, 'surname', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    $to = "diego.devwebb@gmail.com";
    $subject = "Novo Contato do Site";
    
    $body = "Nome: $name $surname\n";
    $body .= "Email: $email\n";
    $body .= "Mensagem: $message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if(mail($to, $subject, $body, $headers)) {
        $response['status'] = 'success';
        $response['message'] = 'Email enviado com sucesso!';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Falha ao enviar email.';
    }

    echo json_encode($response);
    exit;
}
?>