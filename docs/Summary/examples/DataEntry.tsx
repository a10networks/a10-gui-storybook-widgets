import * as React from 'react'
import {
  A10Card,
  A10Icon,
  A10Button,
  A10Row,
  A10Col,
  A10Switch,
  A10Input,
} from '../../../src'
import AutoCompleteBasicDemo from '../../AutoComplete/demo/BasicDemo'
import CheckboxBasicUsageDemo from '../../Checkbox/demo/BasicUsage'
import CascaderBasicDemo from '../../Cascader/demo/BasicDemo'
import CompoundConfigListDemo from '../../CompoundConfigList/SimpleUsage'
import CompoundTableDemo from '../../CompoundTable/SimpleUsage'
import DatePickerCustomRangeDemo from '../../DatePicker/demo/CustomRangeDemo'
import FormModalExample from '../../Form/demo/Modal'
import InputNumberBasicUsage from '../../InputNumber/demo/BasicUsage'
import ListInputDemo from '../../ListInput/SimpleUsage'
import MentionBasicUsageDemo from '../../Mention/demo/BasicUsage'
import { OtherCharacterDemo } from '../../Rate/otherCharacter'
import VerticalRadioGroupDemo from '../../Radio/demo/VerticalRadioGroup'
import { BasicSlider } from '../../Slider/SliderExamples'
import SelectSearchFieldDemo from '../../Select/demo/SearchField'
import { BasicUsageDemo as TreeSelectBasicDemo } from '../../TreeSelect/basicUsage'
import BasicTransferExample from '../../Transfer/demo/BasicTransfer'
import { BasicUsageDemo as TimePickerBasicDemo } from '../../TimePicker/demo/basicUsage'
import UploadByClickingExample from '../../Upload/demo/UploadByClicking'

const rowStyle = {
  marginBottom: '16px',
}
const cardStyle = {
  height: '300px',
}
const DataEntryExamples = () => {
  return (
    <A10Card>
      <p
        style={{
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.85)',
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        Data Entry Widgets
      </p>
      <div>
        <A10Row gutter={16} style={rowStyle}>
          <A10Col span={8}>
            <A10Card title="A10AutoComplete" type="inner" style={cardStyle}>
              <AutoCompleteBasicDemo />
            </A10Card>
          </A10Col>

          <A10Col span={8}>
            <A10Card title="A10Checkbox" type="inner" style={cardStyle}>
              <CheckboxBasicUsageDemo />
            </A10Card>
          </A10Col>

          <A10Col span={8}>
            <A10Card title="A10Cascader" type="inner" style={cardStyle}>
              <CascaderBasicDemo />
            </A10Card>
          </A10Col>
        </A10Row>

        <A10Row gutter={16} style={rowStyle}>
          <A10Col span={24}>
            <A10Card
              title="A10CompoundConfigList"
              type="inner"
              style={cardStyle}
            >
              <CompoundConfigListDemo />
            </A10Card>
          </A10Col>
        </A10Row>
        <A10Row gutter={16} style={rowStyle}>
          <A10Col span={24}>
            <A10Card title="A10CompoundTable" type="inner" style={cardStyle}>
              <CompoundTableDemo />
            </A10Card>
          </A10Col>
        </A10Row>
        <A10Row gutter={16} style={rowStyle}>
          <A10Col span={8}>
            <A10Card title="A10DatePicker" type="inner" style={cardStyle}>
              <DatePickerCustomRangeDemo />
            </A10Card>
          </A10Col>
          <A10Col span={8}>
            <A10Card title="A10Form" type="inner" style={cardStyle}>
              <FormModalExample />
            </A10Card>
          </A10Col>
          <A10Col span={8}>
            <A10Card title="A10InputNumber" type="inner" style={cardStyle}>
              <InputNumberBasicUsage />
            </A10Card>
          </A10Col>
        </A10Row>

        <A10Row gutter={16} style={rowStyle}>
          <A10Col span={8}>
            <A10Card title="A10Input" type="inner" style={cardStyle}>
              <A10Input placeholder="Basic usage" />
            </A10Card>
          </A10Col>
          <A10Col span={8}>
            <A10Card title="A10ListInput" type="inner" style={cardStyle}>
              <ListInputDemo />
            </A10Card>
          </A10Col>
          <A10Col span={8}>
            <A10Card title="A10Mention" type="inner" style={cardStyle}>
              <MentionBasicUsageDemo />
            </A10Card>
          </A10Col>
        </A10Row>

        <A10Row gutter={16} style={rowStyle}>
          <A10Col span={6}>
            <A10Card title="A10Rate" type="inner" style={cardStyle}>
              <OtherCharacterDemo />
            </A10Card>
          </A10Col>
          <A10Col span={6}>
            <A10Card title="A10Radio" type="inner" style={cardStyle}>
              <VerticalRadioGroupDemo />
            </A10Card>
          </A10Col>
          <A10Col span={12}>
            <A10Card title="A10TreeSelect" type="inner" style={cardStyle}>
              <TreeSelectBasicDemo />
            </A10Card>
          </A10Col>
        </A10Row>

        <A10Row gutter={16} style={rowStyle}>
          <A10Col span={12}>
            <A10Card title="A10Slider" type="inner" style={cardStyle}>
              <BasicSlider />
            </A10Card>
          </A10Col>
          <A10Col span={12}>
            <A10Card title="A10Select" type="inner" style={cardStyle}>
              <SelectSearchFieldDemo />
            </A10Card>
          </A10Col>
        </A10Row>

        <A10Row gutter={16} style={rowStyle}>
          <A10Col span={12}>
            <A10Card title="A10TimePicker" type="inner" style={cardStyle}>
              <TimePickerBasicDemo style={{ width: '210px' }} />
            </A10Card>
          </A10Col>
          <A10Col span={12}>
            <A10Card title="A10Upload" type="inner" style={cardStyle}>
              <UploadByClickingExample style={{ width: '210px' }} />
            </A10Card>
          </A10Col>
        </A10Row>
        <A10Row gutter={16} style={rowStyle}>
          <A10Col span={16}>
            <A10Card title="A10Transfer" type="inner" style={cardStyle}>
              <BasicTransferExample />
            </A10Card>
          </A10Col>
          <A10Col span={8}>
            <A10Card title="A10Switch" type="inner" style={cardStyle}>
              <A10Switch defaultChecked />
            </A10Card>
          </A10Col>
        </A10Row>
      </div>
    </A10Card>
  )
}

export default DataEntryExamples
