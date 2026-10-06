/* =========================================================
   TANWAR MATTRESSES
   JAVASCRIPT
========================================================= */


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* =========================================================
   NAVBAR
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    menuBtn.classList.toggle("active");

    navbar.classList.toggle("active");

});


/* Close mobile menu */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", function () {

        menuBtn.classList.remove("active");

        navbar.classList.remove("active");

    });

});


/* =========================================================
   WHATSAPP
========================================================= */

const whatsappNumber = "919833817584";

function openWhatsApp(message) {

    const encodedMessage =
        encodeURIComponent(message);

    const url =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");

}


/* CTA WhatsApp */

const whatsappBtn =
    document.getElementById("whatsappBtn");

if (whatsappBtn) {

    whatsappBtn.addEventListener("click", function (e) {

        e.preventDefault();

        openWhatsApp(
            "Hello Tanwar Mattresses, I would like to enquire about your mattresses and comfort options."
        );

    });

}


/* Second WhatsApp */

const whatsappBtn2 =
    document.getElementById("whatsappBtn2");

if (whatsappBtn2) {

    whatsappBtn2.addEventListener("click", function (e) {

        e.preventDefault();

        openWhatsApp(
            "Hello Tanwar Mattresses, I want to know more about your mattress collection."
        );

    });

}


/* Floating WhatsApp */

const whatsappFloat =
    document.getElementById("whatsappFloat");

if (whatsappFloat) {

    whatsappFloat.addEventListener("click", function (e) {

        e.preventDefault();

        openWhatsApp(
            "Hello Tanwar Mattresses, I am interested in buying a mattress. Please share details."
        );

    });

}


/* =========================================================
   ENQUIRY FORM
========================================================= */

const enquiryForm =
    document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const requirement =
            document.getElementById("requirement").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !phone) {

            alert(
                "Please enter your name and phone number."
            );

            return;

        }


        const whatsappMessage =

            `Hello Tanwar Mattresses,

Name: ${name}

Phone: ${phone}

Requirement: ${requirement || "Not specified"}

Message:
${message || "I would like to know more about your mattresses."}

I found Tanwar Mattresses website and would like more information.`;


        openWhatsApp(whatsappMessage);

    });

}


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");


    question.addEventListener("click", function () {

        const isActive =
            item.classList.contains("active");


        /* Close all */

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });


        /* Open clicked */

        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =========================================================
   REVIEWS SLIDER
========================================================= */

const reviewCards =
    document.querySelectorAll(".review-card");

const nextReview =
    document.getElementById("nextReview");

const prevReview =
    document.getElementById("prevReview");

let currentReview = 0;


function showReview(index) {

    reviewCards.forEach(card => {

        card.classList.remove("active");

    });

    reviewCards[index].classList.add("active");

}


if (nextReview) {

    nextReview.addEventListener("click", function () {

        currentReview++;

        if (currentReview >= reviewCards.length) {

            currentReview = 0;

        }

        showReview(currentReview);

    });

}


if (prevReview) {

    prevReview.addEventListener("click", function () {

        currentReview--;

        if (currentReview < 0) {

            currentReview =
                reviewCards.length - 1;

        }

        showReview(currentReview);

    });

}


/* Auto slider */

setInterval(function () {

    currentReview++;

    if (currentReview >= reviewCards.length) {

        currentReview = 0;

    }

    showReview(currentReview);

}, 6000);


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 700) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".product-card, .comfort-card, .process-item, .gallery-item, .about-image, .about-content"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", function () {

        this.style.background =
            "linear-gradient(135deg,#ddd5c8,#aaa092)";

        this.style.minHeight = "100%";

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${current}`) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   PRODUCT ENQUIRY
========================================================= */

document.querySelectorAll(".product-info a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const product =
            this.closest(".product-card")
                .querySelector("h3")
                .textContent;

        openWhatsApp(
            `Hello Tanwar Mattresses,

I am interested in the "${product}" mattress.

Please share price, available sizes and other details.`
        );

    });

});


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "Tanwar Mattresses website loaded successfully."
);