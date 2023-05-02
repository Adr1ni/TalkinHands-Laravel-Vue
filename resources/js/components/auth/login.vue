<script setup>

import {reactive , ref} from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios";
import GoogleLogin from './GoogleLogin.vue';

const router = useRouter()

let form = reactive({
    email:'',
    password:''
})

let error = ref('')

const login = async() =>{
    await axios.post('/api/login', form)
        .then(response => {
            if(response.data.success){
                localStorage.setItem('data', response.data.data)
                router.push('/home')
            }else{
                error.value = response.data.message;
            }
        })
}

</script>

<template>
    <div>
        <h1>Welcome to out login</h1>
        <router-link to="/">Home</router-link><br>
        <router-link to="register">Re</router-link>
    </div>

    <div>
        <p v-if="error">{{ error }}</p>
        <form @submit.prevent="login">
            <input type="email" placeholder="Enter your email" v-model="form.email">
            <br>
            <input type="password" placeholder="Enter your password" v-model="form.password">
            <br>
            <input type="submit" value="login">
        </form>
    </div>
    <div>
        <GoogleLogin></GoogleLogin>
    </div>
</template>