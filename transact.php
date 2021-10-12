<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
session_start();

    if(isset($_POST['submit'])){
           $firstName= $_POST['firstName'];
           $lastName= $_POST['lastName'];
           $email= $_POST['email'];
           $phoneNumber= $_POST['phoneNumber'];
           $companyName= $_POST['companyName'];
           $subject= $_POST['subject']; 
           $message= $_POST['message']; 
           if($companyName == ''){
                $companyName='';
           }else{              
                $companyName="<br> Sender Company: ".$companyName;
           }
           $finalMessage=$message.$companyName."<br>Sender Phone: ".$phoneNumber."<br>";
                   
            if(!empty($firstName) and !empty($lastName) and !empty($email) and !empty($message) and !empty($phoneNumber)){
                // Import PHPMailer classes into the global namespace
                // These must be at the top of your script, not inside a function
                if(strlen($message)<=41){
                    $_SESSION['b']=true;
                    header('location:contact.php#status');
                }else{

                
                        // Load Composer's autoloader
                        require 'autoload.php';

                        // Instantiation and passing `true` enables exceptions
                        $mail = new PHPMailer(true);

                        try {
                            //Server settings
                            $mail->SMTPDebug = 2;                                       // Enable verbose debug output
                            $mail->isSMTP();                                            // Set mailer to use SMTP
                            $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
                            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                            $mail->Username   = 'okwuosachijioke@gmail.com';                     // SMTP username
                            $mail->Password   = 'jiokeokwuosa';                               // SMTP password
                            $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
                            $mail->Port       = 587;                                    // TCP port to connect to
                            $mail->SMTPOptions = array(
                                'ssl' => array(
                                    'verify_peer' => false,
                                    'verify_peer_name' => false,
                                    'allow_self_signed' => true
                                )
                            );
                            //Recipients
                            $mail->setFrom($email, $lastName.' '.$firstName);
                            $mail->addAddress('chijioke@ecscorpresources.com', 'Archetype');     // Add a recipient
                            // $mail->addAddress('ellen@example.com');               // Name is optional
                            // $mail->addReplyTo('info@example.com', 'Information');
                            // $mail->addCC('cc@example.com');
                            // $mail->addBCC('bcc@example.com');

                                // Attachments
                            // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
                            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

                            // Content
                            $mail->isHTML(true);                                  // Set email format to HTML
                            $mail->Subject = 'From Archetype Website - '.$subject;
                            $mail->Body    = $finalMessage;
                            $mail->AltBody = $finalMessage;
                            if($mail->send()){
                                $_SESSION['a']=true;
                                header('location:contact.php#status');
                            }  else{
                                $_SESSION['c']=true;
                                header('location:contact.php#status');
                            }                  
                            
                        } catch (Exception $e) {
                            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                        }
                }
            }

    }else{
        echo 'not ok';
    }




?>