export const basicCode = `import {
  A10Comment, A10Icon, A10Tooltip, A10Avatar,
} from 'a10-gui-widgets';
import moment from 'moment';

class App extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  }

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  }

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  }

  render() {
    const { likes, dislikes, action } = this.state;

    const actions = [
      <span>
        <A10Tooltip title="Like">
          <A10Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </A10Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {likes}
        </span>
      </span>,
      <span>
        <A10Tooltip title="Dislike">
          <A10Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </A10Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {dislikes}
        </span>
      </span>,
      <span>Reply to</span>,
    ];

    return (
      <A10Comment
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={(
          <A10Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        )}
        content={(
          <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
        )}
        datetime={(
          <A10Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </A10Tooltip>
        )}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);`

export const listCode = `import { A10Comment, A10Tooltip, A10List } from 'a10-gui-widgets';
import moment from 'moment';

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

ReactDOM.render(
  <A10List
    className="comment-list"
    header={\`$\{data.length} replies\`}
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
  />,
  mountNode,
);`

export const nestedCode = `import { A10Comment, A10Avatar } from 'a10-gui-widgets';

const ExampleComment = ({ children }) => (
  <A10Comment
    actions={[<span>Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={(
      <A10Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    )}
    content={<p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).</p>}
  >
    {children}
  </A10Comment>
);

ReactDOM.render(
  <ExampleComment>
    <ExampleComment>
      <ExampleComment />
      <ExampleComment />
    </ExampleComment>
  </ExampleComment>,
  mountNode,
);
Han Solo

`

export const replyCode = `import {
  A10Comment, A10Avatar, A10Form, A10Button, A10List, A10Input,
} from 'a10-gui-widgets';
import moment from 'moment';

const TextArea = A10Input.TextArea;

const CommentList = ({ comments }) => (
  <A10List
    dataSource={comments}
    header={\`$\{comments.length} $\{comments.length > 1 ? 'replies' : 'reply'}\`}
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
        Add A10Comment
      </A10Button>
    </A10Form.Item>
  </div>
);

class App extends React.Component {
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

ReactDOM.render(<App />, mountNode);`