export default {}
export const basicCarouselCode = `import { A10Carousel } from 'a10-gui-widgets'

import * as React from 'react'
class Example extends React.Component {
onChange = (a, b, c) {
    console.log(a, b, c);
}
render() {
  return (
    <A10Carousel afterChange={this.onChange}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </A10Carousel>
  )
}
}
ReactDOM.render(<Example />, mountNode);`

export const verticalCarouselCode = `import { A10Carousel } from 'a10-gui-widgets'
import * as React from 'react'
class Example extends React.Component {
render() {
  return (
    <A10Carousel vertical>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </A10Carousel>
  )
}
}
ReactDOM.render(<Example />, mountNode);`

export const fadeinCarouselCode = `import { A10Carousel } from 'a10-gui-widgets'
import * as React from 'react'
class Example extends React.Component {
render() {
  return (
    <A10Carousel effect="fade">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </A10Carousel>
  )
}
}
ReactDOM.render(<Example />, mountNode);`

export const scrollAutoCarouselCode = `import { A10Carousel } from 'a10-gui-widgets'
import * as React from 'react'
class Example extends React.Component {
render() {
  return (
    <A10Carousel autoplay>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </A10Carousel>
  )
}
}
ReactDOM.render(<Example />, mountNode);`

