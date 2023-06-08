TalkinHands
===============
<div style="text-align: center;">
	<img src="http://imgfz.com/i/0DYs7Nm.png" width="300px" height="300px">
	<br>
</div>

TalkinHands es una aplicación web de última generación desarrollada con Laravel y Vue 3.js, con MongoDB como motor de base de datos. Su objetivo principal es proporcionar un traductor de voz a lenguaje de señas, que permita una comunicación más inclusiva y accesible para las personas con discapacidad auditiva.

## Features

- Traducción de voz a lengua de señas en tiempo real.
- Interfaz de usuario moderna y atractiva.
- Seguridad y autenticación de usuarios mediante cookies y tokens.
- Sistema de gestión de usuarios y datos completo (CRUD)
- Integración con servicios de reconocimiento de voz.
- Documentación detallada sobre el funcionamiento y uso de la aplicación.
- Repositorio en GitHub para explorar el código fuente y realizar contribuciones.

Instalación
------------

Clonar el repositorio:

```shell
git clone https://github.com/yourusername/talkinhands.git
```

Accede al directorio del proyecto:

```shell
cd talkinhands
```

Instalar las dependencias(asegurate tener instalada la dependecia de php para mongo:^1.12):

```bash
composer install
npm install
```

Configuracion
------------

Configure el archivo .env con los detalles de conexión de su base de datos MongoDB.
```php
DB_CONNECTION=mongodb
DB_HOST=127.0.0.1
DB_PORT=27017
DB_DATABASE=laravel-login2
DB_USERNAME=
DB_PASSWORD=
````
Configurar sanctum,en el archivo proveedor/laravel/sanctum/src/PersonalAccessToken.php reemplazar:
```php
<?php

namespace Laravel\Sanctum;

use Jenssegers\Mongodb\Eloquent\Model;
use Laravel\Sanctum\Contracts\HasAbilities;

class PersonalAccessToken extends Model implements HasAbilities
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $connection = 'mongodb';
```

Genere la clave de la aplicación:

```shell
php artisan key:generate
```
Iniciar el servidor

```shell
php artisan serve
npm run dev
```

Acceder la aplicacion en tu navegador:

```link
http://localhost:8000
```


Documentacion
------------

Para mayor informacion sobre la funcionalidad y usos, por favor revise la documentación [aquí](https://docs.google.com/document/d/1hltF-X_yAKm4KdGCytGw6iHmF68_ydWRC81HIMRAzM4/edit?usp=sharing).


Licencia
------------

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).
