
import {createTripInfoTemplate} from "../src/components/trip-info";
import {сreateFiltersTemplate} from "../src/components/filters";
import {createMenuTemplate} from "../src/components/menu";
import {createEventEditTemplate} from "../src/components/event-edit";
import {createEventListContainer} from "../src/components/event-list-container";
import {createEventCardTemplate} from "../src/components/event";
import {generateEvent} from './data';


const TASK_COUNT = 3;
let priceArr = [];
let eventArr = [];
for (let i = 0; i < TASK_COUNT; i++) {
  eventArr.push(generateEvent());
  priceArr.push(eventArr[i].price);
}

const getTotalPrice = (accumulator, currentValue) => accumulator + currentValue;
export const totalPrice = priceArr.reduce(getTotalPrice);

let render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-info`);
render(tripMainElement, createTripInfoTemplate(eventArr[0]), `afterbegin`);

const tripControlElement = document.querySelector(`.trip-controls`);
const tripSwitcherElement = tripControlElement.querySelector(`:first-child`);
render(tripControlElement, сreateFiltersTemplate(), `beforeend`);
render(tripSwitcherElement, createMenuTemplate(), `afterend`);

const tripEventsElement = document.querySelector(`.trip-events`);
render(tripEventsElement, createEventEditTemplate(eventArr[0]), `beforeend`);
render(tripEventsElement, createEventListContainer(eventArr[0]), `beforeend`);

const eventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// 3 tasks
for (let i = 0; i < TASK_COUNT; i++) {
  render(eventsListElement, createEventCardTemplate(eventArr[i]), `beforeend`);
}

