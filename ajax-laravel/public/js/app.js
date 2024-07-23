document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    clearErrors();

    let formData = new FormData(this);

    // Validar los campos antes de enviar la solicitud
    let isValid = validateForm(formData);
    if (!isValid) {
        return;
    }

    fetch('/users', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('input[name="_token"]').value
        }
    })
        .then(response => {
            console.log('Respuesta del servidor:', response);
            if (!response.ok) {
                return response.json().then(err => { throw err });
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:', data);
            if (data.errors) {
                displayErrors(data.errors);
            } else if (data.success) {
                document.getElementById('response-message').innerText = data.success;
                document.getElementById('userForm').reset();
            } else {
                document.getElementById('response-message-error').innerText = 'Ocurrió un error inesperado.';
            }
        })
        .catch(error => {
            let transEmailError = error.errors.email[0] ? 'El correo electrónico ya ha sido registrado.' : '';
            document.getElementById('response-message-error').innerText = transEmailError;
            document.getElementById('email-error').innerText = 'Introduce tu correo electronico.';
            console.error('Error:', error);
        });
});

function clearErrors() {
    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('password-error').innerText = '';
    document.getElementById('password_confirmation-error').innerText = '';
    const passwordInfo = document.getElementById('password-info');
    if (passwordInfo) {
        passwordInfo.style.color = '#111';
        passwordInfo.classList.remove('hidden');
    }
}

function displayErrors(errors) {
    for (let key in errors) {
        if (key === 'password') {
            const passwordInfo = document.getElementById('password-info');
            if (passwordInfo) {
                passwordInfo.style.color = 'red';
                passwordInfo.classList.add('hidden');
            }
        }
        const errorElement = document.getElementById(`${key}-error`);
        if (errorElement) {
            errorElement.innerText = errors[key][0];
        }
    }
}

function validateForm(formData) {
    let isValid = true;

    // Validar nombre
    const name = formData.get('name');
    if (!name) {
        document.getElementById('name-error').innerText = 'Introduce tu nombre.';
        isValid = false;
    } else if (name.length > 255) {
        document.getElementById('name-error').innerText = 'El nombre no puede tener más de 255 caracteres.';
        isValid = false;
    }

    // Validar email
    const email = formData.get('email');
    if (!email) {
        document.getElementById('email-error').innerText = 'Introduce tu correo electronico.';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('email-error').innerText = 'El correo electrónico no es válido.';
        isValid = false;
    }

    // Validar contraseña
    const password = formData.get('password');
    if (!password) {
        document.getElementById('password-error').innerText = 'La contraseña es obligatoria.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('password-error').innerText = 'La contraseña debe contener al menos seis caracteres.';
        document.getElementById('password-info').classList.add('hidden');
        isValid = false;
    }

    // Validar confirmación de contraseña
    const passwordConfirmation = formData.get('password_confirmation');
    if (password !== passwordConfirmation) {
        document.getElementById('password_confirmation-error').innerText = 'Las contraseñas no coinciden.';
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
