// EmailJS
function SendMail() {
    var params = {
        from_name: document.getElementById('fullName').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_avoat9m', 'template_habz09e', params).then(
        (response) => {
            alert('Email Successfuly Sent!', response.status, response.text);
            console.log('Email Successfuly Sent!', response.status, response.text);
        },
        (error) => {
            alert('Failed!', error);
        },
    );
}