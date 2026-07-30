console.log("Synexus Engine Initialized. Ready for logic.");
const targetHeading = document.querySelector('#hero-section h2');
const heroButton = document.querySelector('#hero-section button a');
function joinCommunityButton(e) {
    e.preventDefault();
     targetHeading.textContent = "Welcome to Synexus Core!";
    setTimeout(function() {
        window.location.href = "form.html";
    }, 2000);
} 
heroButton.addEventListener('click', joinCommunityButton);