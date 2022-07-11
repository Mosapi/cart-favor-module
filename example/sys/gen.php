<?
session_start();
define("SITEROOTDIR", $_SERVER['DOCUMENT_ROOT']);
require_once ('gen0.php');

if (isset($_POST['par0'])) 
{
$par0 = $_POST['par0'];
if (isset($_POST['par1'])) 
{$par1 = $_POST['par1'];}

if($par0 == 'load_cart'){//загрузка текущей корзины
	// мб лучше вместо par1 использовать сессию, мало ли кто какой id передаст $_SESSION['user_id']
	$tp_load = mysqli_query($link, "SELECT 1 FROM ga_tempcart WHERE uid='{$par1}'");
	$t_load = mysqli_num_rows($tp_load);
	if($t_load != 0){
		$tp2_load = mysqli_query($link, "SELECT gmurls FROM ga_tempcart WHERE uid='{$par1}'");
		$t_mass = mysqli_fetch_array($tp2_load);
		$t_spisd = $t_mass['gmurls'];
		if($t_spisd != '' or $t_spisd != 0 or $t_spisd != null){
			$t_spis = $t_spisd;
			echo $t_spis;
		}else{
			//$t_spis = 'soso4ek';
			//echo $t_spis;
		}
		
	}
}
if($par0 == 'load_info'){//загрузка инфы об игре которая в корзине
	$ti_load = mysqli_query($link, "SELECT 1 FROM ga_products WHERE gurl='{$par1}'");
	$ti_load = mysqli_num_rows($ti_load);
	if($ti_load != 0){
		$ti2_load = mysqli_query($link, "SELECT name,banner,gurl FROM ga_products WHERE gurl='{$par1}'");
		$ti_mass = mysqli_fetch_array($ti2_load);
		$ti_name = $ti_mass['name'];
		$ti_bann = $ti_mass['banner'];
		$ti_gurl = $ti_mass['gurl'];
		$ti_spis = $ti_name.','.$ti_bann.','.$ti_gurl.',param';
		echo $ti_spis;
	}
}
if($par0 == 'add_incart'){//добавляем в корзину
	$gast = 1; //$_SESSION['user_id']  //
	mysqli_query($link, "UPDATE `ga_tempcart` SET `gmurls` = '{$par1}' WHERE `uid`='{$gast}'");
}
if($par0 == 'add_infav'){//в фавориты
	$gast = 1; //$_SESSION['user_id']  //
	$f_data = $par1;
	mysqli_query($link, "UPDATE `ga_userfav` SET `idgames` = CONCAT(`idgames`, '{$f_data},') WHERE `idusers`='{$gast}'");
}
if($par0 == 'del_incart'){//зачистка корзины
	$gast = 1; //$_SESSION['user_id']  //
	$par1 = '';
	mysqli_query($link, "UPDATE `ga_tempcart` SET `gmurls` = '{$par1}' WHERE `uid`='{$gas}'");
	$ti_spis = 'clear';
	echo $ti_spis;
}

}else{
	header("Location: /");exit;
}
?>
