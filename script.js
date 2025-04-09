// Navigates to the homepage (index.html) when called
function goHome() {
  window.location.href = "index.html";
}

// Initializes the page by hiding certain elements this shows for index viewing
document.querySelectorAll('.bio-photo, .profession, #resume-section, .Portfolio-Section, .my-image, .folder-container').forEach(element => element.style.display = 'none');

// SET DISPLAY FUNCTION
function setDisplay(selector, displayValue) {
  document.querySelectorAll(selector).forEach(element => element.style.display = displayValue);
}

// BIO SECTION
function showBio() {
  setDisplay('.intro, .footer, .icons, #resume-section, .my-image, .Portfolio-Section, .folder-container', 'none');
  setDisplay('.bio-section, .bio-paragraph, .bio-photo, .profession', 'block');
}

// RESUME SECTION
function showResume() {
  setDisplay('.intro, .footer, .icons, .bio-photo, .profession, .my-image, .bio-paragraph, .bio-section, .Portfolio-Section', 'none');
  setDisplay('#resume-section', 'block');
  document.querySelector('#resume-section img').addEventListener('click', function(event) {
    window.open(this.src, '_blank');
  });
}

// PORFOLIO SECTION
function showPortfolio() {
  setDisplay('.intro, .footer, .icons, .bio-photo, .profession, .bio-paragraph, .bio-section, #resume-section', 'none');
  setDisplay('.Portfolio-Section, .my-image, .folder-container', 'block');
}