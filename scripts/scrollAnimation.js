document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tabs button");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });
});
