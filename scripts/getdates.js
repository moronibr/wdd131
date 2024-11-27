
window.onload = function () {
    const year = document.querySelector("#year");
    const today = new Date();
    year.innerHTML = `${today.getFullYear()}`;
};

// select the DOM elements for output
const full = document.querySelector("#full");
const worldfull = document.querySelector("#world-full");
const short = document.querySelector("#short");
const medium = document.querySelector("#medium");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const dayofweek = document.querySelector("#dayofweek");

// use the date object
const today = new Date();

full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
worldfull.innerHTML = `BRAZIL: <span class="highlight">${new Intl.DateTimeFormat(
	"en-UK",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;

