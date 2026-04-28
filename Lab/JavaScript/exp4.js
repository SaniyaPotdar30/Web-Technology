function validateError()
{
    // Get values entered by user
    let name = document.getElementById("Name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    // Get span elements to show error messages
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");

    // Clear previous error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passError.innerHTML = "";

    // Flag to track validation
    let isValid = true;

    // Name validation
    if (name === "")
    {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    // Email validation
    if (email === "")
    {
        emailError.innerHTML = "Email is required";
        isValid = false;
    }
    else if (!email.includes("@"))
    {
        emailError.innerHTML = "Enter valid email";
        isValid = false;
    }

    // Password validation
    if (password === "")
    {
        passError.innerHTML = "Password is required";
        isValid = false;
    }
    else if (password.length < 6)
    {
        passError.innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    // If any validation fails, form will not submit
    return isValid;
}