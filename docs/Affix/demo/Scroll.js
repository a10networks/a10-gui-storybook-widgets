import * as React from 'react'
import { A10Affix, A10Button } from '../../../src'
import './index.less'

class Example extends React.Component {
  render() {
    return (
      <div className="scrollable-container" ref={(node) => { this.container = node; }}>
        <div className="background">
          <A10Affix target={() => this.container}>
            <A10Button type="primary">
              Fixed at the top of container
            </A10Button>
          </A10Affix>
        </div>
      </div>
    );
  }
}

export default Example