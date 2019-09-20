import * as React from 'react'
import { A10Icon } from '../../../src'
export interface ISuffixIconProps {
  size: string;
}
export default class SuffixIcon extends React.Component<ISuffixIconProps> {
  calendarStyle = {
    large: { fontSize: 21 },
    default: { fontSize: 19, marginTop: 2.25 },
    small: { fontSize: 16, marginTop: 5 },
  }
  dropdownStyle = { width: 9.7, height: 4.7, marginLeft: 5.25, marginBottom: 7 }
  render() {
    const { size = 'large' } = this.props
    return (
      <div>
        <A10Icon
          app="global"
          style={this.calendarStyle[size]}
          type="calendar"
        />
        <A10Icon app="global" style={this.dropdownStyle} type="dropdown" />
      </div>
    )
  }
}
