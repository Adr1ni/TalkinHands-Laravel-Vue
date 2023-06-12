<script setup>
import aplication from './aplication'

const {startRecording,stopRecording,generateImages,showImages}= aplication()

</script>
 
<template>
    <div class="container">
            <div class="app"> 
                <h1>Agregar nueva nota</h1>
                <div class="input-single"></div>
                <button @click="startRecording" class="record-button"> Iniciar </button>
                <button @click="stopRecording" class="record-button"> Parar </button>
                <p id="recording-instructions"> Presiona el boton <strong> Iniciar </strong> para generar la grabación</p>
                <div id="splash">
                    <img src="" alt="Esperando audio" id="mainImage">
                </div>
                <br>
                <h1 >Presiona en siguiente imagen</h1>
                <div id="controls">
                    <button @click="generateImages">Generar Imagen</button>
                    <button @click="showImages">Siguiente Imagen</button>
                </div>
            </div>
    </div>
</template>
  
<style >
.container {
    max-width: 700px;
    margin: 0 auto;
    padding: 100px 50px;
    text-align: center;
}

#prueba {
    font-family: Arial, Helvetica, sans-serif;
    color: #f7f7f7;
}

.no-browser-support {
    display: none;
    font-size: 1.2rem;
    color: #0E8388;
    margin-top: 35px;
}

.app {
    margin: 40px auto;
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
    width: 311px;
    height: 299px;
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