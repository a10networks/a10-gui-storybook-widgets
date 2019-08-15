import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { Card, Divider } from 'antd'
import { CodeComponent, Code } from '../utils'

import * as A10TimePickerReadme from '../../src/TimePicker/README.md'
import { BasicUsageDemo, demoString } from './demo/basicUsage'
import ThreeDemo from './demo/ThreeSizes'
import HourMinDemo from './demo/HourMin'
import AddOnDemo from './demo/AddOn'
import UnderControlDemo from './demo/UnderControl'
import DisabledDemo from './demo/Disabled'
import IntervalDemo from './demo/IntervalDemo'
import TwelveDemo from './demo/TwelveDemo'
import './demo/index.less'
import {
  demoString,
  threeString,
  hourMinString,
  addonString,
  underString,
  disabledString,
  intervalString,
  twelveString,
} from './demo/code'
const Example = () => {
  return (
    <CodeComponent>
      <Card title="Basic Usage">
        <BasicUsageDemo />
        <Divider />
        <p>
          Click TimePicker, and then we could select or input a time in panel.
          <strong>value</strong> and onChange should be used together
        </p>
        <Code string={demoString} />
      </Card>

      <Card title="Three Sizes ">
        <ThreeDemo />
        <Divider />
        <p>
          The input box comes in three sizes. large is used in the form, while
          the medium size is the default.
        </p>
        <Code string={threeString} />
      </Card>

      <Card title="Hour and minute">
        <HourMinDemo />
        <Divider />
        <p>
          While part of format is omitted, the corresponding column in panel
          will disappear, too.
        </p>
        <Code string={hourMinString} />
      </Card>

      <Card title="Add On ">
        <AddOnDemo />
        <Divider />
        <p>Render addon contents to timepicker panel's bottom.</p>
        <Code string={addonString} />
      </Card>

      <Card title="Under Control">
        <UnderControlDemo />
        <Divider />
        <p>value and onChange should be used together.</p>
        <Code string={underString} />
      </Card>

      <Card title="disabled">
        <DisabledDemo />
        <Divider />
        <p>A disabled state of the TimePicker.</p>
        <Code string={disabledString} />
      </Card>

      <Card title="interval options">
        <IntervalDemo />
        <Divider />
        <p>Show stepped options by hourStep minuteStep secondStep.</p>
        <Code string={intervalString} />
      </Card>

      <Card title="12 hours">
        <TwelveDemo />
        <Divider />
        <p>TimePicker of 12 hours format, with default format h:mm:ss a.</p>
        <Code string={twelveString} />
      </Card>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10TimePicker', withReadme(A10TimePickerReadme, Example))
}
