<script>
import ScrollReveal from 'scrollreveal';

export default {
  mounted() {
    this.initializeScrollReveal();
  },
  methods: {
    toggleNavbar() {
      this.$refs.logo.classList.toggle('bx-x');
      this.$refs.navbar.classList.toggle('open');
    },
    initializeScrollReveal() {
      const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        reset: true
      });

      sr.reveal(this.$refs.logo, { delay: 200, origin: 'left' });
      sr.reveal(this.$refs.spanRef, { delay: 520, origin: 'top' });
      sr.reveal(this.$refs.h1Ref, { delay: 600, origin: 'left' });
      sr.reveal(this.$refs.pRef, { delay: 680, origin: 'right' });
      sr.reveal(this.$refs.btnRef, { delay: 750, origin: 'left' });
      sr.reveal(this.$refs.socialRef, { delay: 860, origin: 'left' });
      sr.reveal(this.$refs.imgRef, { delay: 950, origin: 'right' });
    }
  },
  data() {
    return {
      isNavbarOpen: false
    };
  }
};
</script>

<template>
    <body>
    <div>
      <header>
        <a class="logo" @click="toggleNavbar">
          <span :class="{ 'bx-x': isNavbarOpen }">Talkin</span>Hands
        </a>
      </header>
  
      <section class="home">
        <div class="home-text">
          <span ref="spanRef">Tecsup - Diseño y Desarrollo de Software</span>
          <h1 ref="h1Ref">Bienvenidos</h1>
          <p ref="pRef">Para poder interactuar con la aplicación, por favor inicia sesión o regístrate</p>
          <div class="main-btn" ref="btnRef">
            <router-link to="iniciar-sesion" class="btn">Iniciar Session</router-link>
            <router-link to="registro" class="btn two">Registrarse</router-link>
          </div>
        </div>
        <div class="home-img" ref="imgRef">
          <img src="https://res.cloudinary.com/dbilk0odc/image/upload/v1687113285/fondo-talkinhands_ustwyu.png" alt="logo">
        </div>
      </section>
  
      <div class="share">
        <p>Links:</p>
        <div class="social" ref="socialRef">
          <a href="https://docs.google.com/document/d/1hltF-X_yAKm4KdGCytGw6iHmF68_ydWRC81HIMRAzM4/edit?usp=sharing"><i class='bx bxs-file-doc'></i></a> <!--Poner los links de enlaces documentacion y Github-->
          <a href=""><i class='bx bxl-github'></i></a>
        </div>
      </div>
    </div>
</body>
  </template>
  

<style>
*{
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    list-style: none;
    text-decoration: none;
    
}

body{
    background-color:#1f1f21;
}

/* header ---- headwe li*/

header {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    padding: 32px 15%;
    background: transparent;
    transition: all ease 0.45s;
}

/* header ---- logo */
.logo{
    color: #fff;
    font-size: 41px;
    font-weight: 600;
}

.logo span{
    color: #0E8388;
}

/* inicio seccion lgo imagen derecha*/
section {
    padding: 0 15%;
}

.home {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    gap: 30px;
}

.home-img {
    width: 730px;
    height: 730px;
}

.home-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/*textto a lado de la imagen*/
.home-text span {
    padding: 5px 25px;
    background: linear-gradient(130.08deg, #383528 0%, #191919 100%);
    box-shadow: 0px 20px 40px #00000070;
    border: 1px solid #3b3b3b;
    border-radius: 100px;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
}

.home-text h1{
    font-size: 7rem; /*bajar tamaño de text -rem variable*/
    margin: 23px 0;
    color: #fff;
}

.home-text p{
    font-size:  1.1rem;
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
    margin-bottom: 30px;
}

/*divs btn*/
.btn {
    display: inline-block;
    padding: 14px 34px;
    background: #0E8388 ;
    color: #fff;
    border: 2px solid #0E8388;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.6s ease-in-out;
}

.btn:hover {
    transform: translateY(-5px);
    background: transparent;
    color: #0E8388;
}

/*boton derecho*/
.two {
    background: #141414;
    border: 2px solid #141414;
    color: #fff;
    margin-left: 25px;
}

.two:hover {
    color: #141414;
    background: #fff;
    border: 2px solid #fff;
}

/*Enlaces face/docs/github*/
.share {
    position: absolute;
    bottom: 3rem;
    left: 15%;
    display: flex;
    align-items: center;
}

.share p {
    font-size: 17px;
    color: #fff;
    margin-right: 25px;
}

.share i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;

    background: linear-gradient(130.08deg, #383528 0%, #191919 100%);
    box-shadow: 0px 20px 40px #00000070;
    border: 1px solid #3b3b3b;
    border-radius: 100px;
    color: #fff;
    font-size: 20px;
    margin: 0 7px;
    transition: all 0.6s ease-in-out;
}

.social i:hover {
    transform: translateY(-10px);
}

/*animacion imagen*/
.home-img img{
    animation: imgg 2s ease-in-out infinite;
    animation-delay: 2s ;
}
/*Responsive pagina*/
@media (max-width: 500px) {
  .home-text span {
    display: block;
    text-align: center;
    margin-bottom: 15px;
  }
}

/*Responsive pagina*/
@media (max-width: 500px) {
    .home-text span {
        display: block;
        text-align: center;
        margin-bottom: 15px;
    }
}

@media (max-width: 1850px) {
    header {
        padding: 15px 8%;
        transition: 0.2s;
    }

    section {
        padding: 0 8%;
        transition: 0.2s;
    }

    .share {
        left: 8%;
        transition: 0.2s;
    }
}

@media (max-width: 1370px) {
    header {
        padding: 15px 4%;
        transition: 0.2s;
    }

    section {
        padding: 0 4%;
        transition: 0.2s;
    }

    .share {
        left: 4%;
        transition: 0.2s;
    }

    :root {
        --big-font: 5.5rem;
        --p-font: 1rem;
        transition: 0.2s;
    }
}

@media (max-width: 950px){
    .share{
        display: none;
    }

    section {
        padding: 70px 4%;
    }

    header {
        padding: 11px 4%;
        background: #2d2d2d;
    }

    .home {
        height: auto;
        display: flex;
        flex-wrap: wrap;
    }

    .home-text {
        order: 2;
    }

    .home-img {
        margin: auto;
        height: auto;
        width: auto;
    }

    .home-img img {
        max-width: 450px;
        width: 100%;
        height: auto;
    }
}

@media (max-width: 500px) {
    :root {
        --big-font: 4rem;
        --p-font: 15px;
        transition: 0.2s;
    }

    .btn {
        padding: 9px 28px;
    }
}


@keyframes imgg {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-22px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>
