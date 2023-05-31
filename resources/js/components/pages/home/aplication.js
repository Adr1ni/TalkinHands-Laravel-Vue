export default function application() {
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
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
    'hotdog','huevo','jamon','ketchup','mantequilla','mayonesa','pan','papa','parrillada',
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

  function createSquence(){
    cleanedText = cleanText(noteContent);
    console.log(cleanedText, cleanedText.length)

    for (let i = 0; i < cleanedText.length; i++) {
      const letter = cleanedText[i].toLowerCase();
      const img = new Image();
      if(numbers.has(letter)){
        img.src = `./numbers/${letter}.png`;
      }else if(personas.has(letter)){
        img.src = `./personas/${letter}.png`;
      }else if(letters.has(letter)){
        img.src = `./letters/${letter}.png`; 
      }else if(alimentos.has(letter)){
        img.src = `./alimentos/${letter}.png`; 
      }else if(prendas.has(letter)){
        img.src = `./prendas/${letter}.png`; 
      }else if(ambientes.has(letter)){
        img.src = `./prendas/${letter}.png`; 
      }else if(frutas.has(letter)){
        img.src = `./prendas/${letter}.png`; 
      }else if(juguetes.has(letter)){
        img.src = `./prendas/${letter}.png`; 
      }else if(religion.has(letter)){
        img.src = `./prendas/${letter}.png`; 
      }else if(verbos.has(letter)){
        img.src = `./prendas/${letter}.png`; 
      }else{
        otherWord(letter);
        console.log(cleanedText);
        cleanedText.splice(i, 1);
        i--;
        continue;
      }
      images[letter] = img;
    }
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

  