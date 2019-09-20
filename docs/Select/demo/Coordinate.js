import * as React from 'react'
import { A10Select } from '../../../src';

const Option = A10Select.Option;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class App extends React.Component {
    state = {
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
    }
  
    handleProvinceChange = (value) => {
      this.setState({
        cities: cityData[value],
        secondCity: cityData[value][0],
      });
    }
  
    onSecondCityChange = (value) => {
      this.setState({
        secondCity: value,
      });
    }
  
    render() {
      const { cities } = this.state;
      return (
        <div>
          <A10Select
            defaultValue={provinceData[0]}
            style={{ width: 120 }}
            onChange={this.handleProvinceChange}
          >
            {provinceData.map(province => <Option key={province}>{province}</Option>)}
          </A10Select>
          <A10Select
            style={{ width: 120 }}
            value={this.state.secondCity}
            onChange={this.onSecondCityChange}
          >
            {cities.map(city => <Option key={city}>{city}</Option>)}
          </A10Select>
        </div>
      );
    }
  }

export default App
