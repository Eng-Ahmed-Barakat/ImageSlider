const slides = document.querySelectorAll(".slider img");
const prevbutton = document.querySelector(".prev-btn");
const nextbutton = document.querySelector(".next-btn");
const imgid = document.querySelector(".img-id");
const galarycontaner = document.querySelector(".galry-contaner");
galarycontaner.style.gridTemplateColumns = `repeat(${slides.length},1fr)`;
let currntimageid = 0;
updatebutton();
function getimagid(n) {
  slides[currntimageid].classList.remove("active");
  currntimageid = (n + slides.length) % slides.length;
  updateactiveclass(currntimageid);
  slides[currntimageid].classList.add("active");

  updatebutton();
}

prevbutton.onclick = () => {
  getimagid(currntimageid - 1);
};
nextbutton.onclick = () => {
  getimagid(currntimageid + 1);
};

function updatebutton() {
  prevbutton.disabled = currntimageid == 0;
  nextbutton.disabled = currntimageid == slides.length - 1;
  imgid.innerHTML = slides[currntimageid].getAttribute("alt");
}
slides.forEach((img, index) => {
  const thumbnail = img.cloneNode();
  thumbnail.addEventListener("click", () => {
    getimagid(index);
  });
  galarycontaner.appendChild(thumbnail);
});

function updateactiveclass(index) {
  galarycontaner.querySelectorAll("img").forEach((img, i) => {
    img.classList.toggle("active", i == index);
  });
}
