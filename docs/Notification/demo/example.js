import { A10Notification, A10Button, A10Select } from '../../../src'
import * as React from 'react'
const Option = A10Select.Option;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const openNotification = () => {
  A10Notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};
const PlacementExample = () => {
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
      <A10Button
        type="primary"
        onClick={openNotification}
      >
        Open the notification box
        </A10Button>
    </div>
  )
}

export default PlacementExample