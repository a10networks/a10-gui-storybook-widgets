
export default {}
export const basicCalendarCode = `import { A10Calendar } from 'a10-gui-widgets';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <A10Calendar onPanelChange={onPanelChange} />,
  mountNode
);`

export const noticeCalendarCode = `import { A10Calendar, A10Badge } from 'a10-gui-widgets';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ]; break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ]; break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ]; break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.content}>
            <A10Badge status={item.type} text={item.content} />
          </li>
        ))
      }
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

ReactDOM.render(
  <A10Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
  mountNode
);`

export const cardCalendarCode = `import { A10Calendar } from 'a10-gui-widgets';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <A10Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>,
  mountNode
);`

export const selectableCalendarCode = `import { A10Calendar, A10Alert } from 'a10-gui-widgets';
import moment from 'moment';

class App extends React.Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  }

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  }

  onPanelChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <A10Alert message={\`You selected date: $\`{selectedValue && selectedValue.format('YYYY-MM-DD')}\`} />
        <A10Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
`
