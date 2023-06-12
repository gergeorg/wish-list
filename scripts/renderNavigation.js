import { createBurgerMenu } from "./createBurgerMenu.js";
import { createElement } from "./helper.js";
import { API_URI } from "./const.js";
import { renderModal } from "./renderModal.js";

const nav = document.querySelector(".nav");
createBurgerMenu(nav, "nav_active");

export const renderNavigation = () => {
  nav.textContent = "";

  const buttonSignUp = createElement("button", {
    className: "nav__btn btn",
    textContent: "Зарегистрироваться",
  });

  buttonSignUp.addEventListener("click", () => {
    renderModal({
      title: "Регистрация",
      description: "Введите ваши данные для регистрации на сервисе WishList",
      btnSubmit: "Зарегистрироваться",
      submitHandler: async (e) => {
        const formData = new FormData(e.target);
        const credentials = {
          login: formData.get("login"),
          password: formData.get("password"),
        };

        try {
          const res = await fetch(`${API_URI}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });

          if (res.ok) {
            const data = await res.json();
            console.log(data);
          } else {
            console.log(await res.json());
            throw new Error("Invalid credentials");
          }
        } catch (error) {}
      },
    });
  });

  const buttonLogin = createElement("button", {
    className: "nav__btn btn",
    textContent: "Войти",
  });

  buttonLogin.addEventListener("click", () => {
    console.log("click buttonLogin");
  });

  nav.append(buttonSignUp, buttonLogin);
};
