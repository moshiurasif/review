const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "images/02-5.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed quibusdam iure istequo, maxime doloremque consectetur minima quod excepturi commodi vero, inventore ipsa in.",
  },
  {
    id: 2,
    name: "anna jonson",
    job: "web desinger",
    img: "images/02.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed quibusdam iure istequo, maxime doloremque consectetur minima quod excepturi commodi vero, inventore ipsa in.",
  },
  {
    id: 3,
    name: "cristian lorens",
    job: "React developer",
    img: "images/03-5.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed quibusdam iure istequo, maxime doloremque consectetur minima quod excepturi commodi vero, inventore ipsa in.",
  },
  {
    id: 4,
    name: "hurram khorani",
    job: "web developer",
    img: "images/04-2.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed quibusdam iure istequo, maxime doloremque consectetur minima quod excepturi commodi vero, inventore ipsa in.",
  },
  {
    id: 5,
    name: "max smith",
    job: "web developer",
    img: "images/01-6.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed quibusdam iure istequo, maxime doloremque consectetur minima quod excepturi commodi vero, inventore ipsa in.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;
// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
