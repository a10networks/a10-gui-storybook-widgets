import * as React from 'react'
import { A10Slider, A10Icon } from '../../src'
import './styles.less'
export class IconSlider extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    return (
      <div className="icon-wrapper">
        <A10Icon style={{ color: preColor }} type="frown-o" />
        <A10Slider {...this.props} onChange={this.handleChange} value={value} />
        <A10Icon style={{ color: nextColor }} type="smile-o" />
      </div>
    );
  }
}
