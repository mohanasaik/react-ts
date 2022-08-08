export const getIconUrl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@4x.png`;

export const getFiveDaysWeather = (list) => {
  return Object.values(
    list
      .map((a) => {
        return {
          dt: new Date(a.dt * 1000),
          temp: a.main.temp,
          icon: a.weather[0].icon,
          main: a.weather[0].main,
        };
      })
      .reduce((acc, a) => {
        if (!acc[a.dt.getDay()]) {
          return { ...acc, [a.dt.getDay()]: a };
        }
        return acc;
      }, {})
  )
    .sort((a, b) => a.dt.getTime() - b.dt.getTime())
    .slice(0, 5);
};