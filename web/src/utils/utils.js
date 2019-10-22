import moment from 'moment';

export const formatTimeString = timeString => {
  const m = moment(timeString);
  return `${m.format('DD.MM.YYYY')} kl ${m.format('hh.mm')}`
};
