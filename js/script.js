let contador = 0;
		var palabra = [];
		function generateRandomWord(){
			const palabras = [
			//{"origen":"","fonetizacion":"","castellano":"","categoria":"palabra","audio": ""},
			{"origen":"أنت","fonetizacion":"anta / anti","castellano":"tú (más) / tú (fem)","categoria":"palabra","audio": ""},
			{"origen":"أنا","fonetizacion":"ana","castellano":"yo","categoria":"palabra","audio": ""},
			{"origen":"من","fonetizacion":"man / men","castellano":"quién / de","categoria":"palabra","audio": ""},
			{"origen":"أين","fonetizacion":"aina","castellano":"dónde","categoria":"palabra","audio": ""},
			{"origen":"مدرسة","fonetizacion":"madrasa","castellano":"escuela","categoria":"palabra","audio": ""},
			{"origen":"عشْرة","fonetizacion":"ashrah","castellano":"diez","categoria":"palabra","audio": ""},
			{"origen":"تسعة","fonetizacion":"tisa'ah","castellano":"nueve","categoria":"palabra","audio": ""},
			{"origen":"ثمانية","fonetizacion":"zamaniyah","castellano":"ocho","categoria":"palabra","audio": ""},
			{"origen":"سبعة","fonetizacion":"sa'bah","castellano":"siete","categoria":"palabra","audio": ""},
			{"origen":"ستة","fonetizacion":"sittah","castellano":"seis","categoria":"palabra","audio": ""},
			{"origen":"خمس","fonetizacion":"jams","castellano":"cinco","categoria":"palabra","audio": ""},
			{"origen":"أربع","fonetizacion":"arbah","castellano":"cuatro","categoria":"palabra","audio": ""},
			{"origen":"ثلاثة","fonetizacion":"zalazah","castellano":"tres","categoria":"palabra","audio": ""},
			{"origen":"اثنان","fonetizacion":"iznan","castellano":"dos","categoria":"palabra","audio": ""},
			{"origen":"واحد","fonetizacion":"wahid","castellano":"uno","categoria":"palabra","audio": ""},
			{"origen":"صفر","fonetizacion":"sufr","castellano":"cero","categoria":"palabra","audio": ""},
			{"origen":"وئام","fonetizacion":"wiam","castellano":"armonía","categoria":"palabra","audio": ""},
			{"origen":"مطعم","fonetizacion":"matim","castellano":"restaurante","categoria":"palabra","audio": ""},
			{"origen":"صيف","fonetizacion":"saif","castellano":"verano","categoria":"palabra","audio": ""},
			{"origen":"شتاء","fonetizacion":"shitaa","castellano":"invierno","categoria":"palabra","audio": ""},
			{"origen":"ربيع","fonetizacion":"rabiia","castellano":"primavera","categoria":"palabra","audio": ""},
			{"origen":"خريف","fonetizacion":"jarif","castellano":"otoño","categoria":"palabra","audio": ""},
			{"origen":"أمل","fonetizacion":"amal","castellano":"esperanza","categoria":"palabra","audio": ""},
			{"origen":"عمل","fonetizacion":"aemal","castellano":"trabajo","categoria":"palabra","audio": "trabajo"},
			{"origen":"ملعقة","fonetizacion":"mula'qatin","castellano":"cuchara","categoria":"palabra","audio": ""},
			{"origen":"شك","fonetizacion":"shak","castellano":"duda","categoria":"palabra","audio": ""},
			{"origen":"شوكة","fonetizacion":"shawkatah","castellano":"tenedor/espina","categoria":"palabra","audio": ""},
			{"origen":"سكين","fonetizacion":"sakin","castellano":"cuchillo","categoria":"palabra","audio": ""},
			{"origen":"مسكين","fonetizacion":"miskin","castellano":"pobrecito","categoria":"palabra","audio": ""},
			{"origen":"سُكّر","fonetizacion":"sukar","castellano":"azúcar","categoria":"palabra","audio": ""},
			{"origen":"لسان","fonetizacion":"lisan","castellano":"lengua","categoria":"palabra","audio": ""},
			{"origen":"ليم","fonetizacion":"laim","castellano":"lima","categoria":"palabra","audio": ""},
			{"origen":"سلام","fonetizacion":"salam","castellano":"paz","categoria":"palabra","audio": ""},
			{"origen":"حلال","fonetizacion":"halal","castellano":"halal","categoria":"palabra","audio": ""},
			{"origen":"كيس","fonetizacion":"kis","castellano":"bolsa","categoria":"palabra","audio": ""},
			{"origen":"كلمة","fonetizacion":"kalimah","castellano":"palabra","categoria":"palabra","audio": ""},
			{"origen":"قفل","fonetizacion":"qofl","castellano":"candado","categoria":"palabra","audio": "candado"},
			{"origen":"وقت","fonetizacion":"uaqt","castellano":"tiempo","categoria":"palabra","audio": ""},
			{"origen":"حقيبة","fonetizacion":"haqibah","castellano":"maleta","categoria":"palabra","audio": ""},
			{"origen":"عقل","fonetizacion":"aql","castellano":"mente","categoria":"palabra","audio": ""},
			{"origen":"قمر","fonetizacion":"qamr","castellano":"luna","categoria":"palabra","audio": ""},
			{"origen":"قلم","fonetizacion":"qalm","castellano":"lápiz","categoria":"palabra","audio": ""},
			{"origen":"قلب","fonetizacion":"qalb","castellano":"corazón","categoria":"palabra","audio": "corazon"},
			{"origen":"قصر","fonetizacion":"qasr","castellano":"palacio","categoria":"palabra","audio": ""},
			{"origen":"قلعة","fonetizacion":"qaleah","castellano":"castillo","categoria":"palabra","audio": ""},
			{"origen":"مدرس","fonetizacion":"mudaris","castellano":"profesor/a","categoria":"palabra","audio": ""},
			{"origen":"أكاديمية","fonetizacion":"akadimia","castellano":"academia","categoria":"palabra","audio": ""},
			{"origen":"جوع","fonetizacion":"yue","castellano":"hambre","categoria":"palabra","audio": ""},
			{"origen":"شاورما","fonetizacion":"shawarma","castellano":"shawarma","categoria":"palabra","audio": ""},
			{"origen":"كسكس","fonetizacion":"ksks","castellano":"cuscús","categoria":"palabra","audio": ""},
			{"origen":"أرنب","fonetizacion":"arnab","castellano":"conejo","categoria":"palabra","audio": ""},
			{"origen":"بني","fonetizacion":"buni","castellano":"marrón","categoria":"palabra","audio": ""},
			{"origen":"دجاجة","fonetizacion":"dayaya","castellano":"gallina","categoria":"palabra","audio": ""},
			{"origen":"بقرة","fonetizacion":"baqara","castellano":"vaca","categoria":"palabra","audio": ""},
			{"origen":"حصان","fonetizacion":"hisan","castellano":"caballo","categoria":"palabra","audio": ""},
			{"origen":"الحمد لله","fonetizacion":"alhamd lilah","castellano":"gracias a dios","categoria":"frase","audio": ""},
			{"origen":"انا ذاهب الى المغرب","fonetizacion":"ana dhahib ala almaghrib","castellano":"me voy a Marruecos","categoria":"frase","audio": ""},
			{"origen":"في","fonetizacion":"fi","castellano":"en","categoria":"palabra","audio": ""},
			{"origen":"كيف حالك","fonetizacion":"kayf haluk","castellano":"cómo estás","categoria":"frase","audio": ""},
			{"origen":"باب","fonetizacion":"baab","castellano":"puerta","categoria":"palabra","audio": "puerta"},
			{"origen":"بيت","fonetizacion":"bait","castellano":"casa","categoria":"palabra","audio": "casa"},
			{"origen":"كلب","fonetizacion":"kalb","castellano":"perro","categoria":"palabra","audio": "perro"},
			{"origen":"قطة","fonetizacion":"qita","castellano":"gato","categoria":"palabra","audio": ""},
			{"origen":"زيتون","fonetizacion":"zaytun","castellano":"aceituna","categoria":"palabra","audio": "aceituna"},
			{"origen":"مقبض","fonetizacion":"muqbid","castellano":"grifo","categoria":"palabra","audio": ""},
			{"origen":"ذرة","fonetizacion":"dharaba","castellano":"maiz","categoria":"palabra","audio": ""},
			{"origen":"ذهب","fonetizacion":"dhahab","castellano":"oro","categoria":"palabra","audio": "oro"},
			{"origen":"بارد","fonetizacion":"barid","castellano":"frío","categoria":"palabra","audio": "frio"},
			{"origen":"كتاب","fonetizacion":"kitab","castellano":"libro","categoria":"palabra","audio": "libro"},
			{"origen":"تاج","fonetizacion":"tash","castellano":"corona","categoria":"palabra","audio": "taj"},
			{"origen":"ثوم","fonetizacion":"thum","castellano":"ajo","categoria":"palabra","audio": ""},
			{"origen":"مثال","fonetizacion":"mithal","castellano":"ejemplo","categoria":"palabra","audio": ""},
			{"origen":"أحذية","fonetizacion":"ahdhia","castellano":"zapatos","categoria":"palabra","audio": ""},
			{"origen":"رقم","fonetizacion":"raqm","castellano":"número","categoria":"palabra","audio": ""},
			{"origen":"رمان","fonetizacion":"ruman","castellano":"granadas (fruta)","categoria":"palabra","audio": ""},
			{"origen":"رسالة","fonetizacion":"risalah","castellano":"mensaje","categoria":"palabra","audio": "mensaje"},
			{"origen":"جار","fonetizacion":"yaar","castellano":"vecino","categoria":"palabra","audio": ""},
			{"origen":"رجل","fonetizacion":"rayul","castellano":"hombre","categoria":"palabra","audio": ""},
			{"origen":"زجاج","fonetizacion":"zuyash","castellano":"vidrio","categoria":"palabra","audio": ""},
			{"origen":"حب","fonetizacion":"hab","castellano":"amor","categoria":"palabra","audio": "amor"},
			{"origen":"حرب","fonetizacion":"harb","castellano":"guerra","categoria":"palabra","audio": "guerra"},
			{"origen":"حبيبي","fonetizacion":"habibi","castellano":"mi amor","categoria":"palabra","audio": "habibi"},
			{"origen":"لحمة","fonetizacion":"luhma","castellano":"carne","categoria":"palabra","audio": ""},
			{"origen":"جميل","fonetizacion":"yamil","castellano":"bonito","categoria":"palabra","audio": "jamil"},
			{"origen":"آسف","fonetizacion":"asf","castellano":"perdón","categoria":"palabra","audio": ""},
			{"origen":"شكرا","fonetizacion":"shkran","castellano":"gracias","categoria":"palabra","audio": ""},
			{"origen":"أسود","fonetizacion":"aswad","castellano":"negro","categoria":"palabra","audio": ""},
			{"origen":"صباح الخير","fonetizacion":"sabah aljayr","castellano":"buenos dias","categoria":"frase","audio": ""},
			{"origen":"مساء الخير","fonetizacion":"masa aljayr","castellano":"buenas tardes","categoria":"frase","audio": ""},
			{"origen":"مرحبا","fonetizacion":"marhaban","castellano":"hola","categoria":"palabra","audio": ""},
			{"origen":"خبز","fonetizacion":"jubz","castellano":"pan","categoria":"palabra","audio": ""},
			{"origen":"تفاح","fonetizacion":"tufaah","castellano":"manzanas","categoria":"palabra","audio": ""},
			{"origen":"ملِك","fonetizacion":"mlik","castellano":"rey","categoria":"palabra","audio": "rey"},
			{"origen":"أحمر","fonetizacion":"ahmar","castellano":"rojo","categoria":"palabra","audio": "rojo"},
			{"origen":"أخضر","fonetizacion":"ajdar","castellano":"verde","categoria":"palabra","audio": "verde"},
			{"origen":"أبيض","fonetizacion":"abyad","castellano":"blanco","categoria":"palabra","audio": ""},
			{"origen":"أب","fonetizacion":"ab","castellano":"padre","categoria":"palabra","audio": ""},
			{"origen":"الأم","fonetizacion":"alumu","castellano":"madre","categoria":"palabra","audio": ""},
			{"origen":"جد","fonetizacion":"yd","castellano":"abuelo","categoria":"palabra","audio": "jd"},
			{"origen":"جدة","fonetizacion":"yidah","castellano":"abuela","categoria":"palabra","audio": "jidah"},
			{"origen":"أخ","fonetizacion":"aj","castellano":"hermano","categoria":"palabra","audio": ""},
			{"origen":"أخت","fonetizacion":"ujt","castellano":"hermana","categoria":"palabra","audio": ""},
			{"origen":"زيت","fonetizacion":"zayt","castellano":"aceite","categoria":"palabra","audio": "aceite"},
			{"origen":"حمامة","fonetizacion":"hamama","castellano":"paloma","categoria":"palabra","audio": "paloma"},
			{"origen":"أسد","fonetizacion":"asad","castellano":"león","categoria":"palabra","audio": ""},
			{"origen":"سرير","fonetizacion":"sarir","castellano":"cama","categoria":"palabra","audio": ""},
			{"origen":"سعيد","fonetizacion":"saeid","castellano":"feliz","categoria":"palabra","audio": ""},
			{"origen":"سماء","fonetizacion":"sama","castellano":"cielo","categoria":"palabra","audio": ""},
			{"origen":"ماء","fonetizacion":"ma","castellano":"agua","categoria":"palabra","audio": ""},
			{"origen":"توت","fonetizacion":"tuwt","castellano":"frambuesas","categoria":"palabra","audio": ""},
			{"origen":"زرافة","fonetizacion":"zarafah","castellano":"girafa","categoria":"palabra","audio": ""},
			{"origen":"خنزير","fonetizacion":"jinzir","castellano":"cerdo","categoria":"palabra","audio": ""},
			{"origen":"ناس","fonetizacion":"naas","castellano":"gente","categoria":"palabra","audio": ""},
			{"origen":"أناناس","fonetizacion":"ananas","castellano":"piña","categoria":"palabra","audio": "ananas"},
			{"origen":"خيار","fonetizacion":"jiar","castellano":"pepino/opinión","categoria":"palabra","audio": "jiar"},
			{"origen":"مطبخ","fonetizacion":"matbaj","castellano":"cocina","categoria":"palabra","audio": ""},
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