export const basicCode = `import { A10DatePicker } from 'a10-gui-widgets';

const { A10MonthPicker, A10RangePicker, A10WeekPicker } = A10DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

ReactDOM.render(
  <div>
    <A10DatePicker onChange={onChange} />
    <br />
    <A10MonthPicker onChange={onChange} placeholder="Select month" />
    <br />
    <A10RangePicker onChange={onChange} />
    <br />
    <A10WeekPicker onChange={onChange} placeholder="Select week" />
  </div>,
  mountNode
);`

export const threeSizesCode = `import { A10DatePicker, A10Radio } from 'a10-gui-widgets';

const { A10MonthPicker, A10RangePicker, A10WeekPicker } = A10DatePicker;

class PickerSizesDemo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { size } = this.state;
    return (
      <div>
        <A10Radio.Group value={size} onChange={this.handleSizeChange}>
          <A10Radio.Button value="large">Large</A10Radio.Button>
          <A10Radio.Button value="default">Default</A10Radio.Button>
          <A10Radio.Button value="small">Small</A10Radio.Button>
        </A10Radio.Group>
        <br /><br />
        <A10DatePicker size={size} />
        <br />
        <A10MonthPicker size={size} placeholder="Select Month" />
        <br />
        <A10RangePicker size={size} />
        <br />
        <A10WeekPicker size={size} placeholder="Select Week" />
      </div>
    );
  }
}

ReactDOM.render(<PickerSizesDemo />, mountNode);`

export const disabledCode = `import { A10DatePicker } from 'a10-gui-widgets';
import moment from 'moment';

const { A10MonthPicker, A10RangePicker } = A10DatePicker;

const dateFormat = 'YYYY-MM-DD';
ReactDOM.render(
  <div>
    <A10DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
    <br />
    <A10MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
    <br />
    <A10RangePicker
      defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
      disabled
    />
  </div>,
  mountNode
);`

export const customizedRangeCode = `import { A10DatePicker } from 'a10-gui-widgets';

class DateRange extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <A10DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <A10DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<DateRange />, mountNode);`

export const extraFooterCode = `import { A10DatePicker } from 'a10-gui-widgets';

const { A10RangePicker, A10MonthPicker } = A10DatePicker;

ReactDOM.render(
  <div>
    <A10DatePicker renderExtraFooter={() => 'extra footer'} />
    <A10DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <A10RangePicker renderExtraFooter={() => 'extra footer'} />
    <A10RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <A10MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
  </div>,
  mountNode
);`

export const customizedRenderingCode = `import { A10DatePicker } from 'a10-gui-widgets';

const { A10RangePicker } = A10DatePicker;

ReactDOM.render(
  <div>
    <A10DatePicker
      dateRender={(current) => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-calendar-date" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
    <A10RangePicker
      dateRender={(current) => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-calendar-date" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  </div>,
  mountNode
);`

export const dateFormatCode = `import { A10DatePicker } from 'a10-gui-widgets';
import moment from 'moment';

const { A10MonthPicker, A10RangePicker } = A10DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
ReactDOM.render(
  <div>
    <A10DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
    <br />
    <A10MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
    <br />
    <A10RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
  </div>,
  mountNode
);`

export const chooseCode = `import { A10DatePicker } from 'a10-gui-widgets';

const { A10RangePicker } = A10DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

ReactDOM.render(
  <div>
    <A10DatePicker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />
    <br />
    <A10RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      placeholder={['Start Time', 'End Time']}
      onChange={onChange}
      onOk={onOk}
    />
  </div>,
  mountNode
);
`

export const disabledTimeCode = `import moment from 'moment';
import { A10DatePicker } from 'a10-gui-widgets';

const { A10MonthPicker, A10RangePicker } = A10DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

ReactDOM.render(
  <div>
    <A10DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
    />
    <br />
    <A10MonthPicker disabledDate={disabledDate} placeholder="Select month" />
    <br />
    <A10RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </div>,
  mountNode
);`

export const presettedCode = `import { A10DatePicker } from 'a10-gui-widgets';
import moment from 'moment';

const A10RangePicker = A10DatePicker.A10RangePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

ReactDOM.render(
  <div>
    <A10RangePicker
      ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf('month'), moment().endOf('month')] }}
      onChange={onChange}
    />
    <br />
    <A10RangePicker
      ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf('month'), moment().endOf('month')] }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
  </div>,
  mountNode
);`

export const controlledCode = `import { A10DatePicker } from 'a10-gui-widgets';

const { A10RangePicker } = A10DatePicker;

class ControlledDatePicker extends React.Component {
  state = { mode: 'time' };

  handleOpenChange = (open) => {
    if (open) {
      this.setState({ mode: 'time' });
    }
  }

  handlePanelChange = (value, mode) => {
    this.setState({ mode });
  }

  render() {
    return (
      <A10DatePicker
        mode={this.state.mode}
        showTime
        onOpenChange={this.handleOpenChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

class ControlledRangePicker extends React.Component {
  state = {
    mode: ['month', 'month'],
    value: [],
  };

  handlePanelChange = (value, mode) => {
    this.setState({
      value,
      mode: [
        mode[0] === 'date' ? 'month' : mode[0],
        mode[1] === 'date' ? 'month' : mode[1],
      ],
    });
  }

  render() {
    const { value, mode } = this.state;
    return (
      <A10RangePicker
        placeholder={['Start month', 'End month']}
        format="YYYY-MM"
        value={value}
        mode={mode}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

ReactDOM.render(
  <div>
    <ControlledDatePicker />
    <br />
    <ControlledRangePicker />
  </div>,
  mountNode
);`