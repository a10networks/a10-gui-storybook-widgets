import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Layout, Divider } from 'antd'
import { CodeComponent, CodeCard, Code } from '../utils'

import { A10Slider } from '../../src'
const readme = require('../../src/Slider/README.md')

import { BasicSlider, IntegerSlider, DecimalSlider } from './SliderExamples'
import { IntegerStep, DecimalStep } from './SliderInputNumber'
import { IconSlider } from './SliderIcon'
import { EventDemo } from './Event'
import './styles.less'
import {
  basicString,
  sliderInputNumberString,
  sliderIconString,
  eventString,
  verticalString,
  IntegerSliderString,
  DecimalString,
} from './codes'

const { Content } = Layout

const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
}

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
}

const Example = () => (
  <div id="SliderSpecific">
    <Layout style={{ backgroundColor: '#FFF', padding: '16px' }}>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Basic" bordered={true}>
          <p>
            Basic slider. When range is true, display as dual thumb mode. When
            disable is true, the slider will not be interactable.
        </p>
          <Divider />
          <BasicSlider />
          <Divider />
          <Code string={basicString} />
        </Card>
      </Content>

      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Slider with InputNumber" bordered={true}>
          <p>
            Synchronize with InputNumber component.
        </p>
          <Divider />
          <IntegerStep />
          <DecimalStep />
          <Divider />
          <Code string={sliderInputNumberString} />
        </Card>
      </Content>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Slider with icon" bordered={true}>
          <p>
            You can add an icon beside the slider to make it meaningful.
        </p>
          <Divider />
          <IconSlider />
          <Divider />
          <Code string={sliderIconString} />
        </Card>
      </Content>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Event" bordered={true}>
          <p>
            The onChange callback function will fire when the user changes the slider's value. The onAfterChange callback function will fire when onmouseup fired.
        </p>
          <Divider />
          <EventDemo />
          <Divider />
          <Code string={eventString} />
        </Card>
      </Content>






      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Vertical Slider" bordered={true}>
          <div style={{ height: 300 }}>
            <div style={style}>
              <A10Slider vertical defaultValue={30} />
            </div>
            <div style={style}>
              <A10Slider vertical range step={10} defaultValue={[20, 50]} />
            </div>
            <div style={style}>
              <A10Slider vertical range marks={marks} defaultValue={[26, 37]} />
            </div>
          </div>
          <Divider />
          <Code string={verticalString} />
        </Card>
      </Content>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Slider with InputNumber" bordered={true}>
          <IntegerSlider />
          <Divider />
          <Code string={IntegerSliderString} />
        </Card>
      </Content>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Slider with Decimal" bordered={true}>
          <DecimalSlider />
          <Divider />
          <Code string={DecimalString} />
        </Card>
      </Content>
    </Layout>
  </div>
)

export default (story: any) => {
  story.add('A10Slider', withReadme(readme, Example))
}
