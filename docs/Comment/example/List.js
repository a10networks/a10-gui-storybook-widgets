import * as React from 'react'
import { A10Comment, A10Tooltip, A10List } from '../../../src'
import * as moment from 'moment'

const data = [
    {
        actions: [<span>Reply to</span>],
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
        ),
        datetime: (
            <A10Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(1, 'days').fromNow()}</span>
            </A10Tooltip>
        ),
    },
    {
        actions: [<span>Reply to</span>],
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
        ),
        datetime: (
            <A10Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(2, 'days').fromNow()}</span>
            </A10Tooltip>
        ),
    },
];

const ListExample = () => {
    return (
        <A10List
            className="comment-list"
            header={`${data.length} replies`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <A10Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                />
            )}
        />
    )
}

export default ListExample