import * as React from 'react'
import { A10Anchor } from '../../../src'

const { Link } = A10Anchor;

const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};

const CustomizeOnClickExample = () => {
  return (
    <div id="customizeAnchor">
      <A10Anchor affix={false} onClick={handleClick}>
        <Link href="#basicAnchor" title="Basic Anchor" />
        <Link href="#staticAnchor" title="Static Anchor" >
          <Link href="#staticAnchor1" title="Static Anchor 1" />
          <Link href="#staticAnchor2" title="Static Anchor 2" />
        </Link>
        <Link href="#customizeAnchor" title="Customize Anchor" />
      </A10Anchor>
    </div>
  )
}

export default CustomizeOnClickExample
