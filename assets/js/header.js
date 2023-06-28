const menuItem = document.querySelectorAll(".menu-links li a");
const header = document.querySelector("#header");
const container = header.querySelector(".container");
const deletedItem = document.querySelectorAll(".deleted");
const body = document.querySelector("body");

let windowWIDTH = window.innerWidth;

function CheckWinowSize() {
    if (windowWIDTH > 991) {
        centerToTop();
    } else {
        // ChechkMobileSizeForDeletedItem();
        // container.style.display = "block";
        header.style.backgroundColor = "transparent";
    }
}

function RemoveHeightHEADER() {
    header.classList.remove("header-min-height");
    header.classList.add("header-max-height");
}
function addHeightHEADER() {
    header.classList.add("header-min-height");
    header.classList.remove("header-max-height");
}

function deletedItemDn() {
    deletedItem.forEach((item) => {
        item.classList.add("display-nonee");
    });
}

function showDeletedItem() {
    deletedItem.forEach((item) => {
        item.classList.remove("display-nonee");
    });
}

function centerToTop() {
    menuItem.forEach((element) => {
        element.addEventListener("click", (e) => {
            if (e.target.textContent != "Home") {
                notEqualToHOME();
            } else {
                EqualToHOME();
            }
        });
    });
}

function notEqualToHOME() {
    container.classList.add("flex-boxsm");
    container.classList.remove("display-block");
    body.classList.add("scroll");

    header.classList.add("header-top");

    addHeightHEADER();
    deletedItemDn();
    // checkContainerClass()
}

function EqualToHOME() {
    container.classList.remove("flex-boxsm");
    container.classList.add("display-block");

    header.classList.remove("header-top");
    body.classList.remove("scroll");

    RemoveHeightHEADER();
    showDeletedItem();
    // checkContainerClass()
}

function ChechkMobileSizeForDeletedItem(e) {
    if (windowWIDTH < 991) {
        if (e != "Home") {
            body.classList.add("scroll");
            deletedItemDn();
            addHeightHEADER();

        } else {
            body.classList.remove("scroll");
            showDeletedItem();
            RemoveHeightHEADER();
        }
    } else {
        showDeletedItem();
        RemoveHeightHEADER();
        navbar.classList.remove("DeactiveNAV");
        // navbar.classList.add("activeNAV"); sil bunu
    }
}

menuItem.forEach((items) => {
    items.addEventListener("click", (it) => {
        if (windowWIDTH < 991) {
            ChechkMobileSizeForDeletedItem(it.target.textContent);
            console.log(it.target.textContent);
        }
    });
});

CheckWinowSize();

window.addEventListener("resize", () => {
    windowWIDTH = window.innerWidth;
    CheckWinowSize();
    // ChechkMobileSizeForDeletedItem();
});
