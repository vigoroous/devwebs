<?

$to="bogdan3591@yandex.ru";  // e-mail админа

date_default_timezone_set('Europe/Moscow');
$date=date("d.m.y"); // число.месяц.год
 
$time=date("H:i"); // часы:минуты:секунды

$backurl="index.html";  // На какую страничку переходит после отправки письма


// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$email=$_POST['email']; 
 
$subject=$_POST['subject'];

$message=$_POST['message']; 
 
$headers = 'From: bogdan3591@devwebs.ddns.net' . "\r\n" .
       'Reply-To: bogdan3591@devwebs.ddns.net'; 
 
// Проверяем валидность e-mail 
 
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email))) 
 
 { 
 
  echo 
"<center>Вернитесь <a href='javascript:history.back(1)'><B>назад</B></a>. Вы указали неверные данные!"; 
 
  } 
 
 else 
 
 { 
 

// Отправляем письмо админу

mail($to, $subject, $message, $headers);


// Сохраняем в базу данных

$f = fopen("logs/post $date.log", "a+");

fwrite($f,"\r\n $date $time");

fwrite($f,"\r\n Name: $name ");

fwrite($f,"\r\n E-mail: $email ");

fwrite($f,"\r\n Subject: $subject ");

fwrite($f,"\r\n Message: $message ");

fwrite($f,"\r\n ____________________________");

fclose($f);



// Выводим сообщение пользователю

print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 6000);
//--></script>

Name: $name <br>
E-mail: $email <br>
Subject: $subject <br>
Message: $message <br> 

<center><p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p></center>";
exit;

}

?>