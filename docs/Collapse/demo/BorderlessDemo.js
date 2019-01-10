import * as React from 'react'
import { A10Collapse } from '../../../src'

const Panel = A10Collapse.Panel;

const text = (
    <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
  </p>
);

const BorderlessDemo = () => {
    return (
        <A10Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel header="This is panel header 1" key="1">
                {text}
            </Panel>
            <Panel header="This is panel header 2" key="2">
                {text}
            </Panel>
            <Panel header="This is panel header 3" key="3">
                {text}
            </Panel>
        </A10Collapse>
    )
}

export default BorderlessDemo