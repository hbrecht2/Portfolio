<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

//Get variables from form
$name = $_POST['nameCompany'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = false;                     // Enable verbose debug output -- Disabled now to prevent messages from appearing to clients 
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = getenv("PERSONAL_EMAIL");                     // SMTP username
    $mail->Password   = getenv('EMAIL_PASSWORD');                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->AddAddress("brechthl26@gmail.com", "Hannah Taylor");
    $mail->SetFrom($email, $name);

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = "Email: $email \nName: $name \nMessage: $message";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo '1';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}