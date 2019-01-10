import * as React from 'react'
import { A10Collapse } from '../../../src'

const Panel = A10Collapse.Panel;

function callback(key) {
    console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const NestedDemo = () => {
    return (
        <A10Collapse onChange={callback}>
            <Panel header="This is panel header 1" key="1">
                <A10Collapse defaultActiveKey="1">
                    <Panel header="This is panel nest panel" key="1">
                        <p>{text}</p>
                    </Panel>
                </A10Collapse>
            </Panel>
            <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
            </Panel>
        </A10Collapse>
    )
}

export default NestedDemo