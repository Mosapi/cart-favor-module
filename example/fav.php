<?
session_start(); 
require_once ('sys/gen0.php');
?>
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charset="utf-8" />
<meta name="description" content="">
<meta name="keywords" content="">
<title>...</title>
<link type="image/x-icon" rel="icon" href="" />
<link rel="stylesheet" type="text/css" media="all"  href="/sys/css/dommon.css" />
<body>
<div class="mess">
	<div id='header2'>
		<div class='_kji_ lef'>
			<div class=''><a>My Favorite</a></div>
		</div>
		<div class='_kji_ rih'>
			<div class='_flx'>
			</div>
		</div>
	</div>
</div>
<div id='header' class='_t' style='border-radius:6px;'>
	<div style='width:100%;max-width:1240px;'>
		<div style='padding:10px;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;display:flex;'>
		<?
		$uid = '1';//$_SESSION['user_id'];
		$kamek = mysqli_query($link, "SELECT 1 FROM `ga_userfav` Where idusers='{$uid}'");
		$t_kamek = mysqli_num_rows($kamek);
		if($t_kamek != 0){
		$gameg = mysqli_query($link, "SELECT idgames FROM `ga_userfav` Where idusers='{$uid}'");
		$full_tp = 0;
		$f_gameg = mysqli_fetch_array($gameg);
		$t_name = $f_gameg['idgames']; //массив игр
		$g_name = explode(",", $t_name);;
		//echo $g_name;
		for($i=0; $i<count($g_name); $i++){
			$produkt = $g_name[$i];
			if($produkt != '' || $produkt != null){
				$inf_pr = mysqli_query($link, "SELECT * FROM `ga_products` Where gurl='{$produkt}'");
			$fs_game = mysqli_fetch_array($inf_pr);
			$fs_name = $fs_game['name'];
			$fs_url = $fs_game['gurl'];
			$fs_price = $fs_game['price'];
			$fs_skidka = $fs_game['skidka'];
			$fs_banner = $fs_game['banner'];
			$fs_xname = strlen($fs_name);
			if($fs_xname>17){
				$x_name = substr($fs_name, 0, 17)." ...";
			}else{
				$x_name = substr($fs_name, 0, 17);
			}
			$fs_nprice = $fs_price - $fs_price*($fs_skidka/100);
			$fm_nprice = bcdiv($fs_nprice, 1, 0);
			$full_tp = $full_tp + $fm_nprice;
			echo"
				<div class='prod' style='margin:5px 10px 45px;' game='".$fs_url."'>
					<div class='krug_1' style='width:150px;height:240px;'><a><img style='width:100%;height:100%;border-radius:6px;box-shadow:0 0 6px #484848;' src='content/img/".$fs_banner."' class='krug_im'></a>
					</div>
					<div>
						<div style='font-size:13px;padding:5px 0px 5px 0px;text-transform:none;font-weight:600;'><a href='/app/".$fs_url."'><span class='dec_b' >".$fs_name."</span></a></div>
						<div style='display:flex;'>";
						if($fs_skidka == 0){
						echo"
							<div id='tek_price' style='padding:5px 10px 5px 0px;font-weight:600;font-size:14px;'>".$fm_nprice." Р</div>
						";
						}else{
						echo"
							<div id='per_price' style='padding:5px 10px 5px 5px;background-color:#a411e1;border-radius:3px;color:#fff;font-weight:600;font-size:12px;'>".$fs_skidka."%</div>
							<div id='old_price' style='padding:5px;font-weight:600;font-size:12px;text-decoration:line-through;color:#ababab;'>".$fs_price."</div>
							<div id='tek_price' style='padding:5px 10px 5px 0px;font-weight:600;font-size:14px;'>".$fm_nprice." Р</div>
						";
						}
						echo"
						</div>
					</div>
				</div>
			";
			}
		}
		}else{
			echo "Favorite is empty !";
			
		}
		?>
		</div>
	</div>
</div>
<div id='header2'>
	<div class='_kji_ '>
			<div class=''><a></a></div>
		</div>
		<div class='_kji_ '>
			<div class='_flx'>
			</div>
		</div>
</div>
<script type="text/javascript" src="sys/js/muden.js"></script>
<div id="pages_bottom" >
	<div>
		<a class="podol_n" href="/">© Cart mod. </a> |
		<a class="podol_n" href="/">Store</a> |
		<a class="podol_n" href="/cart">Cart</a> |
		<a class="podol_n" href="/favorite">Favorite</a>
	</div>
</div>
</body>
