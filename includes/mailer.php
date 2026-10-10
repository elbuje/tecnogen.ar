<?php
/**
 * Mailer Helper con SMTP Autenticado (Gmail / Google Workspace)
 * TecnoGen - https://tecnogen.ar
 */

function tg_send_mail($to, $subject, $htmlBody, $fromName = "TecnoGen • Marketing & IA", $replyTo = "contacto@tecnogen.ar") {
    $smtpHost = "smtp.gmail.com";
    $smtpPort = 587;
    $username = "mmujica@tecnobrain.com.ar";
    $password = "idbfbrraqcqxhwug";
    $fromEmail = "mmujica@tecnobrain.com.ar";

    $socket = @fsockopen($smtpHost, $smtpPort, $errno, $errstr, 15);
    if (!$socket) {
        error_log("TecnoGen Mailer Socket Error: $errstr ($errno)");
        return false;
    }

    $read = function($s) {
        $data = "";
        while ($str = fgets($s, 515)) {
            $data .= $str;
            if (substr($str, 3, 1) == " ") break;
        }
        return $data;
    };

    $send = function($s, $cmd) use ($read) {
        fputs($s, $cmd . "\r\n");
        return $read($s);
    };

    $read($socket);
    $send($socket, "EHLO " . gethostname());
    $res = $send($socket, "STARTTLS");
    
    if (strpos($res, "220") === false) {
        fclose($socket);
        error_log("TecnoGen Mailer STARTTLS Error: $res");
        return false;
    }

    $crypto = stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
    if (!$crypto) {
        fclose($socket);
        error_log("TecnoGen Mailer Crypto TLS Handshake Error");
        return false;
    }

    $send($socket, "EHLO " . gethostname());
    $send($socket, "AUTH LOGIN");
    $send($socket, base64_encode($username));
    $res = $send($socket, base64_encode($password));

    if (strpos($res, "235") === false) {
        fclose($socket);
        error_log("TecnoGen Mailer Auth Error: $res");
        return false;
    }

    $send($socket, "MAIL FROM: <$fromEmail>");
    $res = $send($socket, "RCPT TO: <$to>");
    if (strpos($res, "250") === false && strpos($res, "251") === false) {
        fclose($socket);
        error_log("TecnoGen Mailer RCPT Error: $res");
        return false;
    }

    $send($socket, "DATA");

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: =?UTF-8?B?" . base64_encode($fromName) . "?= <$fromEmail>\r\n";
    if ($replyTo) {
        $headers .= "Reply-To: <$replyTo>\r\n";
    }
    $headers .= "To: <$to>\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "Date: " . date("r") . "\r\n";

    $res = $send($socket, $headers . "\r\n" . $htmlBody . "\r\n.");
    $send($socket, "QUIT");
    fclose($socket);

    return (strpos($res, "250") !== false);
}
