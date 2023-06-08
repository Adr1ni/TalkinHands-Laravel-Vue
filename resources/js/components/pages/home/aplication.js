import search from './vocabulario';

const {searchWord}= search()

export default function application() {
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const letters = new Set([
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r',
    's','t','u','v','w','x','y','z'
  ]);

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
  
  function createSequence() {
    cleanedText = cleanText(noteContent);
    console.log(cleanedText, cleanedText.length);
    let currentIndex = 0;
  
    const otherWord = (text) => {
      const word = text.split('');
      cleanedText.push(...word);
    };
  
    while (currentIndex < cleanedText.length) {
      const letter = cleanedText[currentIndex].toLowerCase();
      const searchedWord = searchWord(letter);
  
      if (searchedWord !== null) {
        const img = new Image();
        img.src = `./vocabulario/${searchedWord}.png`;
        images[letter] = img;
      } else if (letters.has(letter)) {
        const img = new Image();
        img.src = `./letters/${letter}.png`;
        images[letter] = img;
      } else {
        otherWord(letter);
        cleanedText.splice(currentIndex, 1);
        console.log(cleanedText);
        continue;
      }
  
      currentIndex++;
    }
  }
  
  function generateImages() {
    createSequence();
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