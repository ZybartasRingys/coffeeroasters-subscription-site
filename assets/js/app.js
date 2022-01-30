const hamBtn = document.getElementById("ham-btn");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.getElementById("close-btn");
const cardsText = document.querySelectorAll("#text");
const arrow = document.querySelectorAll(".arrow");
const collapseBtn = document.querySelectorAll(".question");
const listItem = document.querySelectorAll(".list-item");
const valueSpan = document.getElementsByClassName("value");

//cards
const firstCards = document.querySelectorAll(".first-card");
const secondCards = document.querySelectorAll(".second-card");
const thirdCards = document.querySelectorAll(".third-card");
const fourthCards = document.querySelectorAll(".fourth-card");
const fifthCards = document.querySelectorAll(".fifth-card");

//spans
const howSpan = document.getElementsByClassName("how");
const typeSpan = document.getElementsByClassName("type");
const howMuchSpan = document.getElementsByClassName("how-much");
const grindSpan = document.getElementsByClassName("grind");
const deliverSpan = document.getElementsByClassName("deliver");

const weekSpan = document.getElementById("week");
const twoWeekSpan = document.getElementById("two-weeks");
const monthSpan = document.getElementById("month");

//  arrays

const cardsArr = Array.from(firstCards);
const secondArr = Array.from(secondCards);
const fifthArr = Array.from(fifthCards);
const hArr = Array.from(cardsText);
const listArr = Array.from(listItem);
const arrowArr = Array.from(arrow);

/* Mobile nav  */

hamBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");

  hamBtn.style.display = "none";
  closeBtn.style.display = "block";

  closeBtn.addEventListener("click", () => {
    hamBtn.style.display = "block";
    closeBtn.style.display = "none";
    mobileNav.classList.remove("active");
  });
});

// How do you drink your coffe cards functionality

cardsArr.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("active");
  });
  //
  card.addEventListener("click", function (e) {
    howSpan[0].innerHTML = e.target.firstElementChild.innerText;
    howSpan[1].innerHTML = e.target.firstElementChild.innerText;
  });
});

// Second cards functionality

secondCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("active");
  });
  card.addEventListener("click", function (e) {
    typeSpan[0].innerHTML = e.target.firstElementChild.innerText;
    typeSpan[1].innerHTML = e.target.firstElementChild.innerText;
  });
});

// third cards functionality

thirdCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("active");
  });
  card.addEventListener("click", function (e) {
    howMuchSpan[0].innerHTML = e.target.firstElementChild.innerText;
    howMuchSpan[1].innerHTML = e.target.firstElementChild.innerText;
  });
});

// fourth cards functionality

fourthCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("active");
  });
  card.addEventListener("click", function (e) {
    grindSpan[0].innerHTML = e.target.firstElementChild.innerText;
    grindSpan[1].innerHTML = e.target.firstElementChild.innerText;
  });
});

// fourth cards functionality

fifthCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("active");
  });
  card.addEventListener("click", function (e) {
    deliverSpan[0].innerHTML = e.target.firstElementChild.innerText;
    deliverSpan[1].innerHTML = e.target.firstElementChild.innerText;
  });

  card.addEventListener("click", function (e) {
    for (let i = 0; i < fifthArr.length; i++) {
      console.log(fifthArr[i]);
    }
  });
});

//event for options list items

listArr.forEach((item) => {
  item.addEventListener("click", function (e) {});
});
//click events for arrows movement

arrow.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("active");
  });
});

// click on current card function
