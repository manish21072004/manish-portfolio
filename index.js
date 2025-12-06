const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function updateCarousel() {
  cards.forEach((card) =>
    card.classList.remove("active", "prev1", "next1", "prev2", "next2")
  );

  const total = cards.length;
  const prev2 = (index - 2 + total) % total;
  const prev1 = (index - 1 + total) % total;
  const next1 = (index + 1) % total;
  const next2 = (index + 2) % total;

  cards[index].classList.add("active");
  cards[prev1].classList.add("prev1");
  cards[next1].classList.add("next1");
  cards[prev2].classList.add("prev2");
  cards[next2].classList.add("next2");
}

function nextCard() {
  index = (index + 1) % cards.length;
  updateCarousel();
}

function prevCard() {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
}

prevBtn?.addEventListener("click", prevCard);
nextBtn?.addEventListener("click", nextCard);

updateCarousel();


// MENU ICON FIXED
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});



