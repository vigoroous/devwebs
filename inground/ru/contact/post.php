<?
$to="bogdan3591@yandex.ru";  // e-mail ������ 
 
date_default_timezone_set('Europe/Moscow');
$date=date("d.m.y"); // �����.�����.��� 
 
$time=date("H:i:s"); // ����:������:������� 

$backurl="index.html";  // �� ����� ��������� ��������� ����� �������� ������ 
 

// ��������� ������ � ����� 
 
$name=$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];
$headers = 'From: bogdan3591@devwebs.ddns.net' . "\r\n" .
       'Reply-To: bogdan3591@devwebs.ddns.net';

// ��������� ���������� e-mail
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email)))  { 
exit;
}  
else  {
// ���������� ������ ������
mail($to, $subject, $message, $headers);

// ��������� � ���� ������
$f = fopen("../logs/post $date.log", "a+");
fwrite($f,"\r\n $date $time");
fwrite($f,"\r\n Name: $name ");
fwrite($f,"\r\n E-mail: $email ");
fwrite($f,"\r\n Subject: $subject ");
fwrite($f,"\r\n Message: $message ");
fwrite($f,"\r\n ____________________________");
fclose($f);

exit;
}

?>