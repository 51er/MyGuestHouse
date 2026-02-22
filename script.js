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
// References
// W3Schools. (2026). JavaScript form validation. Retrieved February 22, 2026, 
//   from https://www.w3schools.com/js/js_validation.asp
//
// W3Schools. (2026). JavaScript popup boxes. Retrieved February 22, 2026, 
//   from https://www.w3schools.com/js/js_popup.asp
//
// MDN Web Docs. (2026). Event.preventDefault(). Retrieved February 22, 2026, 
//   from https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//
// MDN Web Docs. (2026). String.prototype.indexOf(). Retrieved February 22, 2026,
//   from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
