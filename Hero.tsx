import * as React from 'react';
import { getIconUrl } from './helpers';
import { WeatherInstanceType } from './App';

type HeroProps = {
  data: WeatherInstanceType;
};

class Hero extends React.Component<HeroProps> {
  render() {
    const { data } = this.props;
    return (
      <div className="hero">
        <h2>Today</h2>
        <div className="inner">
          <img src={getIconUrl(data.icon)} />
          <div>
            <h2 className="temp">{parseInt(`${data.temp}`)}</h2>
            <h2>{data.main}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
