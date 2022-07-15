// select the corresponding button
const scrollBtn = document.querySelector(".btn");

//show the button visibilty in case scrolling is bigger than 20px
const btnVisibility = () => {
  if (window.scrollY > 20) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
};

//this is a fuction for call the upper function for the visibility
document.addEventListener("scroll", () => {
  btnVisibility();
});

//this is a method for going bot to top
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
