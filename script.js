// JavaScript for moving stars and cockpit based on mouse movements
window.addEventListener('mousemove', function(e) {
  let width = window.innerWidth;
  let height = window.innerHeight;

  // Get mouse position as a percentage of the viewport
  let mouseX = e.clientX / width;
  let mouseY = e.clientY / height;

  // Calculate parallax movement for stars
  let moveXStar1 = (mouseX - 0.5) * 100;
  let moveYStar1 = (mouseY - 0.5) * 100;

  let moveXStar2 = (mouseX - 0.5) * 200;
  let moveYStar2 = (mouseY - 0.5) * 200;

  // Apply the new positions to the stars using pixel values
  document.querySelector('.star1').style.backgroundPosition = `${moveXStar1}px ${moveYStar1}px`;
  document.querySelector('.star2').style.backgroundPosition = `${moveXStar2}px ${moveYStar2}px`;

  // Calculate slight cockpit movement in the opposite direction (10px sensitivity)
  let moveXCockpit = (0.5 - mouseX) * 10;
  let moveYCockpit = (0.5 - mouseY) * 10;

  // Apply the cockpit movement
  document.querySelector('.cockpit img').style.transform = `translate(${moveXCockpit}px, ${moveYCockpit}px)`;
});
