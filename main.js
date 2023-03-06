const themeToggle = document.querySelector("#theme-css");

const themeToggleFirst = document.querySelector("#first");
const themeToggleSecond = document.querySelector("#second");
const themeToggleThird = document.querySelector("#third");

function changeTheme(themeName) {
  themeToggle.href = `style/${themeName}`;
}

themeToggleFirst.addEventListener("click", () => {
  changeTheme("theme-1.css");
});

themeToggleSecond.addEventListener("click", () => {
  changeTheme("theme-2.css");
});

themeToggleThird.addEventListener("click", () => {
  changeTheme("theme-3.css");
});
