import * as React from 'react'
import { A10Comment, A10Icon, A10Tooltip, A10Avatar } from '../../../src'
import * as moment from 'moment'

export default class App extends React.Component {
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
