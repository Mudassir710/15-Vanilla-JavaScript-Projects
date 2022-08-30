// local reviews data
import reviews from './data.js';
  


//selector items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const surpriseMeButton = document.querySelector('.random-btn');

let currIndex = 0;
let length = reviews.length;

const setPersonReview = (person) => {
  img.src = person.img;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
};

prevButton.addEventListener('click', () => {
  currIndex = (currIndex === 0) ? (length - 1) : --currIndex;
  setPersonReview(reviews[currIndex]);
});

nextButton.addEventListener('click', () => {
  currIndex = (++currIndex)%length;
  setPersonReview(reviews[currIndex]);
})

surpriseMeButton.addEventListener('click', () => {
  let index  = Math.floor(Math.random() * length);
  setPersonReview(reviews[index]);
});