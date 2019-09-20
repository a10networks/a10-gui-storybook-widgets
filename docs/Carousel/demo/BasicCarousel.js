import * as React from 'react'
import { A10Carousel } from '../../../src'

function onChange(a, b, c) {
  console.log(a, b, c);
}

const BasicCarousel = () => {
  return (
    <A10Carousel afterChange={onChange}>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </A10Carousel>
  )
}

export default BasicCarousel 
