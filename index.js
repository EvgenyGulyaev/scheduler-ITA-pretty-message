const
  { getData } = require('scheduler-ita'),
  _chunk = require('lodash.chunk'),
  html = 'HTML',
  allWeek = 0
;

const getPrettiedTable = (table) => {
  const days = _chunk(table.slice(1), 8);
  const week = [];
  for (let index = 2; index < days.length; index++) {
    const day = days[index].map((el, i) => {
      if (!i) {
        return el;
      }
      return `${days[0][i]}, ${days[1][i]}  ${el}`;
    });
    week.push(day)
  }
  return week;
};

const getDay = (day = 'today') => {
  let dateDay = day;
  if (day === 'today') {
    dateDay = new Date().getDay() - 1
  }

  if (day === 'tomorrow') {
    dateDay = new Date().getDay()
  }
  return dateDay
}

const selectData = (data = [], day = 6) => {
  day = getDay(day);
  if (day > 5 || day < 0) {
    return 'Выходной день'
  }
  return data[day];
}

const getSchedulePerWeek = async (id, type = html, week = allWeek) => {
  try {
    const { schedule, name, firstWeek } = await getData(id, type);
    week -= 1;
    if (week >= 0) {
      return { name, data: getPrettiedTable(schedule[week]), week: firstWeek + week };
    }
    const data = schedule.map(el => getPrettiedTable(el));
    return { name, data }
  }
  catch (e) {
    // console.log('error', e)
    return undefined
  }
}

const getSchedulePerDayWeek = async (id, day = 6, type = html, week = allWeek) => {
  try {
    const { schedule, name, firstWeek } = await getData(id, type);
    const allDays = getPrettiedTable(schedule[week]);
    const data = selectData(allDays, day);
    return { name, data, week: firstWeek + week };
  }
  catch (e) {
    // console.log('error', e)
    return undefined
  }
}

module.exports = {
  getSchedulePerWeek,
  getSchedulePerDayWeek,
}
