function goHome() {
  window.location.href = "index.html";
}

document.querySelectorAll('.bio-photo, .profession, #resume-section').forEach(element => element.style.display = 'none');

function showBio() {
  hideElements('.intro, .footer, .icons, #resume-section');
  showElements('.bio-section, .bio-paragraph, .bio-photo, .profession');
}

function showResume() {
  hideElements('.intro, .footer, .icons, .bio-photo, .profession, .bio-paragraph, .bio-section');
  showElements('#resume-section');
  
  document.querySelector('#resume-section img').addEventListener('click', function(event) {
    window.open(this.src, '_blank');
  });
}

function hideElements(selector) {
  document.querySelectorAll(selector).forEach(element => element.style.display = 'none');
}

function showElements(selector) {
  document.querySelectorAll(selector).forEach(element => element.style.display = 'block');
}