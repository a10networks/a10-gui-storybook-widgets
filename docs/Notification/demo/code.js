export default {}
export const basicNotificationCode = `import { A10Notification, A10Select, A10Button, A10Dropdown } from 'a10-gui-widgets'

class Example extends React.Component {
  render() {
    const { Option } = A10Select;
    const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

    const close = () => {
      console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
    }
    const openNotification = () => {
      const key = ${"`open${Date.now()}`"};
      const btn = (
        <A10Button type="primary" size="small" onClick={() => A10Notification.close(key)}>
          Confirm
        </A10Button>
      );
      const args = {
        message: 'Notification Title',
        description: 'A function will be be called after the notification is closed',
        duration: 0,
        btn,
        key,
        onClose: close,
        icon: <A10Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        style: {
          width: 400
        },
      };
      A10Notification.open(args);
    };
    const test = () => {
      A10Notification.open({
        message: 'title',
        description: 'description'
      });
    };
    return (
      <div>
        <A10Select
          defaultValue="topRight"
          style={{ width: 120, marginRight: 10 }}
          onChange={(val) => {
            A10Notification.config({
              placement: val,
            });
          }}
        >
          {options.map(val => <Option key={val} value={val}>{val}</Option>)}
        </A10Select>
        <A10Button type='primary' onClick={openNotification}> Open the notification box </A10Button>
      </div>
    );
  }
}
ReactDOM.render(<Example />, mountNode);`


export const basicCode = `
import { A10Button, A10Notification } from 'a10-gui-widgets';

const openNotification = () => {
  A10Notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

ReactDOM.render(
  <A10Button type="primary" onClick={openNotification}>Open the notification box</A10Button>,
  mountNode
);
`

export const notificationBoxCode = `
import { A10Button, A10Notification } from 'a10-gui-widgets';

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0,
  };
  A10Notification.open(args);
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>Open the notification box</Button>,
  mountNode
);
`

export const notificationIconCode = `
import { A10Button, A10Notification } from 'a10-gui-widgets';

const openNotificationWithIcon = (type) => {
  A10Notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

ReactDOM.render(
  <div>
    <A10Button onClick={() => openNotificationWithIcon('success')}>Success</A10Button>
    <A10Button onClick={() => openNotificationWithIcon('info')}>Info</A10Button>
    <A10Button onClick={() => openNotificationWithIcon('warning')}>Warning</A10Button>
    <A10Button onClick={() => openNotificationWithIcon('error')}>Error</A10Button>
  </div>,
  mountNode
);

`

export const notificationCloseButtonCode = `
import { A10Button, A10Notification } from 'a10-gui-widgets';

const close = () => {
  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
};

const openNotification = () => {
  const key = 'open {Date.now()}';
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Confirm
    </Button>
  );
  notification.open({
    message: 'Notification Title',
    description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close,
  });
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  mountNode
);

`

export const customizedIconCode = `
import { A10Button, A10notification, A10Icon } from 'a10-gui-widgets';

const openNotification = () => {
  A10notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <A10Icon type="smile" style={{ color: '#108ee9' }} />,
  });
};

ReactDOM.render(
  <A10Button type="primary" onClick={openNotification}>Open the notification box</A10Button>,
  mountNode
);

`

export const customizedStyleCode = `
import { A10Button, A10notification } from 'a10-gui-widgets';

const openNotification = () => {
  A10notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};

ReactDOM.render(
  <A10Button type="primary" onClick={openNotification}>Open the notification box</A10Button>,
  mountNode
);
`

export const updateMessageContentCode = `
import { A10Button, A10notification } from 'a10-gui-widgets';

const key = 'updatable';

const openNotification = () => {
  A10notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    A10notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};

ReactDOM.render(
  <A10Button type="primary" onClick={openNotification}>Open the notification box</A10Button>,
  mountNode
);
`