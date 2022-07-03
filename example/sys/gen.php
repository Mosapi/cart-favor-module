<?
session_start();
define("SITEROOTDIR", $_SERVER['DOCUMENT_ROOT']);
require_once ('gen0.php');

if (isset($_POST['d'])) 
{
$da_is = $_POST['d'];
$da_ks = $_POST['v'];
$da_ls = $_POST['m'];
$da_ms = $_POST['n'];
$da_ss = $_POST['i'];
$da_ww = $_POST['w'];

if($da_is == 'do_tag'){
	
}


}else{
	header("Location: /");exit;
}
?>
