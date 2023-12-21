let lNameInput = document.getElementById("lname");
let emailInput = document.getElementById("email");
let subjectInput = document.getElementById("subject");
let messageInput = document.getElementById("message");
var letters = /^[A-Za-z]+$/;

function passValidation() {
    // Your password validation logic remains unchanged
}

function nameValidation() {
    if (lNameInput.value.length < 3 || !lNameInput.value.match(letters)) {
        document.getElementById("nomEr").innerHTML = "Le nom doit compter au minimum 3 caractères et contenir seulement des lettres.";
        return false;
    } else {
        document.getElementById("nomEr").innerHTML = "<p style='color:green'>Correct</p>";
        return true;
    }
}

document.forms["contact"].addEventListener("submit", function (e) {
    let inputs = document.forms["contact"];
    let ids = ["nomEr", "emailEr", "subjectEr", "messageEr"];

    ids.map((id) => (document.getElementById(id).innerHTML = ""));

    let errors = false;

    // Validate name
    if (lNameInput.value.length < 3 || !lNameInput.value.match(letters)) {
        errors = true;
        document.getElementById("nomEr").innerHTML = "Le nom doit compter au minimum 3 caractères et contenir seulement des lettres.";
    }

    // Validate email
    if (emailInput.value === "" || !validateEmail(emailInput.value)) {
        errors = true;
        document.getElementById("emailEr").innerHTML = "Veuillez entrer une adresse email valide.";
    }

    // Validate subject
    if (subjectInput.value === "") {
        errors = true;
        document.getElementById("subjectEr").innerHTML = "Veuillez entrer un sujet.";
    }

    // Validate message
    if (messageInput.value === "") {
        errors = true;
        document.getElementById("messageEr").innerHTML = "Veuillez entrer un message.";
    }

    // Checkboxes and radio buttons validation if applicable
    // e.g., if (document.querySelector('input[name="someCheckbox"]:checked') === null) { errors = true; }

    // Traitement générique
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            errors = true;
            document.getElementById("erreur").innerHTML = "Veuillez renseigner tous les champs.";
        }
    }

    if (errors) {
        e.preventDefault();
    } else {
        // Display success message or redirect to a thank-you page
        // alert("Formulaire envoyé");
    }
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
