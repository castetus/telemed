<?php
// Подключаем библиотеку PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/Exception.php';

if (isset($_POST['formType'])){
  if ($_POST['formType'] === 'consult'){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
  } else {
    
  }
}
 
// Создаем письмо
$mail = new PHPMailer();
$mail->CharSet = "utf-8";
$mail->setFrom('key@med-tele.ru', ''); // от кого (email и имя)
$mail->addAddress('kboikov@mail.ru', '');  // кому (email и имя)
// $mail->addAddress('flagondry76@gmail.com', '');
$mail->Subject = 'Письмо с сайта Телемед';                         // тема письма
// html текст письма
$mail->msgHTML('<html><body>
                <h1>Запрос консультации</h1>
                <p>Имя: ' . $name . '</p>
                <p>Номер телефона: ' . $phone . '</p>
                </html></body>');
// Отправляем
if ($mail->send()) {
  echo 'sent';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
} 
?>