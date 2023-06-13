<script setup>

import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import VoiceToText from './voiceToText.vue';
import axios from "axios";
import $ from "jquery";

const router = useRouter()

let error = ref('')
let id = ref()
let role = ref()

onMounted(async () => {
    userData()
    loadactions()
})
//Booton Menú

const loadactions = () => {
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
 
}


const userData = async () => {
    await axios.get('/api/user-profile')
        .then(response => {
            if (response.data.success) {
                id.value = response.data.data._id
                role.value = response.data.data.role
            } else {
                error.value = response.data.message;
            }
        })
}

const logout = () => {
    localStorage.removeItem('data')
    router.push('/')

}

const deleteUser = async () => {
    await axios.delete('/api/users/' + id.value)
        .then(response => {
            if (response.data.success) {
                localStorage.removeItem('data')
                router.push('/')
            } else {
                error.value = response.data.message;
            }
        })
}

</script>

<template>
    <!--Scroll de navegacion-->
    <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
    </div>

    <!--NAVBAR------------------------------------->
    <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#">Talkin<span>Hands</span></a></div>
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Inicio</a></li>
                <li><a href="#about" class="menu-btn">Información</a></li>
                <li><a href="#services" class="menu-btn">Programa</a></li>
                <li><a href="#skills" class="menu-btn">Herramientas</a></li>
                <li><a href="#teams" class="menu-btn">Equipo</a></li>
                <li><a class="menu-btn"><router-link to="/actualizar">Actualizar Perfil</router-link></a></li>
                <li v-if="role === 'admin'"><a class="menu-btn"><router-link  to="/admin">Panel de Admin</router-link></a></li>
            </ul>
            <!--Boton de Menu-->
            <div class="menu-btn" id="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <!--Boton de Menu-->
        </div>
    </nav>
    <!--NAVBAR------------------------------------->


    <!-- Inicio principal Arriba-------------------------- -->
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-2">TalkinHands</div>
                <div class="text-3">De tu voz a Imagen<span class="typing"></span></div>
                <a href="#services">Programa</a>
            </div>
        </div>
    </section>
    <!-- Inicio principal Arriba-------------------------- -->


    <!-- Imformacion del programa ----------------------------->
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">Información del Proyecto</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="http://imgfz.com/i/0DYs7Nm.png" alt="">
                </div>
                <div class="column right">
                    <div class="text">TalkinHands <span class="typing-2"></span></div>
                    <p>
                        TalkinHands es una aplicación web innovadora y
                        tecnológicamente avanzada que utiliza Laravel
                        y Vue 3.js y mongodb para ofrecer un traductor
                        de voz a lengua de señas. Su enfoque en la
                        usabilidad, la seguridad y la accesibilidad la
                        convierte en una herramienta valiosa para
                        mejorar la comunicación inclusiva para las
                        personas con discapacidad auditiva.
                    </p>
                    <a href="https://docs.google.com/document/d/1hltF-X_yAKm4KdGCytGw6iHmF68_ydWRC81HIMRAzM4/edit?usp=sharing" target="_blank">Documentacion</a> 
                </div>
            </div>
        </div>
    </section>
    <!-- Imformacion del programa ----------------------------->



    <!-- Programa ----------------------------------------------->
    <section class="services" id="services">
        <div class="max-width">
            <h2 class="title">Programa - TalkinHands</h2>
            <div class="serv-content">
                <div class="card">
                    <VoiceToText/>
                </div>
            </div>
        </div>
    </section>
    <!-- Programa ----------------------------------------------->


    <!-- Herramintas usadas ----------------------------------------->
    <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">Herramientas</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">
                        Lenguajes
                    </div>
                    <p>
                        Nuestra aplicación está principalmente desarrollada
                        en PHP usando el framework Laravel con (76.1%), un
                        lenguaje popular para la creación de sitios web.
                        También utilizamos Vue (21.1%), un framework de
                        JavaScript para construir interfaces de usuario
                        interactivas.JavaScript en general representa solo
                        el 1.9% de nuestra aplicación, pero es fundamental
                        para agregar funcionalidad a tu sitio
                        web. Hay un 0.9% de "otros" lenguajes o tecnologías
                        presentes en nuestra aplicación.
                        En resumen, nuestra aplicacion se basa en PHP con
                        un enfoque adicional en Vue y una menor presencia
                        de JavaScript.
                    </p>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>PHP - Laravel</span>
                            <span>70%</span>
                        </div>
                        <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Vue</span>
                            <span>20%</span>
                        </div>
                        <div class="line vue"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>5%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>3%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>2%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="max-width">
            <br>
            <br>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">
                        Base de datos
                    </div>
                    <p>da
                        Nuestra aplicación usa como motor de base de datos
                        el MongoDB , el cual nos permite agilizar y tratar
                        los datos de manera rapida y efectiva
                    </p>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>MongoDB</span>
                            <span>100%</span>
                        </div>
                        <div class="line mongo"></div>
                    </div>
                </div>
            </div>
        </div>


    </section>
    <!-- Herramintas usadas ----------------------------------------->


    <!-- Integtantes del Proyecto--------------------------------------------------------->
    <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">Equipo de Proyecto</h2>
            <div class="carousel owl-carousel">


                <div class="card">
                    <div class="box">
                        <a href="https://github.com/ByronManchego" target="_blank">
                        <img src="https://img4.goodfon.com/wallpaper/nbig/8/45/mr-robot-elliot-alderson-rami-malek.jpg"
                            alt="">
                        </a>
                        <div class="text">Byron Manchego</div>
                        <p>Estudiante Tecsup</p>
                    </div>
                </div>


                <div class="card">
                    <div class="box">
                        <a href="https://github.com/Adr1ni" target="_blank">
                        <img src="https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_12/story_16611/assets/5.jpeg?time=1672399209"
                            alt="">
                        </a>
                        <div class="text">Adriano Gongora</div>
                        <p>Estudiante Tecsup</p>
                    </div>
                </div>

                <div class="card">
                    <div class="box">
                        <a href="https://github.com/Jefferson-23" target="_blank">
                        <img src="https://www.elcolombiano.com/binrepository/781x1001/0c1/780d565/none/11101/WYEO/homero-simpson_42360908_20230512163831.jpg"
                            alt="">
                        </a>
                        <div class="text">Jefferson Coaquira</div>
                        <p>Estudiante Tecsup</p>
                    </div>
                </div>


            </div>
        </div>
    </section>
    <!-- Integtantes del Proyecto--------------------------------------------------------->

    <!-- Seccion footer------------------------------------------------------------------------>
    <footer>
        <span>Created By <a href="https://github.com/ByronManchego" target="_blank">Byron Manchego</a> , 
            <a href="https://github.com/Adr1ni" target="_blank">Adriano Gongora</a> and
            <a href="https://github.com/Jefferson-23" target="_blank">Jefferson Coaquira</a>| <span class="far fa-copyright"></span>
            <span> 2023 All rights reserved</span>
            <br>
            <a href="https://github.com/Adr1ni/TalkinHands-UI-Demo" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://docs.google.com/document/d/1hltF-X_yAKm4KdGCytGw6iHmF68_ydWRC81HIMRAzM4/edit?usp=sharing" target="_blank">
                <i class="fas fa-file-alt"></i></a>
        </span><br>

        <button class="eliminar-usuario" @click="logout">Cerrar sesion</button>
        <button class="eliminar-usuario" @click="deleteUser">Eliminar cuenta</button>
    </footer>
    <!-- Seccion footer------------------------------------------------------------------------>
</template>

<style scoped>
/*  importacion de  google fonts ----------------- */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

img {
    display: block;
    margin: auto;
}

/* Scroll bar --------------------------------------------------------------------------- */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* Scroll bar --------------------------------------------------------------------------- */


/* Stilos al codigo alll section- ------------------------------------------------------------------ */
section {
    padding: 100px 0;
}

.max-width {
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}

.about,
.services,
.skills,
.teams,
.contact,
footer {
    font-family: 'Poppins', sans-serif;
}

.about .about-content,
.services .serv-content,
.skills .skills-content,
.contact .contact-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

section .title {
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
}

section .title::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #111;
    transform: translateX(-50%);
}

section .title::after {
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 20px;
    color: var(--main-color);
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
}

/* Stilos al codigo alll section- ------------------------------------------------------------------ */

/* Navbar ------------------------------------------------------------------------------- */
.navbar {
    position: static;
    width: 100%;
    z-index: 999;
    padding: 30px 0;
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.3s ease;
    background-color: #0E8388;
}

.navbar.sticky {
    padding: 15px 0;
    background: #0E8388;
}

.navbar .max-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar .logo a {
    color: #fff;
    font-size: 35px;
    font-weight: 600;
}

.navbar .logo a span {
    color: #000000;
    transition: all 0.3s ease;
}

.navbar.sticky .logo a span {
    color: #fff;
}

.navbar .menu li {
    list-style: none;
    display: inline-block;
}

.navbar .menu li a {
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
}

.navbar .menu li a:hover {
    color: #010202;
}

.navbar.sticky .menu li a:hover {
    color: #fff;
}

/* Navbar ------------------------------------------------------------------------------- */


/* Menu de opciones ------------------------------------------------------------------------ */
.menu-btn {
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    display: none;
}

.scroll-up-btn {
    position: fixed;
    height: 45px;
    width: 42px;
    background: #0E8388;
    right: 30px;
    bottom: 10px;
    text-align: center;
    line-height: 45px;
    color: #fff;
    z-index: 9999;
    font-size: 30px;
    border-radius: 6px;
    border-bottom-width: 2px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}

.scroll-up-btn.show {
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
}

.scroll-up-btn:hover {
    filter: brightness(90%);
}

/* Menu de opciones ------------------------------------------------------------------------ */


/* Inicio pantalla principal ----------------------------------------------------------- */
.home {
    display: flex;
    background: url("https://images.unsplash.com/photo-1640550444366-b94e5752c479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80") no-repeat center;
    height: 100vh;
    color: #fff;
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu', sans-serif;
}

.home .max-width {
    width: 100%;
    display: flex;
}

.home .max-width .row {
    margin-right: 0;
}

.home .home-content .text-2 {
    font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
}

.home .home-content .text-3 {
    font-size: 40px;
    margin: 5px 0;
}

.home .home-content .text-3 span {
    color: #0E8388;
    font-weight: 500;
}

.home .home-content a {
    display: inline-block;
    background: #0E8388;
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    font-weight: 400;
    border-radius: 6px;
    border: 2px solid #0E8388;
    transition: all 0.3s ease;
}

.home .home-content a:hover {
    color: #0E8388;
    background: none;
}

/* Inicio pantalla principal ----------------------------------------------------------- */



/* Informacion del programa ------------------------------------------------- */
.about {
    background-color: #fff;
}

.about .about-content .left {
    width: 45%;
}

.about .about-content .left img {
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 6px;
}

.about .about-content .right {
    width: 55%;
}

.about .about-content .right .text {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}

.about .about-content .right .text span {
    color: #0E8388;
}

.about .about-content .right p {
    text-align: justify;
}

.about .about-content .right a {
    display: inline-block;
    background: #0E8388;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid #0E8388;
    transition: all 0.3s ease;
}

.about .about-content .right a:hover {
    color: #0E8388;
    background: none;
}

/* Informacion del programa ------------------------------------------------- */

/* Programa -------------------------------------------------------------------- */


.services,
.teams {
    color: #fff;
    background: #111;
}

.services .title::before,
.teams .title::before {
    background: #fff;
}

.services .title::after,

.services .serv-content .card {
    width: calc(80% - 30px);
    background: #222;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.services .serv-content .card:hover {
    background: #2E2C2C;
}

.services .serv-content .card {
    transition: all 0.3s ease;
}

.services .serv-content .card:hover {
    transform: scale(1.05);
}

.services .serv-content .card i {
    font-size: 50px;
    color: #2E2C2C;
    transition: color 0.3s ease;
}

.services .serv-content .card:hover i {
    color: #fff;
}

.services .serv-content .card .text {
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
    text-align: center;
}

/* Programa -------------------------------------------------------------------- */



/*Herramientas ---------------------------------------------------------------*/
.skills {
    background-color: #fff;
}

.skills .skills-content .column {
    width: calc(50% - 30px);
}

.skills .skills-content .left .text {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}

.skills .skills-content .left p {
    text-align: justify;
}

.skills .skills-content .left a {
    display: inline-block;
    background: #0E8388;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid #0E8388;
    transition: all 0.3s ease;
}

.skills .skills-content .left a:hover {
    color: #0E8388;
    background: none;
}

.skills .skills-content .right .bars {
    margin-bottom: 15px;
}

.skills .skills-content .right .info {
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;
}

.skills .skills-content .right span {
    font-weight: 500;
    font-size: 18px;
}

.skills .skills-content .right .line {
    height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
}

.skills .skills-content .right .line::before {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: #0E8388;
}

/*Herramientas ---------------------------------------------------------------*/


/* Barras -----------------------------------------------------------------*/
.skills-content .right .php::before {
    width: 70%;
}

.skills-content .right .vue::before {
    width: 20%;
}

.skills-content .right .html::before {
    width: 5%;
}

.skills-content .right .css::before {
    width: 3%;
}

.skills-content .right .js::before {
    width: 2%;
}

.skills-content .right .mongo::before {
    width: 100%;
}

/* Barras -----------------------------------------------------------------*/



/* Equipo de proyecto ------------------------------------------------------- */
.teams .carousel {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.teams .carousel .card {
    background: #174749;
    border-radius: 30px;
    padding: 25px;
    text-align: center;
    overflow: hidden;
    transition: all 0.3s ease;
}

.teams .carousel .card:hover {
    background: #2e9296;
}

.teams .carousel .card .text {
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
}

.teams .carousel .card img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #0E8388;
    transition: all 0.3s ease;
}

.teams .carousel .card:hover img {
    border-color: #063638;
}

.owl-dots {
    text-align: center;
    margin-top: 20px;
}

.owl-dot {
    height: 13px;
    width: 13px;
    margin: 0 5px;
    outline: none !important;
    border-radius: 50%;
    border: 2px solid #0E8388 !important;
    transition: all 0.3s ease;
}

.owl-dot.active {
    width: 35px;
    border-radius: 14px;
}

.owl-dot.active,
.owl-dot:hover {
    background: #0E8388 !important;
}


/* Equipo de proyecto ------------------------------------------------------- */



/* Footer ----------------------------------------------------------------------- */
footer {
    background: rgb(0, 0, 0);
    padding: 40px 60px;
    color: #fff;
    text-align: center;
    font-size: 17px; /* Cambia el tamaño de letra aquí */
}

footer span a {
    color: #0E8388;
    text-decoration: none;
    font-size: 17px; /* Cambia el tamaño de letra aquí */
}

footer span a:hover {
    text-decoration: underline;
}

.eliminar-usuario {
    background-color: #0E8388;
    color: #fff;
    border: none;
    padding: 6px 11px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    font-size: 15px; /* Cambia el tamaño de letra aquí */
}

footer a i {
    font-size: 40px;
    margin: 25px;
}
/* Footer ----------------------------------------------------------------------- */

/* Responsive--------------------------------------------------------------------------- */
@media (max-width: 1104px) {
    .about .about-content .left img {
        height: 350px;
        width: 350px;
    }
}

@media (max-width: 991px) {
    .max-width {
        padding: 0 50px;
    }
}

@media (max-width: 947px) {
    .menu-btn {
        display: flex;
        z-index: 999;
    }

    .menu-btn i.active:before {
        content: "\f00d";
    }

    .navbar .menu {
        position: fixed;
        height: 100vh;
        width: 100%;
        left: -100%;
        top: 0;
        background: #111;
        text-align: center;
        padding-top: 80px;
        transition: all 0.3s ease;
    }

    .navbar .menu.active {
        left: 0;
    }

    .navbar .menu li {
        display: block;
    }

    .navbar .menu li a {
        display: inline-block;
        margin: 20px 0;
        font-size: 25px;
    }

    .home .home-content .text-2 {
        font-size: 70px;
    }

    .home .home-content .text-3 {
        font-size: 35px;
    }

    .home .home-content a {
        font-size: 23px;
        padding: 10px 30px;
    }

    .max-width {
        max-width: 930px;
    }

    .about .about-content .column {
        width: 100%;
    }

    .about .about-content .left {
        display: flex;
        justify-content: center;
        margin: 0 auto 60px;
    }

    .about .about-content .right {
        flex: 100%;
    }

    .skills .skills-content .column,
    .column {
        width: 100%;
        margin-bottom: 35px;
    }

    /* Equipo de proyecto */
    .teams .carousel .card {
        padding: 20px;
    }

    .teams .carousel .card .text {
        font-size: 20px;
        margin: 8px 0 5px 0;
    }

    .teams .carousel .card img {
        height: 120px;
        width: 120px;
    }
}

@media (max-width: 690px) {
    .max-width {
        padding: 0 10px;
    }

    .home .home-content .text-2 {
        font-size: 60px;
    }

    .home .home-content .text-3 {
        font-size: 32px;
    }

    .home .home-content a {
        font-size: 20px;
    }

    .services .serv-content .card {
        width: 100%;
        height: 100%;
    }
}

@media (max-width: 500px) {
    .home .home-content .text-2 {
        font-size: 50px;
    }

    .home .home-content .text-3 {
        font-size: 27px;
    }

    .about .about-content .right .text,
    .skills .skills-content .left .text {
        font-size: 19px;
    }

    .scroll-up-btn {
        right: 15px;
        bottom: 15px;
        height: 38px;
        width: 35px;
        font-size: 23px;
        line-height: 38px;
    }
}

</style>