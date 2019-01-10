import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { Code, CodeComponent, CodeCard } from '../utils'
import {
  basicCode, notificationBoxCode, notificationIconCode,
  notificationCloseButtonCode,
  customizedIconCode,
  basicNotificationCode,
  customizedStyleCode,
  updateMessageContentCode
} from './demo/code'
import BasicNotification from './demo/example'
import { A10Notification, A10Button, A10Icon } from '../../src'
const A10NotificationReadme = require('../../src/Notification/README.md')

const openNotificationDemo = () => {
  A10Notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const openNotificationDemo1 = () => {
  const args = {
    message: 'Notification Title',
    description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0,
  };
  A10Notification.open(args);
};

const openNotificationWithIcon = (type) => {
  A10Notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const close = () => {
  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
};

const openNotificationDemo3 = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <A10Button type="primary" onClick={() => notification.close(key)}>
      Confirm
    </A10Button>
  );
  A10Notification.open({
    message: 'Notification Title',
    description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close,
  });
};

const openNotificationDemo4 = () => {
  A10Notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <A10Icon size="middle" type="smile" style={{ color: '#108ee9' }} />,
  });
};

const openNotificationDemo5 = () => {
  A10Notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      // marginLeft: 335 - 600,
    },
  });
};

const key = 'updatable';
const openNotificationDemo6 = () => {
  A10Notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    A10Notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};

const Demo = () => {
  return (
    <A10Button type="primary" onClick={openNotificationDemo}>Open the notification box</A10Button>
  )
}

const Demo1 = () => {
  return (
    <A10Button type="primary" onClick={openNotificationDemo1}>Open the notification box</A10Button>
  )
}

const Demo2 = () => {
  return (
    <div>
      <A10Button onClick={() => openNotificationWithIcon('success')}>Success</A10Button>
      <A10Button onClick={() => openNotificationWithIcon('info')}>Info</A10Button>
      <A10Button onClick={() => openNotificationWithIcon('warning')}>Warning</A10Button>
      <A10Button onClick={() => openNotificationWithIcon('error')}>Error</A10Button>
    </div>
  )
}

const Demo3 = () => {
  return (
    <A10Button type="primary" onClick={openNotificationDemo3}>
      Open the notification box
    </A10Button>
  )
}

const Demo4 = () => {
  return (
    <A10Button type="primary" onClick={openNotificationDemo4}>Open the notification box</A10Button>
  )
}

const Demo5 = () => {
  return (
    <A10Button type="primary" onClick={openNotificationDemo5}>Open the notification box</A10Button>
  )
}

const Demo6 = () => {
  return (
    <A10Button type="primary" onClick={openNotificationDemo6}>Open the notification box</A10Button>
  )
}

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic"
        desc="The simplest usage that close the notification box after 4.5s."
        code={<Code string={basicCode} />}
      >
        <Demo />
      </CodeCard>
      <CodeCard
        title="Duration after which the notification box is closed"
        desc="Duration can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically."
        code={<Code string={notificationBoxCode} />}
      >
        <Demo1 />
      </CodeCard>
      <CodeCard
        title="Notification with icon"
        desc="A notification box with a icon at the left side."
        code={<Code string={notificationIconCode} />}
      >
        <Demo2 />
      </CodeCard>

      <CodeCard
        title="Custom close button"
        desc="To customize the style or font of the close button."
        code={<Code string={notificationCloseButtonCode} />}
      >
        <Demo3 />
      </CodeCard>
      <CodeCard
        title="Customized Icon"
        desc="The icon can be customized to any react node."
        code={<Code string={customizedIconCode} />}
      >
        <Demo4 />
      </CodeCard>
      <CodeCard
        title="Placement"
        desc="A notification box can pop up from topRight or bottomRight or bottomLeft or topLeft."
        code={<Code string={basicNotificationCode} />}
      >
        <BasicNotification />
      </CodeCard>
      <CodeCard
        title="Customized style"
        desc="The style and className are available to customize Notification."
        code={<Code string={customizedStyleCode} />}
      >
        <Demo5 />
      </CodeCard>
      <CodeCard
        title="Update Message Content"
        desc="Update content with unique key."
        code={<Code string={updateMessageContentCode} />}
      >
        <Demo6 />
      </CodeCard>
    </CodeComponent>
  )
}
export default story => {
  story.add('A10Notification', withReadme(A10NotificationReadme, Example))
}
