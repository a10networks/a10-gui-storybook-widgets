import * as React from 'react'
import './demo/index.less'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Divider } from 'antd'
import { CodeComponent, Code } from '../utils'

import * as readme from '../../src/DatePicker/README.md'
import BasicDemo from './demo/BasicDemo'
import ThreeSizesDemo from './demo/ThreeSizesDemo'
import DisabledDemo from './demo/DisabledDemo'
import CustomRangeDemo from './demo/CustomRangeDemo'
import ExtraFooterDemo from './demo/ExtraFooterDemo'
import CustomizedRenderingDemo from './demo/CustomizedRenderingDemo'
import DateFormatDemo from './demo/DateFormatDemo'
import ChooseTimeDemo from './demo/ChooseTimeDemo'
import DisabledDateDemo from './demo/DisabledDateDemo'
import PresettedDemo from './demo/PresettedDemo'
import { ControlledRangePicker, ControlledDatePicker } from './demo/ControlledDemo'
import { basicCode, threeSizesCode, disabledCode, customizedRangeCode, extraFooterCode, customizedRenderingCode, dateFormatCode, chooseCode, disabledTimeCode, presettedCode, controlledCode } from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <Card title="Basic">
        <BasicDemo />
        <Divider />
        <p>Basic use case. Users can select or input a date in panel.</p>
        <Code string={basicCode} />
      </Card>

      <Card title="Three Sizes Code">
        <ThreeSizesDemo />
        <Divider />
        <p>The input box comes in three sizes. default will be used if size is omitted.</p>
        <Code string={threeSizesCode} />
      </Card>

      <Card title="Disabled">
        <DisabledDemo />
        <Divider />
        <p>A disabled state of the DatePicker.</p>
        <Code string={disabledCode} />
      </Card>

      <Card title="Customized Range Picker">
        <CustomRangeDemo />
        <Divider />
        <p>When RangePicker does not satisfied your requirements, try to implement similar functionality with two DatePicker. Use the disabledDate property to limit the start and end dates.Improve user experience with open and onOpenChange.</p>
        <Code string={customizedRangeCode} />
      </Card>

      <Card title="Extra Footer">
        <ExtraFooterDemo />
        <Divider />
        <p>Render extra footer in panel for customized requirements.</p>
        <Code string={extraFooterCode} />
      </Card>

      <Card title="Customized Date Rendering">
        <CustomizedRenderingDemo />
        <Divider />
        <p>We can customize the rendering of date cells in the calendar by providing a dateRender function to DatePicker.</p>
        <Code string={customizedRenderingCode} />
      </Card>

      {/* <Card title="Date Format">
        <DateFormatDemo />
        <Divider />
        <p>We can set the date format by format.</p>
        <Code string={dateFormatCode} />
      </Card> */}

      <Card title="Choose Time">
        <ChooseTimeDemo />
        <Divider />
        <p>This property provide an additional time selection. When showTime is an Object, its properties will be passed on to built-in TimePicker.</p>
        <Code string={chooseCode} />
      </Card>

      <Card title="Disabled Date &amp; Time">
        <DisabledDateDemo />
        <Divider />
        <p>Disabled part of dates and time by disabledDate and disabledTime respectively, and disabledTime only works with showTime.</p>
        <Code string={disabledTimeCode} />
      </Card>

      <Card title="Presetted Ranges">
        <PresettedDemo />
        <Divider />
        <p>We can set presetted ranges to RangePicker to improve user experience.</p>
        <Code string={presettedCode} />
      </Card>

      <Card title="Controlled Panels">
        <ControlledDatePicker />
        <ControlledRangePicker />
        <Divider />
        <p>Determing which panel to show with mode and onPanelChange.</p>
        <Code string={controlledCode} />
      </Card>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10DatePicker', withReadme(readme, Example))
}
