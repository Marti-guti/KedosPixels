let buttons = document.querySelectorAll(".goToConfigurator");

buttons.forEach(btn => {
btn.addEventListener("click", () => {
    let value = btn.id;
    window.location.href = "../public/FinalConfigurator.html?lang=" + value;
})
});

// <button id="it" class="goToConfigurator">vai</button>