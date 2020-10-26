<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');

    if(isset($_POST['email']) && !empty($_POST['email'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $to = 'contato@colorstudioalereis.com.br';
        $subject = 'Contato - Color Studio';
        $body = "Nome: ".$name."\n".
                "Email: ".$email."\n".
                "Mensagem: ".$message."\n";
        $header = "From: contato@colorstudioalereis.com.br"."\r\n"."Reply-To: ".$email."\e\n"."X=Mailer:PHP/".phpversion();

        if(mail($to, $subject, $body, $header)) {
            header('HTTP/1.1 200 Success');
            echo 'Mensagem enviada com sucesso!';
        } else {
            echo 'Oops algo de errado ocorreu.';
        }
    } else {
        header('HTTP/1.1 403 Forbidden');
        echo 'Preencha todos os campos!';
    }
?>