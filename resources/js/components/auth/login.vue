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
    <div class="container">

		<div class="login-content">
			<p v-if="error">{{ error }}</p>
			<form @submit.prevent="login">
				<img src="Img/logo-talkinhands.png">

				<!---Formulario-->
				<h2 class="title">Welcome</h2>

				<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
						<input type="email" placeholder="Enter your email" v-model="form.email"
						class="input input-field"
						minlength="4"
						autocomplete="off"
						required>
           		   </div>
           		</div>
				<br>
				<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" placeholder="Enter your password" v-model="form.password" 
						class="input input-field" 
						autocomplete="off" required>
            	   </div>
            	</div>
				<br>
				<input type="submit" class="btn" value="login">
				<router-link to="/" class="btn" style="text-decoration: none; padding-top: 5px">Cancelar</router-link>
			</form>
		</div>
		<div>
			<GoogleLogin></GoogleLogin>
		</div>
	</div>
</template>