document.addEventListener("DOMContentLoaded", () => {
  const uls = document.getElementsByClassName("list-modify");

  if (window.innerWidth > 600) {
    for (let i = 0; i < uls.length; i++) {
      const element = uls[i];

      element.classList.add("list-group-horizontal");
    }
  }
});
