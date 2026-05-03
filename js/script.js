const translations = {
  en: {
    aboutMe: "About Me",
    aboutText:
      "I am a junior web developer currently learning HTML and CSS. I am passionate about creating simple, clean, and responsive websites. My goal is to improve my skills in front-end development. I have a basic knowledge of JavaScript and I'm passionate about expanding my skills in web development. My primary goal is to learn new programming languages and advance my frontend development abilities.",
    skills: "Skills",
  },
  cs: {
    aboutMe: "O mně",
    aboutText:
      "Jsem junior webový vývojář, který se aktuálně učí HTML a CSS. Jsem vášnivý tvůrce jednoduchých, čistých a responsivních webových stránek. Mým cílem je zlepšit své dovednosti v front-end vývoji. Mám základní znalosti JavaScriptu a jsem nadšený pro rozšíření svých dovedností ve vývoji webu. Mým primárním cílem je naučit se nové programovací jazyky a pokročit ve vývoji frontendu.",
    skills: "Dovednosti",
  },
};
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });
  localStorage.setItem("selectedLanguage", lang);
}
document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
  setLanguage(savedLanguage);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
});
