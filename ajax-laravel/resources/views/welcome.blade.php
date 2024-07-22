<!DOCTYPE html>
<html>
<head>
    <title>Laravel AJAX User Registration</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="container">
        <h2>Registrar Usuario</h2>
        <form id="userForm">
            @csrf
            <div>
                <label for="name">Nombre de usuario:</label>
                <input type="text" id="name" name="name">
            </div>
            <div>
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email">
            </div>
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password">
            </div>
            <div>
                <label for="password_confirmation">Confirmar contraseña:</label>
                <input type="password" id="password_confirmation" name="password_confirmation">
            </div>
            <button type="submit">Registrar</button>
        </form>
        <div id="responseMessage"></div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
