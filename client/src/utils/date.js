import { DAYS, MONTHS } from './consts';
import _ from 'lodash';

export const formatDate = (d) => {
  const newDate = new Date(d);
  const year = newDate.getFullYear();
  const date = newDate.getDate();
  const month = MONTHS[newDate.getMonth()];
  const day = DAYS[newDate.getDay()];
  return `${day}, ${date} ${month} ${year}`;
};

const isToday = (d) => {
  const today = new Date().setHours(0, 0, 0, 0);
  const todoDay = new Date(d).setHours(0, 0, 0, 0);
  return today === todoDay;
};

export const formatDateTime = (d) => {
  const newDate = new Date(d);
  const year = newDate.getFullYear();
  const date = newDate.getDate();
  const month = MONTHS[newDate.getMonth()];
  const day = DAYS[newDate.getDay()];
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const time = hours + ':' + minutes + ' ' + ampm;
  return isToday(d)
    ? `Today, ${time}`
    : `${day}, ${date} ${month} ${year} ${time}`;
};

export const consecutiveDays = (dArray) => {
  const today = new Date().setHours(0, 0, 0, 0);
  const mostRecentPost = dArray[0].setHours(0, 0, 0, 0);
  let counter = today - mostRecentPost <= 1000 * 3600 * 24 ? 1 : 0;
  _.forEach(dArray, (date, index) => {
    const currentPostDay = date.setHours(0, 0, 0, 0);
    const prevPostDay = dArray[index + 1]?.setHours(0, 0, 0, 0);
    console.log('current post day: ', currentPostDay);
    let yesterday = new Date(currentPostDay);
    yesterday = yesterday.setDate(yesterday.getDate() - 1);
    if (prevPostDay === yesterday) {
      counter++;
    } else {
      return counter;
    }
  });
  console.log(counter);
  return counter;
};
