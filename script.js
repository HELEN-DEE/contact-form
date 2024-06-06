document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    // First Name
    const firstName = document.getElementById('firstname');
    const firstNameError = document.getElementById('firstname-error');
    if (!firstName.value.trim()) {
        firstNameError.textContent = 'This field is required';
        firstName.classList.add('error');
        Object.assign(firstNameError.style, {
            display: 'block',
            color: 'hsl(0, 66%, 54%)'
        });
        isValid = false;
    } else {
        firstNameError.textContent = '';
        firstName.classList.remove('error');
        firstNameError.style.display = 'none';
    }

    // Last Name
    const lastName = document.getElementById('lastname');
    const lastNameError = document.getElementById('lastname-error');
    if (!lastName.value.trim()) {
        lastNameError.textContent = 'This field is required';
        lastName.classList.add('error');
        Object.assign(lastNameError.style, {
            display: 'block',
            color: 'hsl(0, 66%, 54%)'
        });
        isValid = false;
    } else {
        lastNameError.textContent = '';
        lastName.classList.remove('error');
        lastNameError.style.display = 'none';
    }

    // Email Address
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'This field is required';
        email.classList.add('error');
        Object.assign(emailError.style, {
            display: 'block',
            color: 'hsl(0, 66%, 54%)'
        });
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        email.classList.add('error');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        email.classList.remove('error');
        emailError.style.display = 'none';
    }

    // Query Type
    const queryTypeError = document.getElementById('radio-error');
    const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
    let radioChecked = false;
    let selectedQueryType = '';
    radioButtons.forEach(radio => {
        if (radio.checked) {
            radioChecked = true;
            selectedQueryType = radio.value;
        }
    });
    if (!radioChecked) {
        queryTypeError.textContent = 'Please select a query type';
        Object.assign(queryTypeError.style, {
            display: 'block',
            color: 'hsl(0, 66%, 54%)'
        });
        isValid = false;
    } else {
        queryTypeError.textContent = '';
        queryTypeError.style.display = 'none';
    }

    // Message
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (!message.value.trim()) {
        messageError.textContent = 'This field is required';
        message.classList.add('error');
        Object.assign(messageError.style, {
            display: 'block',
            color: 'hsl(0, 66%, 54%)'
        });
        isValid = false;
    } else {
        messageError.textContent = '';
        message.classList.remove('error');
        messageError.style.display = 'none';
    }

    // Consent
    const consent = document.getElementById('consent');
    const consentError = document.getElementById('consent-error');
    if (!consent.checked) {
        consentError.textContent = 'To submit this form, please consent to being contacted';
        consent.classList.add('error');
        Object.assign(consentError.style, {
            display: 'block',
            color: 'hsl(0, 66%, 54%)'
        });
        isValid = false;
    } else {
        consentError.textContent = '';
        consent.classList.remove('error');
        consentError.style.display = 'none';
    }

    // If the form is valid, show the toast message
    if (isValid) {
        const formData = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim(),
            queryType: selectedQueryType,
            message: message.value.trim(),
            consent: consent.checked
        };

        console.log('Form Data:', formData);

        showMessage();
    }
});

function showMessage() {
    let message = document.getElementById("alert");
    message.classList.add("show");
    message.style.display = "block"; 

    setTimeout(function() {
        message.classList.remove("show");
        message.style.display = "none"; // Hide it after timeout
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    const radioOptions = document.querySelectorAll('.radio-option input[type="radio"]');



    radioOptions.forEach(radio => {
        radio.addEventListener('change', function() {

            radioOptions.forEach(r => r.parentElement.classList.remove('active'));
            

            if (radio.checked) {
                radio.parentElement.classList.add('active');
            }
        });
    });
});

    // const radioLabel = document.getElementById('radio-label');
    // const radio = document.getElementById('radio');

    // radioLabel.addEventListener ( click, () => {
    //     radio.click();
    // })

