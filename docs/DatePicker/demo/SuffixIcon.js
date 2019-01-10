import * as React from 'react';
import { A10Icon } from '../../../src'


export default class SuffixIcon extends React.Component {
    render() {
        return (
            <div>
                <A10Icon app="global" type="calendar" />
                <A10Icon app="global" type="dropdown" />
            </div>
        )
    }
}