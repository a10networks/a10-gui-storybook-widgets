export const basicPaginationCode = `import * as React from 'react'
import { A10Pagination } from 'a10-gui-widgets'

const Example = () => (
  <A10Pagination defaultCurrent={1} defaultPageSize={10} total={50} />
)
ReactDOM.render(<Example />, mountNode)`

export const morePaginationCode = `import { A10Pagination } from 'a10-gui-widgets'

const Example = () => (
  <A10Pagination defaultCurrent={6} defaultPageSize={20} pageSize={10}  total={500} />
)
ReactDOM.render(<Example />, mountNode)`

export const changePaginationCode = `
import { A10Pagination } from 'a10-gui-widgets';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

ReactDOM.render(
  <A10Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />,
  mountNode
);
`
export const jumperPaginationCode = `import { A10Pagination } from 'a10-gui-widgets'

const onChange = (pageNumber) => {
  console.log('Page: ', pageNumber);
}

const Example = () => (
  <A10Pagination showQuickJumper defaultCurrent={2} defaultPageSize={10} total={500} onChange={onChange} />
)
ReactDOM.render(<Example />, mountNode)`

export const miniSizeCode = `
import { A10Pagination } from 'a10-gui-widgets';

function showTotal(total) {
  return 'Total '$'{total} items';
}

ReactDOM.render(
  <div>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
  </div>,
  mountNode
);
`

export const simpleModeCode = `
import { A10Pagination } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Pagination simple defaultCurrent={2} total={50} />,
  mountNode
);
`

export const controlledCode = `
import { A10Pagination } from 'a10-gui-widgets';

class App extends React.Component {
  state = {
    current: 3,
  }

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }

  render() {
    return <A10Pagination current={this.state.current} onChange={this.onChange} total={50} />;
  }
}

ReactDOM.render(<App />, mountNode);
`

export const totalNumberCode = `
import { A10Pagination } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <Pagination
      total={85}
      showTotal={total => 'Total { total } items'}
      pageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => '{range[0]}-{range[1]} of {total} items'}
      pageSize={20}
      defaultCurrent={1}
    />
  </div>,
  mountNode
);
`

export const prevAndNextCode = `
import { A10Pagination } from 'a10-gui-widgets';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  } if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

ReactDOM.render(
  <A10Pagination total={500} itemRender={itemRender} />,
  mountNode
);
`