<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitiza e valida os dados recebidos
    $nome = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $telefone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $titulares_dependentes = filter_input(INPUT_POST, 'holders_dependents', FILTER_SANITIZE_STRING);
    $mensagem = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    $aceitaConteudo = filter_input(INPUT_POST, 'aceptContent', FILTER_SANITIZE_STRING);
    $aceitaPoliticas = filter_input(INPUT_POST, 'aceptPolitics', FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || empty($nome) || empty($telefone) || empty($mensagem) || $aceitaConteudo != 'Sim' || $aceitaPoliticas != 'Sim') {
        header("Location: index.php?status=erro");
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        //Configurações do servidor
        //$mail->isSMTP();
        //$mail->Host = 'smtp.example.com';
        //$mail->SMTPAuth = true;
        //$mail->Username = 'username';
        //$mail->Password = 'password';
        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        //$mail->Port = 587;

        // Destinatários
        $mail->setFrom('de@example.com', 'Mailer');
        $mail->addAddress('para@example.com', 'Joe User');
        $mail->addReplyTo($email, $nome);

        // Conteúdo
        $mail->isHTML(true);
        $mail->Subject = 'Contato - XIPP';
        $mail->Body    = nl2br("Nome: $nome\nEmail: $email\nTelefone: $telefone\nNúmero de Titulares/Dependentes: $titulares_dependentes\nMensagem: $mensagem");
        
        $mail->send();
        header("Location: index.php?status=sucesso");
    } catch (Exception $e) {
        header("Location: index.php?status=erro");
    }
} else {
    header("Location: index.php");
}
?>