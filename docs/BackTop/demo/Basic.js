import * as React from 'react'
import { A10BackTop } from '../../../src'
import './index.less'

const Example = () => {
  return (
    <div class="exampleNoBottom">
      <div style={{ height: '1000px' }}>
        The page content is very long.
        Please scroll down the see the back-top button near the bottom right corner.
        Gray Button is an example of the basic usage button.
      </div>
      <A10BackTop />
    </div>
  )
}

export default Example