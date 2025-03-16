// Get the modal
var modal = document.getElementById("emailModal");

// Get the button that opens the modal
var btn = document.getElementById("getStartedBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle email verification button click
var verifyEmailBtn = document.getElementById("verifyEmailBtn");
verifyEmailBtn.onclick = function() {
    var emailInput = document.getElementById("emailInput").value;
    if (emailInput) {
        alert("Verification email sent to " + emailInput);
        modal.style.display = "none";
    } else {
        alert("Please enter a valid email address.");
    }
}
