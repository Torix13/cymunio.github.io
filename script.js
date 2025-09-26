const services = [
    { 
        title: "Risk Assessment Service (RAS)",
        category: "Proactive Protection",
        description: "Identify and map vulnerabilities before they become threats."
    },
    {
        title: "Trust Assurance",
        category: "Proactive Protection",
        description: "Build digital confidence through transparency and reliability."
    },
    {
        title: "Compliance & Governance",
        category: "Proactive Protection",
        description: "Keep your business aligned with modern regulations and frameworks."
    },
    {
        title: "Threat Detection and Response (TDR)",
        category: "Advanced Security Solutions",
        description: "Monitor and neutralize threats in real-time with intelligent defense."
    },
    {
        title: "Data Protection & Privacy",
        category: "Advanced Security Solutions",
        description: "Secure sensitive data while maintaining seamless user experience."
    },
    {
        title: "Cybersecurity Advisory",
        category: "Advanced Security Solutions",
        description: "Strategic guidance to strengthen and future-proof your systems."
    }
];

const grid = document.querySelector(".service-grid");

const categories = {
    "Proactive Protection": document.createElement("div"),
    "Advanced Security Solutions": document.createElement("div")
};

for (const cat in categories) {
    categories[cat].className = "service-category";
    categories[cat].innerHTML = `<h2>${cat}</h2>`;
    grid.appendChild(categories[cat]);
}


services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `<h3>${service.title}</h3><p style="display: none;">${service.description}</p>`;
    card.addEventListener("click", () => {
        const desc = card.querySelector("p");
        desc.style.display = desc.style.display === "none" ? "block" : "none";
    });
    categories[service.category].appendChild(card);
});