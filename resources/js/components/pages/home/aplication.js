import search from './vocabulario';

const {searchWord}= search()

export default function application() {
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

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


  function createImage(letter) {
    const searchedWord = searchWord(letter);
  
    if (searchedWord !== null) {
      const img = new Image();
      img.src = `./acciones_temporales/${searchedWord}.png`;
      images[letter] = img;
    } else {
      otherWord(letter)
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

  