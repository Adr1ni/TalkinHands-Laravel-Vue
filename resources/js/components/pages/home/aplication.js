  // Importar las palabras del archivo vocabulario.js
  import {
    acciones_temporales,
    informatica,
    naturaleza,
    ambientes,
    pronombre_personales,
    lugares,
    profesiones,
    paises,
    animales,
    adverbios,
    colegio,
    personas,
    numbers,
    prendas,
    frutas,
    juguetes,
    verbos,
    religion,
    adjetivos,
    alimentos,
    letters
  } from './vocabulario.js';

export default function application() {
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

  
  // Insertar las palabras en el árbol binario
  acciones_temporales.forEach(word => bst.insert(word));
  informatica.forEach(word => bst.insert(word));
  naturaleza.forEach(word => bst.insert(word));
  ambientes.forEach(word => bst.insert(word));
  pronombre_personales.forEach(word => bst.insert(word));
  lugares.forEach(word => bst.insert(word));
  profesiones.forEach(word => bst.insert(word));
  paises.forEach(word => bst.insert(word));
  animales.forEach(word => bst.insert(word));
  adverbios.forEach(word => bst.insert(word));
  colegio.forEach(word => bst.insert(word));
  personas.forEach(word => bst.insert(word));
  numbers.forEach(word => bst.insert(word));
  prendas.forEach(word => bst.insert(word));
  frutas.forEach(word => bst.insert(word));
  juguetes.forEach(word => bst.insert(word));
  verbos.forEach(word => bst.insert(word));
  religion.forEach(word => bst.insert(word));
  adjetivos.forEach(word => bst.insert(word));
  alimentos.forEach(word => bst.insert(word));
  letters.forEach(word => bst.insert(word));
  
  
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
    naturaleza: './naturaleza/',
    colegio: './colegio/',
    acciones_temporales : './acciones_temporales/',
    informatica: './informatica/'
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

  function searchWord(word) {
    const node = bst.search(word);
    return node !== null ? node.data : null;
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


  function createImage(letter, category) {
    const word = `${letter}.png`;
    const searchedWord = searchWord(word);
  
    if (searchedWord !== null) {
      const img = new Image();
      img.src = `${imagePaths[category]}${searchedWord}`;
      images[letter] = img;
    } else {
      console.log(`No se encontró la palabra '${word}' en el árbol.`);
    }
  }
  

  function createSquence(){
    cleanedText = cleanText(noteContent);
    console.log(cleanedText, cleanedText.length)
    for (let i = 0; i < cleanedText.length; i++) {
      const letter = cleanedText[i].toLowerCase();
      createImage(letter)
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

  