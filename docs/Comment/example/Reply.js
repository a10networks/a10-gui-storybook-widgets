import * as moment from 'moment';
import * as React from 'react';

import {
    A10Comment, A10Avatar, A10Form, A10Button, A10List, A10Input,
} from '../../../src';

const TextArea = A10Input.TextArea;

const CommentList = ({ comments }) => (
    <A10List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <A10Comment {...props} />}
    />
);

const Editor = ({
    onChange, onSubmit, submitting, value,
}) => (
        <div>
            <A10Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </A10Form.Item>
            <A10Form.Item>
                <A10Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={onSubmit}
                    type="primary"
                >
                    Add Comment
        </A10Button>
            </A10Form.Item>
        </div>
    );

export default class Reply extends React.Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <div>
                {comments.length > 0 && <CommentList comments={comments} />}
                <A10Comment
                    avatar={(
                        <A10Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    )}
                    content={(
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    )}
                />
            </div>
        );
    }
}