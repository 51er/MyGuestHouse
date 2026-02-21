function openMenu(){
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeMenu(){
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}
function simpleValidate(event) {
    event.preventDefault();
    
    let name = document.getElementById('simpleName').value;
    let email = document.getElementById('simpleEmail').value;
    let message = document.getElementById('simpleMessage').value;
    let msgBox = document.getElementById('simpleFormMessage');
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");  //Pop out error message
        return false;
    }
    
//if there is not @
    if (email.indexOf("@") === -1) {
        alert("Please enter a valid email!");
        return false;
    }
    
    alert("Thank you! Message sent.");  // when successfuly sended
    document.getElementById('simpleContactForm').reset();
    
    return false;
}
