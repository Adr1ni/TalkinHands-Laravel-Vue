export default function application() {
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const acciones_temporales = new Set([
    'abril','agosto','ahora','amanecer','año','antes','atardecer','ayer','cumpleaños','día',
    'diciembre','domingo','enero','estaciones','febrero','feriado','futuro','hora','hoy','invierno',
    'jueves','julio','junio','lunes','mañana','martes','marzo','mayo','mes','miércoles','minuto',
    'navidad','noche','nunca','octubre','otoño','pasado','primavera','próximo','sabado','semana',
    'septiembre','temprano','vacaciones','verano','viernes'
  ]);

  const colegio = new Set([
    'amarillo','anaranjado','arte','audífono','azul','blanco','borrador','celeste','ciencia','clase',
    'colegio','colores','computadora','cuaderno','diccionario','diploma','examen','fólder','geografía',
    'goma','historia','inicial','lapicero','lápiz','lenguaje','libreta','libro','marrón','matemática',
    'mochila','morado','mota','negro','nota','papel','pizarra','plomo','plumones','primaria','regla',
    'rojo','rosado','secundaria','tajador','tarea','tiza','universidad','verde'
  ]);
  
  const numbers = new Set([
    '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'
    ,'20','21','26','30','31','40','50','60','61','100','1000'
  ]);
  const personas = new Set([
    'abuela','abuelo','adulto','amigo','bebé','cuñado','esposa','esposo',
    'estudiante','familia','hermana','hija','hijo','hombre','joven','mamá',
    'mujer','nieto','niños','papá','persona','primo','sobrina','sobrino',
    'soltera','soltero','tía','tío','vecino']);

  const letters = new Set([
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r',
    's','t','u','v','w','x','y','z']);

  const alimentos = new Set([
    'aceitunas','antiuchos','arroz','azucar','caramelo','carne_de_pescado','carne','causa',
    'ceviche','chorizo','ensalada','frijoles','galleta','gelatina','hamburguesa','helado',
    'hotdog','huevo','jamón','ketchup','mantequilla','mayonesa','pan','papa','parrillada',
    'queso','sal','sandwich','sopa','tallarines','tamal','torta','tortilla']);

  const prendas = new Set([
    'anillo','aretes','blusa','calzon','calzoncillo','camisa','cartera','chaleco','chalina',
    'chompa','chullo','collar','corbata','correa','falda','gorro','guantes','maleta','mandil',
    'medias','pantalon','pañuelo','parguas','pijama','polo','poncho','reloj','saco','short',
    'sombrero','sosten','uniforme','vestido','vincha','zapatilla','zapatos']);
    
  const frutas = new Set([
    'ciruela','coco','durazno','fresas','limón','mandarina','mango','manzana','naranja','palta',
    'papaya','pera','piña','platano'
  ]);

  const juguetes = new Set([
    'ajedrez','arbito','atletismo','automovilismo','avión','básquet','boxeo','capitán','ciclismo',
    'cubo','dados','estadio','fútbol','jugador','motociclismo','muñeca','pelota','pesca','ping'
    ,'pistola','reglamento','soga','soldado','tambor','tenis','tren','trompo','voleybol','yases'
  ]);

  const religion = new Set([
    'adorar','aleluya','alma','altar','amen','amor','ángel','apóstol','arrepentida','ascensión',
    'bautizo','bendecir','biblia','capítulo','católica','cielo','confirmación','creer','cruz',
    'diablo','dios','evangélica','fe','gloria','gracia','imagen','infierno','jesús','judío',
    'mandamiento','matrimonio','milagro','misa','misionero','obispo','ofrenda','papa','pastor',
    'pecado','religión','resurrección','rezar','sacerdote','sacramento','salvación','tentación'
  ])

  const verbos = new Set([
    'abandonar','abrazar','abrigar','acariciar','aceptar','acompañar','acostumbrar','adelgazar',
    'afeitar','agarrar','agradecer','aguantar','amarrar','apagar','aplaudir','aprender','apurar',
    'arruinar','aterrizar','aumentar','avergonzar','ayudar','bailar','bañar','barrer','beber','besar',
    'borrar','botar','buscar','caer','calcular','callar','calmar','cambiar','caminar','cantar','castigar',
    'cerrar','chocar','clavar','cobrar','cocinar','coger','colgar','comer','comprar','comprender','confesar',
    'continuar','copiar','cortar','coser','crecer','creer','cruzar','curiosear','dar','decir','dejar',
    'despertar','dialogar','dibujar','doler','dormir','empezar','empujar','enseñar','entrar','envolver',
    'equibocar','escoger','escribir','escuchar','esperar','explicar','firmar','fumar','ganar','gastar',
    'golpear','guardar','gustar','intercambiar','inventar','jugar','lavar','leer','limpiar','llegar',
    'llevar','llorar','llover','mandar','manejar','marearse','medir','memorizar','montar','morder','morir',
    'multiplicar','nacer','necesitar','obedecer','obligar','observar','olvidar','operar','ordernar','pensar',
    'perder','perdonar','perseguir','pintar','planchar','practicar','querer','quitar','recodar','rebalar',
    'respetar','respirar','rezar','robar','romper','saber','salir','saltar','saludar','sentarse','sentir',
    'significar','soñar','sonreir','subir','telefonear','terminar','tirar','visitar','vivir','volar'
  ])

  const adjetivos = new Set([
    'adinerado','ágil','alegre','alto','amargo','antipático','asustado',
    'bajo','bien','blando','bonita','brillo','bueno','callado','cansado','caro','celoso','cerrado','chismoso','claro',
    'cobarde','contento','corto','cuadrado','cualquier','despacio','diferente','divertido','dulce','egoísta','enamorado'
    ,'enfermo','estudioso','fácil','falso','falta','feliz','feo','flaco','fresco','frío','fuerte','fumador','gordo',
    'gracioso','grande','gritón','húmedo','igual','importante','largo','limpio','lleno','loco','malo','mejor','mentiroso',
    'mío','molesto','nervioso','oscuro','otro','paciencia','pequeño','pesado','pobre','preocupado','rápido','redondo',
    'rico','seco','sediento','sorprendido','suave','sucio','tacaño','tonto','torpe','tranquilo','triste','vergonzoso'
    ,'viejo'
  ]);
  const adverbios = new Set([
    'cerca','con','de','delante','dentro','detras','encima','entre','ese','hacia','junto','mucho',
    'nada','por','si','siempre','solamente','solo','tampoco','verdad','y'
  ]);
  const paises = new Set([
    'áfrica','alemania','américa','argentina','bolivia','brasil','canadá','chile','china','colombia',
    'cuba','ecuardor','egipto','españa','europa','francia','holanda','india','inglaterra','italia','méxico',
    'oceanía','país','paraguay','perú','rusia','uruguay','venezuela'
  ])
  const animales = new Set([
    'araña','bombero','búho','burro','caballo','chancho','chofer','cocodrilo','cóndor','conejo','culebra',
    'elefante','gallina','gallo','gato','gusano','jirafa','león','llama','loro','mariposa','mono','mosca','niñera',
    'oso','oveja','pájaro','pato','pavo','perro','pescado','pollo','sapo','toro','tortuga','vaca','zancudo','zorro'
  ])
  const profesiones = new Set([
    'abogado','albañil','carpintero','ingeniero','jardinero','juez','dentista','dibujante','director','doctor',
    'electricista','ingeniero','jardinero','juez','mecánico','presidente','profesora','sacerdote',
    'sastre','secretaria'
  ])
  const lugares = new Set([
    'aeropuerto','amazonas','ancash','ate','avenida','ayacucho',
    'cajamarca','callao','cárcel','casa','cementerio','chiclayo','chorrillos','chosica','colegio','comas','comisaría','correos',
    'cusco','edificio','estadio','fábrica','hospital','huancavelica','huancayo','huánuco','ica','iglesia','iquitos','lima',
    'miraflores','municipalidad','puno','restaurant','rimac','surco','tacna','trujillo','tumbes','ucayali'
  ])
  const pronombre_personales = new Set([
    'el','él','ella','ellas','ellos','guión','la','lo','los','mi','nosotros','paréntesis','punto',
    'subrayado','tú','un','una','ustedes','yo'
  ])

  const ambientes = new Set([
    'almohada','baño','basura','botella','caja','cama','casa','cepillo','champu','clóset','cocina','colcha','colchón','comedor','cuchara','cucharón','cuchillo','desodorante','dormitorio','ducha','escoba','espejo',
    'frazada','funda','horno','jabón','jardín','lámpara','lavandería','licuado','llave','mantel','mesa','olla','pared','peine',
    'plato','puerta','radio','refrigeradora','reja','sábana','sala','sartén','servilleta','silla','sofá','talco','techo','teléfono','televisor',
    'tenedor','timbre','toalla','vaso'
  ]);

  const naturaleza = new Set([
    'aire','árbol','calor','fresco','lluvia','luz','mar','montaña','mundo','neblina','nieve','nube','ola',
    'piedra','rayo','río','sol','terremoto','tierra','universo'
  ]);

const imagePaths = {
  numbers: './numbers/',
  personas: './personas/',
  letters: './letters/',
  alimentos: './alimentos/',
  prendas: './prendas/',
  ambientes: './ambientes/',
  frutas: './frutas/',
  juguetes: './juguetes/',
  religion: './religion/',
  verbos: './verbos/',
  adjetivos: './adjetivos/',
  profesiones: './Animales/',
  animales :'./Animales/',
  adverbios: './advervios_prepocisiones/',
  pronombres_personales: './pronombres_personales/',
  paises: './países_lugares/',
  letters : './letters/',
};


  let noteContent = '';
  let cleanedText = [];
  let images = {};
  let currentImageIndex = 0;

  const recognitionInstance = new recognition();
  recognitionInstance.continuous = true;

  recognitionInstance.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    const mobileRepeatBug = current === 1 && transcript === event.results[0][0].transcript;

    if (!mobileRepeatBug) {
      noteContent += transcript;
    }
  };

  const startRecording = () => {
    if (noteContent.length) {
      noteContent += ' ';
    }
    recognitionInstance.start();
  };

  const stopRecording = () => {
    recognitionInstance.stop();
  };

  function cleanText(text) {
    return text.split(' ');
  }

  function otherWord(text){
    const word = text.split('');
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
      cleanedText.push(letter);
      const img = new Image();
      img.src = `./letters/${letter}.png`;
      images[letter] = img;
    }
  }

  //problemas con paises,lugares

  function createSquence(){
    cleanedText = cleanText(noteContent);
    console.log(cleanedText, cleanedText.length)

    for (let i = 0; i < cleanedText.length; i++) {
      const letter = cleanedText[i].toLowerCase();
      if(numbers.has(letter)){
        createImage(letter, 'numbers');
      }else if(personas.has(letter)){
        createImage(letter, 'personas');
      }else if(alimentos.has(letter)){
        createImage(letter, 'alimentos')
      }else if(prendas.has(letter)){
        createImage(letter, 'prendas') 
      }else if(ambientes.has(letter)){
        createImage(letter, 'ambientes') 
      }else if(frutas.has(letter)){
        createImage(letter, 'frutas') 
      }else if(juguetes.has(letter)){
        createImage(letter,'juguetes') 
      }else if(religion.has(letter)){
        createImage(letter, 'religion')
      }else if(verbos.has(letter)){
        createImage(letter,'verbos') 
      }else if(adjetivos.has(letter)){
        createImage(letter, 'adjetivos');
      }else if(adverbios.has(letter)){
        createImage(letter, 'adverbios') 
      }else if(paises.has(letter)){
        createImage(letter, 'paises') 
      }else if(profesiones.has(letter)){
        createImage(letter, 'profesiones') 
      }else if(lugares.has(letter)){
        createImage(letter, 'paises'); 
      }else if(pronombre_personales.has(letter)){
        createImage(letter, 'pronombres_personales') 
      }else if(animales.has(letter)){
        createImage(letter, 'animales') 
      }else if(letters.has(letter)){
        createImage(letter, 'letters') 
      }else{
        otherWord(letter);
        console.log(cleanedText);
        cleanedText.splice(i, 1);
        i--;
        continue;
      }
    }
  }

  function createImage(letter, category) {
    const img = new Image();
    console.log(letter)
    img.src = `${imagePaths[category]}${letter}.png`;
    images[letter] = img;
  }

  function generateImages() {
    createSquence();
    document.getElementById('mainImage').src = images[cleanedText[currentImageIndex]].src;
  }

  function showImages() {
    currentImageIndex = (currentImageIndex + 1) % cleanedText.length;
    document.getElementById('mainImage').src = images[cleanedText[currentImageIndex]].src;
  }

  return {
    showImages,
    generateImages,
    stopRecording,
    startRecording,
  };
}

  