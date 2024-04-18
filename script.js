/* ================= Amazon clone Website ================= */

// window onload function
window.onload = function () {
  mainFunction();
};

// mainFunction
function mainFunction() {
  // prevBtn addEventListener
  prevBtn.addEventListener("click", function () {
    if (n > 0) {
      n--;
    } else {
      n = selectImg.length - 1;
    }
    changeSlide();
  });
  //   nextBtn addEventListener
  nextBtn.addEventListener("click", function () {
    if (n < selectImg.length - 1) {
      n++;
    } else {
      n = 0;
    }
    changeSlide();
  });
}

// select all html tag
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const selectImg = document.querySelectorAll(".heading-slider ul img");

// changeSlide function
let n = 0;
function changeSlide() {
  for (let i = 0; i < selectImg.length; i++) {
    selectImg[i].style.display = "none";
  }
  selectImg[n].style.display = "block";
}

// Select all html tag
const scrollContainer = document.querySelectorAll(".best-seller-content");

for (const item of scrollContainer) {
  item.addEventListener("wheel", function (evt) {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}

// Deals Under Section JS
const productContainer = document.querySelectorAll(".deals-product-container");

for (let item of productContainer) {
  item.addEventListener("wheel", function (evt) {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
