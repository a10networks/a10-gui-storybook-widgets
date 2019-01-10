import * as React from 'react'
import { A10Anchor, A10Link } from '../../../src'

const Example = () => {
  return (
    <div>
      <A10Anchor offsetTop={220}>
        Fruits: 
        <A10Link href="#grape" title="Grape">Grape</A10Link>, 
        <A10Link href="#kiwi" title="Kiwi">Kiwi</A10Link>, 
        <A10Link href="#lemon" title="Lemon">Lemon</A10Link>
      </A10Anchor>
      <section style={{ textAlign: 'center' }}>        
        <div id="grape" style={{ height: '300px', backgroundColor: 'purple' }}>
          <h2>Grape</h2>
        </div>
        <div id="kiwi" style={{ height: '300px', backgroundColor: 'yellow' }}>
          <h2>Kiwi</h2>
        </div>
        <div id="lemon" style={{ height: '300px', backgroundColor: 'lightblue' }}>
          <h2>Lemon</h2>
        </div>
      </section>            
    </div>
  )
}

export default Example
