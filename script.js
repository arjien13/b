
function goHome() {
  window.location.href = "index.html";
}
document.querySelector('.bio-photo').style.display = 'none';
document.querySelector('.profession').style.display = 'none';

function showBio() {
  var elementsToHide = document.querySelectorAll('.intro, .footer');
  var elementsToShow = document.querySelectorAll('.bio-section, .bio-paragraph, .bio-photo, .profession');
  
  elementsToHide.forEach(element => element.style.display = 'none');
  elementsToShow.forEach(element => element.style.display = 'block');
}