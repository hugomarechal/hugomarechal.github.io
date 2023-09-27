const links = document.querySelectorAll("div li");

icons.addEventListener("click", () => {
   document.getElementById("mobile_menu").classList.toggle("active");
})
links.forEach(link => link.addEventListener("click", () => {
    document.getElementById("mobile_menu").classList.remove("active");
}))