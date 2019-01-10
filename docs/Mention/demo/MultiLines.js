import * as React from 'react'
import { A10Mention } from '../../../src';

function onChange(editorState) {
    console.log(toString(editorState));
}

const { toString } = A10Mention;
const Example = () => (
    <A10Mention
        style={{ width: '100%', height: 100 }}
        onChange={onChange}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
        multiLines
    />
)

export default Example