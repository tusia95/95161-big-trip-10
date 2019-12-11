
import {createTripInfoTemplate} from "../src/components/trip-info";
import {сreateFiltersTemplate} from "../src/components/filters";
import {createMenuTemplate} from "../src/components/menu";
import {createEventEditTemplate} from "../src/components/event-edit";
import {createEventListContainer} from "../src/components/event-list-container";
import {createEventCardTemplate} from "../src/components/event";
import {generateEvent} from './data';
import {filterNames} from "./data";


const TASK_COUNT = 3;
const MONTH_NAMES = [`JAN`, `FEB`, `MAR`, `APR`, `MAY`, `JUN`, `JUL`, `AUG`, `SEP`, `OCT`, `NOV`, `DEC`];
let priceArr = [];
let eventArr = [];
for (let i = 0; i <= TASK_COUNT; i++) {
  eventArr.push(generateEvent());
  priceArr.push(eventArr[i].price);
}

//   return {month, day, year, endMonth, endDay};
let getMonthDate = (date) => {
  return {startDay: `${MONTH_NAMES[date.month]} ${date.day}`,
    endDay: `${date.endDay}`};
};

export const tripDuration = getMonthDate(eventArr[0].date);

// get formated event period
let getFullFormatedDate = (date) => {
  const month = (date.month + 1) < 10 ? `0${date.month + 1}` : `${date.month + 1}`;
  const year = String(date.year).slice(-2);
  return `${date.day}/${month}/${year}`;
};

export const fullFormatedDate = getFullFormatedDate(eventArr[0].date);


// get total trip price
const getTotalPrice = (accumulator, currentValue) => accumulator + currentValue;
export const totalPrice = priceArr.slice(1).reduce(getTotalPrice);

// create option template
const createOptionTemplate = (option) => {
  return (`<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
  <label class="event__offer-label" for="event-offer-seats-1">
    <span class="event__offer-title">${option.name}</span>
    &plus;
    &euro;&nbsp;<span class="event__offer-price">${option.price}</span>
  </label>
</div>`);
};

let optionsTemplate = eventArr[0].options.map(createOptionTemplate).toString();

// rendering of components

let render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-info`);
render(tripMainElement, createTripInfoTemplate(eventArr[0]), `afterbegin`);

const tripControlElement = document.querySelector(`.trip-controls`);
const tripSwitcherElement = tripControlElement.querySelector(`:first-child`);
render(tripControlElement, сreateFiltersTemplate(filterNames), `beforeend`);
render(tripSwitcherElement, createMenuTemplate(), `afterend`);

const tripEventsElement = document.querySelector(`.trip-events`);
render(tripEventsElement, createEventEditTemplate(eventArr[0]), `beforeend`);

const eventsOptionsContainer = document.querySelector(`.event__available-offers`);

render(eventsOptionsContainer, optionsTemplate, `beforeend`);
render(tripEventsElement, createEventListContainer(eventArr[0]), `beforeend`);

const eventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// 3 tasks
for (let i = 1; i <= TASK_COUNT; i++) {
  render(eventsListElement, createEventCardTemplate(eventArr[i]), `beforeend`);
}

