const menuIcons = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const closeMenuIcons = document.querySelector(".x-block");

window.addEventListener("resize", () => {
    CheckSize2();
});

CheckSize2();

function CheckSize2() {
    //
    if (window.innerWidth < 991) {
        navbar.classList.remove("window991pxNAVBAR")
        header.classList.remove("header-top");

        // showDeletedItem();
        menuIcons.addEventListener("click", () => {
            menuIcons.classList.add("active");
            CheckIsActive();
        });


        function CheckIsActive() {
            if (menuIcons.classList.contains("active")) {
                navbar.classList.remove("DeactiveNAV")
                navbar.classList.add("activeNAV")
                closeMenuIcons.style.display = "block";
                // console.log("object1");
            } else if(!menuIcons.classList.contains("active")){
                navbar.classList.remove("activeNAV")
                navbar.classList.add("DeactiveNAV")
                closeMenuIcons.style.display = "none";
                header.style.height = "100vh";
                // console.log("object2");
            }
        }

        function CloseButton() {
            menuIcons.classList.remove("active");
            CheckIsActive();
        }

        closeMenuIcons.addEventListener("click", CloseButton);
        // Call function
        CheckIsActive();
    } else {
        navbar.classList.add("window991pxNAVBAR")
        menuIcons.classList.remove("active");
        closeMenuIcons.style.display = "none";
    }
}

/// ************************************
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((a) => {
    a.addEventListener("click", () => {
        if (!a.classList.contains("activex")) {
            navLink.forEach((active) => {
                active.classList.remove("activex");
            });
        }

        a.classList.add("activex");
    });
});

//*************************************** */
navbar.addEventListener("click", () => {
    menuIcons.classList.remove("active");
    CheckSize2();
});