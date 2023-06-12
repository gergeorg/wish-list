import { createElement } from "./helper.js";

export const createHero = () => {
  const section = createElement("section", {
    className: "hero",
  });

  const container = createElement("div", {
    className: "container hero__container",
  });

  section.append(container);

  const title = createElement("h1", {
    className: "hero__title",
    innerHTML: "<span>Wish</span><span>List</span>",
  });

  const heroDescr = createElement("p", {
    className: "hero__descr",
    innerHTML:
      "Никогда не&nbsp;поздно поставить новую цель или обрести новую мечту...",
  });

  const listSteps = createElement("ol", {
    className: "hero__steps steps",
  });

  [
    "Cоздайте список желаний",
    "Поделитесь ссылкой с&nbsp;друзьями",
    "Получите желанный подарок",
  ].forEach((text) => {
    const step = createElement("li", {
      className: "steps__item",
      innerHTML: text,
    });

    listSteps.append(step);
  });

  container.append(title, heroDescr, listSteps);

  return section;
};
