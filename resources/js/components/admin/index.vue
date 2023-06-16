<template>
  <div v-if="user.role">
    <router-link to="/home">Atras</router-link>
    <router-link to="/crear-usuario">Crear usuario</router-link>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of totalUsers" :key="user._id">
          <td>{{user._id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.username}}</td>
          <td>{{user.email}}</td>
          <td>{{user.role}}</td>
          <td>{{user.created_at}}</td>
          <td>{{user.updated_at}}</td>
          <td><button @click="deleteUserAdmin(user._id)">Eliminar</button></td>
          <td>
            <router-link :to="{ name: 'EditarUsuario', params: { id: user._id }, props: true }">Editar</router-link>
          </td>

        </tr>
      </tbody>
    </table>
    <button @click="logout">Cerrar sesión</button>
  </div>
  <div v-else>
    <p>No tienes permiso para acceder a esta página.</p>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import users from '../user';

  const { allUsers, userData, totalUsers, user, deleteUserAdmin, logout } = users();

  onMounted(() => {
    allUsers();
    userData();
  });
</script>

