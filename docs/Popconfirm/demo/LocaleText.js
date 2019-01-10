import * as React from 'react'
import { A10Popconfirm } from '../../../src'

export default class App extends React.Component {
    render() {
        return (
            <A10Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                <a href="#">Delete</a>
            </A10Popconfirm>
        );
    }
}