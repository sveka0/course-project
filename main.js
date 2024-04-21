function createImages(container, count) {
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = "images/IMAGE (10).png";
    img.alt = "col";
    img.className = "img-cont-col";
    img.width = 17;
    container.insertBefore(img, container.firstChild);
  }
}

const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const column3 = document.querySelector(".column3");
const column4 = document.querySelector(".column4");
const column5 = document.querySelector(".column5");
const column6 = document.querySelector(".column6");

createImages(column1, 5);
createImages(column2, 5);
createImages(column3, 5);
createImages(column4, 5);
createImages(column5, 5);
createImages(column6, 5);
