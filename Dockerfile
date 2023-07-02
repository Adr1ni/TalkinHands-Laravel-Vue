# Imagen base
FROM php:8.1-apache

# Instalación de extensiones PHP necesarias
RUN docker-php-ext-install pdo pdo_mysql

# Instalación del controlador de MongoDB para PHP
RUN pecl install mongodb && \
    docker-php-ext-enable mongodb

# Copiar archivos de la aplicación al contenedor
COPY . /var/www/html

# Configuración del Virtual Host de Apache
COPY docker/apache2.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

# Exponer el puerto del contenedor
EXPOSE 80

# Comando para iniciar el servidor Apache
CMD ["apache2-foreground"]
