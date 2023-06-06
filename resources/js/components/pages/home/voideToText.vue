<template>
    <div class="container">
        <h1 id="prueba">Voice Controlled Notes App</h1>
        <h3 v-show="!isSpeechRecognitionSupported" class="no-browser-support">Sorry, Your Browser Doesn't Support the Web
            Speech API. Try Opening This Demo In Google Chrome.</h3>
        <div class="app" v-show="isSpeechRecognitionSupported">
            <h3>Add New Note</h3>
            <div class="input-single"></div>
            <button @click="startRecording">Start Recording</button>
            <button @click="stopRecording">Stop Recording</button>
            <p id="recording-instructions">Press the <strong>Start Recognition</strong> button and allow access.</p>
            <h1>Click to see the next image</h1>
            <div id="splash">
                <img src="" alt="classroom image" id="mainImage">
            </div>
            <div id="controls">
                <button @click="addImage">Generate Image</button>
            </div>
            <div id="controls">
                <button @click="nextImage">Next Image</button>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            isSpeechRecognitionSupported: false,
            noteContent: '',
            images: {},
            currentImageIndex: 0
        };
    },
    mounted() {
        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.isSpeechRecognitionSupported = true;
        } catch (e) {
            console.error(e);
        }

        this.recognition.continuous = true;

        this.recognition.onresult = event => {
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;
            const mobileRepeatBug = current === 1 && transcript === event.results[0][0].transcript;
            if (!mobileRepeatBug) {
                this.noteContent += transcript;
            }
        };

        this.startRecording = () => {
            if (this.noteContent.length) {
                this.noteContent += ' ';
            }
            this.recognition.start();
        };

        this.stopRecording = () => {
            this.recognition.stop();
        };

        function cleanText(text) {
            return text.replace(/[\s,.]/g, '');
        }

        this.addImage = () => {
            const cleanedText = cleanText(this.noteContent);
            for (let i = 0; i < cleanedText.length; i++) {
                const letter = cleanedText[i];
                this.images[letter] = new Image();
                const ruta = './letters/' + letter.toLowerCase() + '.jpg';
                this.images[letter].src = ruta;
            }
            document.getElementById('mainImage').src = this.images[cleanedText[this.currentImageIndex]].src;
        };

        this.nextImage = () => {
            const cleanedText = cleanText(this.noteContent);
            this.currentImageIndex++;
            if (this.currentImageIndex === cleanedText.length) {
                this.currentImageIndex = 0;
            }
            document.getElementById('mainImage').src = this.images[cleanedText[this.currentImageIndex]].src;
        };
    }
};
</script>
 

  
<style>
.container {
    max-width: 700px;
    margin: 0 auto;
    padding: 100px 50px;
    text-align: center;
}

#prueba {
    font-family: Arial, Helvetica, sans-serif;
    color: #1da7da;
}

.no-browser-support {
    display: none;
    font-size: 1.2rem;
    color: #e64427;
    margin-top: 35px;
}

.app {
    margin: 40px auto;
}

#start-record-btn,
#pause-record-btn {
    padding: 10px 20px;
    background-color: #1da7da;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin: 10px;
    cursor: pointer;
}

#recording-instructions {
    margin: 15px auto 60px;
}

h1 {
    margin-bottom: 20px;
}

#splash img {
    width: 350px;
    height: 350px;
}

#controls button {
    padding: 10px 20px;
    background-color: #1da7da;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin: 10px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .container {
        padding: 50px 25px;
    }

    button {
        margin-bottom: 10px;
    }
}
</style>