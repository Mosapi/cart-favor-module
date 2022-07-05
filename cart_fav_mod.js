document.addEventListener("DOMContentLoaded", function(event) { 

cr_timek = 3000; //timer for move cart
cr_fom = 1; //if 0 - статическая корзина без покачивания, 1 - с покачиванием
cr_iom = 1; //if 0 - статический контент, нельзя дропать, 1 - можно
cr_unco = 1; //if 0 - необходимо доводить непременно до корзины, чтобы засчитало добавление, 
			 // 1 - слегка сдвинуть в любую сторону.
			 //чтобы это сделать, надо придумать как добавлять так же фаворите
cr_wind = 1; //if 0 - не будет окна при клике по корзине, а сразу переход. 1 - будет всплывающее окно
cr_stca = '.krug_g3' //id or class .krug_im
cr_know = '';
cr_cab = []; //массив значений в корзине
cr_url = '/cart';// url cart
crm_id = '#cart'; //id cort
fam_id = '#favor'; //id favor

acab = document.querySelector('#addcab');
fcab = document.querySelector('#favorite');//favorite
cabin = document.querySelector('#cart_val');//value in cart #1
cabin2 = document.querySelector('#cart_val2');//value in cart #2
carimg = document.querySelector(crm_id);//cart №1
carimg2 = document.querySelector('#cart2');//cart №2
farimg = document.querySelector(fam_id);//favor №1
farimg2 = document.querySelector('#favor2');//favor №2
to4k = document.querySelector('#cr_pod');//to4k cart №2
carmas = document.querySelectorAll(cr_stca);
iarmas = document.querySelectorAll(".krug_im");
fbut = document.querySelector("#incart");
fbut2 = document.querySelector("#incler");

preload_car();

setInterval(() => load_car(), cr_timek);//запускает загрузку и проверку корзины

if(acab){
	acab.addEventListener("click", add_cab);//слушаем кнопку на добавление в корзину
}
if(fcab){
	fcab.addEventListener("click", add_fab);//слушаем кнопку на добавление в favorite
}

if(carmas && cr_iom == 0){
	Array.from(carmas, el => el.addEventListener('mouseenter', e => {img_dop(el,e);}));
	Array.from(carmas, el => el.addEventListener('mouseleave', e => {img_eop(el,e);}));
}
if(carmas && cr_iom == 1){
	// Перебираем все элементы img списка и присваиваем нужное значение
	for (task of iarmas) {
		task.draggable = true;
	}
	//перетаскивание в корзину
	Array.from(carmas, el => el.addEventListener('dragstart', e => {cont_d(el,e);}));
	//отпускание прям над корзиной
	document.addEventListener('dragend', e => {cont_v(cr_know,e);})
}

carimg.addEventListener("click", car_watch);



function car_watch(){
	if(cr_wind == 0){ //если 0 то не будет всплывающего окна
		window.location.href = cr_url;
	}else{
	monstr = document.querySelector("#cart_cont");
	if(monstr){}else{
		constr = document.querySelector("#cart_val"); //находим поле значения корзины
		constr2 = constr.parentElement;//.parentElement; //находим родителя корзины
		constr2.insertAdjacentHTML("beforeend","<div style='position:absolute;padding:5px;right:0px;z-index:99;margin-top: -5px;'><div id='cart_cont' style='width:380px;border-radius:6px;background-color:rgb(255 255 255 / 91%);box-shadow:0 0 3px #444;padding:10px;'></div></div>");
		castr = document.querySelector("#cart_cont");
		if(cr_cab.length<=0){
			castr.innerHTML = "<div style='padding:40px;position:relative;z-index:10;text-align:center;color:gray;background:#fff;height:100px;'><div style='font-size:16px;color:#b400ff;font-weight:600;padding:10px 0px;border-bottom:1px solid #dfdfdf;'>Корзина пуста</div><div style='font-size:12px;text-transform:none;padding:10px 0px;'>Исcледуйте лучшие продукты и предложения</div><div><a href='/'><button id='incler'>Исследовать</button></a></div></div>";
		}else{
			castr.innerHTML = "<div><div><span>Cart</span></div><div style='overflow-y:auto;max-height:360px;'><div id='gam_incart' style='display:flex;position:relative;flex-wrap:wrap;'><div style='width:80px;margin:5px;position:relative;'><div><img src='content/img/83.jpeg' style='width:100%;border-radius: 6px;'></div><div style='font-size:10px;'>Cyberpunk 2077</div></div></div></div><div style='display:flex;margin-top:20px;'><div><button id='incart'>In Cart</button></div><div><button id='incler'>Clear</button></div></div></div>";
			jonst = document.querySelector("#gam_incart");//
			var opt = ['load_cart'];
			//dataSet(opt);
			//jonstr.innerHTML = ''; //вставляем данные об играх, картинку и название
			
		}
		constr2.addEventListener('mouseleave', function(){
			castr.parentElement.remove(); //автоскрытие корзины, в конце раскоментить. НЕ УДАЛЯТЬ!!
		});
		fbut2.addEventListener('click', function(){
			//очистка корзины
			//удаляем cr_cab, innerHTML  корзины и закрываем корзину, отправляя запрос в бд об очистке
		});
		fbut.addEventListener('click', function(){
			window.location.href = cr_url;
		});
	}
	}
}
function add_cab(){//добавление игры в корзину
		//console.log(cr_know);
		tik = Number(cabin.innerText)+1;
		carimg.style.transform = "scale(1.2)";
		carimg2.style.transform = "scale(1.2)";
		setTimeout(function tack(){
			carimg.style.transform = null;
			carimg2.style.transform = null;
			to4k.style.display = 'block';
		}, 1000);
			if(cr_know == ''){cr_know = acab.getAttribute("game");}
			goss = cr_cab.indexOf(cr_know) != -1;
			if(goss){
				//console.log("типа типа типа"); //срабатывает если добавляемые игры уже есть в списке
			}else{
			cr_cab.push(cr_know);
			console.log(cr_cab);
			cabin.innerHTML = tik;
			cabin2.innerHTML = tik;
			//отправка в бд темпкорзина продукта cо страницы сторе - ворк!
			var opt = ['add_incart', cr_cab];
			dataSet(opt);
			}
}
function load_car(){//работа связанная с корзиной
	g = cabin2.innerHTML; //наличие объекта в корзинке
	if(g != 0 && cr_fom == 1){
		//setInterval(() => cart_anim(), cr_timek); //покачивание корзинки
		setTimeout(() => cart_anim());
	}
}
function preload_car(){//работа связанная с корзиной обновление ее содерждимого при загрузке страницы и при клике по ней
	var par = ['load_cart', '1'];
	var formData = new FormData();
	for(var i=0;i<2;i++){
		formData.append("par"+i, par[i]);
	}
	fetch('/sys/gen.php', {
		method: 'POST',
		credentials: 'same-origin',
		body: formData
	})
	.then(response => response.text())
	.then(function(data) {
		vcart = data;
		gug = data.split(','); //массив товара
		if(gug.length >0 && gug != '' || quq != 0){
		cr_cab = gug;
		//отрисовать кол-во на корзине
		cabin.innerHTML = gug.length;
		cabin2.innerHTML = gug.length;
		to4k.style.display = 'block';
		}
	})
	.catch(error => console.log());
}

function cart_anim(){//анимация качания корзинки из стороны в сторону
	setTimeout(function tick(){carimg2.style.transform = "rotate(0.03turn)";}, 0);
	setTimeout(function tick(){carimg2.style.transform = "rotate(-0.03turn)";}, 100);
	setTimeout(function tick(){carimg2.style.transform = "rotate(0.03turn)";}, 200);
	setTimeout(function tick(){carimg2.style.transform = "rotate(-0.03turn)";}, 300);
	setTimeout(function tick(){carimg2.style.transform = "rotate(0.03turn)";}, 400);
	setTimeout(function tick(){carimg2.style.transform = "rotate(-0.03turn)";}, 500);
	setTimeout(function tick(){carimg2.style.transform = "rotate(0.00turn)";}, 600);
}
function add_fab(){//Добавление в любимое
	farimg.style.transform = "translate(0px, -16px)";//сдвиг вверх
	/*==РАЗВОРОТ==*/
	farimg2.style.transform = "scaleX(-1)";//разворот на обратную сторону
	din = farimg2;//.querySelector('img');
	din.setAttribute('src', 'content/ico/aplus2.png'); //заменяем картинку на +1
	/*==СДВИГ ВВЕРХ==*/
	farimg.insertAdjacentHTML("beforeend","<div id='favr_val' style='color:#000;font-size:12pt;font-weight:600;margin-top:4px;'></div>");
	pin = farimg.querySelector('#favr_val');
	pin.innerHTML = '+1';
	
	setTimeout(function stock(){
		farimg.style.transform = null; //разворот обратно
		farimg2.style.transform = null;
		din.setAttribute('src', 'content/ico/fav2.png');//смена обратно картинки
		pin.remove();//удаление временного блока
	}, 1000);
	//console.log(cr_know);
	//отправка в бд фавор продукта
}

function img_dop(el,e){
	var jok = el; // element krug_g3
	var pok = e; //event
	domn = jok.firstElementChild; // krug_g1
	pint = domn.querySelector("#img_dop");//проверка на существование блока
	cr_know = jok.getAttribute("game");
	if(pint){} else{
		domn.insertAdjacentHTML("afterbegin","<div id='img_dop' style='width: 150px;height: 240px;position:absolute;background-color:rgb(48 48 47 / 64%);border-radius:6px;'><div style='display:flex;margin:100px 10px;'><div style='width:40px;height:40px;background-color:#1f1e1e;border-radius:6px;box-shadow:0 0 2px #050505;margin:2px;cursor:pointer;'><a href='/app/"+cr_know+"'><img style='width:30px;height:30px;padding:5px;' src='content/ico/page.png'></a></div><div id='adcabs' style='width:40px;height:40px;background-color:#db1919;border-radius:6px;box-shadow:0 0 2px #050505;margin:2px;cursor:pointer;'><img style='width:30px;height:30px;padding:5px;' src='content/ico/cart.png'></div><div id='fasori' style='width:40px;height:40px;background-color:#d87d0c;border-radius: 6px;box-shadow:0 0 2px #050505;margin:2px;cursor:pointer;'><img style='width:30px;height:30px;padding:5px;' src='content/ico/fav.png'></div></div></div>");
	}
	scab = document.querySelector('#adcabs');
	mcab = document.querySelector('#fasori');
	scab.addEventListener("click", add_cab);
	mcab.addEventListener("click", add_fab);
}
function img_eop(el,e){
	var kok = el; // element krug_g3
	var lok = e; //event
	dimn = kok.firstElementChild; // krug_g1
	pont = dimn.querySelector("#img_dop");
	if(pont){
		pont.remove();
	}
}
function cont_d(el,e){
	var kok = el; // element krug_g3
	var lok = e; //event
	//if(cr_know == ''){cr_know = kok.getAttribute("game");}
	cr_know = kok.getAttribute("game");
	dinn = kok.firstElementChild; // krug_g1
	pipi = dinn.querySelector(".krug_im");//
	//console.log("тащу "+cr_know);
	
}
function cont_v(el,e){
	var kok = el; // element корзина 1
	var lok = e; //event
	cordx = e.pageX;
	cordy = e.pageY;
	//console.log(cordx+' - '+cordy);
	cacf = allElementsFromPoint(cordx,cordy);
	//console.log(cacf); //получаем массив всех элементов под курсором во время отпускания клавиши мыши
	for (var k =0, kl=cacf.length; k< kl; k++){
		elemc = cacf[k];
		jedo = cacf[cacf.length-2];
		telemc = '#'+jedo.getAttribute("id");
		//console.log(telemc); //cart
		if(telemc == crm_id){
			//console.log("work on!");
			add_cab(); //анимация корзины
		}
		if(telemc == fam_id){
			//console.log("work on!");
			add_fab(); //анимация желаемого
		}
	}
}


function allElementsFromPoint(x, y) {
    var element, elements = [];
    var old_visibility = [];
    while (true) {
        element = document.elementFromPoint(x, y);
        if (!element || element === document.documentElement) {
            break;
        }
        elements.push(element);
        old_visibility.push(element.style.visibility);
        element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
    }
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.visibility = old_visibility[k];
    }
    elements.reverse();
    return elements;
}

function dataSet(opt) {
	nit = opt;
	console.log(opt);//надо изменить формат данных, сейчас не записывается в корзину более 1 игры.
	//var par = ['load_cart', '1'];
	var par = nit;
	var formData = new FormData();
	for(var i=0;i<opt.length;i++){
		formData.append("par"+i, par[i]);
	}
	console.log(opt.length);
	
	fetch('/sys/gen.php', {
		method: 'POST',
		credentials: 'same-origin',
		body: formData
	})
	.then(response => response.text())
	.then(function(data) {
		//vcart = data;
		gug = data.split(','); //массив товара
		if(gug.length >0 && gug != '' || quq != 0){
		cr_cab = gug;
		//отрисовать кол-во на корзине
		cabin.innerHTML = gug.length;
		cabin2.innerHTML = gug.length;
		to4k.style.display = 'block';
		//return datas;
		}
	})
	.catch(error => console.log());
	
	//return datas;
}

});
