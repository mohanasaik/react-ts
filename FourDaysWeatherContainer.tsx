import * as React from 'react';
import DayWeatherCard from './DayWeatherCard';
import { WeatherInstanceType } from './App';

type FourDaysWeatherContainerProps = {
  data: WeatherInstanceType[];
};

class FourDaysWeatherContainer extends React.Component<FourDaysWeatherContainerProps> {
  render() {
    const { data } = this.props;
    return (
      <div className="four-days-container">
        {data.map((info) => (
          <DayWeatherCard data={info} key={info.dt.valueOf()} />
        ))}
      </div>
    );
  }
}

export default FourDaysWeatherContainer;