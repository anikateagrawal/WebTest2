
th = document.querySelectorAll('[name="theme"]');
// console.log(th);
th.forEach((theme) => {
  theme.addEventListener("click", () => localStorage.setItem("theme", theme.id));
});

function app() {
  st = localStorage.getItem("theme");
  th.forEach((theme) => {
    if (theme.id === st) {
      theme.checked = true;
    }
  });
}
document.onload = app();
