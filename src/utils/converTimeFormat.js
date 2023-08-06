import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export function convertTimeFormat(inputTime) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const targetTimezone = 'Europe/Kiev';

  const convertedTime = dayjs(inputTime)
    .utc()
    .tz(targetTimezone)
    .format('hh:mm A');

  // const isoDate = new Date(inputTime);
  // const hours = isoDate.getUTCHours();
  // const minutes = isoDate.getUTCMinutes();
  // const period = hours >= 12 ? 'pm' : 'am';
  // const formattedHours = (hours % 12 === 0 ? 12 : hours % 12)
  //   .toString()
  //   .padStart(2, '0');
  // const formattedMinutes = minutes.toString().padStart(2, '0');

  // return `${formattedHours}:${formattedMinutes} ${period}`;

  return convertedTime;
}
