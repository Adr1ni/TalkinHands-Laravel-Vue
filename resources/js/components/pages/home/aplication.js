import { searchWord } from './vocabulario.js';

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
  
  async function createSequence() {
    cleanedText = cleanText(noteContent);
    let currentIndex = 0;
  
    const otherWord = (text) => {
      const word = text.split('');
      cleanedText.push(...word);
    };
  
    while (currentIndex < cleanedText.length) {
      const letter = cleanedText[currentIndex].toLowerCase();
      console.log(letter)
      const word = await searchWord(letter); 
  
      if (word) {
        const img = new Image();
        img.src = `./vocabulario/${letter}.png`;
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