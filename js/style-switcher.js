// theme light and dark mode
const dayNight = d.querySelector(".day-night");
dayNight.addEventListener("click", changeTheme);

function changeTheme() {
    if (d.body.classList.contains("dark"))
        localStorage.setItem("theme", "light")
    else 
        localStorage.setItem("theme", "dark")
    
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    d.body.classList.toggle("dark");
}

let colorSelected;
const altarnateStyles = document.querySelector(".alternate-style");

if (localStorage.getItem("color")) {
    colorSelected = localStorage.getItem("color");
    altarnateStyles.href = `../css/skins/color-${colorSelected}.css`;
}

if (localStorage.getItem("theme")) {
    let themeSelected = localStorage.getItem("theme");
    if (themeSelected === "dark") {
        d.body.classList.add("dark");
    }else {
        d.body.classList.remove("dark");
    }
}

window.addEventListener("load", () => {
    if (d.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
        // changeTheme();
    }else {
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").classList.remove("fa-sun");
    }
});

// toggle style switcher

const styleSwitcherToggler = d.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
    d.querySelector(".style-switcher").classList.toggle("open")
});

window.addEventListener("scroll", () => {
    if(d.querySelector(".style-switcher").classList.contains("open")) {
        d.querySelector(".style-switcher").classList.remove("open");
    }
})

// theme colors
const colorBtn = d.querySelector(".colors");

colorBtn.addEventListener("click", (event) => {
    colorSelected = event.target.getAttribute("data-color");
    localStorage.setItem("color", colorSelected);
    altarnateStyles.href = `../css/skins/color-${colorSelected}.css`;
    
    // Reiniciar las partículas usando la función global
    setTimeout(() => {
        if (typeof initParticles === 'function') {
            initParticles();
        }
    }, 100);
});