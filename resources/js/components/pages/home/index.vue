<script setup>

import { useRouter } from 'vue-router'
import {ref, onMounted} from 'vue'
import VoideToText from './voideToText.vue';

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
        <h1>WELCOME!!!!! GAAAAA</h1>
        <br />
        <router-link to="update">Update</router-link>
        <br /><br />
        <button @click="logout">Log out</button>
        <br /><br />
        <VoideToText/>
        <br /><br />
        <button @click="deleteUser">Delete user</button>
        <br /><br />
    </div>

</template>

