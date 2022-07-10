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
			<div class=''><a></a></div>
		</div>
		<div class='_kji_ rih'>
		<div id='rec_mod'></div>
		</div>
	</div>
</div>
<div id='header' class='_t' style='border-radius:6px;'>
	<div style='width:100%;max-width:1240px;'>
		<div style='padding:10px;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;display:flex;'>
		<?
		$gameg = mysqli_query($link, "SELECT * FROM `ga_products`");
		while ($f_gameg = mysqli_fetch_array($gameg)){
		$g_name = $f_gameg['name'];
		$g_url = $f_gameg['gurl'];
		$g_price = $f_gameg['price'];
		$g_skidka = $f_gameg['skidka'];
		$g_banner = $f_gameg['banner'];
		$g_xname = strlen($g_name);
		if($g_xname>17){
			$x_name = substr($g_name, 0, 17)." ...";
		}else{
			$x_name = substr($g_name, 0, 17);
		}
		$g_nprice = $g_price - $g_price*($g_skidka/100);
		$m_nprice = bcdiv($g_nprice, 1, 0);
		echo"
			<div class='krug_g3' style='margin:5px 10px 45px;' game='".$g_url."'>
				<div class='krug_1' style='width:150px;height:240px;'><a><img style='width:100%;height:100%;border-radius:6px;box-shadow:0 0 6px #484848;' src='content/img/".$g_banner."' class='krug_im'></a>
				</div>
				<div>
					<div style='font-size:13px;padding:5px 0px 5px 0px;text-transform:none;font-weight:600;'><a href='/app/".$g_url."'><span class='dec_b' >".$x_name."</span></a></div>
					<div style='display:flex;'>";
					if($g_skidka == 0){
					echo"
						<div id='tek_price' style='padding:5px 10px 5px 0px;font-weight:600;font-size:14px;'>".$m_nprice." Р</div>
					";
					}else{
					echo"
						<div id='per_price' style='padding:5px 10px 5px 5px;background-color:#a411e1;border-radius:3px;color:#fff;font-weight:600;font-size:12px;'>".$g_skidka."%</div>
						<div id='old_price' style='padding:5px;font-weight:600;font-size:12px;text-decoration:line-through;color:#ababab;'>".$g_price."</div>
						<div id='tek_price' style='padding:5px 10px 5px 0px;font-weight:600;font-size:14px;'>".$m_nprice." Р</div>
					";
					}
					echo"
					</div>
				</div>
			</div>
		";
		}
		?>
		</div>
	</div>
</div>
<script type="text/javascript" src="sys/js/muden.js"></script>
<div id="pages_bottom" >
	<div>
		<a class="podol_n" href="/">© Cart mod. </a> |
		<a class="podol_n" href="/app">Product</a> |
		<a class="podol_n" href="/">Store</a> |
		<a class="podol_n" href="cart.php">Cart</a>
	</div>
</div>
</body>
