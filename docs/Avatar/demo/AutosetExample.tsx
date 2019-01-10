import * as React from 'react'
import { A10Avatar, A10Button } from '../../../src';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

interface IAutosetState {
  user?: string,
  color?: string
}

export default class Autoset extends React.Component<any, IAutosetState> {
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
      <div id="avatarSpecific">
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
