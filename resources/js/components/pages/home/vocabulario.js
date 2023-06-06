export default function search(){
    
  const vocabulario = new Set([
    '0', '1', '10', '100', '1000', '11', '12', '13', '14', '15', '2', '20', '21', '26', '3', '30', '31', '4',
    '40', '5', '50', '6', '60', '61', '7', '8', '9', 'abandonar', 'abogado', 'abrazar', 'abrigar', 'abril','abrir',
    'abuela', 'abuelo', 'acariciar', 'access', 'aceitunas', 'aceptar', 'aceptar', 'acompañar', 'acostumbrar', 
    'adelgazar', 'adinerado', 'adorar', 'adulto', 'aeropuerto', 'afeitar', 'agarrar', 'agosto', 'agradecer', 
    'aguantar', 'ahora', 'aire', 'ajedrez', 'albañil', 'alegre', 'aleluya', 'alemania', 'alineacion', 'alma', 
    'almohada', 'altar', 'alto', 'amanecer', 'amargo', 'amarillo', 'amarrar', 'amazonas', 'amen', 'amigo', 'amor',
    'américa', 'anaranjado', 'ancash', 'anillo', 'antes', 'antipático', 'antiuchos', 'apagar', 'aplaudir', 'aprender', 
    'apurar', 'apóstol', 'araña', 'arbito', 'archivo', 'aretes', 'argentina', 'arrepentida', 'arroz', 'arruinar', 
    'arte', 'ascensión', 'asustado', 'atardecer', 'ate', 'aterrizar', 'atletismo', 'audífono', 'aumentar', 'autoformato', 'automovilismo', 
    'avenida', 'avergonzar', 'avión', 'ayacucho', 'ayer', 'ayudar', 'azucar', 'azul', 'año', 'bailar', 
    'bajo', 'barrer', 'basura', 'bautizo', 'bañar', 'baño', 'beber', 'bebé', 'bendecir', 'besar', 'biblia',
    'bien', 'blanco', 'blando', 'blusa', 'bolivia', 'bombero', 'bonita', 'borrador', 'borrar', 'botar', 
    'botella', 'boxeo', 'brasil', 'brillo', 'bueno', 'burro', 'buscar', 'básquet', 'búho', 'caballo', 'caer', 
    'caja', 'cajamarca', 'calculadora', 'calcular', 'callado', 'callao', 'callar', 'calmar', 'calor', 'calzon', 
    'calzoncillo', 'cama', 'cambiar', 'caminar', 'camisa', 'canadá', 'cancelar', 'cansado', 'cantar', 'capitán', 
    'capítulo', 'caramelo', 'carne', 'carne_de_pescado', 'caro', 'carpintero', 'cartera', 'casa', 'casa', 'castigar',
    'católica', 'causa', 'celeste', 'celoso', 'cementerio', 'cepillo', 'cerca', 'cerrado', 'cerrar', 'cerrar', 
    'ceviche', 'chaleco', 'chalina', 'champu', 'chancho', 'chiclayo', 'chile', 'china', 'chismoso', 'chocar', 
    'chofer', 'chompa', 'chorizo', 'chorrillos', 'chosica', 'chullo', 'ciclismo', 'cielo', 'ciencia', 'ciruela', 
    'claro', 'clase', 'clavar', 'clóset', 'cobarde', 'cobrar', 'cocina', 'cocinar', 'coco', 'cocodrilo', 'coger',
    'colcha', 'colchón', 'colegio', 'colegio', 'colgar', 'collar', 'colombia', 'colores', 'columna', 'comando',
    'comas', 'comedor', 'comentario', 'comer', 'comisaría', 'comprar', 'comprender', 'computación', 'computadora',
    'con', 'conejo', 'confesar', 'configuración', 'confirmación', 'contento', 'continuar', 'contraseña', 'copiar',
    'corbata', 'correa', 'correo', 'correos', 'cortar', 'cortar', 'corto', 'coser', 'crecer', 'creer', 'creer',
    'cruz', 'cruzar', 'cuaderno', 'cuadrado', 'cualquier', 'cuba', 'cubo', 'cuchara', 'cucharón', 'cuchillo',
    'culebra', 'cumpleaños', 'curiosear', 'cursiva', 'cursor', 'cusco', 'cuñado', 'cárcel', 'cóndor', 'dados',
    'dar', 'de', 'decir', 'dejar', 'delante', 'dentista', 'dentro', 'desodorante', 'despacio', 'despertar',
    'detras', 'diablo', 'dialogar', 'dibujante', 'dibujar', 'diccionario', 'diciembre', 'diferente', 'dios',
    'diploma', 'director', 'diskettera', 'divertido', 'doctor', 'doler', 'domingo', 'dormir', 'dormitorio',
    'ducha', 'dulce', 'durazno', 'día', 'ecuardor', 'edificio', 'egipto', 'egoísta', 'el', 'electricista',
    'elefante', 'ella', 'ellas', 'ellos', 'empezar', 'empujar', 'enamorado', 'encabezado', 'encima',
    'enero', 'enfermo', 'ensalada', 'enseñar', 'entrar', 'entre', 'envolver', 'equibocar', 'escape',
    'escoba', 'escoger', 'escribir', 'escuchar', 'ese', 'españa', 'espejo', 'esperar', 'esposa',
    'esposo', 'estaciones', 'estadio', 'estadio', 'estilo', 'estudiante', 'estudioso', 'europa', 'evangélica', 
    'examen', 'excel', 'explicar', 'falda', 'falso', 'falta', 'familia', 'fe', 'febrero', 'feliz', 'feo', 'feriado', 
    'filas', 'filtro', 'firmar', 'flaco', 'flecha', 'formato', 'formulario', 'francia', 'frazada', 'fresas', 'fresco', 
    'fresco', 'frijoles', 'frío', 'fuente', 'fuerte', 'fumador', 'fumar', 'funda', 'futuro', 'fábrica', 'fácil', 
    'fólder', 'fútbol', 'galleta', 'gallina', 'gallo', 'ganar', 'gastar', 'gato', 'gelatina', 'geografía', 'gloria', 
    'golpear', 'goma', 'gordo', 'gorro', 'gracia', 'gracioso', 'grande', 'gritón', 'guantes', 'guardar', 'guardar', 
    'guión', 'gusano', 'gustar', 'hacia', 'hamburguesa', 'hardware', 'helado', 'hermana', 'hija', 'hijo', 
    'hipervinculo', 'historia', 'holanda', 'hombre', 'hora', 'horno', 'hospital', 'hotdog', 'hoy', 'huancavelica',
    'huancayo', 'huevo', 'huánuco', 'húmedo', 'ica', 'icono', 'iglesia', 'igual', 'imagen', 'importante', 
    'impresora', 'india', 'infierno', 'ingeniero', 'ingeniero', 'inglaterra', 'inicial', 'inicio', 'intercambiar', 
    'internet', 'inventar', 'invierno', 'iquitos', 'italia', 'jabón', 'jamón', 'jardinero', 'jardinero', 'jardín', 
    'jesús', 'jirafa', 'joven', 'judío', 'jueves', 'juez', 'juez', 'jugador', 'jugar', 'julio', 'junio', 'junto', 
    'justificado', 'ketchup', 'la', 'lapicero', 'largo', 'lavandería', 'lavar', 'leer', 'lenguaje', 'león', 'libreta',
    'libro', 'licuado', 'lima', 'limpiar', 'limpio', 'limón', 'llama', 'llave', 'llegar', 'lleno', 'llevar', 'llorar',
    'llover', 'lluvia', 'lo', 'loco', 'loro', 'los', 'lunes', 'luz', 'lámpara', 'lápiz', 'línea', 'maleta', 'malo', 
    'mamá', 'mandamiento', 'mandar', 'mandarina', 'mandil', 'manejar', 'mango', 'mantel', 'mantequilla', 'manzana', 
    'mar', 'marearse', 'margen', 'mariposa', 'marrón', 'martes', 'marzo', 'matemática', 'matrimonio', 'maximizar', 
    'mayo', 'mayonesa', 'mayuscula', 'mañana', 'mecánico', 'medias', 'medir', 'mejor', 'memorizar', 'mentiroso', 
    'mes', 'mesa', 'mi', 'microsoft', 'milagro', 'minuto', 'minúscula', 'miraflores', 'misa', 'misionero', 'miércoles',
    'mochila', 'molesto', 'monitor', 'mono', 'montar', 'montaña', 'morado', 'morder', 'morir', 'mosca', 'mota', 
    'motociclismo', 'mouse', 'mucho', 'mujer', 'multiplicar', 'mundo', 'municipalidad', 'muñeca', 'máximo', 'méxico',
    'mínimo', 'mío', 'nacer', 'nada', 'naranja', 'navidad', 'neblina', 'necesitar', 'negrita', 'negro', 'nervioso', 
    'nieto', 'nieve', 'niñera', 'niños', 'noche', 'nosotros', 'nota', 'nube', 'nuevo', 'nunca', 'obedecer', 'obispo',
    'obligar', 'observar', 'oceanía', 'octubre', 'ofrenda', 'ola', 'olla', 'olvidar', 'operar', 'ordenar', 'ordernar',
    'oscuro', 'oso', 'otoño', 'otro', 'oveja', 'paciencia', 'paint', 'palta', 'pan', 'pantalla', 'pantalon', 'papa', 
    'papa', 'papaya', 'papel', 'papá', 'paraguay', 'pared', 'parguas', 'parrillada', 'paréntesis', 'pasado', 'pastor', 
    'pato', 'pavo', 'país', 'pañuelo', 'pecado', 'peine', 'pelota', 'pensar', 'pequeño', 'pera', 'perder', 'perdonar',
    'perro', 'perseguir', 'persona', 'perú', 'pesado', 'pesca', 'pescado', 'piedra', 'pijama', 'ping', 'pintar', 
    'pistola', 'pizarra', 'piña', 'planchar', 'platano', 'plato', 'plomo', 'plumones', 'pobre', 'pollo', 'polo', 
    'poncho', 'por', 'practicar', 'preocupado', 'presidente', 'primaria', 'primavera', 'primo', 'profesora', 
    'programa', 'promedio', 'próximo', 'puerta', 'puno', 'puntero', 'punto', 'página', 'pájaro', 'querer', 
    'queso', 'quitar', 'radio', 'rayo', 'rebalar', 'recodar', 'red', 'redondo', 'refrigeradora', 'regla', 'reglamento', 
    'regleta', 'regresar', 'reja', 'religión', 'reloj', 'respetar', 'respirar', 'restaurant', 'resurrección', 'rezar',
    'rezar', 'rico', 'rimac', 'robar', 'rojo', 'romper', 'rosado', 'rusia', 'rápido', 'río', 'sabado', 'saber', 'sacerdote',                
    'sacerdote', 'saco', 'sacramento', 'sal', 'sala', 'salir', 'saltar', 'saludar', 'salvación', 'sandwich', 'sangría',
    'sapo', 'sartén', 'sastre', 'seco', 'secretaria', 'secundaria', 'sediento', 'seleccionar', 'semana', 'sentarse', 
    'sentir', 'septiembre', 'servilleta', 'short', 'si', 'siempre', 'significar', 'silla', 'sobrina', 'sobrino', 'software',
    'sofá', 'soga', 'sol', 'solamente', 'soldado', 'solo', 'soltera', 'soltero', 'sombreado', 'sombrero', 'sonreir', 
    'sopa', 'sorprendido', 'sosten', 'soñar', 'suave', 'subir', 'subrayado', 'sucio', 'surco', 'sábana', 'tabular', 
    'tacaño', 'tacna', 'tajador', 'talco', 'tallarines', 'tamal', 'tamaño', 'tambor', 'tampoco', 'tarea', 'techo', 
    'teclado', 'telefonear', 'televisor', 'teléfono', 'temprano', 'tenedor', 'tenis', 'tentación', 'terminar', 
    'terremoto', 'texto', 'tierra', 'timbre', 'tirar', 'tiza', 'toalla', 'tonto', 'toro', 'torpe', 'torta', 'tortilla', 'tortuga', 
    'tranquilo', 'tren', 'triste', 'trompo', 'trujillo', 'tumbes', 'tía', 'tío', 'tú', 'ucayali', 'un', 'una', 'uniforme', 'universidad', 
    'universo', 'uruguay', 'ustedes', 'vaca', 'vacaciones', 'vaso', 'vecino', 'venezuela', 'ventana', 'verano', 'verdad', 'verde', 'vergonzoso', 
    'vestido', 'viejo', 'viernes', 'vincha', 'visitar', 'vivir', 'vocabulario', 'volar', 'voleybol', 'windows', 'y', 'yases', 'yo', 
    'zancudo', 'zapatilla', 'zapatos', 'zorro', 'áfrica', 'ágil', 'ángel', 'árbol', 'él'
  ])

  class Node {
    constructor(data) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }
    
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    search(key) {
      return this.searchNode(this.root, key);
    }
  
    searchNode(node, key) {
      if (node === null || node.data === key) {
        return node;
      }
  
      if (key < node.data) {
        return this.searchNode(node.left, key);
      }
  
      return this.searchNode(node.right, key);
    }
  }
    
  const bst = new BinarySearchTree();
  
  vocabulario.forEach(word => bst.insert(word));

  function searchWord(word) {
    const node = bst.search(word);
    return node !== null ? node.data : null;
  }

  return{
    searchWord
  }
}
