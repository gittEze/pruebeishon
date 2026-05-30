// =====================================
// PORTFOLIO DIDÁCTICA II (ACTUALIZADO)
// =====================================


// =====================================
// ELEMENTOS
// =====================================

const taskWrapper = document.getElementById("actividades-wrapper");

const contentWrapper = document.getElementById("content-wrapper");

const contentFrame = document.getElementById("content-frame");

const sectionTitle = document.getElementById("section-title");

const backButtonContainer = document.getElementById("back-button-container");

const backButton = document.getElementById("back-to-list");

const taskButtons = document.querySelectorAll(".actividad-button");

const navbar = document.querySelector(".navbar");

const clock = document.getElementById("live-clock");


// =====================================
// ABRIR ACTIVIDAD (CLICK EN TARJETA)
// =====================================

taskButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        // evitar que el click en el botón lateral dispare el visor
        if (e.target.closest(".activity-side-button")) return;

        e.preventDefault();

        const title = button.dataset.title;
        const link = button.dataset.link;

        sectionTitle.textContent = title;

        taskWrapper.classList.add("fade-out");

        setTimeout(() => {

            taskWrapper.classList.add("hidden");

            contentFrame.src = "";

            contentWrapper.classList.remove("hidden", "fade-out", "show");

            void contentWrapper.offsetHeight;

            requestAnimationFrame(() => {

                contentWrapper.classList.add("show");

                contentFrame.src = link;

                backButtonContainer.classList.add("visible");

            });

        }, 250);

    });

});


// =====================================
// VOLVER AL LISTADO
// =====================================

function goBack() {

    contentWrapper.classList.remove("show");

    contentWrapper.classList.add("fade-out");

    setTimeout(() => {

        contentFrame.src = "";

        contentWrapper.classList.remove("fade-out");

        contentWrapper.classList.add("hidden");

        taskWrapper.classList.remove("hidden", "fade-out", "show");

        void taskWrapper.offsetHeight;

        requestAnimationFrame(() => {

            taskWrapper.classList.add("show");

            sectionTitle.textContent = "Actividades:";

            backButtonContainer.classList.remove("visible");

        });

    }, 250);

}


// =====================================
// BOTÓN VOLVER
// =====================================

backButton.addEventListener("click", goBack);


// =====================================
// ESC PARA VOLVER
// =====================================

document.addEventListener("keydown", (e) => {

    if (
        e.key === "Escape" &&
        !contentWrapper.classList.contains("hidden")
    ) {
        goBack();
    }

});


// =====================================
// ANIMACIÓN TARJETAS
// =====================================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.08}s`;

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });

});


// =====================================
// RELOJ
// =====================================

function updateClock() {

    if (!clock) return;

    const now = new Date();

    const time = now.toLocaleTimeString("es-UY", {
        hour: "2-digit",
        minute: "2-digit"
    });

    clock.textContent = time;

}

setInterval(updateClock, 1000);
updateClock();


// =====================================
// NAVBAR SCROLL
// =====================================

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 15) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =====================================
// ANIMACIÓN DE ENTRADA
// =====================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    window.scrollTo(0, 0);

});
