import * as React from 'react'
import { A10TimePicker, A10Icon } from '../../../src'
import * as moment from 'moment'

export const demoString = `
import { A10TimePicker } from 'a10-gui-widgets'

class Demo extends React.Component {
  state = {
    value: null,
  };

  onChange = (time) => {
    console.log(time);
    this.setState({ value: time });
  }

  render() {
    return <A10TimePicker value={this.state.value} onChange={this.onChange} />;
  }
}

ReactDOM.render(<Demo />, mountNode);
`
function onChange(time, timeString) {
  console.log(time, timeString)
}

export const BasicUsageDemo = () => {
  return (
    <A10TimePicker
      onChange={onChange}
      defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
    />
  )
}

export default BasicUsageDemo
