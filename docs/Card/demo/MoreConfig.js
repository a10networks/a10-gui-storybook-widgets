import * as React from 'react'
import { A10Card, A10Icon, A10Avatar } from '../../../src';

const { Meta } = A10Card;

const MoreConfig = () => {
    return (
        <A10Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[<A10Icon type="setting" />, <A10Icon type="edit" />, <A10Icon type="ellipsis" />]}
        >
            <Meta
                avatar={<A10Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="A10Card title"
                description="This is the description"
            />
        </A10Card>
    )
}

export default MoreConfig