window.onload = function () {
    const year = document.querySelector("#year");
    const today = new Date();
    year.innerHTML = `${today.getFullYear()}`;
};