document.addEventListener("DOMContentLoaded", () => {
const services = [
    { 
        title: "Risk Assessment Service (RAS)",
        category: "Proactive Protection",
        description: "Identify and map vulnerabilities before they become threats.",
        PaymentUrl: "https://paystack.com/pay/cymunio-ras"
    },

    {
        title: "Trust Assurance",
        category: "Proactive Protection",
        description: "Build digital confidence through transparency and reliability.",
        PaymentUrl: "https://paystack.com/pay/cymunio-trust-assurance"
    },
    
    {
        title: "Compliance & Governance",
        category: "Proactive Protection",
        description: "Keep your business aligned with modern regulations and frameworks.",
        PaymentUrl: "https://paystack.com/pay/cymunio-compliance-governance"
    },
    
    {
        title: "Threat Detection and Response (TDR)",
        category: "Advanced Security Solutions",
        description: "Monitor and neutralize threats in real-time with intelligent defense.",
        PaymentUrl: "https://paystack.com/pay/cymunio-tdr"
    },
    
    {
        title: "Data Protection & Privacy",
        category: "Advanced Security Solutions",
        description: "Secure sensitive data while maintaining seamless user experience.",
        PaymentUrl: "https://paystack.com/pay/cymunio-data-protection-privacy"
    },
    
    {
        title: "Cybersecurity Advisory",
        category: "Advanced Security Solutions",
        description: "Strategic guidance to strengthen and future-proof your systems.",
        PaymentUrl: "https://paystack.com/pay/cymunio-cybersecurity-advisory"
    }
];

const grid = document.querySelector(".service-grid");

const categories = {};
services.forEach(service => {
    if (!categories[service.category]) {
        const catDiv = document.createElement("div");
        catDiv.className = "service-category";
        catDiv.innerHTML = `<h2>${service.category}</h2>`;
        grid.appendChild(catDiv);
        categories[service.category] = catDiv;
    }
});

services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-expanded", "false");

    card.innerHTML = `<h3>${service.title}</h3>
    <p class="description">${service.description}</p>
    <a class="btn-book" href="${service.PaymentUrl}" target="_blank">Book / Pay</a>
    `;

    // Bookmark

    function toggleDescription() {
        card.classList.toggle("show-description");
        const isShown = card.classList.contains("show-description");
        card.setAttribute("aria-expanded", isShown ? "true" : "false");
    }

    card.addEventListener("click", toggleDescription);
    card.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleDescription();
        }
    });
    categories[service.category].appendChild(card);
});
});

// End of script.js