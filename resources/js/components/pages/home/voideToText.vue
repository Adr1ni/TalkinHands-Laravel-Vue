<script setup>

import $ from 'jQuery'

try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
}
catch(e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
}

var noteContent = '';

recognition.continuous = true;


recognition.onresult = function(event) {

    var current = event.resultIndex;


    var transcript = event.results[current][0].transcript;

    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

    if(!mobileRepeatBug) {
        noteContent += transcript;
    }
};


const startRecording = ()=>{
    if (noteContent.length) {
        noteContent += ' ';
    }
    recognition.start();
}


const stopRecording = () => {
    recognition.stop();
}


function cleanText(text) {
    return text.replace(/[\s,.]/g, '');
}

var images = {};
var currentImageIndex = 0;


function addImage() {
    var cleanedText = cleanText(noteContent);
    for (var i = 0; i < cleanedText.length; i++) {
        var letter = cleanedText[i];
        images[letter] = new Image();
        var ruta = './letters/' + letter.toLowerCase() + '.jpg';
        images[letter].src = ruta;
    }
    document.getElementById("mainImage").src = images[cleanedText[currentImageIndex]].src
}


function nextImage() {
    var cleanedText = cleanText(noteContent);
    currentImageIndex++;
    if (currentImageIndex === cleanedText.length) {
        currentImageIndex = 0;
    }
    document.getElementById("mainImage").src = images[cleanedText[currentImageIndex]].src;
}

</script>


<template>
    <div class="container">

        <h1 id="prueba">Voice Controlled Notes App</h1>

            <h3 class="no-browser-support">Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening This Demo In Google Chrome.</h3>

            <div class="app"> 
                <h3>Add New Note</h3>
                <div class="input-single">
                </div>         
                <button id="start-record-btn" @click="startRecording">Start Recording</button>
                <button id="pause-record-btn" @click="stopRecording">Stop Recording</button>
                <p id="recording-instructions">Press the <strong>Start Recognition</strong> button and allow access.</p>
                

                <h1>Click to see the next image</h1>
                <div id="splash">
                    <img src="" alt="classroom image" id="mainImage">
                </div> 
                <div id="controls">
                    <button id="nextbtn" @click="addImage"> Generate Image</button>
                </div>
                <div id="controls">
                    <button id="nextbtn" @click="nextImage"> Next Image</button>
                </div>

            </div>

    </div>
</template>

<style>
#prueba{
    font-family: Arial, Helvetica, sans-serif;
    color: #1da7da;
}

ul {
    list-style: none;
    padding: 0;
}

p {
    color: #444;
}

button:focus {
    outline: 0;
}

.container {
    max-width: 700px;
    margin: 0 auto;
    padding: 100px 50px;
    text-align: center;
}

.container h1 {
    margin-bottom: 20px;
}

.page-description {
    font-size: 1.1rem;
    margin: 0 auto;
}

.tz-link {
    font-size: 1em;
    color: #1da7da;
    text-decoration: none;
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

#note-textarea {
    margin: 20px 0;
}

#recording-instructions {
    margin: 15px auto 60px;
}

#notes {
    padding-top: 20px;
}

.note .header {
    font-size: 0.9em;
    color: #888;
    margin-bottom: 10px;
}

.note .delete-note,
.note .listen-note {
    text-decoration: none;
    margin-left: 15px;
}

.note .content {
    margin-bottom: 40px;
}

@media (max-width: 768px) {
    .container {
        padding: 50px 25px;
    }

    button {
        margin-bottom: 10px;
    }

}   



/* -- Demo ads -- */

@media (max-width: 1200px) {
    #bsaHolder{ display:none;}
}

img{
    width: 350px;
    height: 350px;
}
</style>
