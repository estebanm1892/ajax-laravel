# Proyecto de Registro de Usuarios con Laravel y AJAX

Este es un proyecto de ejemplo que muestra cómo crear un formulario de registro de usuarios estilo amazon utilizando Laravel y AJAX. El formulario valida los datos en el lado del cliente y el servidor, y muestra mensajes de error apropiados sin recargar la página.
Para la base de datos se uso SQLite para poder trabajarlo de forma más agíl y cómoda.

## Clonar el Repositorio

Para clonar este repositorio, utiliza el siguiente comando:

```bash
git clone https://github.com/estebanm1892/ajax-laravel.git
```

## Instalar las dependencias del proyecto

```bash
composer install
```

Luego de instalar las dependencias, lo siguiente será copiar el archivo .env.example a .env o usar el comando:

```bash
cp .env.example .env
```

Como siguiente paso, se tendrá que generar una key para la aplicación

```bash
php artisan key:generate
```

## Configurar la Base de Datos del proyecto

Se debe crear el archivo database.sqlite en la carpeta database/database.sqlite o usando el comando:

```bash
touch database/database.sqlite
```

Se debe ejecutar las migraciones

```bash
php artisan migrate
```

### Si se desea restablecer la base de datos para realizar pruebas

```bash
php artisan migrate:fresh
```

### Como tip, si se esta usando Visual Studio Code, para vizualizar los registros de la BD de SQLite, se recomienda instalar la extensión SQLite Viewer

ID: qwtel.sqlite-viewer
Descripción: SQLite Viewer for VSCode
Versión: 0.5.10
Editor: Florian Klampfer
Vínculo de VS Marketplace: https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer

## Ejecutar el proyecto

Para ejecutar el proyecto, basta con correr el comando

```bash
php artisan serve
```
