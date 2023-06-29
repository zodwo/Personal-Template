const portfolio = document.querySelectorAll(".portfolios ");
const portfolioBUTTON = document.querySelectorAll(".btns");

portfolioBUTTON.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target.classList.contains("active");

        if (!target) {
            portfolioBUTTON.forEach((btn) => {
                btn.classList.remove("active");
            });
        }
        e.target.classList.add("active");
    });
});

portfolioBUTTON.forEach((btn) => {
    let btnContent = btn.textContent.toLowerCase();
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        portfolio.forEach((ports) => {
            portsTEXT = ports.querySelector("p").textContent.toLowerCase();
            if (btnContent == "all") {
                display(ports);
            } else if (btnContent == portsTEXT) {
                display(ports);
            } else {
                displayNone(ports);
            }
        });
    });
});

function displayNone(ports) {
    ports.style.display = "none";
}

function display(ports) {
    ports.style.display = "block";
}
