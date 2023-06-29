const progress = document.querySelectorAll(".progressm");
const progressItem = document.querySelectorAll(".progress-bar");
const Valuex = document.querySelectorAll(".val");

const about = document.querySelector("#about");

function checkAbout() {
    if (about.classList.contains("section-active-show")) {
        Animation();
        console.log("YES");
    }
}

function Animation() {
    const topScroll = about.getBoundingClientRect().top;
    if (windowWIDTH < 991) {
        if (topScroll < -1500) {
            callToAnimation();
        }
    } else if (topScroll < -70) {
        callToAnimation();
    }

    if (windowWIDTH < 775) {
        if (topScroll < -1800) {
            callToAnimation();
        }
    }
}

function callToAnimation() {
    Valuex.forEach((item, index) => {
        let width = item.textContent;
        setWIDTH(progressItem[index], width);
    });
}

function setWIDTH(x, e) {
    x.style.width = e;
}

window.addEventListener("scroll", () => {
    // Animation();
    checkAbout();
});
// Animation();
checkAbout();
