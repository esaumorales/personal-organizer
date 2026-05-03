import { loadComponent } from "./utils.js";
import { initSidebar } from "./components/sidebar.js";
import { initGreeting } from "./components/greeting.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("sidebar", "../components/sidebar.html");

    initSidebar();

    await loadComponent("dashboard", "../components/greeting.html");
    initGreeting();

    loadComponent("header", "../components/header.html");
    loadComponent("cards", "../components/cards.html");
    loadComponent("calendar", "../components/calendar.html");
    loadComponent("tasks", "../components/tasks.html");
    loadComponent("streak", "../components/streak.html");
});