console.log("Synexus Engine Initialized. Ready for logic.");
const targetHeading = document.querySelector('#hero-section h2');
const heroButton = document.querySelector('#hero-section button a');
const navigationButton = document.getElementById("toggle-button");
const navMenu = document.getElementById("nav-bar");
const gridContainer = document.getElementById('dynamic-grid');
const searchInput = document.getElementById("search-projects");
const body = document.querySelector("body")
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const closeModalBtn = document.getElementById('close-modal');
let taskState = [];
const addTaskButton = document.getElementById("add-task-btn")
const themeToggle = document.getElementById("theme-toggle");

let taskDeleteButton = ``
themeToggle.addEventListener("click" , ()=>{
  document.body.classList.toggle("dark-theme");
});
const taskCards = document.querySelectorAll('.task-card');
const kanbanColumns = document.querySelectorAll('.kanban-column .task-list');

taskCards.forEach(card => {
    
    // When the user clicks and holds the card
    card.addEventListener('dragstart', () => {
        card.classList.add('is-dragging');
        
    });

    // When the user lets go of the mouse click
    card.addEventListener('dragend', () => {
        // Step B: Remove the class so it drops normally
        card.classList.remove('is-dragging');
        
    });
});

kanbanColumns.forEach(column => {
    
    column.addEventListener('dragover', (e) => {
        

        e.preventDefault();
const draggedCard = document.querySelector('.is-dragging');
         column.appendChild(draggedCard);
        
    });
});
const scrollObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
            scrollObserver.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');

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

const testimonialsData = [
    { name: "Harshit Singh", quote: "Synexus changed how I approach engineering. It's about logic, not just languages." },
    { name: "Vipul Suthar", quote: "Building real-world architecture in this community has been a game changer." },
    { name: "Abhay Aditya R S", quote: "The focus on standard protocols over fleeting trends is exactly what the industry needs." }
];
let currentIndex = 0;

function updateTestimonial(){
    const currentData = testimonialsData[currentIndex];
    const testimonialContainer = document.getElementById("testimonials-container");
    const newData = `<h3> ${currentData.name} </h3>
    <p> ${currentData.quote} </p>
    `
    testimonialContainer.innerHTML =newData;
    currentIndex++;
    if(currentIndex == testimonialsData.length){
        currentIndex =0;
    }
}


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
                <button class="view-btn" data-title="${project.title}">View Details</button>
            </div>
        `;
        gridContainer.innerHTML += cardHTML; 
    });
}
}


// Initial Render (Show all projects when the page loads)
renderProjects(projectsData);

function executeHeavySearch() {
  const searchTerm = event.target.value;
  console.log(`Fectching results for : "${searchTerm}"`);
  const query = searchTerm.toLowerCase().trim();
  
  const filteredArray = projectsData.filter(project => {
    if (!query) return true;
    const combinedText = `${project.title} ${project.description}`.toLowerCase();
    return combinedText.includes(query);
  });

  renderProjects(filteredArray);
}


// 2. EVENT DELEGATION (The Core Logic)
if (gridContainer) {
    // We attach ONE listener to the parent container
    gridContainer.addEventListener('click', function(e) {
        const clickedButton = e.target.closest('.view-btn');
        if (!clickedButton) return;
        const projectTitle = clickedButton.getAttribute('data-title');
        modalTitle.textContent = projectTitle;
        projectModal.style.display = 'flex'; // Assuming you use flexbox to center the modal
    });
}

// 3. CLOSING THE MODAL
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
        projectModal.style.display = 'none';
    });
}

if(searchInput){
    const optimizedSearch = debounce(executeHeavySearch, 400);
    searchInput.addEventListener("input", optimizedSearch);
}

function renderTask(taskObject){
    const tasklist = document.querySelector("#task-list");
    tasklist.innerHTML = ``;
    taskState.forEach(function(taskObject){
        console.log(taskObject);
        
        tasklist.innerHTML += `
        <li><label>${taskObject.name}</label><input type="checkbox" id="my-checkbox" name="agree" value="yes">
        <button class="delete-btn" data-id="${taskObject.id}">delete task</button></li>
        `
    })
    console.log(tasklist.innerHTML);
    taskDeleteButton = document.querySelector(".delete-btn");
    taskDeleteButton.addEventListener("click", deletetask);
    
    
}

function addTask(event){
    const taskObject = {
    id : Date.now(),
    name : document.getElementById("task-input").value,
    completed : false};
taskState.push(taskObject);
renderTask(taskState);
}

function deletetask(event){
    let buttonID = event.target.dataset.id;
    taskState = taskState.filter(taskState => taskState.id != Number(buttonID));
    renderTask(taskState);
}

function debounce(func, delay=300){
    let timeoutID;
    return function(){
    clearTimeout(timeoutId);
    timeoutID = setTimeout(()=>{
func.apply(this , args);
    }, delay);
};
}

hiddenElements.forEach(element => {
   scrollObserver.observe(element) ;
});


heroButton.addEventListener('click', joinCommunityButton);
navigationButton.addEventListener('click', navigationButtonForPhone );
searchInput.addEventListener("click",executeHeavySearch);
addTaskButton.addEventListener("click", addTask);

updateTestimonial();
setInterval(updateTestimonial, 3000);