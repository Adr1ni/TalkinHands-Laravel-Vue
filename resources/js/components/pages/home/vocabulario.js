export default function search(){
    
  const vocabulario = new Set([
  'hotdog', 'cocina', 'avión', 'ahora', '9', '26', '12', '100', '1', '0', '10', '11', '1000', 
  '2', '14', '13', '15', '21', '20', '50', '4', '30', '3', '31', '5', '40', '61', '60', '6',
  '8', '7', 'aceptar', 'abuela', 'abrigar', 'abogado', 'abandonar', 'abrazar', 'abrir', 'abril', 
  'access', 'acariciar', 'abuelo', 'aceptar', 'aceitunas', 'aeropuerto', 'adinerado', 'acostumbrar', 
  'acompañar', 'adelgazar', 'adulto', 'adorar', 'agosto', 'agarrar', 'afeitar', 'aguantar', 'agradecer', 
  'apagar', 'amarillo', 'alineacion', 'alegre', 'ajedrez', 'aire', 'albañil', 'alemania', 'aleluya', 
  'alto', 'almohada', 'alma', 'altar', 'amargo', 'amanecer', 'anaranjado', 'amigo', 'amazonas', 'amarrar', 
  'amen', 'américa', 'amor', 'antes', 'anillo', 'ancash', 'antiuchos', 'antipático', 'arte', 'archivo', 'apóstol', 
  'aprender', 'aplaudir', 'apurar', 'arbito', 'araña', 'arrepentida', 'argentina', 'aretes', 'arruinar', 'arroz', 
  'audífono', 'ate', 'asustado', 'ascensión', 'atardecer', 'atletismo', 'aterrizar', 'automovilismo', 'autoformato', 
  'aumentar', 'avergonzar', 'avenida', 'caminar', 'borrar', 'beber', 'bailar', 'azucar', 'ayer', 'ayacucho', 
  'ayudar', 'año', 'azul', 'bautizo', 'barrer', 'bajo', 'basura', 'baño', 'bañar', 'blando', 'biblia', 'bendecir', 
  'bebé', 'besar', 'blanco', 'bien', 'bombero', 'bolivia', 'blusa', 'borrador', 'bonita', 'caja', 'burro', 'brasil', 
  'botella', 'botar', 'boxeo', 'bueno', 'brillo', 'búho', 'básquet', 'buscar', 'caer', 'caballo', 'calmar', 'callado', 
  'calculadora', 'cajamarca', 'calcular', 'callar', 'callao', 'calzoncillo', 'calzon', 'calor', 'cambiar', 'cama', 
  'ceviche', 'casa', 'capítulo', 'cansado', 'canadá', 'camisa', 'cancelar', 'capitán', 'cantar', 'caro', 'carne', 'caramelo', 
  'carne_de_pescado', 'cartera', 'carpintero', 'cementerio', 'causa', 'castigar', 'casa', 'católica', 'celoso', 'celeste', 'cerrado', 
  'cerca', 'cepillo', 'cerrar', 'cerrar', 'chorrillos', 'china', 'chancho', 'chalina', 'chaleco', 'champu', 'chile', 'chiclayo', 
  'chofer', 'chocar', 'chismoso', 'chorizo', 'chompa', 'claro', 'cielo', 'chullo', 'chosica', 'ciclismo', 'ciruela', 'ciencia', 'clóset', 
  'clavar', 'clase', 'cobrar', 'cobarde', 'empezar', 'cuchillo', 'configuración', 'comando', 'colegio', 'coger', 'coco', 'cocinar', 
  'cocodrilo', 'colchón', 'colcha', 'colombia', 'colgar', 'colegio', 'collar', 'columna', 'colores', 'comprender', 'comer', 'comedor', 
  'comas', 'comentario', 'comprar', 'comisaría', 'con', 'computadora', 'computación', 'confesar', 'conejo', 'coser', 'correa', 'contraseña', 
  'contento', 'confirmación', 'continuar', 'corbata', 'copiar', 'cortar', 'correos', 'correo', 'corto', 'cortar', 'cuadrado', 'cruz', 'creer', 
  'crecer', 'creer', 'cuaderno', 'cruzar', 'cubo', 'cuba', 'cualquier', 'cucharón', 'cuchara', 'diciembre', 'dejar', 'cuñado', 'cursiva', 'cumpleaños', 
  'culebra', 'curiosear', 'cusco', 'cursor', 'dar', 'cóndor', 'cárcel', 'dados', 'decir', 'de', 'detras', 'desodorante', 'dentista', 'delante', 
  'dentro', 'despertar', 'despacio', 'dibujante', 'dialogar', 'diablo', 'diccionario', 'dibujar', 'dulce', 'doctor', 'director', 'dios', 'diferente',
  'diploma', 'divertido', 'diskettera', 'dormir', 'domingo', 'doler', 'ducha', 'dormitorio', 'el', 'edificio', 'día', 'durazno', 'ecuardor', 
  'egoísta', 'egipto', 'ella', 'elefante', 'electricista', 'ellos', 'ellas', 'fresas', 'estilo', 'escoba', 'ensalada', 'encima', 'enamorado', 
  'empujar', 'encabezado', 'enfermo', 'enero', 'envolver', 'entrar', 'enseñar', 'entre', 'escape', 'equibocar', 'esperar', 'ese', 'escribir', 'escoger', 
  'escuchar', 'espejo', 'españa', 'estaciones', 'esposo', 'esposa', 'estadio', 'estadio', 'febrero', 'explicar', 'evangélica', 'estudioso', 'estudiante', 
  'europa', 'excel', 'examen', 'falta', 'falso', 'falda', 'fe', 'familia', 'flaco', 'filas', 'feo', 'feliz', 'feriado', 'firmar', 'filtro', 'formulario', 
  'formato', 'flecha', 'frazada', 'francia', 'gordo', 'fólder', 'fumador', 'frío', 'fresco', 'fresco', 'frijoles', 'fuerte', 'fuente', 'futuro', 'funda', 
  'fumar', 'fácil', 'fábrica', 'gato', 'gallo', 'galleta', 'fútbol', 'gallina', 'gastar', 'ganar', 'gloria', 'geografía', 'gelatina', 'goma', 'golpear', 
  'hamburguesa', 'guardar', 'grande', 'gracia', 'gorro', 'gracioso', 'guantes', 'gritón', 'gusano', 'guión', 'guardar', 'hacia', 'gustar', 'historia', 'hija', 
  'helado', 'hardware', 'hermana', 'hipervinculo', 'hijo', 'hora', 'hombre', 'holanda', 'hospital', 'horno', 'perro', 'medir', 'león', 'jabón', 'india', 'ica', 
  'huevo', 'huancavelica', 'hoy', 'huancayo', 'húmedo', 'huánuco', 'imagen', 'iglesia', 'icono', 'igual', 'impresora', 'importante', 'intercambiar', 'inglaterra', 
  'ingeniero', 'infierno', 'ingeniero', 'inicio', 'inicial', 'invierno', 'inventar', 'internet', 'italia', 'iquitos', 'jugar', 'joven', 'jardín', 'jardinero', 'jamón', 
  'jardinero', 'jirafa', 'jesús', 'juez', 'jueves', 'judío', 'jugador', 'juez', 'lapicero', 'justificado', 'junio', 'julio', 'junto', 'la', 'ketchup', 'lavar', 'lavandería', 
  'largo', 'lenguaje', 'leer', 'mamá', 'llover', 'limón', 'lima', 'libro', 'libreta', 'licuado', 'limpio', 'limpiar', 'lleno', 'llave', 'llama', 'llegar', 'llorar', 'llevar', 
  'luz', 'loro', 'lo', 'lluvia', 'loco', 'lunes', 'los', 'línea', 'lápiz', 'lámpara', 'malo', 'maleta', 'mariposa', 'mantel', 'mandil', 'mandar', 'mandamiento', 'mandarina', 
  'mango', 'manejar', 'mar', 'manzana', 'mantequilla', 'margen', 'marearse', 'mayo', 'matemática', 'martes', 'marrón', 'marzo', 'maximizar', 'matrimonio', 'mañana', 'mayuscula', 
  'mayonesa', 'medias', 'mecánico', 'nota', 'mouse', 'miércoles', 'microsoft', 'mes', 'memorizar', 'mejor', 'mentiroso', 'mi', 'mesa', 'miraflores', 'minuto', 'milagro', 
  'minúscula', 'misionero', 'misa', 'morado', 'mono', 'molesto', 'mochila', 'monitor', 'montaña', 'montar', 'mosca', 'morir', 'morder', 'motociclismo', 'mota', 'naranja', 
  'máximo', 'mundo', 'mujer', 'mucho', 'multiplicar', 'muñeca', 'municipalidad', 'mío', 'mínimo', 'méxico', 'nada', 'nacer', 'nieto', 'negrita', 'neblina', 'navidad', 
  'necesitar', 'nervioso', 'negro', 'niños', 'niñera', 'nieve', 'nosotros', 'noche', 'pantalla', 'olvidar', 'observar', 'obedecer', 'nuevo', 'nube', 'nunca', 'obligar', 
  'obispo', 'ofrenda', 'octubre', 'oceanía', 'olla', 'ola', 'otro', 'oscuro', 'ordenar', 'operar', 'ordernar', 'otoño', 'oso', 'paint', 'paciencia', 'oveja', 'pan', 'palta', 
  'pastor', 'paraguay', 'papaya', 'papa', 'pantalon', 'papa', 'papá', 'papel', 'parrillada', 'parguas', 'pared', 'pasado', 'paréntesis', 'pelota', 'pañuelo', 'pavo', 'pato', 'país', 
  'peine', 'pecado', 'pera', 'pequeño', 'pensar', 'perdonar', 'perder', 'software', 'regresar', 'primaria', 'planchar', 'piedra', 'pesado', 'persona', 'perseguir', 'perú', 'pescado', 
  'pesca', 'pistola', 'ping', 'pijama', 'pintar', 'piña', 'pizarra', 'polo', 'plumones', 'plato', 'plátano', 'plomo', 'pollo', 'pobre', 'practicar', 'por', 'poncho', 'presidente', 'preocupado', 
  'querer', 'puerta', 'programa', 'primo', 'primavera', 'profesora', 'próximo', 'promedio', 'punto', 'puntero', 'puno', 'pájaro', 'página', 'red', 'rayo', 'quitar', 'queso', 'radio', 'recodar', 
  'rebalar', 'regla', 'refrigeradora', 'redondo', 'regleta', 'reglamento', 'salir', 'romper', 'resurrección', 'respetar', 'religión', 'reja', 'reloj', 'restaurant', 'respirar', 'rimac', 'rezar', 
  'rezar', 'rico', 'rojo', 'robar', 'sacerdote', 'río', 'rusia', 'rosado', 'rápido', 'saber', 'sabado', 'sacramento', 'saco', 'sacerdote', 'sala', 'sal', 'seleccionar', 'sartén', 'sandwich', 'saludar', 
  'saltar', 'salvación', 'sapo', 'sangría', 'secretaria', 'seco', 'sastre', 'sediento', 'secundaria', 'si', 'septiembre', 'sentarse', 'semana', 'sentir', 'short', 'servilleta', 'silla', 'significar', 'siempre', 
  'sobrino', 'sobrina', 'torta', 'tallarines', 'sosten', 'soltera', 'solamente', 'soga', 'sofá', 'sol', 'solo', 'soldado', 'sonreir', 'sombreado', 'soltero', 'sombrero', 'sorprendido', 'sopa', 'sábana', 'subrayado', 
  'suave', 'soñar', 'subir', 'surco', 'sucio', 'tacna', 'tacaño', 'tabular', 'talco', 'tajador', 'tenis', 'teclado', 'tampoco', 'tamaño', 'tamal', 'tambor', 'techo', 'tarea', 'teléfono', 'televisor', 'telefonear', 
  'tenedor', 'temprano', 'tirar', 'texto', 'terminar', 'tentación', 'terremoto', 'timbre', 'tierra', 'tonto', 'toalla', 'tiza', 'torpe', 'toro', 'verano', 'un', 'trujillo', 'tren', 'tortuga', 'tortilla', 'tranquilo', 
  'trompo', 'triste', 'tío', 'tía', 'tumbes', 'ucayali', 'tú', 'vaca', 'universo', 'uniforme', 'una', 'universidad', 'ustedes', 'uruguay', 'vecino', 'vaso', 'vacaciones', 'ventana', 'venezuela', 'windows', 'vincha', 
  'vestido', 'verde', 'verdad', 'vergonzoso', 'viernes', 'viejo', 'vocabulario', 'vivir', 'visitar', 'voleybol', 'volar', 'zorro', 'zancudo', 'yases', 'y', 'yo', 'zapatos', 'zapatilla', 'ángel', 'ágil', 'áfrica', 'él', 'árbol'
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
