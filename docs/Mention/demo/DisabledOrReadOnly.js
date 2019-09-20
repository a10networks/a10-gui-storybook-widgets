import * as React from 'react'
import { A10Mention } from '../../../src';

const { toString } = A10Mention;

function onChange(editorState) {
    console.log(toString(editorState));
}

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

function App() {
    return (
        <div>
            <div style={{ marginBottom: 10 }}>
                <A10Mention
                    style={{ width: '100%' }}
                    onChange={onChange}
                    placeholder="this is disabled Mention"
                    suggestions={users}
                    disabled
                />
            </div>
            <A10Mention
                style={{ width: '100%' }}
                onChange={onChange}
                placeholder="this is readOnly Mention"
                suggestions={users}
                readOnly
            />
        </div>
    );
}

export default App