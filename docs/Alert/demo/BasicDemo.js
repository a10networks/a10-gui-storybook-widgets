import * as React from 'react'
import { A10Alert, A10Button } from '../../../src'

class Example extends React.Component{

  constructor() {
    super()
    this.state = {
      showIcon: false,
      closable: false
    }
  }

  render() {
    const onClickShowIcon = () => {
      this.setState({showIcon: !this.state.showIcon})
    }
    const onClickClosable = () => {
      this.setState({closable: !this.state.closable})
    }
    return (
      <div>
        <A10Alert message="Success Tips" type="success" showIcon={this.state.showIcon} closable={this.state.closable} />
        <div style={{ height: '8px' }} />
        <A10Alert message="Informational Notes" type="info" showIcon={this.state.showIcon} closable={this.state.closable} />
        <div style={{ height: '8px' }} />
        <A10Alert message="Warning" type="warning" showIcon={this.state.showIcon} closable={this.state.closable} />
        <div style={{ height: '8px' }} />
        <A10Alert message="Error" type="error" showIcon={this.state.showIcon} closable={this.state.closable} />
        <div style={{ height: '8px' }} />
        <A10Button onClick={onClickShowIcon}>{this.state.showIcon? 'Hide Icon' : 'Show Icon'}</A10Button>&nbsp;&nbsp;
        <A10Button onClick={onClickClosable}>{this.state.closable? 'Hide Close Button' : 'Show Close Button'}</A10Button>
      </div>
    )
  }
}

export default Example
