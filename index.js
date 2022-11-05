// the menu
const nav = document.querySelector(".primary-navigation");
// the button
const navToggle = document.querySelector(".mobile-nav-toggle");

//when someone clicks the hamburger menu,
navToggle.addEventListener("click", () => {

  //if the nav is closed, open it,
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false)
  }
  // if nav is open, close it
});
