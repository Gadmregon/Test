const getDateInfo = (date) => {
  const listNumDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const listNumMouth = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const dateValid = date.split(".").reverse().join("/");
  const d = new Date(dateValid);

  const day = listNumDays[d.getDay()];
  const mouth = listNumMouth[d.getMonth()];
  const year = d.getFullYear();
  const ned = getYearWeek(d);

  return `${day}, ${ned}-я неделя  ${mouth} ${year} года`;
};

const getYearWeek = (date) => {
  const nowDate = date.getDate();
  const nowDay = date.getDay();
  const used = nowDate + nowDay;
  if (nowDate >= 30 && (nowDay === 1 || nowDay === 2)) {
    return Math.ceil(used / 7) + 1;
  }
  return Math.ceil(used / 7);
};
console.log(getDateInfo("01.01.2022"));
console.log(getDateInfo("15.12.2021"));
console.log(getDateInfo("30.03.2022"));
console.log(getDateInfo("31.05.2022"));
console.log(getDateInfo("28.02.2022"));
console.log(getDateInfo("28.02.2021"));
console.log(getDateInfo("23.01.1998"));
