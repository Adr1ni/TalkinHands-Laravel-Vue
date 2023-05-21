<script setup>

import { useRouter } from 'vue-router'
import {ref, onMounted} from 'vue'
import VoideToText from './voideToText.vue';
import axios from "axios";

const router = useRouter()

let error = ref('')
let id = ref()

onMounted(async() => {
    userData()
})


const userData = async() =>{
    await axios.get('/api/user-profile')
        .then(response => {
            if(response.data.success){
                id.value = response.data.data._id
            }else{
                error.value = response.data.message;
            }
        })
}

const logout = () => {
    localStorage.removeItem('data')
    router.push('/')
}

const deleteUser = async() => {
    await axios.delete('/api/users/'+ id.value)
        .then(response => {
            if(response.data.success){
                localStorage.removeItem('data')
                router.push('/')
            }else{
                error.value = response.data.message;
            }
        }) 
}


</script>

<template>
    <div>
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
                <li><a href="#about" class="menu-btn">Imformacion</a></li>
                <li><a href="#services" class="menu-btn">Programa</a></li>
                <li><a href="#skills" class="menu-btn">Herramientas</a></li>
                <li><a href="#teams" class="menu-btn">Equipo</a></li>
                <li><a href="actualizar.html" class="menu-btn">Mi Perfil</a></li>

            </ul>
            <!--Boton de Menu-->
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
        <h1>WELCOME!!!!! GAAAAA</h1>
        <br />
        <router-link to="/update">Update</router-link>
        <br /><br />
        <button @click="logout">Log out</button>
        <br>
        <button @click="deleteUser">Delete user</button>
        <br /><br />
        <VoideToText/>
        <br /><br />
    </div>

</template>