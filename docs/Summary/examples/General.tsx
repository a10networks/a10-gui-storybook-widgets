import * as React from 'react'
import { A10Card, A10Button, A10Icon } from '../../../src'
import TypeDemo from '../../Button/demo/TypeDemo'
import TwoIconDemo from '../../Icon/demo/Twoicon'
const GeneralExamples = () => {
  return (
    <A10Card>
      <p
        style={{
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.85)',
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        General Widgets
      </p>
      <A10Card type="inner" title="A10Button">
        <TypeDemo />
      </A10Card>
      <A10Card style={{ marginTop: 16 }} type="inner" title="A10Icon">
        <TwoIconDemo />
      </A10Card>
    </A10Card>
  )
}

export default GeneralExamples
