<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

// Inicializa a resposta
$response = array('status' => '', 'message' => '');

// Verifica se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Limpa e valida os dados do formulário
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $empresa = filter_input(INPUT_POST, 'empresa', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $colaboradores = filter_input(INPUT_POST, 'colaboradores', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $sistema = filter_input(INPUT_POST, 'sistema', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    // Validação básica
    if (empty($nome) || empty($telefone) || empty($empresa) || empty($email) || empty($colaboradores) || empty($sistema)) {
        $response['status'] = 'error';
        $response['message'] = 'Por favor, preencha todos os campos obrigatórios.';
        echo json_encode($response);
        exit;
    }

    // Validação de email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['status'] = 'error';
        $response['message'] = 'Por favor, forneça um email válido.';
        echo json_encode($response);
        exit;
    }

    // Configurações do email
    $para = "contato@attimosolucoes.com.br"; // Seu email para receber os contatos
    $emailRemetente = "contato@attimosolucoes.com.br"; // Use um email válido do seu domínio
    $assunto = "Solicitação de Teste Grátis - {$sistema}";
    
    // Constrói o corpo do email
    $mensagem = "Nome: {$nome}\n";
    $mensagem .= "Telefone: {$telefone}\n";
    $mensagem .= "Empresa: {$empresa}\n";
    $mensagem .= "Email: {$email}\n";
    $mensagem .= "Número de colaboradores: {$colaboradores}\n";
    $mensagem .= "Sistema de interesse: {$sistema}\n";

    // Define a quebra de linha (\n para Linux, \r\n para Windows)
    $quebra_linha = "\n";
    
    // Cabeçalhos do email - CORREÇÃO AQUI: Usar o nome do usuário no remetente visível
    $headers = "MIME-Version: 1.1{$quebra_linha}";
    $headers .= "Content-type: text/plain; charset=UTF-8{$quebra_linha}";
    $headers .= "From: {$nome} <{$emailRemetente}>{$quebra_linha}"; // Mantém o email do domínio como remetente
    $headers .= "Return-Path: {$emailRemetente}{$quebra_linha}"; // Mesmo email para evitar bloqueios
    $headers .= "Reply-To: {$nome} <{$email}>{$quebra_linha}"; // Email do usuário como Reply-To
    $headers .= "X-Priority: 3{$quebra_linha}";

    // Tenta enviar o email usando o método recomendado pela Locaweb para Postfix
    $enviado = false;
    
    // Tenta primeiro com o parâmetro -r (específico para Postfix/Linux)
    if(@mail($para, $assunto, $mensagem, $headers, "-r".$emailRemetente)) {
        $enviado = true;
    } else {
        // Se falhar, tenta sem o parâmetro -r (caso seja Windows)
        $headers .= "Return-Path: {$emailRemetente}{$quebra_linha}";
        if(@mail($para, $assunto, $mensagem, $headers)) {
            $enviado = true;
        }
    }
    
    // Verifica se o email foi enviado com sucesso
    if ($enviado) {
        $response['status'] = 'success';
        $response['message'] = 'Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.';
        
        // Opcionalmente, registre o sucesso em um arquivo de log
        $log_file = "form_success.log";
        $log_message = date('Y-m-d H:i:s') . " - Email enviado com sucesso para {$para} de {$email}\n";
        @file_put_contents($log_file, $log_message, FILE_APPEND);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
        
        // Registra o erro em um arquivo de log
        $log_file = "form_errors.log";
        $log_message = date('Y-m-d H:i:s') . " - Falha ao enviar email para {$para} de {$email}\n";
        @file_put_contents($log_file, $log_message, FILE_APPEND);
    }

    // Retorna a resposta em formato JSON
    echo json_encode($response);
    exit;
}
?>