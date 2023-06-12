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
 
<template>
    <div class="container">

        <h3 v-show="!isSpeechRecognitionSupported" class="no-browser-support">Lo sentimos, su navegador no es compatible con la Web
            API de voz. Prueba a abrir esta demo en Google Chrome.</h3>
        <div class="app" v-show="isSpeechRecognitionSupported">
            <h1>Agregar nueva nota</h1>
            <div class="input-single"></div>
            <button @click="startRecording" class="record-button"> Iniciar </button>
            <button @click="stopRecording" class="record-button"> Parar </button>
            <p id="recording-instructions"> Presiona el boton <strong> Iniciar </strong> para generar la grabación</p>
            <div id="splash">
                <img src="" alt="Esperando audio" id="mainImage">
            </div>
            <br>
            <h3 id="prueba">Presiona en siguiente imagen</h3>
            <div id="controls">
                <button @click="addImage">Generar Imagen</button>
                <button @click="nextImage">Siguiente Imagen</button>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.container {
    max-width: 1px;
    margin: 0 auto;
    padding: 100px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#prueba {
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
}

.no-browser-support {
    display: none;
    font-size: 1.2rem;
    color: #0E8388;
    margin-top: 35px;
}

.app {
    margin: -25px auto;
    text-align: center;
}

.record-button {
    padding: 10px 54px;
    background-color: #0E8388;
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

#splash {
    background-color: #0d3335;
    width: 330px;
    height: 250px;
    margin: 0 auto;
    border: 13px solid #0d3335;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

#splash img {
    max-width: 100%;
    max-height: 100%;
}

#controls {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

#controls button {
    padding: 10px 20px;
    background-color: #0E8388;
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

