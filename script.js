window.addEventListener('mousemove', function (e) {
  let width = window.innerWidth;
  let height = window.innerHeight;

  let mouseX = e.clientX / width;
  let mouseY = e.clientY / height;

  let moveXStar1 = (mouseX - 0.5) * 100;
  let moveYStar1 = (mouseY - 0.5) * 100;

  let moveXStar2 = (mouseX - 0.5) * 200;
  let moveYStar2 = (mouseY - 0.5) * 200;

  document.querySelector('.star1').style.backgroundPosition = `${moveXStar1}px ${moveYStar1}px`;
  document.querySelector('.star2').style.backgroundPosition = `${moveXStar2}px ${moveYStar2}px`;

  let moveXCockpit = (0.5 - mouseX) * 10;
  let moveYCockpit = (0.5 - mouseY) * 10;

  document.querySelector('.cockpit img').style.transform = `translate(${moveXCockpit}px, ${moveYCockpit}px)`;
});

function typeOutText(text, element, speed = 100, callback) {
  let index = 0;
  function type() {
      if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, speed);
      } else if (callback) {
          callback();
      }
  }
  type();
}

window.onload = function () {
  const bootTextElement = document.getElementById('bootText');
  const bootText = "System Initializing...\nRunning Diagnostics...\n\nAll Systems Operational.\nWelcome, Pilot.";

  typeOutText(bootText, bootTextElement, 100, function () {
      setTimeout(() => {
          // Reveal the main layout and remove the boot-up animation
          document.getElementById('mainLayout').classList.remove('hidden');
          document.getElementById('hudBoot').remove();
      }, 1000);
  });
};

const facts = [
  "Did you know? The Gundam franchise started in 1979!",
  "The first Gundam series was Mobile Suit Gundam (1979).",
  "Gundam models, or Gunpla, are one of the most popular model kits in the world!",
  "The Gundam franchise spans across TV series, movies, manga, and games.",
  "Mobile Suit Gundam inspired multiple generations of fans worldwide!"
];

function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
}

document.getElementById("randomFact").textContent = getRandomFact();