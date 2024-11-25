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
    const timelineButtons = document.querySelectorAll(".timeline-btn");
    const modal = document.getElementById("timeline-modal");
    const closeBtn = document.querySelector(".close-btn");
    const timelineContainer = document.querySelector(".timeline-container");

    const timelineData = {
        "universal-century": [
            { year: "UC 0001", event: "Founding of the Universal Century calendar." },
            { year: "UC 0050", event: "40% of the human population migrates to space colonies." },
            { year: "UC 0079", event: "The One Year War begins between Zeon and the Earth Federation." }
        ]
    };

    timelineButtons.forEach(button => {
        button.addEventListener("click", () => {
            const timelineKey = button.dataset.timeline;
            const events = timelineData[timelineKey];

            if (events) {
                timelineContainer.innerHTML = `
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                    <div class="timeline-events">
                        ${events.map((event, index) => `
                            <div class="timeline-event" data-index="${index}">
                                <h3>${event.year}</h3>
                                <p>${event.event}</p>
                            </div>
                        `).join("")}
                    </div>
                `;
            }

            modal.style.display = "block";

            const timelineEvents = document.querySelector(".timeline-events");
            const progressBar = document.querySelector(".progress");
            const eventsList = document.querySelectorAll(".timeline-event");

            timelineEvents.addEventListener("scroll", () => {
                const scrollHeight = timelineEvents.scrollHeight - timelineEvents.clientHeight;
                const scrollTop = timelineEvents.scrollTop;
                const progress = (scrollTop / scrollHeight) * 100;

                progressBar.style.height = `${progress}%`;

                eventsList.forEach(event => {
                    const eventPosition = event.offsetTop - timelineEvents.scrollTop;
                    event.classList.toggle("active", eventPosition < timelineEvents.clientHeight / 2);
                });
            });
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", e => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.querySelectorAll('.timeline-btn').forEach(button => {
    button.addEventListener('click', () => {
        const timeline = button.getAttribute('data-timeline');
        openTimelineModal(timeline);
    });
});

function openTimelineModal(timeline) {
    const modal = document.getElementById('timeline-modal');
    modal.style.display = 'block';
    // Load the relevant timeline events dynamically here
}

document.querySelector('.close-btn').addEventListener('click', () => {
    const modal = document.getElementById('timeline-modal');
    modal.style.display = 'none';
});