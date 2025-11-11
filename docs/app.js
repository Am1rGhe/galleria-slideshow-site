"use strict";

// navbar button :
const navBtn = document.getElementById("navBtn");

const bentoGrid = document.querySelector(".bento-grid");
const mainSlideshow = document.querySelector(".main-slidshow");
const slideshows = document.querySelectorAll(".slideshow");
const image = document.querySelectorAll(".img-container");

// footer :
const footerName = document.querySelector(".footer-info-name");
const footerArtist = document.querySelector(".footer-info-artist");
const progress = document.querySelector(".progress");
const backButton = document.querySelector(".back");
const nextButton = document.querySelector(".next");

// overlay :
const overlay = document.querySelector(".overlay");

// global variable :
let currentId = 1;

// global function :

function changeSlideshow(current) {
  //hide the bento grid :
  navBtn.textContent = "STOP SLIDESHOW";
  bentoGrid.classList.add("hidden");
  mainSlideshow.classList.remove("hidden");
  //make all the slideshows hidden just in case
  slideshows.forEach((slideshow) => slideshow.classList.add("hidden"));

  // now remove the hidden from the slidshow we want :
  const currentSlideshow = document.getElementById(`slideshow-${current}`);
  const nextSlideshow = document.getElementById(
    `slideshow-${parseInt(current) + 1}`
  );
  const previousSlideshow = document.getElementById(
    `slideshow-${parseInt(current) - 1}`
  );

  if (currentSlideshow) {
    currentSlideshow.classList.remove("hidden");
    footerName.textContent = currentSlideshow.querySelector("h3").textContent;
    footerArtist.textContent = currentSlideshow.querySelector(
      ".info-container-name > p"
    ).textContent;
    progress.style.setProperty(`--progress`, `${(current * 100) / 15}%`);
    // now we manipulate the buttons :
    if (current == 15) {
      nextButton.classList.add("disabled");
    } else {
      nextButton.classList.remove("disabled");
    }
    if (current == 1) {
      backButton.classList.add("disabled");
    } else {
      backButton.classList.remove("disabled");
    }
  }
}

bentoGrid.addEventListener("click", (e) => {
  const template = e.target.closest("[id^='template-']");

  if (!template) return;

  // get id number :
  const id = parseInt(template.id.split("-")[1]);
  currentId = id;
  console.log(`Clicked template: ${id}`);
  changeSlideshow(currentId);
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentId == 15) return;
  currentId++;
  changeSlideshow(currentId);
});

backButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentId == 1) return;
  currentId--;
  changeSlideshow(currentId);
});

navBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentId = 1;
  let content = navBtn.textContent;
  if (content == "START SLIDESHOW") {
    navBtn.textContent = "STOP SLIDESHOW";
    changeSlideshow(currentId);
  } else if (content == "STOP SLIDESHOW") {
    navBtn.textContent = "START SLIDESHOW";

    slideshows.forEach((slideshow) => slideshow.classList.add("hidden"));
    mainSlideshow.classList.add("hidden");
    bentoGrid.classList.remove("hidden");
  }
});

// show the image :
image.forEach((imgContainer) => {
  imgContainer.addEventListener("click", (e) => {
    const clickedImg = imgContainer.querySelector("img");
    //create a clone of the image so we can put it in the middle
    const enlargedImage = clickedImg.cloneNode();
    overlay.innerHTML = "";
    overlay.appendChild(enlargedImage);
    overlay.classList.remove("hidden");
  });
});

overlay.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("enlarged-img")) {
    overlay.classList.add("hidden");
    overlay.innerHTML = "";
  }
});
