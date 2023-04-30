<script setup>

import {reactive , ref} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let form = reactive({
    name:'',
    username:'',
    email:'',
    password:'',
    c_password:''
})

let error = ref('')

const register = async() =>{
    await axios.post('/api/users', form)
        .then(response => {
            if(response.data.success){
                router.push('/')
            }else{
                error.value = response.data.message;
            }
        })
}

</script>

<template>
    <h1>Welcome to our register</h1>

    <br>

    <div>
        <p v-if="error">{{ error }}</p>
        <form @submit.prevent="register">
            <input type="text" placeholder="Enter your name" v-model="form.name">
            <br>
            <input type="text" placeholder="Enter your usernam" v-model="form.username">
            <br>
            <input type="email" placeholder="Enter your email" v-model="form.email">
            <br>
            <input type="password" placeholder="Enter your password" v-model="form.password">
            <br>
            <input type="password" placeholder="Confirm your password" v-model="form.c_password">
            <br>
            <input type="submit" value="Register">
        </form>
    </div>
</template>