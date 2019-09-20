import * as React from 'react'
import { A10Alert } from '../../../src'

const IconExample = () => {
    return (
        <div>
            <A10Alert message="Success Tips" type="success" showIcon />
            <div style={{ height: '8px' }} />
            <A10Alert message="Informational Notes" type="info" showIcon />
            <div style={{ height: '8px' }} />
            <A10Alert message="Warning" type="warning" showIcon />
            <div style={{ height: '8px' }} />
            <A10Alert message="Error" type="error" showIcon />
            <div style={{ height: '8px' }} />
            <A10Alert
                message="Success Tips"
                description="Detailed description and advices about successful copywriting."
                type="success"
                showIcon
            />
            <div style={{ height: '8px' }} />
            <A10Alert
                message="Informational Notes"
                description="Additional description and informations about copywriting."
                type="info"
                showIcon
            />
            <div style={{ height: '8px' }} />
            <A10Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
            />
            <div style={{ height: '8px' }} />
            <A10Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
            />
        </div>
    )
}

export default IconExample