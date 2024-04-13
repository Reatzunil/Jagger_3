let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
};

window.onscroll = () =>{
    navcar.classList.toogle('active');
};

document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetId = this.getAttribute('href'); 
    const targetSection = document.querySelector(targetId); // Find the target section using the ID
    targetSection.scrollIntoView({ behavior: 'smooth' }); 
});

    const learnMoreBtn = document.getElementById('learn-more-btn');
    const additionalInfo = document.getElementById('additional-info');
    
    learnMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
        additionalInfo.classList.toggle('hidden'); // Toggle the 'hidden' class to reveal or hide the additional information
    }); 

function showPersonDetails(){
    document.getElementById("personModal").style.display = "block";
    
};

function closePersonDetails(){
    document.getElementById("personModal").style.display = "none";
};

function previewImage(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function() {
        var imgElement = document.createElement('img');
        imgElement.src = reader.result;
        imgElement.style.maxWidth = '100%';
        document.getElementById('image-preview').innerHTML = '';
        document.getElementById('image-preview').appendChild(imgElement);
    }
    reader.readAsDataURL(input.files[0]);
};


// Get the modal element
var modal = document.getElementById("loginModal");

// Get the buttons for each login type
var adminLoginBtn = document.getElementById("adminLoginBtn");
var userLoginBtn = document.getElementById("userLoginBtn");
var ownerLoginBtn = document.getElementById("ownerLoginBtn");

// Get the forms for each login type
var adminLoginForm = document.getElementById("adminLoginForm");
var userLoginForm = document.getElementById("userLoginForm");
var ownerLoginForm = document.getElementById("ownerLoginForm");

// Function to show the admin login form and hide others
function showAdminLoginForm() {
  adminLoginForm.style.display = "block";
  userLoginForm.style.display = "none";
  ownerLoginForm.style.display = "none";
}

// Function to show the user login form and hide others
function showUserLoginForm() {
  adminLoginForm.style.display = "none";
  userLoginForm.style.display = "block";
  ownerLoginForm.style.display = "none";
}

// Function to show the owner login form and hide others
function showOwnerLoginForm() {
  adminLoginForm.style.display = "none";
  userLoginForm.style.display = "none";
  ownerLoginForm.style.display = "block";
}

// Event listeners for each login button
adminLoginBtn.addEventListener("click", showAdminLoginForm);
userLoginBtn.addEventListener("click", showUserLoginForm);
ownerLoginBtn.addEventListener("click", showOwnerLoginForm);


var adminCredentials = [
    {username:"admin1", password:"password1"},
    {username:"admin2", password:"password2"}
];
var userCredentials = [
    {username:"user1", password:"password1"},
    {username:"user2", password:"password2"}
];
var ownerCredentials = [
    {username:"owner1", password:"password1"},
    {username:"owner2", password:"password2"}
];

function login(userType) {
    var username, password;
    var redirectPage;

    switch(userType) {
        case 'admin':
            username = document.getElementById("adminUsername").value;
            password = document.getElementById("adminPassword").value;
            redirectPage = "admin.html";
            break;
        case 'user':
            username = document.getElementById("userUsername").value;
            password = document.getElementById("userPassword").value;
            redirectPage = "user.html";
            break;
        case 'owner':
            username = document.getElementById("ownerUsername").value;
            password = document.getElementById("ownerPassword").value;
            redirectPage = "owner.html";
            break;
        default:
            return;
    }

    var validCredentials = false;
    switch(userType) {
        case 'admin':
            validCredentials = adminCredentials.some(function(admin) {
                return admin.username === username && admin.password === password;
            });
            break;
        case 'user':
            validCredentials = userCredentials.some(function(user) {
                return user.username === username && user.password === password;
            });
            break;
        case 'owner':
            validCredentials = ownerCredentials.some(function(owner) {
                return owner.username === username && owner.password === password;
            });
            break;
    }

    if (validCredentials) {
        window.location.href = redirectPage;
    } else {
        alert("Invalid Username or Password. Please try again.");
    }
}

/*login function
var modal = document.getElementById("loginModal");


var btn = document.getElementById("loginBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
};


span.onclick = function() {
  modal.style.display = "none";
};


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


document.getElementById("adminLoginBtn").onclick = function() {
  document.getElementById("userLoginForm").style.display = "none";
  document.getElementById("adminLoginForm").style.display = "block";
  document.getElementById("ownerLoginForm").style.display = "none";
};


document.getElementById("userLoginBtn").onclick = function() {
  document.getElementById("adminLoginForm").style.display = "none";
  document.getElementById("userLoginForm").style.display = "block";
  document.getElementById("ownerLoginForm").style.display = "none";
};

document.getElementById("ownerLoginBtn").onclick = function() {
    document.getElementById("adminLoginForm").style.display = "none";
    document.getElementById("userLoginForm").style.display = "none";
    document.getElementById("ownerLoginForm").style.display = "block";
};


document.getElementById("adminForm").onsubmit = function(event) {
  event.preventDefault();
  // Add your admin login logic here
};

document.getElementById("userForm").onsubmit = function(event) {
  event.preventDefault();
  // Add your user login logic here
};

document.getElementById("ownerForm").onsubmit = function(event) {
    event.preventDefault();
    // Add your admin login logic here
};*/