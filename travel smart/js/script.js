const body = document.querySelector("body"),
searchToggle = document.querySelector(".searchToggle");
// js code for toggle search box
searchToggle.addEventListener("click", () =>{
    searchToggle.classList.toggle("active");
});






// show selected section and its data
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.style.display = 'none';
    });
  
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
      // Remove active class from all links
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  
      // Add active class to the selected link
      document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
    
  }
  
  // Hide the button initially
  document.getElementById('to-top-button').style.display = 'none';
  
  // Add event listener to window scroll event
  window.addEventListener('scroll', function() {
    const quarterPageHeight = window.innerHeight / 4;
    if (window.scrollY > quarterPageHeight) {
      document.getElementById('to-top-button').style.display = 'block';
    } else {
      document.getElementById('to-top-button').style.display = 'none';
    }
  });