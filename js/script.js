//VARIABLES GLOBALES
let contador = 0;
let categoria = '';
let palabra = [];

function empezar(){
	window.location.href = "html/menu.html";
}

function cargarMenu(){
	var x = document.getElementById("play");
	x.style.display = "none";
	var y = document.getElementById("menu");
	y.style.display = "block";
}

function play(categoriaPlay){
	categoria = categoriaPlay;
	
	var x = document.getElementById("play");
	x.style.display = "block";
	var y = document.getElementById("menu");
	y.style.display = "none";
	document.getElementById("printOrigen").innerHTML = "";
	document.getElementById("printFonetizacion").innerHTML = "";
	document.getElementById("printCastellano").innerHTML = "";
}

function generateRandomWord(){
	console.log(categoria);
	
	let palabras = [];
	
	const numero = [
	//NUMEROS
	{"origen":"عشْرة","fonetizacion":"ashrah","castellano":"diez","categoria":"numero","audio": "diez"},
	{"origen":"تسعة","fonetizacion":"tisa'ah","castellano":"nueve","categoria":"numero","audio": "nueve"},
	{"origen":"ثمانية","fonetizacion":"zamaniyah","castellano":"ocho","categoria":"numero","audio": "ocho"},
	{"origen":"سبعة","fonetizacion":"sa'bah","castellano":"siete","categoria":"numero","audio": "siete"},
	{"origen":"ستة","fonetizacion":"sittah","castellano":"seis","categoria":"numero","audio": "seis"},
	{"origen":"خمس","fonetizacion":"jams","castellano":"cinco","categoria":"numero","audio": "cinco"},
	{"origen":"أربع","fonetizacion":"arbah","castellano":"cuatro","categoria":"numero","audio": "cuatro"},
	{"origen":"ثلاثة","fonetizacion":"zalazah","castellano":"tres","categoria":"numero","audio": "tres"},
	{"origen":"اثنان","fonetizacion":"iznan","castellano":"dos","categoria":"numero","audio": "dos"},
	{"origen":"واحد","fonetizacion":"wahid","castellano":"uno","categoria":"numero","audio": "uno"},
	{"origen":"صفر","fonetizacion":"sufr","castellano":"cero","categoria":"numero","audio": "cero"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"numero","audio": ""},
	];
	
	if(categoria == 'numero'){palabras = numero;}
	else if(categoria == 'todas'){palabras += numero;}
	
	const color = [
	//COLORES
	{"origen":"رمادي","fonetizacion":"ramadii","castellano":"gris","categoria":"palabra","color": "gris"},
	{"origen":"بنفسجي","fonetizacion":"banafsajii","castellano":"morado","categoria":"color","audio": "morado"},
	{"origen":"برتقالي","fonetizacion":"brtugali","castellano":"naranja (color)","categoria":"color","audio": "naranjacolor"},
	{"origen":"بني","fonetizacion":"buni","castellano":"marrón","categoria":"color","audio": "marron"},
	{"origen":"أحمر","fonetizacion":"ahmar","castellano":"rojo","categoria":"color","audio": "rojo"},
	{"origen":"أخضر","fonetizacion":"ajdar","castellano":"verde","categoria":"color","audio": "verde"},
	{"origen":"أبيض","fonetizacion":"abyad","castellano":"blanco","categoria":"color","audio": "blanco"},
	{"origen":"أصفر","fonetizacion":"asfar","castellano":"amarillo","categoria":"color","audio": "amarillo"},
	{"origen":"أسود","fonetizacion":"aswad","castellano":"negro","categoria":"color","audio": "negro"},
	{"origen":"أزرق","fonetizacion":"azraq","castellano":"azul","categoria":"color","audio": "azul"},
	{"origen":"فضّي","fonetizacion":"fiDDii","castellano":"plateado","categoria":"color","audio": "plateado"},
	{"origen":"فضّي","fonetizacion":"dhahabii","castellano":"dorado","categoria":"color","audio": "dorado"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"color","audio": ""},
	];
	
	if(categoria == 'color'){palabras = color;}
	else if(categoria == 'todas'){palabras += color;}
	
	const animal = [
	//ANIMALES
	{"origen":"دود","fonetizacion":"doud","castellano":"gusanos","categoria":"animal","audio": "gusanos"},
	{"origen":"أرنب","fonetizacion":"arnab","castellano":"conejo","categoria":"animal","audio": "conejo"},
	{"origen":"بطة","fonetizacion":"battah","castellano":"pato","categoria":"animal","audio": "pato"},
	{"origen":"دجاجة","fonetizacion":"dayaya","castellano":"gallina","categoria":"animal","audio": "gallina"},
	{"origen":"بقرة","fonetizacion":"baqara","castellano":"vaca","categoria":"animal","audio": "vaca"},
	{"origen":"حصان","fonetizacion":"hisan","castellano":"caballo","categoria":"animal","audio": "caballo"},
	{"origen":"كلب","fonetizacion":"kalb","castellano":"perro","categoria":"animal","audio": "perro"},
	{"origen":"قطة","fonetizacion":"qita","castellano":"gato","categoria":"animal","audio": "gato"},
	{"origen":"زرافة","fonetizacion":"zarafah","castellano":"jirafa","categoria":"animal","audio": "jirafa"},
	{"origen":"خنزير","fonetizacion":"jinzhir","castellano":"cerdo","categoria":"animal","audio": "cerdo"},
	{"origen":"حمامة","fonetizacion":"hamama","castellano":"paloma","categoria":"animal","audio": "paloma"},
	{"origen":"أسد","fonetizacion":"asad","castellano":"león","categoria":"animal","audio": "asad"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"animal","audio": ""},
	];
	
	if(categoria == 'animal'){palabras = animal;}
	else if(categoria == 'todas'){palabras += animal;}
	
	const comida = [
	//COMIDA
	{"origen":"زيت","fonetizacion":"zayt","castellano":"aceite","categoria":"comida","audio": "aceite"},
	{"origen":"شاورما","fonetizacion":"shawarma","castellano":"shawarma","categoria":"comida","audio": "shawarma"},
	{"origen":"كسكس","fonetizacion":"ksks","castellano":"cuscús","categoria":"comida","audio": "cuscus"},
	{"origen":"بيض","fonetizacion":"baid","castellano":"huevos","categoria":"comida","audio": "huevos"},
	{"origen":"بُن","fonetizacion":"bunn","castellano":"café","categoria":"comida","audio": "bun"},
	{"origen":"سُكّر","fonetizacion":"sukar","castellano":"azúcar","categoria":"comida","audio": "azucar"},
	{"origen":"ليم","fonetizacion":"laim","castellano":"lima","categoria":"comida","audio": "lima"},
	{"origen":"ذرة","fonetizacion":"dharrah","castellano":"maiz","categoria":"comida","audio": "maiz"},
	{"origen":"ثوم","fonetizacion":"thum","castellano":"ajo","categoria":"comida","audio": "ajo"},
	{"origen":"لحمة","fonetizacion":"luhma","castellano":"carne","categoria":"comida","audio": "carne"},
	{"origen":"رمان","fonetizacion":"ruman","castellano":"granadas (fruta)","categoria":"comida","audio": "granadas"},
	{"origen":"زيتون","fonetizacion":"zaytun","castellano":"aceituna","categoria":"comida","audio": "aceituna"},
	{"origen":"خبز","fonetizacion":"jubz","castellano":"pan","categoria":"comida","audio": "pan"},
	{"origen":"تفاح","fonetizacion":"tufaah","castellano":"manzanas","categoria":"comida","audio": "manzanas"},
	{"origen":"توت","fonetizacion":"tuwt","castellano":"frambuesas","categoria":"comida","audio": "frambuesas"},
	{"origen":"أناناس","fonetizacion":"ananas","castellano":"piña","categoria":"comida","audio": "ananas"},
	{"origen":"موز","fonetizacion":"mouz","castellano":"plátano","categoria":"comida","audio": "platano"},
	{"origen":"رز","fonetizacion":"roz","castellano":"arroz","categoria":"comida","audio": "arroz"},
	{"origen":"جبن","fonetizacion":"yubn","castellano":"queso / cobarde","categoria":"comida","audio": "queso"},
	{"origen":"خيار","fonetizacion":"jiar","castellano":"pepino/opinión","categoria":"comida","audio": "jiar"},
	{"origen":"ماء","fonetizacion":"ma","castellano":"agua","categoria":"utensilios","audio": "agua"},
	{"origen":"حلال","fonetizacion":"halal","castellano":"halal","categoria":"utensilios","audio": "halal"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"comida","audio": ""},
	];
	
	if(categoria == 'animal'){palabras = animal;}
	else if(categoria == 'todas'){palabras += animal;}
	
	const utensilios = [
	//UTENSILIOS
	{"origen":"صحن","fonetizacion":"suhan","castellano":"plato","categoria":"utensilios","audio": "plato"},
	{"origen":"شوكة","fonetizacion":"shawkah","castellano":"tenedor/espina","categoria":"utensilios","audio": "tenedor"},
	{"origen":"سكين","fonetizacion":"sakin","castellano":"cuchillo","categoria":"utensilios","audio": "cuchillo"},
	{"origen":"ملعقة","fonetizacion":"mula'qah","castellano":"cuchara","categoria":"utensilios","audio": "cuchara"},
	{"origen":"مطبخ","fonetizacion":"matbaj","castellano":"cocina","categoria":"utensilios","audio": "cocina"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"comida","audio": ""},
	];
	
	if(categoria == 'utensilios'){palabras = utensilios;}
	else if(categoria == 'todas'){palabras += utensilios;}

	const cuerpo = [
	//PARTES DEL CUERPO
	{"origen":"أصبع","fonetizacion":"usba'","castellano":"dedo","categoria":"cuerpo","audio": "dedo"},
	{"origen":"أذن","fonetizacion":"uhdhn","castellano":"oreja","categoria":"cuerpo","audio": "oreja"},
	{"origen":"فم","fonetizacion":"famah","castellano":"boca","categoria":"cuerpo","audio": "boca"},
	{"origen":"لسان","fonetizacion":"lisan","castellano":"cuerpo","categoria":"cuerpo","audio": "lengua"},
	{"origen":"قلب","fonetizacion":"qalb","castellano":"corazón","categoria":"cuerpo","audio": "corazon"},
	{"origen":"يد","fonetizacion":"iad","castellano":"mano","categoria":"cuerpo","audio": "mano"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"cuerpo","audio": ""},
	];
	
	if(categoria == 'cuerpo'){palabras = cuerpo;}
	else if(categoria == 'todas'){palabras += cuerpo;}
	
	const ropa = [
	//ROPA
	{"origen":"ثوب","fonetizacion":"zaub","castellano":"camisón","categoria":"ropa","audio": "camison"},
	{"origen":"قميص","fonetizacion":"camiis","castellano":"camisa","categoria":"ropa","audio": "camisa"},
	{"origen":"أحذية","fonetizacion":"ahdhia","castellano":"zapatos","categoria":"ropa","audio": "zapatos"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"palabra","audio": ""},
	];
	
	if(categoria == 'ropa'){palabras = ropa;}
	else if(categoria == 'todas'){palabras += ropa;}
	
	const estacion = [
	//ESTACIONES
	{"origen":"صيف","fonetizacion":"saif","castellano":"verano","categoria":"estacion","audio": "verano"},
	{"origen":"شتاء","fonetizacion":"shitaa","castellano":"invierno","categoria":"estacion","audio": "invierno"},
	{"origen":"ربيع","fonetizacion":"rabiia","castellano":"primavera","categoria":"estacion","audio": "primavera"},
	{"origen":"خريف","fonetizacion":"jarif","castellano":"otoño","categoria":"estacion","audio": "otono"},
	];
	
	if(categoria == 'estacion'){palabras = estacion;}
	else if(categoria == 'todas'){palabras += estacion;}

	const familia = [
	//FAMILIA
	{"origen":"أب","fonetizacion":"ab","castellano":"padre","categoria":"familia","audio": "ab"},
	{"origen":"أم","fonetizacion":"um","castellano":"madre","categoria":"familia","audio": "um"},
	{"origen":"جد","fonetizacion":"yd","castellano":"abuelo","categoria":"familia","audio": "jd"},
	{"origen":"جدة","fonetizacion":"yidah","castellano":"abuela","categoria":"familia","audio": "jidah"},
	{"origen":"أخ","fonetizacion":"aj","castellano":"hermano","categoria":"familia","audio": "hermano"},
	{"origen":"أخت","fonetizacion":"ujt","castellano":"hermana","categoria":"familia","audio": "hermana"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"palabra","audio": ""},
	];
	
	if(categoria == 'familia'){palabras = familia;}
	else if(categoria == 'todas'){palabras += familia;}
	
	const conversacion = [
	//CONVERSACION
	{"origen":"صباح الخير","fonetizacion":"sabah aljayr","castellano":"buenos dias","categoria":"conversacion","audio": "buenosdias"},
	{"origen":"مساء الخير","fonetizacion":"masa aljayr","castellano":"buenas tardes","categoria":"conversacion","audio": "buenastardes"},
	{"origen":"مرحبا","fonetizacion":"marhaban","castellano":"hola","categoria":"conversacion","audio": "marhaban"},
	{"origen":"أهلاً","fonetizacion":"ahlan","castellano":"hola","categoria":"conversacion","audio": "ahlan"},
	{"origen":"كيف حالك","fonetizacion":"kaif haluk","castellano":"¿Cómo estás?","categoria":"conversacion","audio": "comoestas"},
	{"origen":"آسف","fonetizacion":"asf","castellano":"perdón","categoria":"conversacion","audio": "perdon"},
	{"origen":"شكرًا","fonetizacion":"shkran","castellano":"gracias","categoria":"conversacion","audio": "gracias"},
	{"origen":"الحمد لله","fonetizacion":"alhamd lilah","castellano":"gracias a dios","categoria":"conversacion","audio": "graciasadios"},
	{"origen":"أين","fonetizacion":"aina","castellano":"dónde","categoria":"conversacion","audio": "donde"},
	{"origen":"في","fonetizacion":"fi","castellano":"en","categoria":"conversacion","audio": "fi"},
	{"origen":"نوعا ما","fonetizacion":"nawʿan maa","castellano":"más o menos","categoria":"conversacion","audio": "masomenos"},
	{"origen":"أيوا", "fonetizacion":"aiwa","castellano":"sí","categoria":"conversacion","audio": "aiwa"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"conversacion","audio": ""},
	];
	
	if(categoria == 'conversacion'){palabras = conversacion;}
	else if(categoria == 'todas'){palabras += conversacion;}
	
	const ocupacion = [
	//OCUPACION
	{"origen":"مدرس","fonetizacion":"mudaris","castellano":"profesor/a","categoria":"ocupacion","audio": "mudaris"},
	{"origen":"ملِك","fonetizacion":"mlik","castellano":"rey","categoria":"ocupacion","audio": "rey"},
	{"origen":"أستاذ","fonetizacion":"ustadh","castellano":"profesor","categoria":"ocupacion","audio": "ustad"},
	{"origen":"شرطي","fonetizacion":"shurTii","castellano":"policía","categoria":"ocupacion","audio": "policia"},
	{"origen":"طبيب","fonetizacion":"Tabiib","castellano":"médico","categoria":"ocupacion","audio": "medico"},
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"ocupacion","audio": ""},
	];
	
	if(categoria == 'ocupacion'){palabras = ocupacion;}
	else if(categoria == 'todas'){palabras += ocupacion;}
	
	const casa = [
	{"origen":"كرسي","fonetizacion":"cursii","castellano":"silla","categoria":"casa","audio": "silla"},
	{"origen":"أثاث","fonetizacion":"azaz","castellano":"muebles","categoria":"casa","audio": "muebles"},
	{"origen":"باب","fonetizacion":"baab","castellano":"puerta","categoria":"casa","audio": "puerta"},
	{"origen":"بيت","fonetizacion":"bait","castellano":"casa","categoria":"casa","audio": "casa"},
	{"origen":"سرير","fonetizacion":"sarir","castellano":"cama","categoria":"casa","audio": "cama"},
	];
	
	if(categoria == 'casa'){palabras = casa;}
	else if(categoria == 'todas'){palabras += casa;}
	
	const sinCategoria = [
	//{"origen":"","fonetizacion":"","castellano":"","categoria":"palabra","audio": ""},
	{"origen":"رقم","fonetizacion":"raqm","castellano":"número","categoria":"palabra","audio": "numero"},
	{"origen":"لون","fonetizacion":"lawn","castellano":"color","categoria":"palabra","audio": "color"},
	{"origen":"ألوان","fonetizacion":"alwan","castellano":"colores","categoria":"palabra","audio": "colores"},
	{"origen":"دفتر","fonetizacion":"daftar","castellano":"libreta","categoria":"palabra","audio": "libreta"},
	{"origen":"بنت","fonetizacion":"bint","castellano":"chica","categoria":"palabra","audio": "chica"},
	{"origen":"ولد","fonetizacion":"walad","castellano":"chico","categoria":"palabra","audio": "chico"},
	{"origen":"ليلة","fonetizacion":"leilah","castellano":"noche","categoria":"palabra","audio": "noche"},
	{"origen":"نور","fonetizacion":"nuur","castellano":"luz (natural)","categoria":"palabra","audio": "luznatural"},
	{"origen":"كمانٍ","fonetizacion":"kamaan","castellano":"violín","categoria":"palabra","audio": "violin"},
	{"origen":"فصل","fonetizacion":"faSl","castellano":"estación (del año) / aula","categoria":"palabra","audio": "fasl"},
	{"origen":"حظ","fonetizacion":"haD","castellano":"suerte","categoria":"palabra","audio": "suerte"},
	{"origen":"نظارات","fonetizacion":"naDarah","castellano":"gafas","categoria":"palabra","audio": "gafas"},
	{"origen":"ظرف","fonetizacion":"Darf","castellano":"sobre (de cartas)","categoria":"palabra","audio": "sobre"},
	{"origen":"نعم","fonetizacion":"na'am","castellano":"sí","categoria":"palabra","audio": "si"},
	{"origen":"لا","fonetizacion":"la","castellano":"no","categoria":"palabra","audio": "no"},
	{"origen":"نقدية","fonetizacion":"naqdiyah","castellano":"dinero (en efectivo)","categoria":"palabra","audio": "dineroefectivo"},
	{"origen":"مال","fonetizacion":"maal","castellano":"dinero (capital)","categoria":"palabra","audio": "dinerocapital"},
	{"origen":"وداع","fonetizacion":"wadaa","castellano":"adiós","categoria":"palabra","audio": "adios"},
	{"origen":"لذيذ","fonetizacion":"ladhidh","castellano":"sabroso","categoria":"palabra","audio": "sabroso"},
	{"origen":"درج","fonetizacion":"darash","castellano":"escalera","categoria":"palabra","audio": "escalera"},
	{"origen":"شمس","fonetizacion":"shams","castellano":"sol","categoria":"palabra","audio": "sol"},
	{"origen":"فيروزي","fonetizacion":"firuzhii","castellano":"turquesa","categoria":"palabra","audio": "turquesa"},
	{"origen":"مثلية","fonetizacion":"mazliiya","castellano":"lesbiana","categoria":"palabra","audio": "lesbiana"},
	{"origen":"أنت","fonetizacion":"anta / anti","castellano":"tú (más) / tú (fem)","categoria":"palabra","audio": "tu"},
	{"origen":"أنا","fonetizacion":"ana","castellano":"yo","categoria":"palabra","audio": "ana"},
	{"origen":"من","fonetizacion":"man / men","castellano":"quién / de","categoria":"palabra","audio": "quien"},
	{"origen":"مدرسة","fonetizacion":"madrasa","castellano":"escuela","categoria":"palabra","audio": "escuela"},
	{"origen":"وئام","fonetizacion":"wiam","castellano":"armonía","categoria":"palabra","audio": "armonia"},
	{"origen":"مطعم","fonetizacion":"matim","castellano":"restaurante","categoria":"palabra","audio": "restaurante"},
	{"origen":"أمل","fonetizacion":"amal","castellano":"esperanza","categoria":"palabra","audio": "amal"},
	{"origen":"عمل","fonetizacion":"aemal","castellano":"trabajo","categoria":"palabra","audio": "trabajo"},
	{"origen":"شك","fonetizacion":"shak","castellano":"duda","categoria":"palabra","audio": "duda"},
	{"origen":"مسكين","fonetizacion":"miskin","castellano":"pobrecito","categoria":"palabra","audio": "pobrecito"},
	{"origen":"سلام","fonetizacion":"salam","castellano":"paz","categoria":"palabra","audio": "paz"},
	{"origen":"كيس","fonetizacion":"kis","castellano":"bolsa","categoria":"palabra","audio": "bolsa"},
	{"origen":"كلمة","fonetizacion":"kalimah","castellano":"palabra","categoria":"palabra","audio": "palabra"},
	{"origen":"قفل","fonetizacion":"qofl","castellano":"candado","categoria":"palabra","audio": "candado"},
	{"origen":"وقت","fonetizacion":"uaqt","castellano":"tiempo","categoria":"palabra","audio": "tiempo"},
	{"origen":"حقيبة","fonetizacion":"haqibah","castellano":"maleta","categoria":"palabra","audio": "maleta"},
	{"origen":"عقل","fonetizacion":"aql","castellano":"mente","categoria":"palabra","audio": "mente"},
	{"origen":"قمر","fonetizacion":"qamr","castellano":"luna","categoria":"palabra","audio": "luna"},
	{"origen":"قلم","fonetizacion":"qalm","castellano":"lápiz","categoria":"palabra","audio": "lapiz"},
	{"origen":"قصر","fonetizacion":"qasr","castellano":"palacio","categoria":"palabra","audio": "palacio"},
	{"origen":"قلعة","fonetizacion":"qaleah","castellano":"castillo","categoria":"palabra","audio": "castillo"},
	{"origen":"أكاديمية","fonetizacion":"akadimia","castellano":"academia","categoria":"palabra","audio": "academia"},
	{"origen":"جوع","fonetizacion":"yue","castellano":"hambre","categoria":"palabra","audio": "hambre"},
	//{"origen":"انا ذاهب الى المغرب","fonetizacion":"ana dhahib ala almaghrib","castellano":"me voy a Marruecos","categoria":"frase","audio": ""},
	{"origen":"مقبض","fonetizacion":"muqbid","castellano":"grifo","categoria":"palabra","audio": "grifo"},
	{"origen":"ذهب","fonetizacion":"dhahab","castellano":"oro","categoria":"palabra","audio": "oro"},
	{"origen":"بارد","fonetizacion":"barid","castellano":"frío","categoria":"palabra","audio": "frio"},
	{"origen":"كتاب","fonetizacion":"kitab","castellano":"libro","categoria":"palabra","audio": "libro"},
	{"origen":"تاج","fonetizacion":"tash","castellano":"corona","categoria":"palabra","audio": "taj"},			
	{"origen":"مثال","fonetizacion":"mithal","castellano":"ejemplo","categoria":"palabra","audio": "ejemplo"},
	{"origen":"رسالة","fonetizacion":"risalah","castellano":"mensaje","categoria":"palabra","audio": "mensaje"},
	{"origen":"جار","fonetizacion":"yaar","castellano":"vecino","categoria":"palabra","audio": "vecino"},
	{"origen":"رجل","fonetizacion":"rayul","castellano":"hombre","categoria":"palabra","audio": "hombre"},
	{"origen":"زجاج","fonetizacion":"zuyash","castellano":"vidrio","categoria":"palabra","audio": "vidrio"},
	{"origen":"حب","fonetizacion":"hab","castellano":"amor","categoria":"palabra","audio": "amor"},
	{"origen":"حرب","fonetizacion":"harb","castellano":"guerra","categoria":"palabra","audio": "guerra"},
	{"origen":"حبيبي","fonetizacion":"habibi","castellano":"mi amor","categoria":"palabra","audio": "habibi"},
	{"origen":"جميل","fonetizacion":"yamil","castellano":"bonito","categoria":"palabra","audio": "jamil"},
	{"origen":"سعيد","fonetizacion":"saeid","castellano":"feliz","categoria":"palabra","audio": "feliz"},
	{"origen":"سماء","fonetizacion":"sama","castellano":"cielo","categoria":"palabra","audio": "sama"},
	{"origen":"ناس","fonetizacion":"naas","castellano":"gente","categoria":"palabra","audio": "gente"},
	{"origen":"جزيرة","fonetizacion":"yazira","castellano":"isla","categoria":"palabra","audio": "isla"},
	];
	
	if(categoria == 'todas'){palabras += sinCategoria;}
	
	if (contador == 0){
		
		palabra = palabras[Math.floor(Math.random() * palabras.length)];
		
		document.getElementById("printOrigen").innerHTML = "";
		document.getElementById("printFonetizacion").innerHTML = "";
		document.getElementById("printCastellano").innerHTML = "";
		document.getElementById("audio").pause();
		document.getElementById("audio").currentTime = 0;
	}
	
	if (contador <= 2){
		contador ++;
		if (contador == 1){
			document.getElementById("printOrigen").innerHTML = palabra.origen;
		}
		if (contador == 2){
			document.getElementById("printFonetizacion").innerHTML = palabra.fonetizacion;
			document.getElementById("audio").src = "../wav/" + palabra.audio + ".wav";
			document.getElementById("audio").play();
		}
		if (contador == 3){
			document.getElementById("printCastellano").innerHTML = palabra.castellano;
			contador = 0;
		}
	} else {
		contador = 0;
	}	
}
