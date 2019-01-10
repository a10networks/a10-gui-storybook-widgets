export const demoString = `import { A10TimePicker } from 'a10-gui-widgets';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

ReactDOM.render(
  <A10TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
  mountNode
);`

export const threeString = `import { A10TimePicker } from 'a10-gui-widgets';
import moment from 'moment';

ReactDOM.render(
  <div>
    <A10TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
    <A10TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
    <A10TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
  </div>,
  mountNode
);`

export const hourMinString = `import { A10TimePicker } from 'a10-gui-widgets';
import moment from 'moment';

const format = 'HH:mm';

ReactDOM.render(
  <A10TimePicker defaultValue={moment('12:08', format)} format={format} />,
  mountNode
);`

export const addonString = `import { A10TimePicker, A10Button } from 'a10-gui-widgets';

class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = (open) => {
    this.setState({ open });
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
    );
  }
}

ReactDOM.render(<TimePickerAddonDemo />, mountNode);`

export const underString = `import { A10TimePicker } from 'a10-gui-widgets';

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

ReactDOM.render(<Demo />, mountNode);`

export const disabledString = `import { A10TimePicker } from 'a10-gui-widgets';
import moment from 'moment';

ReactDOM.render(
  <A10TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />,
  mountNode
);`

export const intervalString = `import { A10TimePicker } from 'a10-gui-widgets';

ReactDOM.render(
  <A10TimePicker minuteStep={15} secondStep={10} />,
  mountNode
);`

export const twelveString = `import { A10TimePicker } from 'a10-gui-widgets';

function onChange(time, timeString) {
  console.log(time, timeString);
}

ReactDOM.render(
  <div>
    <A10TimePicker use12Hours onChange={onChange} />
    <A10TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <A10TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </div>,
  mountNode
);`
