'use strict'
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var message = document.forms["myForm"]["message"].value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || lname === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    var nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name) || !nameRegex.test(lname)) {
        alert("Name and Last Name should only contain letters");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    } else if (email.length > 50) {
        alert("Email address is too long");
        return false;
    }

    
    if (name.length > 50 || lname.length > 50) {
        alert("Name or Last Name is too long");
        return false;
    }

    alert("Form submitted successfully, thank you! We will get back to you soon");
}
