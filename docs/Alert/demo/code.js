export const basicCode = `import { A10Alert } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Alert message="Success Text" type="success" />,
  mountNode
);`


export const descriptionCode = `import * as React from 'react'
import { A10Alert } from 'a10-gui-widgets'

class Example extends React.Component{

  render() {
    return (
      <div>
        <A10Alert
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"
          showIcon
        />
        <A10Alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
          showIcon
        />
        <A10Alert
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
          showIcon
        />
        <A10Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
          showIcon
        />
      </div>
    )
  }

ReactDOM.render(<Example />, mountNode)`


export const closeableCode = `import { A10Alert } from 'a10-gui-widgets';

const onClose = (e) => {
  console.log(e, 'I was closed.');
};

ReactDOM.render(
  <div>
    <A10Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose={onClose}
    />
    <A10Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose={onClose}
    />
  </div>,
  mountNode
);`

export const iconCode = `import { A10Alert } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Alert message="Success Tips" type="success" showIcon />
    <A10Alert message="Informational Notes" type="info" showIcon />
    <A10Alert message="Warning" type="warning" showIcon />
    <A10Alert message="Error" type="error" showIcon />
    <A10Alert
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon
    />
    <A10Alert
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon
    />
    <A10Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <A10Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </div>,
  mountNode
);`

export const bannerCode = `import { A10Alert } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Alert message="Warning text" banner />
    <br />
    <A10Alert message="Very long warning text warning text text text text text text text" banner closable />
    <br />
    <A10Alert showIcon={false} message="Warning text without icon" banner />
    <br />
    <A10Alert type="error" message="Error text" banner />
  </div>,
  mountNode
);`

export const moreTypesCode = `import { A10Alert } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Alert message="Success Text" type="success" />
    <A10Alert message="Info Text" type="info" />
    <A10Alert message="Warning Text" type="warning" />
    <A10Alert message="Error Text" type="error" />
  </div>,
  mountNode
);`

export const descriptionCode = `import { A10Alert } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />
    <A10Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <A10Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <A10Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </div>,
  mountNode
);`

export const customizedCloseTextCode = `import { A10Alert } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Alert message="Info Text" type="info" closeText="Close Now" />,
  mountNode
);`

export const smoothlyUnmountCode = `import { A10Alert } from 'a10-gui-widgets';

class App extends React.Component {
  state = {
    visible: true,
  }

  handleClose = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        {
          this.state.visible ? (
            <A10Alert
              message="A10Alert Message Text"
              type="success"
              closable
              afterClose={this.handleClose}
            />
          ) : null
        }
        <p>placeholder text here</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);`
