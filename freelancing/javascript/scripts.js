// scripts.js

// Function to toggle password visibility
function togglePasswordVisibility(inputId, buttonId) {
    var x = document.getElementById(inputId);
    var y = document.getElementById(buttonId);
  
    if (x.type === "password") {
      x.type = "text";
      y.innerHTML = "Hide";
    } else {
      x.type = "password";
      y.innerHTML = "Show";
    }
  }
  
  // Function to validate form inputs
  function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Simple validation example (replace with your own validation logic)
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Additional validation logic here
  
    return true;
  }
  
  // Function to add DHTML effects to navigation menu
  function addDHTMLEffects() {
    // Add effects to navigation menu items (replace with your desired effects)
    var navItems = document.querySelectorAll("nav ul li");
    navItems.forEach(function(item) {
      item.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#007bff";
        this.style.color = "#fff";
      });
      item.addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
        this.style.color = "";
      });
    });
  }
  
  // Function to add jQuery effects
  function addJQueryEffects() {
    // Example jQuery effect (replace with your own)
    $(".container").fadeIn(1000);
  }
  
  // Call functions when the document is loaded
  document.addEventListener("DOMContentLoaded", function() {
    addDHTMLEffects();
    addJQueryEffects();
  });
  
  
  


  // Function to validate form inputs
function validateProjectForm() {
    var projectName = document.getElementById("projectName").value;
    var projectDescription = document.getElementById("projectDescription").value;
    var isValid = true;
  
    // Validate project name
    if (!projectName.trim()) {
      document.getElementById("projectNameError").innerText = "Please enter project name.";
      isValid = false;
    } else {
      document.getElementById("projectNameError").innerText = "";
    }
  
    // Validate project description
    if (!projectDescription.trim()) {
      document.getElementById("projectDescriptionError").innerText = "Please enter project description.";
      isValid = false;
    } else {
      document.getElementById("projectDescriptionError").innerText = "";
    }
  
    return isValid;
  }
  
  // Add event listener to form submission
  document.getElementById("addProjectForm").addEventListener("submit", function(event) {
    if (!validateProjectForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  


  



  