let maincolor = localStorage.getItem("color_option");

if (maincolor !== null) {
    document.documentElement.style.setProperty(
        "--main--color",
        localStorage.getItem("color_option")
    );
}

let landingpage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg", "02.jpg", "03.png", "04.jpg", "05.png"];

landingpage.style.backgroundImage = `url("IMG/04.jpg")`;

let backgroundOption = true;
let backgroundInterval;

function normalizebackground() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);

            landingpage.style.backgroundImage =
                `url("IMG/` + imgsArray[randomNumber] + `")`;
        }, 1000);
    }
}
addEventListener("");
let box = document.querySelector(".settings-box");
let setting = document.querySelector(".fa-gear");

setting.onclick = function() {
    box.classList.toggle("open");
    setting.classList.toggle("fa-spin");
};

const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty(
            "--main--color",
            e.target.dataset.color
        );
        localStorage.setItem("color_option", e.target.dataset.color);
        HandleActive(e);
    });
});
const Random = document.querySelectorAll(".random-backgrounds span");
Random.forEach((span) => {
    span.addEventListener("click", (e) => {
        HandleActive(e);
        if (e.target.dataset.background === "yes") {
            normalizebackground();
            backgroundOption = true;
            localStorage.setItem("background_optin", true);
        } else {
            clearInterval(backgroundInterval);
            backgroundOption = false;
            localStorage.setItem("background_optin", false);
        }
    });
});

let backgroundlocal = localStorage.getItem("background_option");

if (backgroundlocal !== null) {
    if (backgroundlocal === "true") {
        backgroundOption = true;
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
        backgroundOption = false;
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}

document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
});

let skills = document.querySelector(".skills .skill-progress");

window.onscroll = function() {
    let skillofset = skills.offsetTop;
    let skillheight = skills.offsetHeight;
    let windowheight = this.innerHeight;
    let windowscroll = this.pageYOffset;

    if (windowscroll > skillofset + skillheight - windowheight) {
        let allskills = document.querySelectorAll(
            ".skills .skill-box .skill-progress span"
        );
        allskills.forEach((skill) => {
            skill.style.width = skill.dataset.progress;
        });
    }
};

let Gallery = document.querySelectorAll(".gallery .imgs-box img");

Gallery.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");
        overlay.className = "popup";
        document.body.appendChild(overlay);

        let popupbox = document.createElement("div");
        popupbox.className = "popup-box";

        let close = document.createElement("span");

        let closeText = document.createTextNode("X");

        close.appendChild(closeText);

        close.className = "close-pop";

        popupbox.appendChild(close);

        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupbox.appendChild(imgHeading);
        }

        let popubImage = document.createElement("img");

        popubImage.src = img.src;

        popupbox.appendChild(popubImage);

        document.body.appendChild(popupbox);

        close.onclick = function() {
            close.parentNode.remove();
            document.querySelector(".popup").remove();
        };
    });
});
const bullets = document.querySelectorAll(".nav-bullets .bullets");

const links = document.querySelectorAll(".links a");

function Scrollinto(elements) {
    elements.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}

Scrollinto(bullets);
Scrollinto(links);

function HandleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
}

let bullet = document.querySelectorAll(".bullets-options span");

let bulletcontainer = document.querySelector(".nav-bullets");
let bulletlocal = localStorage.getItem("bullet-option");

if (bulletlocal !== null) {
    bullet.forEach((span) => {
        span.classList.remove("active");
    });

    if (bulletlocal === "block") {
        bulletcontainer.style.display = "block";
        document.querySelector(".bullets-options .yes").classList.add("active");
    } else {
        bulletcontainer.style.display = "none";
        document.querySelector(".bullets-options .no").classList.add("active");
    }
}

bullet.forEach((span) => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === "show") {
            bulletcontainer.style.display = "block";
            localStorage.setItem("bullet-option", "block");
        } else {
            bulletcontainer.style.display = "none";
            localStorage.setItem("bullet-option", "none");
        }
        HandleActive(e);
    });
});
let reset = document.querySelector(".reset");

reset.onclick = function() {
    localStorage.clear();
    window.location.reload();
};
let togllebtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");

togllebtn.onclick = function(e) {
    e.stopPropagation();
    this.classList.toggle("menu-active");
    tlinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
    if (e.target !== togllebtn && e.target !== tlinks) {
        tlinks.classList.remove("open");
        togllebtn.classList.remove("menu-active");
    }
});
tlinks.onclick = function(e) {
    e.stopPropagation();
};