<template>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/notfound.css">
    <link rel="shortcut icon" href="Img/icono-TalkinHands.png">
    <title>TalkinHands</title>
</head>
<body>

      <div class="content">
        <div class="img"><img src="http://imgfz.com/i/nKp6Nyl.png"></div>

        <div class="text">
          <h1>ERROR 404</h1>
          <p>¡Algo salio mal!</p>
          <a href="todo.html"><button class="btn">Regresar a sitio seguro</button></a> <!--Poner atributo de enlace donde vaya la solucion-->

        </div>
      </div>
      
</body>
</html>
</template>

<style>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --bg-color:#1f1f21;
    --text-color: #fff;
    --main-color: #0E8388;
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
    height: 500px;
}

.text{
    display: flex;
    flex-direction: column;
    line-height: 1.5;
}

.text h1{
    font-size: 100px;
    color: var(--text-color);
}

.text p{
    font-weight: bold;
    color: var(--text-color);
    font-size: 30px;
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

@media(max-width: 800px){
    .content{
        flex-direction: column;
        text-align: center;
    }
}
</style>