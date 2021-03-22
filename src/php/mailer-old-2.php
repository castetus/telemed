<?php
// Подключаем библиотеку PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/Exception.php';
 
// Создаем письмо
$mail = new PHPMailer();
$mail->setFrom('key@med-tele.ru', ''); // от кого (email и имя)
$mail->addAddress('kboikov@mail.ru', '');  // кому (email и имя)
$mail->Subject = 'Тест';                         // тема письма
// html текст письма
$mail->msgHTML("<html><body>
                <h1>Здравствуйте!</h1>
                <p>Это тестовое письмо.</p>
                </html></body>");
// Отправляем
if ($mail->send()) {
  echo 'Письмо отправлено!';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
} 
?>