import { DAYS, MONTHS } from './consts';

export const formatDate = (d) => {
  const newDate = new Date(d);
  const year = newDate.getFullYear();
  const date = newDate.getDate();
  const month = MONTHS[newDate.getMonth()];
  const day = DAYS[newDate.getDay()];
  return `${day}, ${date} ${month} ${year}`;
};
