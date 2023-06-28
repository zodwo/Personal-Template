const sections = document.querySelectorAll(".section");

menuItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        let linkcontent = e.target.textContent.toLowerCase();
        Test(linkcontent);
    });
});

function Test(e) {
    sections.forEach((section) => {
        if (section.id == e) {
            section.classList.add("section-active-show");
        } else {
            section.classList.remove("section-active-show");
        }
    });
}
