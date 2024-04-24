const form = document.querySelector('form');

function handleSubmit(event) {
    event.preventDefault(); 

    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    if (name === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }
    if (message === '') {
        alert('Please enter your message.');
        messageInput.focus();
        return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    form.reset();
}
form.addEventListener('submit', handleSubmit);
