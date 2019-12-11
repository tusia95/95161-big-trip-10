import {tripDuration} from "../main";
export const createEventListContainer = (event) => {
  return (` <ul class="trip-days">
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${event.counter}</span>
        <time class="day__date" datetime="2019-03-18">${tripDuration.startDay}</time>
      </div>
        <ul class="trip-events__list"></ul>
      </li>
            </ul>`);
};
