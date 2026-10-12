// MOBILE NAVIGATION MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// CLOSE MENU AFTER CLICKING A LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".service-card, .product-card, .gallery-card, .testimonial-card"
);

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});

// QUOTE FORM


const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the customer's details
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service");
    const serviceName = service.options[service.selectedIndex].text;
    const message = document.getElementById("message").value.trim();

    // Validate the required fields
    if (!name || !phone || !service.value || !message) {
        alert("Please complete all required fields.");
        return;
    }

    // Prepare the WhatsApp message
    const whatsappMessage =
        `Hello Seamagold VENT!\n\n` +
        `I would like to request a quote for your services.\n\n` +
        `Customer Name: ${name}\n` +
        `Phone Number: ${phone}\n` +
        `Email Address: ${email || "Not provided"}\n` +
        `Service Required: ${serviceName}\n` +
        `Project Details: ${message}\n\n` +
        `Please contact me regarding this project. Thank you.`;

    // Encode the message for a URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Your Seamagold WhatsApp number
    const whatsappNumber = "08062822225";

    // Open WhatsApp with the prepared message
    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
});
