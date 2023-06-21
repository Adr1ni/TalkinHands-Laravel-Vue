<template>
<head>
    <link rel="shortcut icon" href="https://res.cloudinary.com/dbilk0odc/image/upload/v1687113285/icono-TalkinHands_dhxnbk.png">
    <title>TalkinHands</title>
</head>
<body>

      <div class="content">
        <div class="img"><img src="https://res.cloudinary.com/dbilk0odc/image/upload/v1687113285/404_jyvazx.png"></div>

        <div class="text">
          <h1>ERROR 404</h1>
          <p>¡Algo salio mal!</p>
          <router-link to="/"><button class="btn">Regresar</button></router-link> <!--Poner atributo de enlace donde vaya la solucion-->

        </div>
      </div>
      
</body>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body{
    overflow-x: hidden;
    background-color: #1f1f21;
    font-family: 'Poppins', sans-serif;
}

.content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 20px;
}

.content img{
    height: 400px;
}

.text{
    display: flex;
    flex-direction: column;
    line-height: 1.5;
}

.text h1{
    font-size: 100px;
    color: #fff;
}

.text p{
    font-weight: bold;
    color: #fff;
    font-size: 30px;
}

.btn{
    display: inline-block;
    padding: 14px 34px;
	margin-left: 25px;
	margin-top: 15px;
    background:#0E8388 ;
    color: #fff;
    border: 2px solid #0E8388;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px ;
    transition: all 0.6s ease-in-out;
}

.btn:hover{
    transform: translateY(-5px);
    background: transparent;
    color:#0E8388;
}

@media(max-width: 800px){
    .content{
        flex-direction: column;
        text-align: center;
    }
}
</style>