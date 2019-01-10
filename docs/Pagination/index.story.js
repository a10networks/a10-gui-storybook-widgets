import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/Pagination/README.md'
import { A10Pagination } from '../../src'
import {
  basicPaginationCode, morePaginationCode, changePaginationCode, jumperPaginationCode,
  miniSizeCode, simpleModeCode, controlledCode, totalNumberCode, prevAndNextCode
} from './demo/code'

const BasicPaginationDemo = () => {
  return <A10Pagination defaultCurrent={1} defaultPageSize={10} total={50} />
}

const MorePaginationDemo = () => {
  return <A10Pagination defaultCurrent={6} defaultPageSize={20} total={500} />
}

const JumperPaginationDemo = () => {
  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  }

  return <A10Pagination showQuickJumper defaultCurrent={2} defaultPageSize={10} total={500} onChange={onChange} />
}

const ChangePaginationDemo = () => {
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  return <A10Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
}

const MiniSizeDemo = () => {
  function showTotal(total) {
    return `Total ${total} items`;
  }
  return (<div>
    <A10Pagination size="small" total={50} />
    <A10Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <A10Pagination size="small" total={50} showTotal={showTotal} />
  </div>)
}

const SimpleModeDemo = () => {
  return <A10Pagination simple defaultCurrent={2} total={50} />
}

const ControlledDemo = () => {
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
  return <App />
}

const TotalNumberDemo = () => {
  return (
    <div>
      <A10Pagination
        total={85}
        showTotal={total => `Total ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      />
      <br />
      <A10Pagination
        total={85}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      />
    </div>
  )
}

const PrevAndNextDemo = () => {
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    } if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  return <A10Pagination total={500} itemRender={itemRender} />

}

const Example = () => {
  const message = 'Success Text', type = 'success', closeText = 'Close Me', descriptionText = 'This is my description'
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Pagination"
        desc="Basic pagination."
        code={<Code string={basicPaginationCode} />}
      >
        <BasicPaginationDemo />
      </CodeCard>

      <CodeCard
        title="More"
        desc="More pages."
        code={<Code string={morePaginationCode} />}
      >
        <MorePaginationDemo />
      </CodeCard>
      <CodeCard
        title="Change pageSize."
        desc="Change pageSize."
        code={<Code string={changePaginationCode} />}
      >
        <ChangePaginationDemo />
      </CodeCard>
      <CodeCard
        title="Jumper pagination"
        desc="Jump to a page directly."
        code={<Code string={jumperPaginationCode} />}
      >
        <JumperPaginationDemo />
      </CodeCard>
      <CodeCard
        title="Mini size"
        desc="Mini size pagination."
        code={<Code string={miniSizeCode} />}
      >
        <MiniSizeDemo />
      </CodeCard>
      <CodeCard
        title="Simple mode"
        desc="Simple mode."
        code={<Code string={simpleModeCode} />}
      >
        <SimpleModeDemo />
      </CodeCard>
      <CodeCard
        title="Controlled"
        desc="Controlled page number."
        code={<Code string={controlledCode} />}
      >
        <ControlledDemo />
      </CodeCard>
      <CodeCard
        title="Total number"
        desc="You can show the total number of data by setting showTotal."
        code={<Code string={totalNumberCode} />}
      >
        <TotalNumberDemo />
      </CodeCard>
      <CodeCard
        title="Prev and next"
        desc="Use text link for prev and next button."
        code={<Code string={prevAndNextCode} />}
      >
        <PrevAndNextDemo />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Pagination', withReadme(readme, Example))
}
