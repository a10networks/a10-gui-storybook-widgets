import * as React from 'react'
import { A10Card } from '../../../src';

const { Meta } = A10Card;

const CustomizedDemo = () => {
    return (
        <A10Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta
                title="Europe Street beat"
                description="www.instagram.com"
            />
        </A10Card>
    )
}

export default CustomizedDemo