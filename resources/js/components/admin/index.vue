<template>
    <div v-if="user.role" class="admin-panel">
        <header class="header">
            <h1><i class="fas fa-cogs" style="color: #000000;"></i> Panel Administrativo de Talkin<span
                    class="black-text">Hands</span></h1>
        </header>

        <div class="content-wrapper">
            <div class="navbar">
                <div class="navbar-links-upper">
                    <router-link to="/home">
                        <i class="fas fa-arrow-left"></i>
                    </router-link>
                    <router-link to="/crear-usuario">
                        <i class="fas fa-user-plus"></i>
                    </router-link>
                </div>
                <div class="logout-button">
                    <button @click="logout">
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            </div>

            <main class="main">
                <div class="user-cards">
                    <div class="user-card" v-for="user of totalUsers" :key="user._id">
                        <h3>Nombre: {{ user.name }}</h3>
                        <p>Nombre de Usuario: {{ user.username }}</p>
                        <p>Email: {{ user.email }}</p>
                        <p>Rol: {{ user.role }}</p>
                        <p>Creado en: {{ user.created_at }}</p>
                        <p>Actualizado en: {{ user.updated_at }}</p>
                        <div class="card-actions">
                            <button @click="deleteUserAdmin(user._id)" class="delete">
                                <i class="fas fa-trash"></i>
                            </button>
                            <router-link :to="{ name: 'EditarUsuario', params: { id: user._id }, props: true }">
                                <button class="edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <div v-else>
        <p>No tienes permiso para acceder a esta página.</p>
    </div>
</template>

<script setup>
    import { onMounted } from "vue";
    import users from "../user";

    const { allUsers, userData, totalUsers, user, deleteUserAdmin, logout } =
        users();

    onMounted(() => {
        allUsers();
        userData();
    });
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

    .admin-panel {
        font-family: "Roboto", sans-serif;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        min-height: 100vh;
        padding: 0px;
        background-color: #24898ce8;
    }

    .header {
        background-color: #0e8388;
        color: #fff;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }

    .header h1 {
        margin: 0;
        font-size: 24px;
        text-align: center;
        color: white;
    }

    .black-text {
        color: black !important;
    }

    .content-wrapper {
        display: flex;
        flex-grow: 1;
    }

    .navbar {
        padding: 20px;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 73px;
        bottom: 0;
        width: 20px;
        z-index: 21;
    }

    .navbar-links {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .navbar-links-upper {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 50px;
        align-items: left;
    }

    .navbar-links-lower {
        margin-top: auto;

    }

    .navbar a {
        display: flex;
        align-items: center;
        color: #fafafa;
        text-decoration: none;
        font-size: 22px;
    }

    .navbar a i {
        margin-right: 1px;
    }

    .navbar button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 22px;
        color: #000000;
    }

    .navbar .header-links {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .navbar .logout-button {
        margin-top: auto;
    }

    .main {
        margin-top: 60px;
        flex-grow: 1;
        background-color: #BAD9D6;
        padding: 20px;
        margin-left: 70px;
    }

    .user-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;
    }

    .user-card {
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 20px;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 22px;
    }

    .user-card h3 {
        margin-top: 0;
        font-size: 18px;
        color: #333;
    }

    .user-card p {
        margin-bottom: 10px;
        font-size: 14px;
        color: #666;
    }

    .user-card img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 10px;
    }

    .card-actions {
        margin-top: 20px;
    }

    .card-actions button,
    .card-actions a {
        background: none;
        border: none;
        cursor: pointer;
        margin-right: 10px;
        font-size: 14px;
        color: #777;
    }

    .card-actions button.delete i {
        color: #ff0000;
    }

    .card-actions button.edit i {
        color: #10c9f7;
    }

    .fa-trash:before {
        content: "\f2ed";
    }

    .fa-edit:before {
        content: "\f044";
    }

    .fa-arrow-left:before {
        content: "\f060";
    }

    .fa-user-plus:before {
        content: "\f234";
    }

    .fa-sign-out-alt:before {
        content: "\f2f5";
    }

    @media (max-width: 768px) {
        .user-card {
            width: 100%;
            max-width: 400px;
        }

        .user-card h3 {
            font-size: 16px;
        }

        .user-card p {
            font-size: 12px;
        }

        .card-actions button,
        .card-actions a {
            font-size: 12px;
        }

    }

    @media (max-width: 480px) {
        .user-card {
            padding: 10px;
        }

        .user-card h3 {
            font-size: 14px;
        }

        .user-card p {
            font-size: 10px;
            margin-bottom: 5px;
        }

        .card-actions {
            margin-top: 10px;
        }

        .card-actions button,
        .card-actions a {
            font-size: 10px;
            margin-right: 5px;
        }
    }
</style>