import * as React from 'react';
import { getIconUrl } from './helpers';
import { WeatherInstanceType } from './App';

type DayWeatherCardProps = {
  data: WeatherInstanceType;
};

class DayWeatherCard extends React.Component<DayWeatherCardProps> {
  render() {
    const { data } = this.props;
    return (
      <div className="day-card">
        <h2>{data.dt.toLocaleString('en', { weekday: 'short' })}</h2>
        <img src={getIconUrl(data.icon)} />
        <h2 className="temp">{parseInt(`${data.temp}`)}</h2>
      </div>
    );
  }
}

export default DayWeatherCard;