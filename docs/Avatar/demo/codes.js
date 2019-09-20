export const basicString = `import { A10Avatar} from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
      <div>
        <A10Avatar size="large" icon="user" style={{marginRight: '10px'}} />
        <A10Avatar icon="user" style={{marginRight: '10px'}}/>
        <A10Avatar size="small" icon="user" style={{marginRight: '10px'}}/>
      </div>
      <div>
        <A10Avatar shape="square" size="large" icon="user" style={{marginRight: '10px'}}/>
        <A10Avatar shape="square" icon="user" style={{marginRight: '10px'}}/>
        <A10Avatar shape="square" size="small" icon="user" style={{marginRight: '10px'}}/>
      </div>
      </div>
  )
}
ReactDOM.render(<Example />, mountNode)`

export const typeString = `import { A10Avatar} from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
      <A10Avatar icon="user"  style={{ marginRight: '10px' }}/>
      <A10Avatar style={{ marginRight: '10px' }}>U</A10Avatar>
      <A10Avatar style={{ marginRight: '10px' }}>USER</A10Avatar>
      <A10Avatar style={{ marginRight: '10px' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <A10Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginRight: '10px' }}>U</A10Avatar>
      <A10Avatar style={{ backgroundColor: '#87d068', marginRight: '10px' }} icon="user" />
    </div>
  )
}
ReactDOM.render(<Example />, mountNode)`

export const badgeString = `import { A10Avatar, A10Badge} from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
      <span style={{ marginRight: 24 }}>
        <A10Badge count={1}><A10Avatar shape="square" icon="user" /></A10Badge>
      </span>
      <span>
        <A10Badge dot><A10Avatar shape="square" icon="user" /></A10Badge>
      </span>
    </div>
  )
}
ReactDOM.render(<Example />, mountNode)`

export const autosetString = `import { A10Avatar, A10Button } from 'a10-gui-widgets';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

interface IAutosetState {
  user ?: string,
  color ?: string
}

class Example extends React.Component<any, IAutosetState> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0],
    };
  }
  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  }
  render() {
    return (
      <div>
        <A10Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
          {this.state.user}
        </A10Avatar>
        <A10Button size="small" style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.changeUser}>
          Change
        </A10Button>
      </div>
    );
  }
}

ReactDOM.render(<Example />, mountNode)`
