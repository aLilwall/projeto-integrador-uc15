const themeToggleButton = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

if (themeToggleButton) {
  const updateThemeButtonLabel = () => {
    const isDarkTheme = document.body.classList.contains("dark-theme");
    themeToggleButton.textContent = isDarkTheme ? "Tema claro" : "Tema escuro";
  };

  updateThemeButtonLabel();

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    updateThemeButtonLabel();
  });
}

// Made with Bob
