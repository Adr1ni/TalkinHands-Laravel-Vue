<script setup>
import { onMounted, defineProps } from 'vue';
import users from '../user';

const { update, userDataById, user, role } = users();

const props = defineProps(['id']);

onMounted(async () => {
  userDataById(props.id); 
});
</script>

<template>
  <div v-if="role">
    <body>
      <div class="container">
        <div class="img">
          <img src="https://res.cloudinary.com/dbilk0odc/image/upload/v1687113285/logo-jpg-talkinhands_xzynmt.jpg">
        </div>
      
        <form @submit.prevent="update(user._id,user)">
          <div class="actualizar" style="padding-top: 35px;">
            <h3 class="title">Editar Perfil</h3>
  
            <!-- Name ------------------------------------------------- -->
            <div class="text-input">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Ingrese nombre completo" v-model="user.name" required>
              <p></p>
            </div>
  
            <!-- Username ------------------------------------------------------->
            <div class="text-input">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Ingrese nombre de usuario" v-model="user.username" required>
            </div>
  
            <!-- Email -------------------------------------------------------->
            <div class="text-input">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Ingrese email" v-model="user.email" required>
            </div>

            <!-- Role ------------------------------------------------------->
            <div class="text-input">
              <i class="fas fa-user-tag"></i>
              <input type="text" placeholder="Ingrese role del usuario" v-model="user.role">
            </div>
  
            <!-- Password ------------------------------------------------------->
            <div class="text-input">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Ingrese la contraseña" v-model="user.password" required>
            </div>
  
            <div class="text-input">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Confirme la contraseña" v-model="user.c_password" required>
            </div>
  
            <button class="btn"><input type="submit" value="Actualizar" style="background-color: transparent; border: none; padding: 0;color: #fff;font-size: 16px;font-weight: 600;"></button>
            <router-link to="/admin" class="btn">Cancelar</router-link>

          </div>
        </form>
      </div>
    </body>
  </div>
  <div v-else>
    <p>No tienes permiso para acceder a esta página.</p>
  </div>
</template>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

*, body {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(31,31,33,1) 31%, rgba(14,131,136,1) 100%);
    background-size: 300% 300%;
    animation: gradient 15s ease infinite;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.container {
    width: 95%;
    max-width: 1300px;
    margin: 0 auto;
    height: 80vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas: "actualizar";
    box-shadow: 0 0 17px 10px rgb(0 0 0 / 30%);
    border-radius: 20px;
    background: white;
    overflow: hidden;
}

.img{
	display: flex;
	justify-content: flex-end;
	align-items: center;
    
}
.img img{
	width: 500px;
    height: 500px;
    border-radius: 20px;
}


.design {
    grid-area: design;
    display: none;
    position: relative;
}

.rotate-45 {
    transform: rotate(-45deg);
}

.actualizar {
    grid-area: actualizar;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: white;
}

.actualizar h3.title {
    margin: 15px 0;
}

.text-input {
    background: #e6e6e6;
    height: 40px;
    display: flex;
    width: 60%;
    align-items: center;
    border-radius: 10px;
    padding: 0 15px;
    margin: 5px 0;
}

.text-input input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    margin-left: 10px;
}

.text-input i {
    color: #686868;
}

::placeholder {
    color: #9a9a9a;
}

.btn{
    display: inline-block;
    padding: 14px 100px;
	  margin-left: 25px;
	  margin-top: 15px;
    background:  #0E8388;
    color: #fff;
    border: 2px solid  #0E8388;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px ;
    transition: all 0.6s ease-in-out;
}

.btn:hover{
    transform: translateY(-5px);
    background: transparent;
    color:  #0E8388;
}

a {
    font-size: 12px;
    color: #9a9a9a;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
}

a.forgot {
    margin-top: 15px;
}

.create {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 30px;
}

.create i {
    color: #9a9a9a;
    margin-left: 10px;
}

@media screen and (max-width: 1050px) {
    .container {
      grid-gap: 3rem;
    }
  }
  
  @media screen and (max-width: 1000px) {
    .img img {
      width: 100%;
      max-width: 400px;
      height: auto;
    }
  }
  
  @media screen and (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
  
    .img {
      display: none;
    }
  }
  
  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "design actualizar";
    }
  }
</style>