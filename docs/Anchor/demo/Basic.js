import { A10Anchor } from '../../../src'
import * as React from 'react'

const { Link } = A10Anchor

const BasicDemo = () => {
  return (
    <div id="basicAnchor">
      <A10Anchor>
        <Link href="#basicAnchor" title="Basic Anchor" />
        <Link href="#staticAnchor" title="Static Anchor">
          <Link href="#staticAnchor1" title="Static Anchor 1" />
          <Link href="#staticAnchor2" title="Static Anchor 2" />
        </Link>
        <Link href="#customizeAnchor" title="Customize Anchor" />
      </A10Anchor>
    </div>
  )
}

export default BasicDemo
