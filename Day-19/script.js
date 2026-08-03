console.log("Synexus Engine Initialized. Ready for logic.");
const targetHeading = document.querySelector('#hero-section h2');
const heroButton = document.querySelector('#hero-section button a');
const navigationButton = document.getElementById("toggle-button")
const navMenu = document.getElementById("nav-bar")

function joinCommunityButton(e) {
    e.preventDefault();
     targetHeading.textContent = "Welcome to Synexus Core!";
    setTimeout(function() {
        window.location.href = "form.html";
    }, 2000);
}

function navigationButtonForPhone(event){
    
    
    const isOpen = navMenu.classList.toggle('nav-bar-open');
  navigationButton.textContent = isOpen ? "X" : "☰";
  // 2. Update aria-expanded state (true if open, false if closed)
   navigationButton.setAttribute('aria-expanded', isOpen) 
}

heroButton.addEventListener('click', joinCommunityButton);
navigationButton.addEventListener('click', navigationButtonForPhone );
