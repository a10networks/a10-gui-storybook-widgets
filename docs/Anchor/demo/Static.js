import * as React from 'react'
import { A10Anchor } from '../../../src'
const { Link } = A10Anchor;

const Static = () => {
  return (
    <div id="staticAnchor">
      <A10Anchor affix={false}>
        <Link href="#basicAnchor" title="Basic Anchor" />
        <Link href="#staticAnchor" title="Static Anchor" >
          <Link href="#staticAnchor1" title="Static Anchor 1" />
          <Link href="#staticAnchor2" title="Static Anchor 2" />
        </Link>
        <Link href="#customizeAnchor" title="Customize Anchor" />
      </A10Anchor>
      {/* <div id="staticAnchor1">Static Anchor 1</div>
      <div id="staticAnchor2">Static Anchor 2</div> */}
    </div>
  )
}

export default Static
