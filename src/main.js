import {createTripInfoTemplate} from "../src/components/trip-info";
import {сreateFiltersTemplate} from "../src/components/filters";
import {createMenuTemplate} from "../src/components/menu";
import {createEventEditTemplate} from "../src/components/event-edit";
import {createEventListContainer} from "../src/components/event-list-container";
import {createEventCardTemplate} from "../src/components/event";

const TASK_COUNT = 3;

let render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-info`);
render(tripMainElement, createTripInfoTemplate(), `afterbegin`);

const tripControlElement = document.querySelector(`.trip-controls`);
const tripSwitcherElement = tripControlElement.querySelector(`:first-child`);
render(tripControlElement, сreateFiltersTemplate(), `beforeend`);
render(tripSwitcherElement, createMenuTemplate(), `afterend`);

const tripEventsElement = document.querySelector(`.trip-events`);
render(tripEventsElement, createEventEditTemplate(), `beforeend`);
render(tripEventsElement, createEventListContainer(), `beforeend`);

const eventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// 3 tasks
new Array(TASK_COUNT)
.fill(``)
.forEach(
    () => render(eventsListElement, createEventCardTemplate(), `beforeend`)
);

