const snbBtn = document.querySelector(".snb .btn-menu");
const subMenu = document.querySelector(".snb .sub-menu");


// window.onresize = function(event){
//   let winWidth = window.innerWidth;
//   if (winWidth >= "969") {
//     subMenu.classList.add("hide")
//   }
// }

window.addEventListener("resize", () => {
  if (window.innerWidth >= "969") {
    subMenu.classList.add("hide");
  }
});



snbBtn.addEventListener("click", function () {
  if (subMenu.classList.contains("hide")) {
  subMenu.classList.remove("hide");
} else {
  subMenu.classList.add("hide");
}
});