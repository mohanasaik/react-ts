import * as React from 'react';
import Cities, { cities } from './Cities';
import FourDaysWeatherContainer from './FourDaysWeatherContainer';
import Hero from './Hero';
import { getFiveDaysWeather } from './helpers';

export type WeatherInstanceType = {
  dt: Date;
  icon: string;
  main: string;
  temp: number;
};

type AppState = {
  currentCityIndex: number;
  list: WeatherInstanceType[];
};

class App extends React.Component {
  state = {
    currentCityIndex: 0,
    list: [],
  };
  changeCity = (index) => {
    this.setState(
      {
        currentCityIndex: index,
      },
      () => {
        this.updateWeather();
      }
    );
  };

  updateWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        cities[this.state.currentCityIndex]
      }&appid=f29ace4849b853096fd8196f4538f178&&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        const list = getFiveDaysWeather(data.list);
        console.log({
          data,
          list,
        });
        this.setState({
          list,
        });
      });
  };

  componentDidMount() {
    this.updateWeather();
  }
  render() {
    const { list } = this.state;
    if (!list.length)
      return (
        <div className="App">
          <h2>Loading...</h2>;
        </div>
      );
    return (
      // <div id="app-root">
      <div className="App">
        <Cities
          currentCityIndex={this.state.currentCityIndex}
          changeCity={this.changeCity}
        />
        <div className="weather-grid">
          <Hero data={list[0]} />
          <FourDaysWeatherContainer data={list.slice(1)} />
        </div>
      </div>
      // </div>
    );
  }
}

export default App;
