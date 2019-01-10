import * as React from 'react'
import { A10Popover, A10Button } from '../../../src'

const text = <span>Title</span>;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

export default class App extends React.Component {
    render() {
        return (
            <div>
                <A10Popover placement="topLeft" title={text} content={content}>
                    <A10Button>Align edge / 边缘对齐</A10Button>
                </A10Popover>
                <A10Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
                    <A10Button>Arrow points to center / 箭头指向中心</A10Button>
                </A10Popover>
            </div>
        );
    }
}
