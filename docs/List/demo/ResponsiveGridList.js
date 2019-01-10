import * as React from 'react'
import { A10List, A10Card } from '../../../src'
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];


const Example = () => {
    return (
        <A10List
            grid={{
                gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
                <A10List.Item>
                    <A10Card title={item.title}>Card content</A10Card>
                </A10List.Item>
            )}
        />
    )
}

export default Example
