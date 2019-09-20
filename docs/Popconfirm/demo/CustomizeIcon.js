import * as React from 'react'
import { A10Popconfirm, A10Icon } from '../../../src'

export default class App extends React.Component {
    render() {
        return (
            <A10Popconfirm title="Are you sure？" icon={<A10Icon type="question-circle-o" style={{ color: 'red' }} />}>
                <a href="#">Delete</a>
            </A10Popconfirm>
        );
    }
}
