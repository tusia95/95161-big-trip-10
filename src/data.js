

const eventTypes = [`taxi`, `bus`, `check-in`, `drive`, `flight`, `restaurant`, `ship`, `sightseeing`, `train`, `transport`, `trip`];
const MIN_DESC = 1;
const MAX_DESC = 3;
const MIN_PRICE = 10;
const MAX_PRICE = 500;


const TIME_ARR = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const MIN_OPTIONS = 1;
const MAX_OPTIONS = 2;
// const TASK_NUMBER = 3;
const MONTHS_NAME = [`JAN`, `FEB`, `MAR`, `APR`, `MAY`, `JUN`, `JUL`, `AUG`, `SEP`, `OCT`, `NOV`, `DEC`];
const eventType = {
  'taxi': `img/icons/taxi.png`,
  'bus': `img/icons/bus.png`,
  'check-in': `img/icons/check-in.png`,
  'drive': `img/icons/drive.png`,
  'flight': `img/icons/flight.png`,
  'restaurant': `img/icons/restaurant.png`,
  'ship': `img/icons/ship.png`,
  'sightseeing': `img/icons/sightseeing.png`,
  'train': `img/icons/train.png`,
  'transport': `img/icons/transport.png`,
  'trip': `img/icons/trip.png`,
};

const optionsTypes = [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`];

const eventDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
let descriptionArr = eventDescription.split(`.`);

const cityNames = [`Amsterdam`, `Geneva`, `Zurich`, `Saint-Petersburg`];

const generateEventType = () => {
  let randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
  return randomType;
};

const generateCityName = () => {
  return cityNames[Math.floor(Math.random() * cityNames.length)];
};

const generateDescription = () => {
  let descrSet = new Set();
  for (let i = 0; i < MIN_DESC + Math.random() * (MAX_DESC - MIN_DESC); i++) {
    descrSet.add(descriptionArr[Math.floor(Math.random() * descriptionArr.length)]);
  }
  let descRandomArr = [...descrSet];
  return descRandomArr.join(`.`);
};

const generateTimeNum = () => {
  let dateTimeArr = [];
  TIME_ARR.forEach((element) => dateTimeArr.push(element));
  return dateTimeArr[Math.floor(Math.random() * dateTimeArr.length)];
};

const generateTime = () => {
  let startTimeNum = generateTimeNum();
  let endTimeNum = generateTimeNum();
  if (startTimeNum > endTimeNum) {
    let temp = startTimeNum;
    startTimeNum = endTimeNum;
    endTimeNum = temp;
  }
  return [`${startTimeNum}:00`, `${endTimeNum}:00`];
};

const generateDate = () => {
  let randYear = Math.floor(2019 + Math.random() * (2020 - 2019));
  let randMonth = Math.floor(Math.random() * 11);
  let randDay = Math.floor(1 + Math.random() * (29 - 1));
  const startDate = new Date(randYear, randMonth, randDay);
  let endDate = startDate;
  endDate.setDate(startDate.getDate() + 7);
  // console.log(startDate + '' + endDate);// почему они равны????
  // console.log(endDate);
  let day = startDate.getDate();
  let month = startDate.getMonth();
  let year = startDate.getFullYear();
  let endDay = endDate.getDate();
  let endMonth = endDate.getMonth();
  return {month, day, year, endMonth, endDay};
};

const generateOption = () => {
  let option = {name: optionsTypes[Math.floor(Math.random() * (optionsTypes.length))],
    price: Math.floor(MIN_PRICE + Math.random() * (MAX_PRICE))};
    // console.log(option.name);
  return option;
};


const generateOptions = () => {
  return new Array(Math.floor(MIN_OPTIONS + Math.random() * (MAX_OPTIONS - MIN_OPTIONS)))
    .fill(``)
    .map(generateOption);
};

const generateEvent = () => {
  const evType = generateEventType();
  const randDate = generateDate();
  const evtPrice = Math.floor(MIN_PRICE + Math.random() * MAX_PRICE);
  return {type: evType,
    icon: eventType[evType],
    cityName: generateCityName(),
    photo: `http://picsum.photos/300/150?r=${Math.random()}`,
    description: generateDescription(),
    startTime: generateTime()[0],
    endTime: generateTime()[1],
    date: `${MONTHS_NAME[randDate.month]} ${randDate.day}`,
    fullDate: `${randDate.year}/${randDate.month}/${randDate.day}`,
    endDate: `${MONTHS_NAME[randDate.month]} ${randDate.day}`,
    price: evtPrice,
    options: generateOptions()

  };
};

export {generateEvent};

