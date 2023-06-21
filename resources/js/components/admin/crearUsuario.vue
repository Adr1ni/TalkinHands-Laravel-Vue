<script setup>
  import { reactive } from 'vue'
  import users from '../user';
  
  const { register } = users()
  
  let form = reactive({
    name: '',
    username: '',
    email: '',
    role: '',
    password: '',
    c_password: ''
  })
  
  const isAdmin = () => {
    const userData = JSON.parse(localStorage.getItem('data'))
    return userData && userData.role === 'admin'
  }
  </script>
  
  <template>
    <body>
      <div v-if="isAdmin">
        <div class="container">
          <div class="img">
            <img src="https://res.cloudinary.com/dbilk0odc/image/upload/v1687113285/logo-jpg-talkinhands_xzynmt.jpg">
          </div>
          <div class="login-content">
            <!--Formulario -------------------------------------------->
  
            <form @submit.prevent="register(form)">
              <img class="logo-min" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif">
  
              <h2>Registro</h2>
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <!--Input ---------------------------------------------------------------->
                <div class="div">
                  <input type="text" placeholder="Ingrese nombre completo" v-model="form.name" class="input input-field"
                    autocomplete="off" required>
                </div>
              </div>
              <!--Input ---------------------------------------------------------------->
  
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user-circle"></i>
                </div>
                <div class="div">
                  <input type="text" placeholder="Ingrese nombre de usuario" v-model="form.username"
                    class="input input-field" autocomplete="off" required>
                </div>
              </div>
              <!--Input ---------------------------------------------------------------->
  
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="div">
                  <input type="email" placeholder="Ingrese email" v-model="form.email" class="input input-field"
                    autocomplete="off" required>
                </div>
              </div>
              <!--Input ---------------------------------------------------------------->
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user-tag"></i>
                </div>
                <div class="div">
                  <input type="text" placeholder="Ingrese el rol" v-model="form.role" class="input input-field"
                    autocomplete="off">
                </div>
              </div>
  
              <div class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <input type="password" placeholder="Ingrese la contraseña" v-model="form.password"
                    class="input input-field" autocomplete="off" required>
                </div>
              </div>
              <!--Input ---------------------------------------------------------------->
  
              <div class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <input type="password" placeholder="Confirme la contraseña" v-model="form.c_password"
                    class="input input-field" autocomplete="off" required>
                </div>
              </div>
              <!--Button ----------------------------------------------------------->
              <input type="submit" class="btn" value="Registrar">
              <router-link to="/admin" class="btn">Cancelar</router-link>
            </form>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No tienes permiso para acceder a esta página.</p>
      </div>
    </body>
  </template>
  
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    background-color: #1f1f21;
  }
  
  .container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;
    padding: 0 2rem;
  }
  
  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 200px;
  }
  
  .login-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }
  
  .img img {
    width: 410px;
    height: 410px;
    border-radius: 20px;
  }
  
  form {
    width: 360px;
  }
  
  /*Logo pequeño ---------------------------------------------------------*/
  .login-content .logo-min {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
  
  /*Logo pequeño ---------------------------------------------------------*/
  .login-content h2 {
    margin: 15px 0;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.9rem;
  }
  
  .login-content .input-div {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 15px 0;
    padding: 3px 0;
    border-bottom: 2px solid #fff;
  }
  
  .login-content .input-div.one {
    margin-top: 0;
  }
  
  .i {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .i i {
    transition: .3s;
  }
  
  .input-div>div {
    position: relative;
    height: 45px;
  }
  
  .input-div>div>h5 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 18px;
    transition: .3s;
  }
  
  .input-div:before,
  .input-div:after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #0E8388;
    transition: .4s;
  }
  
  .input-div:before {
    right: 50%;
  }
  
  .input-div:after {
    left: 50%;
  }
  
  .input-div.focus:before,
  .input-div.focus:after {
    width: 50%;
  }
  
  .input-div.focus>div>h5 {
    top: -5px;
    font-size: 15px;
  }
  
  .input-div.focus>.i>i {
    color: #38d39f;
  }
  
  .input-div>div>input {
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
    color: #fff;
    font-family: 'poppins', sans-serif;
  }
  
  .input-div.pass {
    margin-bottom: 4px;
  }
  
  .alert {
    color: red;
  }
  
  .error {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  
  .error label {
    color: red;
    margin-left: 5px;
  }
  
  
  a {
    text-align: center;
  }
  
  .btn {
    display: inline-block;
    padding: 14px 34px;
    margin-left: 25px;
    margin-top: 15px;
    background: #0E8388;
    color: #fff;
    border: 2px solid #0E8388;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.6s ease-in-out;
  }
  
  .btn:hover {
    transform: translateY(-5px);
    background: transparent;
    color: #0E8388;
  }
  
  .cancel-btn {
    background-color: transparent;
    color: #333;
  }
  
  @media screen and (max-width: 1050px) {
    .container {
      grid-gap: 5rem;
    }
  }
  
  @media screen and (max-width: 1000px) {
    form {
      width: 290px;
    }
  
    .login-content h2 {
      font-size: 2.4rem;
      margin: 8px 0;
    }
  
    .img img {
      width: 400px;
    }
  }
  
  @media screen and (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
    }
  
    .img {
      display: none;
    }
  
    .login-content {
      justify-content: center;
    }
  }
  </style>