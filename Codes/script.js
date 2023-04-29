const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginButton = document.querySelector(".login-btn");
const closeIcon = document.querySelector(".close-icon");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

loginButton.addEventListener("click", () => {
  wrapper.classList.add("popup");
});

closeIcon.addEventListener("click", () => {
  wrapper.classList.remove("popup");
});
