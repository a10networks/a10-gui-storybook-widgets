import * as React from 'react'
import { A10Mention } from '../../../src';

const onChange = (contentState) => {
  console.log(A10Mention.toString(contentState));
}

const onSelect = (suggestion) => {
  console.log('onSelect', suggestion);
}

const Example = () => (
  <A10Mention
    style={{ width: '100%' }}
    onChange={onChange}
    suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
    onSelect={onSelect}
    placement="top"
  />
)

export default Example
