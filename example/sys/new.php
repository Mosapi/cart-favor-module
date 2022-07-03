<?
require_once ('gen0.php');
require_once ('../system/include/header.php');
require_once ('../system/include/forms/shak.php');

if(isset($_POST['onNew'])){
$err = array();
if(!preg_match("/^[a-zA-Z0-9]+$/",$_POST['nLog'])){
  $err[] = "Login can consist only of letters of the English alphabet and numbers";
  echo 'Login can consist only of letters of the English alphabet and numbers';
}
if(strlen($_POST['nLog']) < 4 or strlen($_POST['nLog']) > 12){
$err[] = "Login must be at least 4 characters and not more than 12";
echo "Login must be at least 4 characters and not more than 12";
}
$queryz = mysqli_query($link, "SELECT 1 FROM users WHERE login='".mysqli_real_escape_string($link, $_POST['nLog'])."'");
$xxxx = mysqli_num_rows($queryz);
if($xxxx != 0){
$err[] = "A user with this login already exists";
echo "A user with this login already exists";
}
if(count($err) == 0){
	$nPas = (md5(md5($_POST['nPas'])));
	$nLog = $_POST['nLog'];
	$nPi = $_SERVER['REMOTE_ADDR'];
	$nMail = 'example@mail.com';
	$reg_dt = date("Y-m-d");
	
	$iq_aa = mysqli_query($link, "SELECT 1 FROM users WHERE login='{$nLog}'");
	$_mora = mysqli_num_rows($iq_aa);
	if($_mora == 0){
	$vika = 'block';
	$query = mysqli_query ($link, "INSERT INTO `users` (`login`,`password`,`email`,`npi`) VALUES ('{$nLog}','{$nPas}','{$nMail}','{$nPi}')");
	$kuerk = mysqli_query ($link, "INSERT INTO `profile` (`login`,`reg_dt`) VALUES ('{$nLog}','{$reg_dt}')");

echo"<div id='header' class='_g'>";
echo"<div class='mett4' style='display:".$vika."' >
<center><div style='margin-top:60px;color:#000;'>Successful registration<br>".$nLog."<br>".$_POST['nPas']."<br><br>go to main <a href='/'> page</a> and sign in.</div></center></div>";
echo"</div>";

}
}
}else{
echo"error page";	
}
require_once('../system/include/footer.php');
?> 

