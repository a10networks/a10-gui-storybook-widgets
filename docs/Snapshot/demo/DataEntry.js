import * as React from 'react';
import {A10Card, A10Icon, A10Button, A10Row, A10Col, A10Switch, A10Input} from '../../../src'
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
import { BasicUsageDemo as TreeSelectBasicDemo} from '../../TreeSelect/basicUsage'
import BasicTransferExample from '../../Transfer/demo/BasicTransfer'
import { BasicUsageDemo as TimePickerBasicDemo } from '../../TimePicker/demo/basicUsage'
import UploadByClickingExample from '../../Upload/demo/UploadByClicking'

const rowStyle = {
    marginBottom: '16px'
}
const cardStyle = {
    height: '300px'
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
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10AutoComplete" bordered={false} style={cardStyle}>
                            <AutoCompleteBasicDemo />
                        </A10Card>
                    </A10Col>

                    <A10Col span={8}>
                        <A10Card title="A10Checkbox" bordered={false} style={cardStyle}>
                            <CheckboxBasicUsageDemo />
                        </A10Card>
                    </A10Col>

                    <A10Col span={8}>
                        <A10Card title="A10Cascader" bordered={false} style={cardStyle}>
                            <CascaderBasicDemo />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={24}>
                        <A10Card title="A10CompoundConfigList" bordered={false} style={cardStyle}>
                            <CompoundConfigListDemo/>
                        </A10Card>
                    </A10Col>
                </A10Row>
                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={24}>
                        <A10Card title="A10CompoundTable" bordered={false} style={cardStyle}>
                            <CompoundTableDemo/>
                        </A10Card>
                    </A10Col>
                </A10Row>
                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10DatePicker" bordered={false} style={cardStyle}>
                            <DatePickerCustomRangeDemo />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Form" bordered={false} style={cardStyle}>
                            <FormModalExample />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10InputNumber" bordered={false} style={cardStyle}>
                            <InputNumberBasicUsage  />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Input" bordered={false} style={cardStyle}>
                        <A10Input placeholder="Basic usage" />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10ListInput" bordered={false} style={cardStyle}>
                            <ListInputDemo />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Mention" bordered={false} style={cardStyle}>
                            <MentionBasicUsageDemo />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Rate" bordered={false} style={cardStyle}>
                            <OtherCharacterDemo/>
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Radio" bordered={false} style={cardStyle}>
                            <VerticalRadioGroupDemo />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Switch" bordered={false} style={cardStyle}>
                        <A10Switch defaultChecked/>
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Slider" bordered={false} style={cardStyle}>
                            <BasicSlider />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Select" bordered={false} style={cardStyle}>
                            <SelectSearchFieldDemo />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10TreeSelect" bordered={false} style={cardStyle}>
                            <TreeSelectBasicDemo/>
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={12}>
                        <A10Card title="A10TimePicker" bordered={false} style={cardStyle}>
                            <TimePickerBasicDemo style={{width: '210px'}}/>
                        </A10Card>
                    </A10Col>
                    <A10Col span={12}>
                        <A10Card title="A10Upload" bordered={false} style={cardStyle}>
                            <UploadByClickingExample style={{width: '210px'}}/>
                        </A10Card>
                    </A10Col>
                </A10Row>
                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={16}>
                        <A10Card title="A10Transfer" bordered={false} style={cardStyle}>
                            <BasicTransferExample />
                        </A10Card>
                    </A10Col>
                </A10Row>
            </div>
        </A10Card>
    )
}

export default DataEntryExamples