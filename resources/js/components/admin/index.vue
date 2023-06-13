<template>
    <router-link to="/home">Atras</router-link>
    <router-link to="/crear-usuario">Crear usuario</router-link>
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Role</th>
                <th>Creat At</th>
                <th>Update At</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user of users" :key="user._id">
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.role}}</td>
                <td>{{user.created_at}}</td>
                <td>{{user.updated_at}}</td>
                <td><button @click="deleteUser(user._id)">Eliminar</button></td>
            </tr>
        </tbody>
    </table>
    <button @click="logout">Cerrar sesion</button>
</template>

<script setup>
    import axios from "axios";
    import { useRouter } from 'vue-router';
    import { ref, onMounted } from 'vue';

    const router = useRouter()
    let users = ref([])

    const allUsers = async () => {
        await axios.get('/api/users')
            .then(response => {
                users.value = response.data.data
            })
    }

    const deleteUser = async (id) => {
        await axios.delete('/api/users/' + id)
            .then(response => {
                if (response.data.success) {
                    allUsers();
                } else {
                    console.error('Error al eliminar el usuario');
                }
            })
            .catch(error => {
                console.error('Error al eliminar el usuario', error);
            })
    }

    const logout = () => {
        localStorage.removeItem('data')
        router.push('/')
    }

    const probar = async() => {
        await axios.get('/api/admin-test')
        .then(response =>{
            console.log(response);
        })
    }

    onMounted(() => {
        allUsers();
        probar()
    })

</script>
