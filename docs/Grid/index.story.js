import * as React from 'react'

import { A10Col, A10Row, A10Slider } from '../../src'

import { Code, CodeComponent, CodeCard } from '../utils'
import { withReadme } from 'storybook-readme'
const A10GridReadme = require('../../src/Grid/README.md')
import './style/index.less'

const code = `import { A10Col, A10Row } from 'a10-gui-widgets'

ReactDOM.render(
  <div id="components-grid-demo-basic">
    <div className="code-box-demo">
      <div>
        <A10Row>
          <A10Col span={12}>col-12</A10Col>
          <A10Col span={12}>col-12</A10Col>
        </A10Row>
        <A10Row>
          <A10Col span={8}>col-8</A10Col>
          <A10Col span={8}>col-8</A10Col>
          <A10Col span={8}>col-8</A10Col>
        </A10Row>
        <A10Row>
          <A10Col span={6}>col-6</A10Col>
          <A10Col span={6}>col-6</A10Col>
          <A10Col span={6}>col-6</A10Col>
          <A10Col span={6}>col-6</A10Col>
        </A10Row>
      </div>
    </div>
  </div>
, mountNode);`

const code1 = `
import { A10Col, A10Row } from 'a10-gui-widgets';

ReactDOM.render(
  <div className="gutter-example">
    <A10Row gutter={16}>
      <A10Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </A10Col>
      <A10Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </A10Col>
      <A10Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </A10Col>
      <A10Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </A10Col>
    </A10Row>
  </div>,
  mountNode
);
`

const code2=`
import { A10Col, A10Row } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Row>
      <A10Col span={8}>col-8</A10Col>
      <A10Col span={8} offset={8}>col-8</A10Col>
    </A10Row>
    <A10Row>
      <A10Col span={6} offset={6}>col-6 col-offset-6</A10Col>
      <A10Col span={6} offset={6}>col-6 col-offset-6</A10Col>
    </A10Row>
    <A10Row>
      <A10Col span={12} offset={6}>col-12 col-offset-6</A10Col>
    </A10Row>
  </div>,
  mountNode
);
`

const code3=`
import { A10Col, A10Row } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Row>
      <A10Col span={18} push={6}>col-18 col-push-6</A10Col>
      <A10Col span={6} pull={18}>col-6 col-pull-18</A10Col>
    </A10Row>
  </div>,
  mountNode
);
`

const code4=`
import { A10Col, A10Row } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <p>sub-element align left</p>
    <A10Row type="flex" justify="start">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>

    <p>sub-element align center</p>
    <A10Row type="flex" justify="center">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>

    <p>sub-element align right</p>
    <A10Row type="flex" justify="end">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>

    <p>sub-element monospaced arrangement</p>
    <A10Row type="flex" justify="space-between">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>

    <p>sub-element align full</p>
    <A10Row type="flex" justify="space-around">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>
  </div>,
  mountNode
);
`

const code5=`
import { A10Col, A10Row } from 'a10-gui-widgets';

const DemoBox = props => <p className={height-props.value}>{props.children}</p>;

ReactDOM.render(
  <div>
    <p>Align Top</p>
    <A10Row type="flex" justify="center" align="top">
      <A10Col span={4}><DemoBox value={100}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={50}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={120}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={80}>col-4</DemoBox></A10Col>
    </A10Row>

    <p>Align Center</p>
    <A10Row type="flex" justify="space-around" align="middle">
      <A10Col span={4}><DemoBox value={100}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={50}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={120}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={80}>col-4</DemoBox></A10Col>
    </A10Row>

    <p>Align Bottom</p>
    <A10Row type="flex" justify="space-between" align="bottom">
      <A10Col span={4}><DemoBox value={100}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={50}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={120}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={80}>col-4</DemoBox></A10Col>
    </A10Row>
  </div>,
  mountNode
);
`

const code6=`
import { A10Col, A10Row } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Row type="flex">
      <A10Col span={6} order={4}>1 col-order-4</A10Col>
      <A10Col span={6} order={3}>2 col-order-3</A10Col>
      <A10Col span={6} order={2}>3 col-order-2</A10Col>
      <A10Col span={6} order={1}>4 col-order-1</A10Col>
    </A10Row>
  </div>,
  mountNode
);
`

const code7=`
import { A10Col, A10Row } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Row>
    <A10Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</A10Col>
    <A10Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</A10Col>
    <A10Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</A10Col>
  </A10Row>,
  mountNode
);
`

const code8=`
import { A10Col, A10Row } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Row>
    <A10Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</A10Col>
    <A10Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</A10Col>
    <A10Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</A10Col>
  </A10Row>,
  mountNode
);
`

const code9=`
import { A10Col, A10Row ,A10Slider} from 'a10-gui-widgets';

class App extends React.Component {
  gutters = {};

  colCounts = {};

  constructor() {
    super();
    this.state = {
      gutterKey: 1,
      colCountKey: 2,
    };
    [8, 16, 24, 32, 40, 48].forEach((value, i) => { this.gutters[i] = value; });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => { this.colCounts[i] = value; });
  }

  onGutterChange = (gutterKey) => {
    this.setState({ gutterKey });
  }

  onColCountChange = (colCountKey) => {
    this.setState({ colCountKey });
  }

  render() {
    const { gutterKey, colCountKey } = this.state;
    const cols = [];
    const colCount = this.colCounts[colCountKey];
    let colCode = '';
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <A10Col key={i.toString()} span={24 / colCount}>
          <div>Column</div>
        </A10Col>
      );
      colCode +=   <Col span={24 / colCount} />;
    }
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 6 }}>Gutter (px): </span>
          <div style={{ width: '50%' }}>
            <A10Slider
              min={0}
              max={Object.keys(this.gutters).length - 1}
              value={gutterKey}
              onChange={this.onGutterChange}
              marks={this.gutters}
              step={null}
            />
          </div>
          <span style={{ marginRight: 6 }}>Column Count:</span>
          <div style={{ width: '50%' }}>
            <A10Slider
              min={0}
              max={Object.keys(this.colCounts).length - 1}
              value={colCountKey}
              onChange={this.onColCountChange}
              marks={this.colCounts}
              step={null}
            />
          </div>
        </div>
        <A10Row gutter={this.gutters[gutterKey]}>{cols}</A10Row>
        <pre>{<A10Row gutter={this.gutters[gutterKey]}>\ncolCode</A10Row>}</pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
`
const Demo = () => {
  return (
    <div id="components-grid-demo-basic">
    <div className="code-box-demo">
      <div>
        <A10Row>
          <A10Col span={12}>col-12</A10Col>
          <A10Col span={12}>col-12</A10Col>
        </A10Row>
        <A10Row>
          <A10Col span={8}>col-8</A10Col>
          <A10Col span={8}>col-8</A10Col>
          <A10Col span={8}>col-8</A10Col>
        </A10Row>
        <A10Row>
          <A10Col span={6}>col-6</A10Col>
          <A10Col span={6}>col-6</A10Col>
          <A10Col span={6}>col-6</A10Col>
          <A10Col span={6}>col-6</A10Col>
        </A10Row>
      </div>
    </div>
  </div>
  )
}

const Demo1 = () => {
  return (
    <div id="components-grid-demo-basic">
      <div className="gutter-example">
      <div>
        <A10Row gutter={16}>
        <A10Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
        </A10Col>
        <A10Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
        </A10Col>
        <A10Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
        </A10Col>
        <A10Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
        </A10Col>
        </A10Row>
      </div>
      </div>
    </div>
  )
}

const Demo2 = () => {
  return(
    <div id="components-grid-demo-basic">
      <div className="code-box-demo">
    <div>
    <A10Row>
      <A10Col span={8}>col-8</A10Col>
      <A10Col span={8} offset={8}>col-8</A10Col>
    </A10Row>
    <A10Row>
      <A10Col span={6} offset={6}>col-6 col-offset-6</A10Col>
      <A10Col span={6} offset={6}>col-6 col-offset-6</A10Col>
    </A10Row>
    <A10Row>
      <A10Col span={12} offset={6}>col-12 col-offset-6</A10Col>
    </A10Row>
  </div>
  </div>
  </div>
  )
}

const Demo3 =() =>{
  return (
    <div id="components-grid-demo-basic">
      <div className="code-box-demo">
    <div>
    <A10Row>
      <A10Col span={18} push={6}>col-18 col-push-6</A10Col>
      <A10Col span={6} pull={18}>col-6 col-pull-18</A10Col>
    </A10Row>
  </div>
  </div>
  </div>
  )
}

const Demo4 =() =>{
  return (
    <div id="components-grid-demo-basic">
      <div className="code-box-demo">
    <div>
    <p>sub-element align left</p>
    <A10Row type="flex" justify="start">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>

    <p>sub-element align center</p>
    <A10Row type="flex" justify="center">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>

    <p>sub-element align right</p>
    <A10Row type="flex" justify="end">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>

    <p>sub-element monospaced arrangement</p>
    <A10Row type="flex" justify="space-between">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>

    <p>sub-element align full</p>
    <A10Row type="flex" justify="space-around">
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
      <A10Col span={4}>col-4</A10Col>
    </A10Row>
  </div>
  </div>
  </div>
  )
}
const Demo5 = () => {
  const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
  return(
    <div id="components-grid-demo-basic">
      <div className="code-box-demo">
<div>
    <p>Align Top</p>
    <A10Row type="flex" justify="center" align="top">
      <A10Col span={4}><DemoBox value={100}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={50}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={120}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={80}>col-4</DemoBox></A10Col>
    </A10Row>

    <p>Align Center</p>
    <A10Row type="flex" justify="space-around" align="middle">
      <A10Col span={4}><DemoBox value={100}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={50}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={120}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={80}>col-4</DemoBox></A10Col>
    </A10Row>

    <p>Align Bottom</p>
    <A10Row type="flex" justify="space-between" align="bottom">
      <A10Col span={4}><DemoBox value={100}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={50}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={120}>col-4</DemoBox></A10Col>
      <A10Col span={4}><DemoBox value={80}>col-4</DemoBox></A10Col>
    </A10Row>
  </div>
  </div>
  </div>
  )
}
const Demo6 = () => {
  return (
    <div id="components-grid-demo-basic">
    <div className="code-box-demo">
<div>
    <A10Row type="flex">
      <A10Col span={6} order={4}>1 col-order-4</A10Col>
      <A10Col span={6} order={3}>2 col-order-3</A10Col>
      <A10Col span={6} order={2}>3 col-order-2</A10Col>
      <A10Col span={6} order={1}>4 col-order-1</A10Col>
    </A10Row>
  </div>
  </div>
  </div>
  )
}
const Demo7 = () => {
  return (
    <div id="components-grid-demo-basic">
    <div className="code-box-demo">
    <A10Row>
<A10Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</A10Col>
<A10Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</A10Col>
<A10Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</A10Col>
</A10Row>
</div>
</div>
  )
}
const Demo8 = () => {
  return (
    <div id="components-grid-demo-basic">
    <div className="code-box-demo">
    <A10Row>
    <A10Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</A10Col>
    <A10Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</A10Col>
    <A10Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</A10Col>
  </A10Row>
  </div>
</div>
  )
}
const Demo9 = () => {
  class App extends React.Component {
    gutters = {};
  
    colCounts = {};
  
    constructor() {
      super();
      this.state = {
        gutterKey: 1,
        colCountKey: 2,
      };
      [8, 16, 24, 32, 40, 48].forEach((value, i) => { this.gutters[i] = value; });
      [2, 3, 4, 6, 8, 12].forEach((value, i) => { this.colCounts[i] = value; });
    }
  
    onGutterChange = (gutterKey) => {
      this.setState({ gutterKey });
    }
  
    onColCountChange = (colCountKey) => {
      this.setState({ colCountKey });
    }
  
    render() {
      const { gutterKey, colCountKey } = this.state;
      const cols = [];
      const colCount = this.colCounts[colCountKey];
      let colCode = '';
      for (let i = 0; i < colCount; i++) {
        cols.push(
          <A10Col key={i.toString()} span={24 / colCount}>
            <div>Column</div>
          </A10Col>
        );
        colCode += `  <Col span={${24 / colCount}} />\n`;
      }
      return (
        <div id="components-grid-demo-basic">
      <div className="code-box-demo">
        <div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ marginRight: 6 }}>Gutter (px): </span>
            <div style={{ width: '50%' }}>
              <A10Slider
                min={0}
                max={Object.keys(this.gutters).length - 1}
                value={gutterKey}
                onChange={this.onGutterChange}
                marks={this.gutters}
                step={null}
              />
            </div>
            <br/>
            <span style={{ marginRight: 6 }}>Column Count:</span>
            <div style={{ width: '50%' }}>
              <A10Slider
                min={0}
                max={Object.keys(this.colCounts).length - 1}
                value={colCountKey}
                onChange={this.onColCountChange}
                marks={this.colCounts}
                step={null}
              />
            </div>
          </div>
          <br/>
          <A10Row gutter={this.gutters[gutterKey]}>{cols}</A10Row>
          <pre>{`<Row gutter={${this.gutters[gutterKey]}}>\n${colCode}</Row>`}</pre>
        </div>
        </div>
        </div>
      );
    }
  }
  return <App />
}
const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Grid"
        desc="Basic grid with row and col"
        code={<Code string={code} />}
      >
        <Demo/> 
      </CodeCard>
      <CodeCard
        title="Grid Gutter"
        desc="You can use the gutter property of Row as grid spacing, we recommend set it to (16 + 8n) px. (n stands for natural number.)

        You can set it to a object like { xs: 8, sm: 16, md: 24, lg: 32 } for responsive design."
        code={<Code string={code1} />}
      >
        <Demo1/>  
      </CodeCard>
      <CodeCard
        title="Column offset"
        desc="Offset can set the column to the right side. For example, using offset = {4} can set the element shifted to the right four columns width."
        code={<Code string={code2} />}
      >
        <Demo2/>  
      </CodeCard>
      <CodeCard
        title="Grid sort"
        desc="By using push andpull class you can easily change column order."
        code={<Code string={code3} />}
      >
        <Demo3/>  
      </CodeCard>
      <CodeCard
        title="Flex Layout"
        desc="Use row-flex define flex layout, its child elements depending on the value of the start,center, end,space-between, space-around, which are defined in its parent node layout mode."
        code={<Code string={code4} />}
      >
        <Demo4/>  
      </CodeCard>
      <CodeCard
        title="Flex Alignment"
        desc="Flex child elements vertically aligned."
        code={<Code string={code5} />}
      >
        <Demo5/>  
      </CodeCard>
      <CodeCard
        title="Flex Order"
        desc="To change the element sort by Flex layout order."
        code={<Code string={code6} />}
      >
        <Demo6/>  
      </CodeCard>
      <CodeCard
        title="Responsive"
        desc="Referring to the Bootstrap responsive design, here preset six dimensions: xs sm md lg xl."
        code={<Code string={code7} />}
      >
        <Demo7/>  
      </CodeCard>
      <CodeCard
        title="More responsive"
        desc="span pull push offset order property can be embedded into xs sm md lg xl properties to use, where xs = {6} is equivalent to xs = {{span: 6}}."
        code={<Code string={code8} />}
      >
        <Demo8/>  
      </CodeCard>
      <CodeCard
        title="Playground"
        desc="A simple playground for column count and gutter."
        code={<Code string={code9} />}
      >
        <Demo9/>  
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Grid', withReadme(A10GridReadme, Example))
}
