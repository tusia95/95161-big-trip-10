import {totalPrice} from "../main";

export const createTripInfoTemplate = (event) => {
  return (`
  <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
    <h1 class="trip-info__title">${event.cityName} &mdash; ... &mdash; ${event.cityName}</h1>
  
    <p class="trip-info__dates">${event.date}&nbsp;&mdash;&nbsp;${event.endDate}</p>
  </div>
  <p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
</p>
</section>`);
};
