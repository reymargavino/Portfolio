// Splashscreen
function onWindowLoad() {
  setTimeout(function () {
    document.getElementById("main").style.overflow = "auto";
    document.getElementById("splashscreen").style.top = "-100vh";
  }, 2000);
  setTimeout(function () {
    document.getElementById("content").style.zIndex = "3";
  }, 3000);
}

// Navigation Menu
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const clickedMenus = document.querySelectorAll("#mext-text");

clickedMenus.forEach(menu => {
  menu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
});


// Navigation OnScroll
function onScroll() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("scroll").style.padding = "10px 20px 10px";
    document.getElementById("scroll").style.backgroundColor = "#fff";
    document.getElementById("scroll").style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.4)";
    document.getElementById("logo-text").style.color = "#000";
    document.querySelectorAll("#menu-text").forEach(function (element) {
      element.style.color = "#000";
    });
    document.querySelectorAll("#menu-burger").forEach(function (element) {
      element.style.backgroundColor = "#000";
    });
  } else {
    document.getElementById("scroll").style.padding = "25px 20px 10px";
    document.getElementById("scroll").style.backgroundColor = "transparent";
    document.getElementById("scroll").style.boxShadow = "none";
    document.getElementById("logo-text").style.color = "#fff";
    document.querySelectorAll("#menu-text").forEach(function (element) {
      element.style.color = "#fff";
    });
    document.querySelectorAll("#menu-burger").forEach(function (element) {
      element.style.backgroundColor = "#fff";
    });
  }
}

// Modal
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const images = document.querySelectorAll("[id^='certificate']");
let currentIndex = 0;

const showModal = (index) => {
  modal.style.display = "flex";
  modalImg.src = images[index].src;
  currentIndex = index;
};

images.forEach((img, index) => {
  img.addEventListener('click', () => showModal(index));
});

document.querySelector(".close").onclick = () => modal.style.display = "none";
document.querySelector(".next").onclick = () => showModal((currentIndex + 1) % images.length);
document.querySelector(".prev").onclick = () => showModal((currentIndex - 1 + images.length) % images.length);

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Execution
window.addEventListener("load", onWindowLoad);
window.addEventListener("scroll", onScroll);





