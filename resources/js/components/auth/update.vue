<script setup>

import { ref, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios";

const router = useRouter()

const form = ref([])

let error = ref('')

onMounted(async() => {
    userData()
})


const userData = async() =>{
    await axios.get('/api/user-profile')
        .then(response => {
            if(response.data.success){
                form.value = response.data.data
            }else{
                error.value = response.data.message;
            }
        })
}

const update = async() =>{
    await axios.put('/api/users/'+ form.value._id, form.value)
        .then(response => {
            if(response.data.success){
                router.push('/home')
            }else{
                error.value = response.data.message;
            }
        })
}

</script>


<template>
    <div>
        <h1>Actualiza tus datos</h1>
    </div>

    <br>

    <div>
        <p v-if="error">{{ error }}</p>
        <form @submit.prevent="update">
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
            <input type="submit" value="Actualizar">
        </form>
    </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.error {
  color: red;
  margin-bottom: 10px;
}

.btn-submit {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #45a049;
}
</style>