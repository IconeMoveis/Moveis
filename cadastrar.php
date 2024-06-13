<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $ambientes = $_POST['ambientes'];
    $valor = $_POST['valor'];
    $observacao = $_POST['observacao'];

    $to = "vitorlemes20@gmail.com";
    $subject = "Novo Contato - Móveis";
    $message = "Nome: $nome\nEmail: $email\nTelefone: $telefone\nAmbientes: $ambientes\nPretensão de Investimento: $valor\nObservação: $observacao";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>
