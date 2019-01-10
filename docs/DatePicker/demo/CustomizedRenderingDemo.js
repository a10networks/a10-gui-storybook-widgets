import * as React from 'react'
import { A10DatePicker } from '../../../src';
import ComboIcons from './SuffixIcon'
const { A10RangePicker } = A10DatePicker;

const CustomizedRenderingDemo = () => {
    return (
        <div>
            < A10DatePicker
                dateRender={(current) => {
                    const style = {};
                    if (current.date() === 1) {
                        style.border = '1px solid #1890ff';
                        style.borderRadius = '50%';
                    }
                    return (
                        <div className="ant-calendar-date" style={style}>
                            {current.date()}
                        </div>
                    );
                }}
                suffixIcon={<ComboIcons />}
            />
            <A10RangePicker
                dateRender={(current) => {
                    const style = {};
                    if (current.date() === 1) {
                        style.border = '1px solid #1890ff';
                        style.borderRadius = '50%';
                    }
                    return (
                        <div className="ant-calendar-date" style={style}>
                            {current.date()}
                        </div>
                    );
                }}
                suffixIcon={<ComboIcons />}
            />
        </div>
    )
}

export default CustomizedRenderingDemo