// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
// Contact Form Validation

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting me! I will get back to you soon.");

    contactForm.reset();

});

// Active Navbar Link on Scroll

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});