document.addEventListener("DOMContentLoaded", function(event) { 
cr_mod = 1; //1 - color cubics, 2 - black icons
cr_fom = 0; //if 0 - статическая корзина без покачивания, 1 - с покачиванием, 2 - пульсация 3-тест загрузка
cr_vom = 1; //if 0 - режим подскока, 1 - режим поворота
cr_iom = 0; //if 0 - статический контент, нельзя дропать, 1 - можно
cr_unco = 1; //if 0 - необходимо доводить непременно до корзины, чтобы засчитало добавление, // 1 - вверх от тек. координат - в корзину, вправо или лево - в фаворит ПОКА НЕТ!!!!!!.
cr_wind = 1; //if 0 - не будет окна при клике по корзине, а сразу переход. 1 - будет всплывающее окно
cr_timek = 5000; //таймер обновления анимации корзины
cr_blck = '#rec_mod'; //блок под корзину
cr_vall = '#cart_val'; //блок под корзину
cr_to4k = '#cr_pod'; //маркер для корзины 2
cr_stca = '.krug_g3' //id or class .krug_im
cr_btnk = '#addcab'; //id кнопки добавить в корзину
cr_know = ''; //текущий выбранный продукт
cr_cab = []; //массив значений в корзине
cr_url = '/cart';// url cart
crm_id = '#cart'; //id cort
fam_id = '#favor'; //id favor
inf_gam = []; //parametrs games in cart
cr_load = 'content/1oad.gif'; //'/content/1oad.png'

recycler = new function(){
	rec_r = document.querySelector(cr_blck);
	if(cr_mod == 1){//значит цветной режим кубиков
		if(rec_r){
			//если существует поле для вставки
			rec_r.innerHTML = "<div class='_flx'><div class='c_mod'><a><span id='down' class='mf_t _b'><img src='/content/ico/down.png'></span></a></div><div class='c_mod'><a><span id='cart' class='mf_t _r'><img src='/content/ico/cart.png'></span></a><div id='cart_val'></div></div><div class='c_mod'><a href='#favorite'><span id='favor' class='mf_t _s'><img src='/content/ico/fav.png'></span></a></div></div>";
		}
	}else if(cr_mod == 2){
		//черные иконки
		if(rec_r){
			//если существует поле для вставки
			rec_r.innerHTML = "<div class='_flx'><div class='c_mod'><a><span id='down' class='mf_t'><img src='/content/ico/down2.png'></span></a></div><div class='c_mod'><div><a><span class='mf_t'><img id='cart2' src='/content/ico/cart2.png'></span></a></div><div style='display:flex;position:absolute;margin:-16px 10px;'><div style='height:15px;width:15px;'><div id='cr_pod' style='display:none;height:15px;width:15px;background-color:#cf0de7;border-radius:9px;box-shadow:0 0 2px #000;'></div></div><div id='cart_val2' style='margin-left:14px;'></div></div></div><div class='c_mod'><a href='#favorite'><span class='mf_t'><img id='favor' src='/content/ico/fav2.png'></span></a></div></div>";
		}
	}
}


//выборка всех нужных элементов корзины для будущего взаимодействия
carimg = document.querySelector(crm_id);//корзина
cabin = document.querySelector(cr_vall);//значение корзины
to4k = document.querySelector(cr_to4k);//маркер для корзины 2
acab = document.querySelector(cr_btnk); //кнопка добавить в корзину, на странице апп
carmas = document.querySelectorAll(cr_stca); //продукты(игры)
fcab = document.querySelector('#favorite');//favorite
farimg = document.querySelector(fam_id);//favor №1

if(carimg){
	preload_car();
	setInterval(() => anim_car(), cr_timek);//запускает проверку корзины и анимацию движения
	carimg.addEventListener("click", car_watch);//клик по корзине отобразить
	
}
if(acab){
	acab.addEventListener("click", add_cab);//слушаем кнопку на добавление в корзину
}
if(carmas && cr_iom == 0){
	Array.from(carmas, el => el.addEventListener('mouseenter', e => {img_dop(el,e);}));
	Array.from(carmas, el => el.addEventListener('mouseleave', e => {img_eop(el,e);}));
}
if(carmas && cr_iom == 1){
	// Перебираем все элементы img списка и присваиваем нужное значение
	for (task of carmas) { //iarmas
		task.draggable = true;
	}
	//перетаскивание в корзину
	Array.from(carmas, el => el.addEventListener('dragstart', e => {cont_d(el,e);}));
	//отпускание прям над корзиной
	document.addEventListener('dragend', e => {cont_v(cr_know,e);})
}
if(fcab){
	fcab.addEventListener("click", add_fab);//слушаем кнопку на добавление в favorite
}


function preload_car(){//загрузка состояния корзины при загрузке страницы
	var userid = 1;//мб лучше из сессии брать?
	var opt = ['load_cart', userid];
	dataSet(opt);
}
function car_watch(){//отображение на экране содержимого корзины
	if(cr_wind == 0){ //если 0 то не будет всплывающего окна
		window.location.href = cr_url;
	}else{
		//setInterval(() => anim_car(), 800);
		vikt = 3;
		console.log('Нажали на корзину');
	}
}
function add_cab(){//добавление продукта в корзину
	console.log(cr_know);
	tik = Number(cabin.innerText)+1;
	console.log(tik);
	carimg.style.transform = "scale(1.2)";
	setTimeout(function tack(){
		carimg.style.transform = null;
		if(to4k){
			to4k.style.display = 'block';
		}
	}, 1000);
	//if(cr_know == ''){cr_know = acab.getAttribute("game");console.log(cr_know);}
	goss = cr_cab.indexOf(cr_know) != -1;
	/*if(cr_cab == ''){
		cr_cab.length = 0;
	}else{*/
		if(goss){
			console.log("типа типа типа"); //срабатывает если добавляемые игры уже есть в списке
		}else{
			console.log(tik);
			cr_cab.push(cr_know);
			console.log(cr_cab);
			cabin.innerHTML = tik;
			var opt = ['add_incart', cr_cab];
			dataSet(opt);
		}
	/*}*/
}
function add_fab(){//Добавление в любимое
	if(cr_vom == 0){
		//режим подскока вверх
		farimg.style.transform = "translate(0px, -16px)";
		farimg.insertAdjacentHTML("beforeend","<div id='favr_val' style='color:#000;font-size:12pt;font-weight:600;margin-top:4px;'></div>");
		pin = farimg.querySelector('#favr_val');
		pin.innerHTML = '+1';
		setTimeout(function stock(){
			farimg.style.transform = null; //разворот обратно
			pin.remove();//удаление временного блока
		}, 1000);
	}else if(cr_vom == 1){
		//режим поворота
		farimg.style.transform = "scaleX(-1)";//разворот на обратную сторону
		pin = farimg.querySelector('img');
		console.log(pin);
		pin.setAttribute('src', '/content/ico/aplus.png'); //заменяем картинку на +1
		setTimeout(function stock(){
			farimg.style.transform = null; //разворот обратно
			pin.setAttribute('src', '/content/ico/fav.png');//смена обратно картинки
		}, 2000);
	}
	/*
	if(cr_know == ''){
		cr_know = acab.getAttribute("game");console.log(cr_know + ' -2'); //что здесь делается ?????
	}else{
		//console.log(cr_know);
	}*/
	//var opt = ['add_infavt', cr_know];
	//dataSet(opt);
	

	//console.log(cr_know);
	//отправка в бд фавор продукта
}
function img_dop(el, e){//добавление меню продукту при наведении
	var jok = el; // element
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
function img_eop(el, e){//функция удаления меню, добавленного при наведение на продукт
	var kok = el; // element
	var lok = e; //event
	dimn = kok.firstElementChild; // krug_g1
	pont = dimn.querySelector("#img_dop");
	if(pont){
		pont.remove();
	}
}
function cont_d(el,e){//начало перетаскивания, задаем текущий продукт
	var kok = el; // element
	var lok = e; //event
	//if(cr_know == ''){cr_know = kok.getAttribute("game");}
	cr_know = kok.getAttribute("game");//get game identificator
	console.log(cr_know);
	dinn = kok.firstElementChild; // krug_g1 //нужно ли ??
	pipi = dinn.querySelector(".krug_im");//нужно ли ??
	//создать под курсором иконку коробочки.
}
function cont_v(el,e){//При перетаскивании срабатывает при отпускании
	var kok = el; // product
	var lok = e; //event
	console.log(el);
	cordx = e.pageX;
	cordy = e.pageY;
	cacf = AElemPoint(cordx,cordy);
	//получаем массив всех элементов под курсором во время отпускания клавиши мыши
	for (var k =0, kl=cacf.length; k< kl; k++){
		elemc = cacf[k];
		jedo = cacf[cacf.length-2];
		telemc = '#'+jedo.getAttribute("id");
		//console.log(jedo);
		if(telemc == crm_id){
			add_cab(); //анимация корзины
			console.log('в корзину');
		}
		if(telemc == fam_id){
			add_fab(); //анимация желаемого
			//console.log('в фаворите');
		}
	}
}
function anim_car(){ //анимации корзинки
	g = cabin.innerHTML; //наличие объекта в корзине
	if(g != 0 && cr_fom == 1){
		setTimeout(function tick(){carimg.style.transform = "rotate(0.03turn)";}, 0);
		setTimeout(function tick(){carimg.style.transform = "rotate(-0.03turn)";}, 100);
		setTimeout(function tick(){carimg.style.transform = "rotate(0.03turn)";}, 200);
		setTimeout(function tick(){carimg.style.transform = "rotate(-0.03turn)";}, 300);
		setTimeout(function tick(){carimg.style.transform = "rotate(0.03turn)";}, 400);
		setTimeout(function tick(){carimg.style.transform = "rotate(-0.03turn)";}, 500);
		setTimeout(function tick(){carimg.style.transform = "rotate(0.00turn)";}, 600);
	}
	if(g != 0 && cr_fom == 2){
		setTimeout(function teck(){carimg.style.transform = "scale(1.1)";}, 0);
		setTimeout(function teck(){carimg.style.transform = "scale(1.0)";}, 100);
		setTimeout(function teck(){carimg.style.transform = "scale(1.2)";}, 200);
		setTimeout(function teck(){carimg.style.transform = "scale(1.1)";}, 300);
		setTimeout(function teck(){carimg.style.transform = "scale(1.0)";}, 400);
	}
	if(g == 0 && vikt == 3){
		chang = carimg.querySelector('img');
		//console.log(chang);
		console.log('do');
		chang.setAttribute('src', '/content/moad.gif');//cr_load
		/*
		setTimeout(function teck(){chang.style.transform = "rotate(0deg)";}, 0);
		setTimeout(function teck(){chang.style.transform = "rotate(45deg)";}, 100);
		setTimeout(function teck(){chang.style.transform = "rotate(90deg)";}, 200);
		setTimeout(function teck(){chang.style.transform = "rotate(135deg)";}, 300);
		setTimeout(function teck(){chang.style.transform = "rotate(180deg)";}, 400);
		setTimeout(function teck(){chang.style.transform = "rotate(225deg)";}, 5000);
		setTimeout(function teck(){chang.style.transform = "rotate(270deg)";}, 600);
		setTimeout(function teck(){chang.style.transform = "rotate(315deg)";}, 700);
		setTimeout(function teck(){chang.style.transform = "rotate(360deg)";}, 800);
		*/
		//лучше gif найти
	}
}
function dataSet(opt){//взаимодействие с обработчиком php, работа с базой
	var par = opt;
	var formData = new FormData();
	for(var i=0;i<opt.length;i++){
		formData.append("par"+i, par[i]);
	}
	fetch('/sys/gen.php', {
		method: 'POST',
		credentials: 'same-origin',
		body: formData
	})
	.then(response => response.text())
	.then(function(data) {
		gug = data.split(','); //массив товара
		if(gug.length >0 && gug != '' || gug != 0){//проверка на не пустой массив
			var tenz = gug.indexOf('param') != -1;
			if(tenz){//значит мы выбираем инфу о продукте
				inf_gam = gug;
				if(inf_gam.length != 0){
					var cimg = inf_gam[1];
					var tnamer = inf_gam[0];
					var opname = tnamer.length;
					if(opname > 13){
						var cname = tnamer.substr(0, 12)+'...';
					}else{
						var cname = tnamer;
					}
					var csurl = inf_gam[2];
					jonst.insertAdjacentHTML("beforeend", "<div style='width:80px;margin:5px;position:relative;'><div><a href='/app/"+csurl+"'><img src='/content/img/"+cimg+"' style='width:100%;border-radius:6px;'></a></div><div style='font-size:9px;'>"+cname+"</div></div>");
				}
			}else{
				var senz = gug.indexOf('clear') != -1;
				if(senz){//
					console.log('Cart was clear');
				}else{
					//значит мы выбираем игры
					cr_cab = gug;//запись массива игр из базы в переменную cr_cab
					//отрисовать кол-во на корзине
					cabin.innerHTML = gug.length;
					cabin2.innerHTML = gug.length;
					to4k.style.display = 'block';
				}
			}
		}
	})
	.catch(error => console.log());
}
function AElemPoint(x, y){//определение по слоям под курсором всех элементов(с дочерними)
    var element, elements = [];
    var old_visibility = [];
    while (true) {
        element = document.elementFromPoint(x, y);
        if (!element || element === document.documentElement) {
            break;
        }
        elements.push(element);
        old_visibility.push(element.style.visibility);
        element.style.visibility = 'hidden';
    }
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.visibility = old_visibility[k];
    }
    elements.reverse();
    return elements;
}
});
