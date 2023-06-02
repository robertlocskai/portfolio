//navbar appear

const showOnPx = 100;
const backToTopButton = document.querySelector(".hiddenBar")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hiddenBar")
  } else {
    backToTopButton.classList.add("hiddenBar")
  }
})