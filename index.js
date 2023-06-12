import { renderNavigation } from "./scripts/renderNavigation.js";
import { createHero } from "./scripts/createHero.js";

export const router = Router();

const app = document.querySelector(".app");

const handleEditPageRoute = (id) => {};

const handleEditProfileRoute = (login) => {};

const handleUserRoute = (login) => {};

const handleHomePage = () => {
  app.textContent = "";

  renderNavigation();

  const section = createHero();
  app.append(section);
};

const init = () => {
  let isMainPage = true;
  router.on("/", handleHomePage);
  router.on("/editwish/newwish", handleEditPageRoute);
  router.on("/editwish/:id", handleEditPageRoute);
  router.on("/editwish/:login", handleEditProfileRoute);
  router.on("/user/:login", handleUserRoute);

  router.init();

  if (isMainPage) {
    !isMainPage;
    router.setRoute("/");
  }
};

init();
