import dayjs from "dayjs";

const dateSchedule = document.getElementById("schedule-data");
const timeSchedule = document.getElementById("schedule-time");
const dateHeader = document.getElementById("current-date");

const dateToday = dayjs(new Date()).format("YYYY-MM-DD");
const timeToday = dayjs(new Date()).format("HH:mm");

dateSchedule.value = dateToday;
dateSchedule.min = dateToday;
dateSchedule.max = dateToday;

dateHeader.min = dateToday;
dateHeader.value = dateToday;
dateHeader.max = dateToday;

timeSchedule.value = timeToday;

const minTime = dayjs().hour(9).minute(0).format('HH:mm');
const maxTime = dayjs().hour(21).minute(0).format('HH:mm');

timeSchedule.min = minTime;
timeSchedule.max = maxTime;