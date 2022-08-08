import * as React from 'react';

export const cities = ['ottawa', 'moscow', 'tokyo'];

type CitiesProps = {
  currentCityIndex: number;
  changeCity: (index: number) => void;
};

class Cities extends React.Component<CitiesProps> {
  render() {
    const { currentCityIndex, changeCity } = this.props;
    return (
      <div className="cities">
        {cities.map((city, index) => (
          <div
            key={index}
            className={currentCityIndex === index ? 'active' : ''}
          >
            <span onClick={() => changeCity(index)} role="button">
              {city[0].toUpperCase() + city.substring(1)}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Cities;