/* =========================================================
   DIGITALFLOW — ABOUT + BLOG JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelector(".mobile-menu-links");
const closeMenu = document.querySelector(".close-menu");
const backdrop = document.querySelector('.menu-backdrop');


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("open");
        mobileMenuLinks.classList.add("active");
        document.body.style.overflow = "hidden";
        backdrop.classList.add('active');
    });

}

if (closeMenu && mobileMenu) {

    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        mobileMenuLinks.classList.remove("active");
        document.body.style.overflow = "";
        backdrop.classList.remove('active');
    });

}

backdrop.addEventListener('click', () => {
    mobileMenu.classList.remove("open");
    backdrop.classList.remove('active');
});



/* CLOSE MENU WHEN A LINK IS CLICKED */

const mobileLinks = document.querySelectorAll(".mobile-menu-links a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        document.body.style.overflow = "";

    });

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

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
   BLOG FILTER
   ========================================================= */

const categoryButtons =
    document.querySelectorAll(".category");

const blogCards =
    document.querySelectorAll(".blog-card");

const blogSearch =
    document.getElementById("blogSearch");

const noResults =
    document.getElementById("noResults");


let currentCategory = "all";


function filterArticles() {

    const searchText =
        blogSearch
            ? blogSearch.value.toLowerCase().trim()
            : "";

    let visibleCount = 0;


    blogCards.forEach(card => {

        const category =
            card.dataset.category;

        const title =
            card.dataset.title.toLowerCase();


        const matchesCategory =
            currentCategory === "all" ||
            category === currentCategory;


        const matchesSearch =
            title.includes(searchText);


        if (matchesCategory && matchesSearch) {

            card.classList.remove("hidden");

            visibleCount++;

        } else {

            card.classList.add("hidden");

        }

    });


    if (noResults) {

        if (visibleCount === 0) {

            noResults.classList.add("show");

        } else {

            noResults.classList.remove("show");

        }

    }

}


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentCategory =
            button.dataset.category;


        filterArticles();

    });

});


if (blogSearch) {

    blogSearch.addEventListener(
        "input",
        filterArticles
    );

}


/* =========================================================
   NEWSLETTER
   ========================================================= */

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterMessage =
    document.getElementById("newsletterMessage");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                newsletterForm.querySelector(
                    "input[type='email']"
                ).value.trim();


            if (!email) {
                return;
            }


            newsletterMessage.textContent =
                "Thanks! You're on the list.";


            newsletterForm.reset();

        }
    );

}


/* =========================================================
   BUTTON MICRO-INTERACTION
   ========================================================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn, .white-btn, .header-contact"
    );


buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-3px)";

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "";

    });

});