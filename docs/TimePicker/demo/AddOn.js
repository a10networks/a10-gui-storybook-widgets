import { A10TimePicker, A10Button, A10Icon } from '../../../src'
import * as React from 'react'

export default class TimePickerAddonDemo extends React.Component {
  state = { open: false }

  handleOpenChange = open => {
    this.setState({ open })
  }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <A10TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <A10Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </A10Button>
        )}
      />
    )
  }
}
