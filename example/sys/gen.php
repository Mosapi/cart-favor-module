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
		$ti2_load = mysqli_query($link, "SELECT name,banner FROM ga_products WHERE gurl='{$par1}'");
		$ti_mass = mysqli_fetch_array($ti2_load);
		$ti_name = $ti_mass['name'];
		$ti_bann = $ti_mass['banner'];
		$ti_spis = $ti_name.','.$ti_bann.',param';
		echo $ti_spis;
	}
}
if($par0 == 'add_incart'){//обновление наполнения корзины
	//mysqli_query($link, "UPDATE `ga_tempcart` SET `gmurls` = '{$par1}' WHERE `uid`='1' and `author` = '{$_SESSION['user_id']}'");//
	$_SESSION['user_id'] = 1;
	mysqli_query($link, "UPDATE `ga_tempcart` SET `gmurls` = '{$par1}' WHERE `uid`='{$_SESSION['user_id']}'");
}
if($par0 == 'del_incart'){//обновление наполнения корзины
	//mysqli_query($link, "UPDATE `ga_tempcart` SET `gmurls` = '{$par1}' WHERE `uid`='1' and `author` = '{$_SESSION['user_id']}'");//
	$_SESSION['user_id'] = 1;
	$par1 = '';
	mysqli_query($link, "UPDATE `ga_tempcart` SET `gmurls` = '{$par1}' WHERE `uid`='{$_SESSION['user_id']}'");
	$ti_spis = 'clear';
	echo $ti_spis;
}

}else{
	header("Location: /");exit;
	//echo "shit";
}
?>
