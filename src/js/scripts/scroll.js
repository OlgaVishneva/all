export default function scroll() {
  document.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    const sticky = header.offsetTop;
  
    if (window.pageYOffset > sticky) {
      header.classList.add("_sticky");
    } else {
      header.classList.remove("_sticky");
    }
  });
}