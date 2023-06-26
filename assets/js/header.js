const menuItem = document.querySelectorAll(".menu-links li a");
const header = document.querySelector("#header");
const container = header.querySelector(".container");
const deletedItem = document.querySelectorAll(".deleted")


function centerToTop(){
    menuItem.forEach((element) => {
        element.addEventListener("click", (e) => {
            if (e.target.textContent != "Home") {
                header.classList.add("header-top");
                header.style.height = "min-content";
                container.style.display = "flex";
                deletedItem.forEach(item =>{
                    item.style.display = 'none'
                })
                
            } else {
                header.classList.remove("header-top");
                header.style.height = "100%";
                container.style.display = "block";
                deletedItem.forEach(item =>{
                    item.style.display = 'flex'
                })
            }
        });
    });
}

centerToTop()

window.addEventListener("resize",centerToTop)