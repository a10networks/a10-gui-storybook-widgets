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
];


const Example = () => {
    return (
        <A10List
            grid={{ gutter: 16, column: 4 }}
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
