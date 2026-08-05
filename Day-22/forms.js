
const navigationButton = document.getElementById("toggle-button");
const navMenu = document.getElementById("nav-bar");
function navigationButtonForPhone(event){
    const isOpen = navMenu.classList.toggle('nav-bar-open');
  navigationButton.textContent = isOpen ? "X" : "☰";
  // 2. Update aria-expanded state (true if open, false if closed)
   navigationButton.setAttribute('aria-expanded', isOpen) 
}

navigationButton.addEventListener('click', navigationButtonForPhone ); 



const fullNameInput = document.getElementById("full-name");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const rollNumberInput = document.getElementById("membership-form");
const aboutApplicantInput = document.getElementById("about-applicant");

const membershipForm = document.querySelector("form")

if(membershipForm){
  membershipForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim() ;
  if(fullName==""){
    console.log("full name is empty");
    fullNameInput.style.borderColor = "rgb(255, 0, 0)";
    fullNameInput.style.borderWidth= "5px 5px 5px 5px";
    fullNameInput.addEventListener("focus",() => {
      fullNameInput.style.borderColor = "#000" ;
      fullNameInput.style.borderWidth= "2px";
    })
    }
  else if (!email.includes('@')) {
            // Logic for invalid email
            console.log("Error: Please enter a valid email address.");
            emailInput.style.borderColor = "rgb(255, 0, 0)";
            emailInput.style.borderWidth= "3px 3px 3px 3px";
        } 
  else {
            // Success Logic!
            console.log("Success! Application Data:", { fullName, email });
            
            // Reset the form styling and clear the inputs
            fullNameInput.style.borderColor = "white";
            emailInput.style.borderColor = "white";
            membershipForm.reset();
        }





})
}