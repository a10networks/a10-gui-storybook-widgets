import * as React from 'react'
import { A10Alert } from '../../../src'

const onClose = (e) => {
    console.log(e, 'I was closed.');
};

const ClosableExample = () => {
    return (
        <div>
            <A10Alert
                message="Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text"
                type="warning"
                closable
                onClose={onClose}
            />
            <div style={{ height: '8px' }} />
            <A10Alert
                message="Error Text"
                description="Error Description Error Description Error Description Error Description Error Description Error Description"
                type="error"
                closable
                onClose={onClose}
            />
        </div>
    )
}

export default ClosableExample
