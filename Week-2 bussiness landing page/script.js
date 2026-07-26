const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle("active");

    });

});

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function(e){

    e.preventDefault();


    alert("Your message has been sent successfully!");


    contactForm.reset();

});

