
/* =====================================
   ELEMENTOS
===================================== */

const taskButtons = document.querySelectorAll(".actividad-button");

const contentWrapper = document.getElementById("content-wrapper");
const contentFrame = document.getElementById("content-frame");

const sectionTitle = document.getElementById("section-title");

const backButtonContainer = document.getElementById("back-button-container");
const backButton = document.getElementById("back-to-list");

const actividadesWrapper = document.getElementById("actividades-wrapper");

const navbar = document.querySelector(".navbar");
const clock = document.getElementById("live-clock");


/* =====================================
   ABRIR ACTIVIDAD
===================================== */

taskButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        const title = button.dataset.title;
        const link = button.dataset.link;

        // cambiar título
        sectionTitle.textContent = title;

        // ocultar lista
        actividadesWrapper.classList.add("fade-out");

        setTimeout(() => {

            actividadesWrapper.classList.add("hidden");

            // reset iframe
            contentFrame.src = "";

            // mostrar visor
            contentWrapper.classList.remove("hidden", "fade-out");

            // reflow
            void contentWrapper.offsetHeight;

            requestAnimationFrame(() => {

                contentWrapper.classList.add("show");

                contentFrame.src = link;

                backButtonContainer.classList.add("visible");

            });

        }, 250);

    });

});


/* =====================================
   VOLVER
===================================== */

function goBack() {

    contentWrapper.classList.remove("show");
    contentWrapper.classList.add("fade-out");

    setTimeout(() => {

        contentFrame.src = "";

        contentWrapper.classList.add("hidden");
        contentWrapper.classList.remove("fade-out");

        actividadesWrapper.classList.remove("hidden", "fade-out");

        void actividadesWrapper.offsetHeight;

        requestAnimationFrame(() => {

            actividadesWrapper.classList.add("show");

            sectionTitle.textContent = "Actividades:";

            backButtonContainer.classList.remove("visible");

        });

    }, 250);

}

backButton.addEventListener("click", goBack);


/* =====================================
   ESC PARA VOLVER
===================================== */

document.addEventListener("keydown", (e) => {

    if (
        e.key === "Escape" &&
        !contentWrapper.classList.contains("hidden")
    ) {
        goBack();
    }

});


/* =====================================
   NAVBAR SCROLL
===================================== */

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 15) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================
   RELOJ
===================================== */

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


/* =====================================
   ANIMACIÓN ENTRADA
===================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    window.scrollTo(0, 0);

});
