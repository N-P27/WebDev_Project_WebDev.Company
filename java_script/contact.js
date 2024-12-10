// This function will handle form validation
function ValidateForm() 
{
    // Clear previous error messages
    document.getElementById("firstNameError").style.display = "none";
    document.getElementById("lastNameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("phoneError").style.display = "none";
    document.getElementById("inquiryError").style.display = "none";
    document.getElementById("otherError").style.display = "none";

    // Get the input field values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const inquiry = document.getElementById("inquiries").value.trim();
    const otherDetails = document.getElementById("other-details").value.trim();

    let isValid = true;

    // Validate name
    if (firstName === "") 
    {
        document.getElementById("firstNameError").style.display = "block";
        isValid = false;
    }

    // Validate name
    if (lastName === "") 
        {
            document.getElementById("lastNameError").style.display = "block";
            isValid = false;
        }

    // Validate email (basic check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") 
    {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } 
    
    else if (!emailPattern.test(email)) 
    {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    // Validate phone number
    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") 
    {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    } 
    
    else if (!phonePattern.test(phone)) 
    {
        document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number";
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    }

    // Validate inquiry type
    if (inquiry === "") 
    {
        document.getElementById("inquiryError").style.display = "block";
        isValid = false;
    }

    // If "Other" is selected, validate additional details
    if (inquiry === "Other" || inquiry === "Feedback" && otherDetails === "") 
    {
        document.getElementById("otherError").style.display = "block";
        isValid = false;
    }

    if (isValid) 
    {
        alert("Form successfully submitted!");
    }

    // Return false if any validation fails to prevent form submission
    return isValid;

    alert
}