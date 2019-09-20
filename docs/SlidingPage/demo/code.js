
export const basicSlidingPageCode = `import * as React from 'react'
import { A10SlidingPage } from 'a10-gui-widgets'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isPaneOpen: false,
      count: 0
    }
  }

  render() {
    return (
      <div>
        <A10Button type="primary" onClick={() => this.setState({ isPaneOpen: true })}>Click me to open right pane!</A10Button>
        <A10SlidingPage
          isOpen={ this.state.isPaneOpen }
          onRequestClose={ () => {
            this.setState({ isPaneOpen: false });
          } }
          onAfterOpen={ () => {
            this.setState((prepState) => {
              return { count: prepState.count + 1 }
            })
          } }
          overlayClassName='some-custom-overlay-class'
        >
          <A10SlidingPage.Panel title="Open a sliding pane from right!">
            <br/>
            <div>Count: {this.state.count}</div>
          </A10SlidingPage.Panel>
        </A10SlidingPage>
      </div>
    )
  }
}
`

export const moreSlidingPageCode = `import * as React from 'react'
import { A10SlidingPage } from 'a10-gui-widgets'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isPaneOpen: false,
      count: 0
    }
  }

  render() {
    return (
      <div>
        <A10Button type="primary" onClick={() => this.setState({ isPaneOpen: true })}>Click me to open left pane!</A10Button>
        <A10SlidingPage
          isOpen={ this.state.isPaneOpen }
          onRequestClose={ () => {
            this.setState({ isPaneOpen: false });
          } }
          onAfterOpen={ () => {
            this.setState((prepState) => {
              return { count: prepState.count + 1 }
            })
          } }
          from='left'
          overlayClassName='some-custom-overlay-class'
        >
          <A10SlidingPage.Panel title="Open a sliding pane from left!">
            <br/>
            <div>Count: {this.state.count}</div>
          </A10SlidingPage.Panel>
        </A10SlidingPage>
      </div>
    );
  }
}
`
