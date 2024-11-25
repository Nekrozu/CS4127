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
    const factionButtons = document.querySelectorAll(".faction-btn");
    const factionContent = document.querySelector(".faction-content");
    const emblemContainer = document.querySelector(".emblem-container");

    const factionData = {
        "earth-federation": {
            title: "Earth Federation",
            title2: "Origins and Formation",
            title3: "Legacy",
            description: "The Earth Federation, also known as the Earth Federation Government (EFG), is one of the most significant factions in the Universal Century (UC) timeline of the Gundam universe. As a central governing body, it plays a pivotal role in the political, military, and social landscape of the UC era.",
            description2: "The Earth Federation was established in the late 21st century as humanity began to expand into space. With the construction of massive space colonies in Earth’s orbit to accommodate the growing population, the Federation emerged to unify Earth's nations under a single global government. Its primary goal was to maintain peace and order across Earth and its space territories, collectively known as the Earth Sphere. The Federation's authority extended to overseeing the colonies in space, which became home to a significant portion of humanity, known as Spacenoids.",
            description3: "The Earth Federation remains a cornerstone of the Gundam franchise, serving as a backdrop for the series' exploration of war, politics, and human nature. Its strengths and flaws drive much of the conflict in the Universal Century, making it an enduring and complex faction in the Gundam universe.",
            emblem: "images/federation.png"
        },
        "zeon": {
            title: "Principality of Zeon",
            title2: "Origins and Formation",
            title3: "Legacy",
            description: "The Principality of Zeon, often simply referred to as Zeon, is one of the most iconic factions in the Universal Century (UC) timeline of the Gundam universe. Established as a separatist movement, it fought against the Earth Federation during the One Year War. Known for its innovative mobile suit technology, Zeon’s quest for independence and its military prowess left a deep impact on the history of the Earth Sphere.",
            description2: "Zeon Daikun, a visionary leader, founded the original Zeon movement in UC 0068, advocating for Spacenoid independence from Earth. After his sudden death, his followers, led by the Zabi family, turned his ideas into a military force. The Principality of Zeon declared war on the Earth Federation in UC 0079, marking the start of the devastating One Year War. Zeon’s forces became known for their deadly mobile suits, such as the Zaku, and their desire to create a new order in space.",
            description3: "Despite its defeat in the One Year War, Zeon’s legacy endures in the form of Neo Zeon and other separatist movements. The ideals of Zeon—Spacenoid independence and resistance to Earth’s authority—continue to inspire future generations. The technological advancements made by Zeon, especially in mobile suit development, laid the foundation for future warfare in the UC timeline.",
            emblem: "images/zeon.png"
        },
        "aeug": {
            title: "Anti-Earth Union Group",
            title2: "Origins and Formation",
            title3: "Legacy",
            description: "The AEUG (Anti-Earth Union Group) is a rebel faction formed to oppose the Earth Federation’s authoritarian control and to resist the tyranny of the Titans, an elite military group. They were central in the events of Mobile Suit Zeta Gundam, playing a pivotal role in the struggle to protect the rights of Spacenoids and restore balance to the Earth Sphere.",
            description2: "The AEUG was formed in UC 0085 as a direct response to the increasing authoritarianism of the Earth Federation, particularly with the rise of the Titans. Comprised of former Federation officers, political dissidents, and Spacenoid civilians, the AEUG united in a shared cause: to fight against the Federation's oppression and restore freedom to the colonies. Their efforts culminated in the series of battles that marked the downfall of the Titans.",
            description3: "While the AEUG was disbanded after the fall of the Titans, its ideals continued to shape future political movements in the Earth Sphere. The AEUG’s actions against the Federation laid the groundwork for future rebellions, including the resurgence of Neo Zeon. Their struggle emphasized the need for Spacenoid autonomy and the consequences of Federation corruption.",
            emblem: "images/aeug.png"
        },
        "titans": {
            title: "Titans",
            title2: "Origins and Formation",
            title3: "Legacy",
            description: "The Titans were an elite faction within the Earth Federation, created to deal with Zeon remnants and suppress uprisings by Spacenoids. However, they quickly became notorious for their brutal tactics and oppressive methods, which led to widespread resentment and ultimately sparked the formation of the AEUG. Their story is a key part of Mobile Suit Zeta Gundam.",
            description2: "Formed after the One Year War in UC 0083, the Titans were a special task force designed to maintain Federation control over the colonies and eliminate any potential threats. Initially conceived as a means of preventing another war with Zeon, the Titans became a militaristic faction led by figures like Jamitov Hymem, whose ruthless methods alienated many Federation allies and fueled dissent across the colonies.",
            description3: "The Titans' legacy is one of oppression and authoritarianism, which ultimately led to their downfall. Their actions are a critical part of the political upheaval in the Earth Sphere, as their brutal suppression of Spacenoid uprisings contributed to the rise of resistance movements like the AEUG. The Titans serve as a symbol of unchecked military power and the dangers of political corruption within the Federation.",
            emblem: "images/titans.png"
        },
        "neo-zeon": {
            title: "Neo Zeon",
            title2: "Origins and Formation",
            title3: "Legacy",
            description: "Neo Zeon is a faction formed as a continuation of the original Principality of Zeon, spearheaded by charismatic leaders like Char Aznable. Aimed at achieving Spacenoid independence from Earth’s oppressive control, Neo Zeon has been a recurring antagonist in the Universal Century timeline, particularly in Mobile Suit Gundam: Char’s Counterattack.",
            description2: "Char Aznable, one of Zeon’s most famous figures, founded Neo Zeon in UC 0093, after the fall of the original Zeon. Following his defeat in the One Year War, Char sought to restore the ideals of Zeon by building a new faction to free the Spacenoids from Earth’s domination. Neo Zeon has seen multiple revivals, often under the leadership of Char or his successors, continuing to wage war against the Earth Federation in the name of Spacenoid independence.",
            description3: "Neo Zeon’s legacy is intertwined with Char Aznable’s personal quest for vengeance and his desire to reshape the Earth Sphere. While Neo Zeon’s efforts in Char’s Counterattack were ultimately defeated, their philosophy of Spacenoid independence and their technological innovations in mobile suit development continued to influence future generations. Neo Zeon’s impact on the Universal Century is profound, particularly in terms of the political and military conflicts that continue to shape the Earth Sphere.",
            emblem: "images/neo.png"
        },
        "crossbone-vanguard": {
            title: "Crossbone Vanguard",
            title2: "Origins and Formation",
            title3: "Legacy",
            description: "The Crossbone Vanguard is a private military organization featured in Mobile Suit Gundam F91. Led by the enigmatic Carozzo Ronah, this faction sought to overthrow the established order of the Earth Federation and create a new society free from its bureaucratic control. Their advanced mobile suits and radical ideals made them a formidable force.",
            description2: "The Crossbone Vanguard was formed in UC 0123 by Carozzo Ronah, who believed that humanity’s future lay in a new, independent society beyond the control of Earth. The faction’s primary goal was to overthrow both the Federation and the colonies' corrupt governments, establishing a new order in space. Using advanced mobile suits like the Crossbone Gundam, the Vanguard fought against the Federation in a bid for independence.",
            description3: "Though ultimately defeated in Gundam F91, the Crossbone Vanguard left a lasting impression as a symbol of rebellion against Earth’s control. The faction’s radical ideas about governance and their fierce resistance against the Federation contributed to the political climate of the late UC era. Their legacy lives on in the ongoing struggles for independence and freedom throughout the Earth Sphere.",
            emblem: "images/crossbone.png"
        }
    };

    factionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const factionKey = button.getAttribute("data-faction");
            const faction = factionData[factionKey];

            if (faction) {
                factionContent.innerHTML = `
                    <h2>${faction.title}</h2>
                    <p>${faction.description}</p>
                    <br>
                    <h2>${faction.title2}</h2>
                    <p>${faction.description2}</p>
                    <br>
                    <h2>${faction.title3}</h2>
                    <p>${faction.description3}</p>
                `;
                emblemContainer.innerHTML = `
                    <img src="${faction.emblem}" alt="${faction.title} Emblem">
                `;
            }
        });
    });
});
