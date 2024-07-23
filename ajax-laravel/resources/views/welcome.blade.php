<!DOCTYPE html>
<html>

<head>
    <title>Laravel AJAX User Registration</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
    <div class="container">
        <div class="container-logo">
            <a href="#" class="amazon-logo"></a>
        </div>
        <div class="container-info">
            <h2>Crear cuenta</h2>
            <form id="userForm">
                @csrf
                <div>
                    <label for="name">Tu nombre</label>
                    <input type="text" id="name" name="name">
                    <div id="name-error" class="field-error"></div>
                </div>
                <div>
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email">
                    <div id="email-error" class="field-error"></div>
                </div>
                <div>
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password">
                </div>
                <div class="alert-container" id="password-info"><i class="a-icon a-icon-alert"></i>
                    <div class="a-alert-content">
                        La contraseña debe contener al menos seis caracteres.
                    </div>
                </div>
                <div id="password-error" class="field-error"></div>
                <div>
                    <label for="password_confirmation">Confirmar contraseña</label>
                    <input type="password" id="password_confirmation" name="password_confirmation">
                    <div id="password_confirmation-error" class="field-error"></div>
                </div>
                <button type="submit">Crear tu cuenta de Amazon</button>
            </form>
            <div id="response-message" class="success-message"></div>
            <div id="response-message-error" class="field-error"></div>
            <div class="terms">
                Al crear una cuenta, aceptas las <a href="#">Condiciones de Uso</a> y el <a href="#">Aviso
                    de Privacidad</a> de Amazon.
            </div>
            <hr>
            <p>¿Ya tienes una cuenta? <a href="#">Iniciar sesión</a></p>
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
