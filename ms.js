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

document.addEventListener("DOMContentLoaded", () => {
  const suitButtons = document.querySelectorAll(".mobile-suit-btn");
  const suitContent = document.querySelector(".mobile-suit-content");
  const suitImageContainer = document.querySelector(".suit-image-container");

  const mobileSuitData = {
      "rx-78-2-gundam": {
          title: "RX-78-2 Gundam",
          description: "The RX-78-2 Gundam is the iconic mobile suit piloted by Amuro Ray in the original Mobile Suit Gundam series. A revolutionary design, it changed the course of the One Year War.",
          specs: "Height: 18.0m, Weight: 60.0t, Power Source: Minovsky Ultracompact Reactor",
          armament: "Beam Rifle, Shield, Beam Saber",
          image: "images/grandpa.png"
      },
      "zaku-ii": {
          title: "MS-06 Zaku II",
          description: "The Zaku II is a mass-produced mobile suit used by the Principality of Zeon. Its versatile design made it a staple of the Zeon forces during the One Year War.",
          specs: "Height: 17.5m, Weight: 56.2t, Power Source: Minovsky Ultracompact Reactor",
          armament: "Machine Gun, Heat Hawk, Bazooka",
          image: "images/zaku.png"
      },
      "wing-zero": {
          title: "XXXG-01W Wing Gundam",
          description: "The Wing Gundam is a highly versatile mobile suit from Mobile Suit Gundam Wing. It can transform into a high-speed flight mode for rapid mobility.",
          specs: "Height: 16.3m, Weight: 8.2t, Power Source: Ultracompact Fusion Reactor",
          armament: "Buster Rifle, Beam Saber, Shield",
          image: "images/wing.png"
      }
  };

  suitButtons.forEach(button => {
      button.addEventListener("click", () => {
          const suitKey = button.getAttribute("data-suit");
          const suit = mobileSuitData[suitKey];

          if (suit) {
              suitContent.innerHTML = `
                  <h2>${suit.title}</h2>
                  <p>${suit.description}</p>
                  <br>
                  <h3>Specifications:</h3>
                  <p>${suit.specs}</p>
                  <br>
                  <h3>Armament:</h3>
                  <p>${suit.armament}</p>
              `;
              suitImageContainer.innerHTML = `
                  <img src="${suit.image}" alt="${suit.title} Image">
              `;
          }
      });
  });
});
