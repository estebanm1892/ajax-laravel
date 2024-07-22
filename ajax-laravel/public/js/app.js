// public/js/app.js
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('/users', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('input[name="_token"]').value
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw err });
        }
        return response.json();
    })
    .then(data => {
        if (data.errors) {
            let errors = '';
            for (let error in data.errors) {
                errors += `${data.errors[error][0]} \n`;
            }
            document.getElementById('responseMessage').innerText = errors;
        } else if (data.success) {
            document.getElementById('responseMessage').innerText = data.success;
            document.getElementById('userForm').reset();
        } else {
            document.getElementById('responseMessage').innerText = 'Ocurrió un error inesperado.';
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = 'Ocurrió un error. Por favor, inténtelo de nuevo.';
        console.error('Error:', error);
    });
});
