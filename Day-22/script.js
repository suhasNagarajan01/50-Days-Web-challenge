console.log("Synexus Engine Initialized. Ready for logic.");
const targetHeading = document.querySelector('#hero-section h2');
const heroButton = document.querySelector('#hero-section button a');
const navigationButton = document.getElementById("toggle-button");
const navMenu = document.getElementById("nav-bar");
const gridContainer = document.getElementById('dynamic-grid');
const searchInput = document.getElementById("search-projects");

const projectsData = [
    {
        title: "Project StoreLane",
        description: "A phygital hyperlocal commerce platform designed to digitize small local vendors.",
        status: "Active"
    },
    {
        title: "QR Attendance Tracker",
        description: "Automated student attendance system utilizing progressive web app (PWA) tech and real-time scanning.",
        status: "Active"
    },
    {
        title: "Logistics Management System",
        description: "Desktop architecture built for tracking shipments and driver status in real-time.",
        status: "Completed"
    }
];


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



function renderProjects(dataArray){
    gridContainer.innerHTML = '';
    if (gridContainer) {
        let border =null;
        dataArray.forEach(function(project) {
        if (project.status == "Completed"){
             border =  "border: 2px solid #808080;";
        }
        else{
              border =  "border: 2px solid #08f308;";
        }
        const cardHTML = `
            <div class="initiative" style="${border}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="badge">${project.status}</span>
            </div>
        `;
        gridContainer.innerHTML += cardHTML; 
    });
}
}


// Initial Render (Show all projects when the page loads)
renderProjects(projectsData);
function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();

  const filteredArray = projectsData.filter(project => {
    if (!query) return true;
    const combinedText = `${project.title} ${project.description}`.toLowerCase();
    return combinedText.includes(query);
  });

  renderProjects(filteredArray);
}
heroButton.addEventListener('click', joinCommunityButton);
navigationButton.addEventListener('click', navigationButtonForPhone );
searchInput.addEventListener("click",handleSearch    );