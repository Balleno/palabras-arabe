let contador = 0;
		var palabra = [];
		function generateRandomWord(){
			const palabras = [
			//{"origen":"","fonetizacion":"","castellano":"","categoria":"palabra","audio": ""},
			{"origen":"أنت","fonetizacion":"anta / anti","castellano":"tú (más) / tú (fem)","categoria":"palabra","audio": "tu"},
			{"origen":"أنا","fonetizacion":"ana","castellano":"yo","categoria":"palabra","audio": "ana"},
			{"origen":"من","fonetizacion":"man / men","castellano":"quién / de","categoria":"palabra","audio": "quien"},
			{"origen":"أين","fonetizacion":"aina","castellano":"dónde","categoria":"palabra","audio": "donde"},
			{"origen":"مدرسة","fonetizacion":"madrasa","castellano":"escuela","categoria":"palabra","audio": "escuela"},
			{"origen":"عشْرة","fonetizacion":"ashrah","castellano":"diez","categoria":"palabra","audio": "diez"},
			{"origen":"تسعة","fonetizacion":"tisa'ah","castellano":"nueve","categoria":"palabra","audio": "nueve"},
			{"origen":"ثمانية","fonetizacion":"zamaniyah","castellano":"ocho","categoria":"palabra","audio": "ocho"},
			{"origen":"سبعة","fonetizacion":"sa'bah","castellano":"siete","categoria":"palabra","audio": "siete"},
			{"origen":"ستة","fonetizacion":"sittah","castellano":"seis","categoria":"palabra","audio": "seis"},
			{"origen":"خمس","fonetizacion":"jams","castellano":"cinco","categoria":"palabra","audio": "cinco"},
			{"origen":"أربع","fonetizacion":"arbah","castellano":"cuatro","categoria":"palabra","audio": "cuatro"},
			{"origen":"ثلاثة","fonetizacion":"zalazah","castellano":"tres","categoria":"palabra","audio": "tres"},
			{"origen":"اثنان","fonetizacion":"iznan","castellano":"dos","categoria":"palabra","audio": "dos"},
			{"origen":"واحد","fonetizacion":"wahid","castellano":"uno","categoria":"palabra","audio": "uno"},
			{"origen":"صفر","fonetizacion":"sufr","castellano":"cero","categoria":"palabra","audio": "cero"},
			{"origen":"وئام","fonetizacion":"wiam","castellano":"armonía","categoria":"palabra","audio": "armonia"},
			{"origen":"مطعم","fonetizacion":"matim","castellano":"restaurante","categoria":"palabra","audio": "restaurante"},
			{"origen":"صيف","fonetizacion":"saif","castellano":"verano","categoria":"palabra","audio": "verano"},
			{"origen":"شتاء","fonetizacion":"shitaa","castellano":"invierno","categoria":"palabra","audio": "invierno"},
			{"origen":"ربيع","fonetizacion":"rabiia","castellano":"primavera","categoria":"palabra","audio": "primavera"},
			{"origen":"خريف","fonetizacion":"jarif","castellano":"otoño","categoria":"palabra","audio": "otono"},
			{"origen":"أمل","fonetizacion":"amal","castellano":"esperanza","categoria":"palabra","audio": "amal"},
			{"origen":"عمل","fonetizacion":"aemal","castellano":"trabajo","categoria":"palabra","audio": "trabajo"},
			{"origen":"ملعقة","fonetizacion":"mula'qah","castellano":"cuchara","categoria":"palabra","audio": "cuchara"},
			{"origen":"شك","fonetizacion":"shak","castellano":"duda","categoria":"palabra","audio": "duda"},
			{"origen":"شوكة","fonetizacion":"shawkah","castellano":"tenedor/espina","categoria":"palabra","audio": "tenedor"},
			{"origen":"سكين","fonetizacion":"sakin","castellano":"cuchillo","categoria":"palabra","audio": "cuchillo"},
			{"origen":"مسكين","fonetizacion":"miskin","castellano":"pobrecito","categoria":"palabra","audio": "pobrecito"},
			{"origen":"سُكّر","fonetizacion":"sukar","castellano":"azúcar","categoria":"palabra","audio": "azucar"},
			{"origen":"لسان","fonetizacion":"lisan","castellano":"lengua","categoria":"palabra","audio": "lengua"},
			{"origen":"ليم","fonetizacion":"laim","castellano":"lima","categoria":"palabra","audio": "lima"},
			{"origen":"سلام","fonetizacion":"salam","castellano":"paz","categoria":"palabra","audio": "paz"},
			{"origen":"حلال","fonetizacion":"halal","castellano":"halal","categoria":"palabra","audio": "halal"},
			{"origen":"كيس","fonetizacion":"kis","castellano":"bolsa","categoria":"palabra","audio": "bolsa"},
			{"origen":"كلمة","fonetizacion":"kalimah","castellano":"palabra","categoria":"palabra","audio": "palabra"},
			{"origen":"قفل","fonetizacion":"qofl","castellano":"candado","categoria":"palabra","audio": "candado"},
			{"origen":"وقت","fonetizacion":"uaqt","castellano":"tiempo","categoria":"palabra","audio": "tiempo"},
			{"origen":"حقيبة","fonetizacion":"haqibah","castellano":"maleta","categoria":"palabra","audio": "maleta"},
			{"origen":"عقل","fonetizacion":"aql","castellano":"mente","categoria":"palabra","audio": "mente"},
			{"origen":"قمر","fonetizacion":"qamr","castellano":"luna","categoria":"palabra","audio": "luna"},
			{"origen":"قلم","fonetizacion":"qalm","castellano":"lápiz","categoria":"palabra","audio": "lapiz"},
			{"origen":"قلب","fonetizacion":"qalb","castellano":"corazón","categoria":"palabra","audio": "corazon"},
			{"origen":"قصر","fonetizacion":"qasr","castellano":"palacio","categoria":"palabra","audio": "palacio"},
			{"origen":"قلعة","fonetizacion":"qaleah","castellano":"castillo","categoria":"palabra","audio": ""},
			{"origen":"مدرس","fonetizacion":"mudaris","castellano":"profesor/a","categoria":"palabra","audio": ""},
			{"origen":"أكاديمية","fonetizacion":"akadimia","castellano":"academia","categoria":"palabra","audio": ""},
			{"origen":"جوع","fonetizacion":"yue","castellano":"hambre","categoria":"palabra","audio": "hambre"},
			{"origen":"شاورما","fonetizacion":"shawarma","castellano":"shawarma","categoria":"palabra","audio": ""},
			{"origen":"كسكس","fonetizacion":"ksks","castellano":"cuscús","categoria":"palabra","audio": ""},
			{"origen":"أرنب","fonetizacion":"arnab","castellano":"conejo","categoria":"palabra","audio": "conejo"},
			{"origen":"بني","fonetizacion":"buni","castellano":"marrón","categoria":"palabra","audio": ""},
			{"origen":"دجاجة","fonetizacion":"dayaya","castellano":"gallina","categoria":"palabra","audio": "gallina"},
			{"origen":"بقرة","fonetizacion":"baqara","castellano":"vaca","categoria":"palabra","audio": ""},
			{"origen":"حصان","fonetizacion":"hisan","castellano":"caballo","categoria":"palabra","audio": ""},
			{"origen":"الحمد لله","fonetizacion":"alhamd lilah","castellano":"gracias a dios","categoria":"frase","audio": "graciasadios"},
			{"origen":"انا ذاهب الى المغرب","fonetizacion":"ana dhahib ala almaghrib","castellano":"me voy a Marruecos","categoria":"frase","audio": ""},
			{"origen":"في","fonetizacion":"fi","castellano":"en","categoria":"palabra","audio": "fi"},
			{"origen":"كيف حالك","fonetizacion":"kayf haluk","castellano":"cómo estás","categoria":"frase","audio": ""},
			{"origen":"باب","fonetizacion":"baab","castellano":"puerta","categoria":"palabra","audio": "puerta"},
			{"origen":"بيت","fonetizacion":"bait","castellano":"casa","categoria":"palabra","audio": "casa"},
			{"origen":"كلب","fonetizacion":"kalb","castellano":"perro","categoria":"palabra","audio": "perro"},
			{"origen":"قطة","fonetizacion":"qita","castellano":"gato","categoria":"palabra","audio": ""},
			{"origen":"زيتون","fonetizacion":"zaytun","castellano":"aceituna","categoria":"palabra","audio": "aceituna"},
			{"origen":"مقبض","fonetizacion":"muqbid","castellano":"grifo","categoria":"palabra","audio": ""},
			{"origen":"ذرة","fonetizacion":"dharrah","castellano":"maiz","categoria":"palabra","audio": "maiz"},
			{"origen":"ذهب","fonetizacion":"dhahab","castellano":"oro","categoria":"palabra","audio": "oro"},
			{"origen":"بارد","fonetizacion":"barid","castellano":"frío","categoria":"palabra","audio": "frio"},
			{"origen":"كتاب","fonetizacion":"kitab","castellano":"libro","categoria":"palabra","audio": "libro"},
			{"origen":"تاج","fonetizacion":"tash","castellano":"corona","categoria":"palabra","audio": "taj"},
			{"origen":"ثوم","fonetizacion":"thum","castellano":"ajo","categoria":"palabra","audio": ""},
			{"origen":"مثال","fonetizacion":"mithal","castellano":"ejemplo","categoria":"palabra","audio": ""},
			{"origen":"أحذية","fonetizacion":"ahdhia","castellano":"zapatos","categoria":"palabra","audio": ""},
			{"origen":"رقم","fonetizacion":"raqm","castellano":"número","categoria":"palabra","audio": "numero"},
			{"origen":"رمان","fonetizacion":"ruman","castellano":"granadas (fruta)","categoria":"palabra","audio": ""},
			{"origen":"رسالة","fonetizacion":"risalah","castellano":"mensaje","categoria":"palabra","audio": "mensaje"},
			{"origen":"جار","fonetizacion":"yaar","castellano":"vecino","categoria":"palabra","audio": ""},
			{"origen":"رجل","fonetizacion":"rayul","castellano":"hombre","categoria":"palabra","audio": ""},
			{"origen":"زجاج","fonetizacion":"zuyash","castellano":"vidrio","categoria":"palabra","audio": "vidrio"},
			{"origen":"حب","fonetizacion":"hab","castellano":"amor","categoria":"palabra","audio": "amor"},
			{"origen":"حرب","fonetizacion":"harb","castellano":"guerra","categoria":"palabra","audio": "guerra"},
			{"origen":"حبيبي","fonetizacion":"habibi","castellano":"mi amor","categoria":"palabra","audio": "habibi"},
			{"origen":"لحمة","fonetizacion":"luhma","castellano":"carne","categoria":"palabra","audio": ""},
			{"origen":"جميل","fonetizacion":"yamil","castellano":"bonito","categoria":"palabra","audio": "jamil"},
			{"origen":"آسف","fonetizacion":"asf","castellano":"perdón","categoria":"palabra","audio": ""},
			{"origen":"شكر","fonetizacion":"shkran","castellano":"gracias","categoria":"palabra","audio": "gracias"},
			{"origen":"أسود","fonetizacion":"aswad","castellano":"negro","categoria":"palabra","audio": "negro"},
			{"origen":"صباح الخير","fonetizacion":"sabah aljayr","castellano":"buenos dias","categoria":"frase","audio": "buenosdias"},
			{"origen":"مساء الخير","fonetizacion":"masa aljayr","castellano":"buenas tardes","categoria":"frase","audio": "buenastardes"},
			{"origen":"مرحبا","fonetizacion":"marhaban","castellano":"hola","categoria":"palabra","audio": "marhaban"},
			{"origen":"خبز","fonetizacion":"jubz","castellano":"pan","categoria":"palabra","audio": "pan"},
			{"origen":"تفاح","fonetizacion":"tufaah","castellano":"manzanas","categoria":"palabra","audio": "manzanas"},
			{"origen":"ملِك","fonetizacion":"mlik","castellano":"rey","categoria":"palabra","audio": "rey"},
			{"origen":"أحمر","fonetizacion":"ahmar","castellano":"rojo","categoria":"palabra","audio": "rojo"},
			{"origen":"أخضر","fonetizacion":"ajdar","castellano":"verde","categoria":"palabra","audio": "verde"},
			{"origen":"أبيض","fonetizacion":"abyad","castellano":"blanco","categoria":"palabra","audio": "blanco"},
			{"origen":"أب","fonetizacion":"ab","castellano":"padre","categoria":"palabra","audio": "ab"},
			{"origen":"أم","fonetizacion":"um","castellano":"madre","categoria":"palabra","audio": "um"},
			{"origen":"جد","fonetizacion":"yd","castellano":"abuelo","categoria":"palabra","audio": "jd"},
			{"origen":"جدة","fonetizacion":"yidah","castellano":"abuela","categoria":"palabra","audio": "jidah"},
			{"origen":"أخ","fonetizacion":"aj","castellano":"hermano","categoria":"palabra","audio": "hermano"},
			{"origen":"أخت","fonetizacion":"ujt","castellano":"hermana","categoria":"palabra","audio": "hermana"},
			{"origen":"زيت","fonetizacion":"zayt","castellano":"aceite","categoria":"palabra","audio": "aceite"},
			{"origen":"حمامة","fonetizacion":"hamama","castellano":"paloma","categoria":"palabra","audio": "paloma"},
			{"origen":"أسد","fonetizacion":"asad","castellano":"león","categoria":"palabra","audio": "asad"},
			{"origen":"سرير","fonetizacion":"sarir","castellano":"cama","categoria":"palabra","audio": "cama"},
			{"origen":"سعيد","fonetizacion":"saeid","castellano":"feliz","categoria":"palabra","audio": "feliz"},
			{"origen":"سماء","fonetizacion":"sama","castellano":"cielo","categoria":"palabra","audio": "sama"},
			{"origen":"ماء","fonetizacion":"ma","castellano":"agua","categoria":"palabra","audio": "agua"},
			{"origen":"توت","fonetizacion":"tuwt","castellano":"frambuesas","categoria":"palabra","audio": "frambuesas"},
			{"origen":"زرافة","fonetizacion":"zarafah","castellano":"jirafa","categoria":"palabra","audio": "jirafa"},
			{"origen":"خنزير","fonetizacion":"jinzir","castellano":"cerdo","categoria":"palabra","audio": "cerdo"},
			{"origen":"ناس","fonetizacion":"naas","castellano":"gente","categoria":"palabra","audio": "gente"},
			{"origen":"أناناس","fonetizacion":"ananas","castellano":"piña","categoria":"palabra","audio": "ananas"},
			{"origen":"خيار","fonetizacion":"jiar","castellano":"pepino/opinión","categoria":"palabra","audio": "jiar"},
			{"origen":"مطبخ","fonetizacion":"matbaj","castellano":"cocina","categoria":"palabra","audio": "cocina"},
			{"origen":"أصفر","fonetizacion":"asfar","castellano":"amarillo","categoria":"palabra","audio": "amarillo"},
			{"origen":"رز","fonetizacion":"roz","castellano":"arroz","categoria":"palabra","audio": "arroz"},
			{"origen":"أزرق","fonetizacion":"azraq","castellano":"azul","categoria":"palabra","audio": "azul"},
			{"origen":"جزيرة","fonetizacion":"yazira","castellano":"isla","categoria":"palabra","audio": "isla"},
			{"origen":"موز","fonetizacion":"mouz","castellano":"plátanos","categoria":"palabra","audio": "platano"},
			];
			
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
					document.getElementById("audio").src = "./wav/" + palabra.audio + ".wav";
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
