<script setup>

import {reactive , ref} from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios";


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
				<img src="http://imgfz.com/i/0DYs7Nm.png"> 

				<!---Formulario-->
				<h2 class="title">Welcome</h2>

				<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5></h5>
						<input type="email"  v-model="form.email"
						placeholder="Ingresa tu Nombre"
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
           		    	<h5></h5>
           		    	<input type="password"  v-model="form.password"
						placeholder="Ingresa tu Contraseña"
						class="input input-field" 
						autocomplete="off" required>
            	   </div>
            	</div>
				<br>
				<input type="submit" class="btn" value="login">
				<router-link to="/" class="btn" style="text-decoration: none; padding-top: 5px">Cancelar</router-link>
				<div>
		</div>
			</form>
		</div>
		

		
	</div>
</template>


<style scoped>
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

:root{
        --bg-color:#1f1f21;
        --text-color: #fff;
        --main-color: #0E8388;
}


body{
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    background-color: var(--bg-color);
}

.container{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    padding: 0 2rem;
}

.img{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.login-content{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
}

.img img{
	width: 500px;
}

form{
	width: 360px;
}

.login-content img{
    height: 100px;
}

.login-content h2{
	margin: 15px 0;
	color: var(--text-color);
	text-transform: uppercase;
	font-size: 2.9rem;
}

.login-content .input-div{
	position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid  var(--text-color);
}

.login-content .input-div.one{
	margin-top: 0;
}

.i{
	color: var(--text-color);
	display: flex;
	justify-content: center;
	align-items: center;
}

.i i{
	transition: .3s;
}

.input-div > div{
    position: relative;
	height: 45px;
}

.input-div > div > h5{
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	color: #999;
	font-size: 18px;
	transition: .3s;
}

.input-div:before, .input-div:after{
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: var(--main-color);
	transition: .4s;
}

.input-div:before{
	right: 50%;
}

.input-div:after{
	left: 50%;
}

.input-div.focus:before, .input-div.focus:after{
	width: 50%;
}

.input-div.focus > div > h5{
	top: -5px;
	font-size: 15px;
}

.input-div.focus > .i > i{
	color: #38d39f;
}

.input-div > div > input{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: var(--text-color);;
	font-family: 'poppins', sans-serif;
}

.input-div.pass{
	margin-bottom: 4px;
}

a{
	text-align: center;
}

.btn{
    display: inline-block;
    padding: 14px 34px;
	margin-left: 25px;
	margin-top: 15px;
    background: var(--main-color) ;
    color: var(--text-color);
    border: 2px solid var(--main-color);
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px ;
    transition: all 0.6s ease-in-out;
}

.btn:hover{
    transform: translateY(-5px);
    background: transparent;
    color: var(--main-color);
}


@media screen and (max-width: 1050px){
	.container{
		grid-gap: 5rem;
	}
}

@media screen and (max-width: 1000px){
	form{
		width: 290px;
	}

	.login-content h2{
        font-size: 2.4rem;
        margin: 8px 0;
	}

	.img img{
		width: 400px;
	}
}

@media screen and (max-width: 900px){
	.container{
		grid-template-columns: 1fr;
	}

	.img{
		display: none;
	}

	.login-content{
		justify-content: center;
	}
}
</style>