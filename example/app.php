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
	<?
	if(isset($_GET['a'])){
	$iprod = $_GET['a'];
	$tp_load = mysqli_query($link, "SELECT 1 FROM ga_products WHERE gurl='{$iprod}'");
	$t_load = mysqli_num_rows($tp_load);
	if($t_load != 0){
		$tp2_load = mysqli_query($link, "SELECT * FROM ga_products WHERE gurl='{$iprod}'");
		$t_mass = mysqli_fetch_array($tp2_load);
		$i_name = $t_mass['name'];
		$i_url = $t_mass['gurl'];
		$i_price = $t_mass['price'];
		$i_skidka = $t_mass['skidka'];
		$i_banner = $t_mass['banner'];
		
		echo "
		<div class='_flx' style='align-items:stretch;'>
				<div style='width:800px;display:flex;'>
					<div style='width:234px;height:350px;background-color:#fff;margin:6px;border-radius:6px;'>
						<img src='/content/img/".$i_banner."' style='width: 100%;height:100%;box-shadow:0 0 3px rgb(72 72 72 / 68%);border-radius:6px;'>
					</div>
					<div style=''>
						<div style='margin-left:30px;margin-top:30px;'>
							<div style='font-size:24px;color: #000;'> ".$i_name." </div>
							<div style='font-size:12px;color:#484848;margin-top:6px;'><a href='/'>Store</a> | ".$i_name." </div>
							<div style='margin-top:40px;' class='table_har'>
								<div style='display:flex;line-height:20px;'>
									<div style='width:100px;'>Genre:</div>
									<div style='color:#7d6d5e;'>Action - RPG - Fantastic - Future</div>
								</div>
								<div style='display:flex;line-height:20px;'>
									<div style='width:100px;'>Work on:</div>
									<div style='color:#7d6d5e;'>WINDOWS (10)</div>
								</div>
								<div style='display:flex;line-height:20px;'>
									<div style='width:100px;'>Data:</div>
									<div style='color:#7d6d5e;'>17 March 2017.</div>
								</div>
								<div style='display:flex;line-height:20px;'>
									<div style='width:100px;'>Company:</div>
									<div style='color:#7d6d5e;'>CD Project</div>
								</div>
								<div style='display:flex;line-height:20px;'>
									<div style='width:100px;'>Rating:</div>
									<div style='color:#7d6d5e;'>PEGI Rating: 16+</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style='width:440px;'>
					<div style='width:350px;height:180px;background-color:#fbfbfb;margin:50px;box-shadow:0 0 3px rgb(72 72 72 / 68%);border-radius:6px;'>
						<div>
							<div style='height:90px;display: flex;color: #000;font-size: 42px;'>
								<div style='width: 90px;margin: auto 0;background-color: #a411e1;text-align: right;height: 50px;border-radius: 0px 3px 3px 0px;line-height: 50px;color: #fff;padding: 0px 12px 3px 0px;font-size:32px;display:block;'>-50%</div>
								<div class='_plat'>
									<div style='font-size:22px;color:#b1b1b1;text-decoration:line-through;margin-bottom:10px;display:block;'>".$i_price."</div>
									<div class='tt_cell'>1399</div>
								</div>
							</div>
							<div style='height: 50px;padding: 10px;padding-bottom: 0px;' opt='1234'>
								<button id='addcab' game='".$i_url."' style='height: 40px;width: 330px;background-color:#000;color:#fff;font-weight:600;border-radius:6px;border:none;box-shadow:0 0 3px rgb(72 72 72 / 68%);'>Add to cart</button>
							</div>
							<div id='favorite' style='height:30px;text-align:center;'>Add to favorite</div>
						</div>
					</div>
				</div>
			</div>
		";
	}else{
		echo " Dannogo produkta ne sucshectvuet !!!!";
		echo $iprod;
	}
	}
	?>
	</div>
</div>
<script type="text/javascript" src="/sys/js/muden.js"></script>
<div id="pages_bottom" >
	<div>
		<a class="podol_n" href="/">© Cart mod. </a> |
		<a class="podol_n" href="/">Store</a> |
		<a class="podol_n" href="/cart">Cart</a> |
		<a class="podol_n" href="/favorite">Favorite</a>
	</div>
</div>
</body>
