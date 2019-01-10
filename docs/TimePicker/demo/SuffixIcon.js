import * as React from 'react';
import { A10Icon } from '../../../src';

const styles = {
    clock: {
        large: {
            width: '21.8px',
            height: '21.4px'
        },
        medium: {
            width: '18.8px',
            height: '18.4px'
        },
        small: {
            width: '14.8px',
            height: '14.4px'
        }
    },
    dropdown: {
        width: '10px',
        height: '5px'
    }
}
export default class Icons extends React.Component {

    styleType = this.props.size;

    render() {
        return (
            < div >
                <A10Icon style={styles.clock[this.props.size]} app="global" type="clock" />
                <A10Icon style={styles.dropdown} app="global" type="dropdown" />
            </div >
        )
    }
}
