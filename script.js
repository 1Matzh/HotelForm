const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const checkin = document.getElementById('checkin');
const checkout = document.getElementById('checkout');
const rooms = document.getElementById('rooms');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const checkinValue = checkin.value.trim();
    const checkoutValue = checkout.value.trim();

    if (nameValue === '') {
        setErrorFor(username, 'O nome não pode estar vazio');
    }
    else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'O e-mail não pode estar vazio');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'O e-mail não é válido');
    } else {
        setSuccessFor(email);
    }

    if (telValue === '') {
        setErrorFor(tel, 'O telefone não pode estar vazio');
    } else {
        setSuccessFor(tel);
    }

    if (checkinValue === '') {
        setErrorFor(checkin, 'A data de check-in não pode estar vazia');
    } else {
        setSuccessFor(checkin);
    }

    if (checkoutValue === '') {
        setErrorFor(checkout, 'A data de check-out não pode estar vazia');
    } else {
        setSuccessFor(checkout);
    }

    if (rooms.value === '') {
        setErrorFor(rooms, 'O número de quartos não pode estar vazio');
    } else {
        setSuccessFor(rooms);
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'input-box error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-box success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
