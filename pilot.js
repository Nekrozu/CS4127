// Parallax Effect for Stars and Cockpit
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

// Dynamically Load Pilot Information
document.addEventListener("DOMContentLoaded", () => {
    const pilotButtons = document.querySelectorAll(".pilot-btn");
    const pilotContent = document.querySelector(".pilot-content");
    const visualContainer = document.querySelector(".pilot-visuals");

    // Pilot Data Object
    const pilotData = {
        "amuro-ray": {
            name: "Amuro Ray",
            bio: "Amuro Ray is the protagonist of the original Mobile Suit Gundam series. A skilled pilot, he is best known for piloting the RX-78-2 Gundam and his role in the One Year War.",
            achievements: "Played a pivotal role in defeating the Principality of Zeon during the One Year War.",
            mobileSuit: "RX-78-2 Gundam",
            image: "images/amuro.png"
        },
        "char-aznable": {
            name: "Char Aznable",
            bio: "Known as the 'Red Comet,' Char Aznable is a legendary pilot and key figure in the Universal Century. His complex character spans multiple series, including Mobile Suit Gundam and Char's Counterattack.",
            achievements: "Led Zeon forces and later formed Neo Zeon to fight for Spacenoid independence.",
            mobileSuit: "MSN-04 Sazabi",
            image: "images/char.png"
        },
        "kamille-bidan": {
            name: "Kamille Bidan",
            bio: "Kamille Bidan is the protagonist of *Mobile Suit Zeta Gundam*. Initially a civilian, Kamille becomes involved in the conflict between the AEUG and the Titans, eventually piloting the Zeta Gundam. His journey is one of self-discovery and tragic loss as he fights for a better future.",
            mobileSuit: "Zeta Gundam",
            achievements: "Kamille is remembered for his strong sense of justice and emotional growth. His struggles highlight the personal toll of war and the hope for peace.",
            image: "images/bidan.png"
        },
        "judau-ashta": {
            name: "Judau Ashta",
            bio: "Judau Ashta is the main character of *Mobile Suit Gundam ZZ*. A scavenger from the colonies, Judau joins the AEUG and pilots the powerful ZZ Gundam. His carefree personality and resourcefulness make him a unique and memorable protagonist.",
            mobileSuit: "ZZ Gundam",
            achievements: "Judau’s journey reflects the resilience of ordinary people caught in extraordinary circumstances, as he grows into a hero amidst the chaos of war.",
            image: "images/ashta.png"
        },
        "heero-yuy": {
            name: "Heero Yuy",
            bio: "Heero Yuy is the enigmatic protagonist of *Mobile Suit Gundam Wing*. A child soldier trained in secret, Heero embarks on a mission to fight for the freedom of the colonies. His calm demeanor and deadly efficiency mask a deep internal conflict.",
            mobileSuit: "Wing Gundam, Wing Gundam Zero",
            achievements: "Heero’s story is one of redemption and self-discovery, as he learns to balance his sense of duty with his humanity.",
            image: "images/hero.png"
        },
        "setsuna-f-seiei": {
            name: "Setsuna F. Seiei",
            bio: "Setsuna F. Seiei is the central character of *Mobile Suit Gundam 00*. A former child soldier, Setsuna becomes a Gundam Meister for Celestial Being, piloting the Exia and later the 00 Gundam. His journey is deeply tied to his desire to end war and bring peace to humanity.",
            mobileSuit: "Gundam Exia, 00 Gundam, 00 Qan[T]",
            achievements: "Setsuna’s evolution from a war-torn orphan to an advocate for peace is a testament to the transformative power of understanding and hope.",
            image: "images/setsuna.png"
        }
    };

    // Add Event Listeners to Pilot Buttons
    pilotButtons.forEach(button => {
        button.addEventListener("click", () => {
            const pilotKey = button.getAttribute("data-pilot");
            const pilot = pilotData[pilotKey];

            if (pilot) {
                // Update Pilot Information in the Center Column
                pilotContent.innerHTML = `
                    <h2>${pilot.name}</h2>
                    <p><strong>Biography:</strong> ${pilot.bio}</p>
                    <p><strong>Achievements:</strong> ${pilot.achievements}</p>
                    <p><strong>Mobile Suit:</strong> ${pilot.mobileSuit}</p>
                `;

                // Update Visuals in the Right Column
                visualContainer.innerHTML = `
                    <img src="${pilot.image}" alt="${pilot.name}">
                `;
            }
        });
    });
});
