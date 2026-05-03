export function initSidebar() {
    const btnNuevaTarea = document.querySelector(".sidebar_main-title-btn button");
    if (btnNuevaTarea) {
        btnNuevaTarea.addEventListener("click", () => {
        });
    }

    const navItems = document.querySelectorAll(".sidebar_main-nav-item li");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".sidebar_main-nav-item .active").forEach(el => {
                el.classList.remove("active");
                el.classList.add("inactive");
            });

            item.classList.remove("inactive");
            item.classList.add("active");
        });
    });
}
