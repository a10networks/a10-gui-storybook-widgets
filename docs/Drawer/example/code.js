export const basicCode = `import { A10Drawer, A10Button } from 'a10-gui-widget';

class App extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <A10Button type="primary" onClick={this.showDrawer}>
          Open
        </A10Button>
        <A10Drawer
          title="Basic A10Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </A10Drawer>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);`
export const submitCode = `import {
  A10Drawer, A10Form, A10Button, A10Col, A10Row, A10Input, A10Select, A10DatePicker, A10Icon,
} from 'a10-gui-widget';

const { Option } = A10Select;

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <A10Button type="primary" onClick={this.showDrawer}>
          <A10Icon type="plus" /> New account
      </A10Button>
      <A10Drawer
          title="Create a new account"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
              overflow: 'auto',
              height: 'calc(100% - 108px)',
              paddingBottom: '108px',
          }}
      >
          <A10Form layout="vertical" hideRequiredMark>
              <A10Row gutter={16}>
                  <A10Col span={12}>
                      <A10Form.Item label="Name">
                          {getFieldDecorator('name', {
                              rules: [{ required: true, message: 'Please enter user name' }],
                          })(<A10Input placeholder="Please enter user name" />)}
                      </A10Form.Item>
                  </A10Col>
                  <A10Col span={12}>
                      <A10Form.Item label="Url">
                          {getFieldDecorator('url', {
                              rules: [{ required: true, message: 'Please enter url' }],
                          })(
                              <A10Input
                                  style={{ width: '100%' }}
                                  addonBefore="http://"
                                  addonAfter=".com"
                                  placeholder="Please enter url"
                              />
                          )}
                      </A10Form.Item>
                  </A10Col>
              </A10Row>
              <A10Row gutter={16}>
                  <A10Col span={12}>
                      <A10Form.Item label="Owner">
                          {getFieldDecorator('owner', {
                              rules: [{ required: true, message: 'Please select an owner' }],
                          })(
                              <A10Select placeholder="Please select an owner">
                                  <Option value="xiao">Xiaoxiao Fu</Option>
                                  <Option value="mao">Maomao Zhou</Option>
                              </A10Select>
                          )}
                      </A10Form.Item>
                  </A10Col>
                  <A10Col span={12}>
                      <A10Form.Item label="Type">
                          {getFieldDecorator('type', {
                              rules: [{ required: true, message: 'Please choose the type' }],
                          })(
                              <A10Select placeholder="Please choose the type">
                                  <Option value="private">Private</Option>
                                  <Option value="public">Public</Option>
                              </A10Select>
                          )}
                      </A10Form.Item>
                  </A10Col>
              </A10Row>
              <A10Row gutter={16}>
                  <A10Col span={12}>
                      <A10Form.Item label="Approver">
                          {getFieldDecorator('approver', {
                              rules: [{ required: true, message: 'Please choose the approver' }],
                          })(
                              <A10Select placeholder="Please choose the approver">
                                  <Option value="jack">Jack Ma</Option>
                                  <Option value="tom">Tom Liu</Option>
                              </A10Select>
                          )}
                      </A10Form.Item>
                  </A10Col>
                  <A10Col span={12}>
                      <A10Form.Item label="DateTime">
                          {getFieldDecorator('dateTime', {
                              rules: [{ required: true, message: 'Please choose the dateTime' }],
                          })(
                              <A10DatePicker.A10RangePicker
                                  style={{ width: '100%' }}
                                  getPopupContainer={trigger => trigger.parentNode}
                              />
                          )}
                      </A10Form.Item>
                  </A10Col>
              </A10Row>
              <A10Row gutter={16}>
                  <A10Col span={24}>
                      <A10Form.Item label="Description">
                          {getFieldDecorator('description', {
                              rules: [
                                  {
                                      required: true,
                                      message: 'please enter url description',
                                  },
                              ],
                          })(<A10Input.TextArea rows={4} placeholder="please enter url description" />)}
                      </A10Form.Item>
                  </A10Col>
              </A10Row>
          </A10Form>
          <div
              style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  borderTop: '1px solid #e9e9e9',
                  padding: '10px 16px',
                  background: '#fff',
                  textAlign: 'right',
              }}
          >
              <A10Button onClick={this.onClose} style={{ marginRight: 8 }}>
                  Cancel
              </A10Button>
              <A10Button onClick={this.onClose} type="primary">
                  Submit
              </A10Button>
          </div>
      </A10Drawer>
  </div>
    );
  }
}

const App = A10Form.create()(DrawerForm);

ReactDOM.render(<App />, mountNode);`

export const multiDrawerCode = `import { A10Drawer, A10Button } from 'a10-gui-widget';

class App extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <div>
        <A10Button type="primary" onClick={this.showDrawer}>
          Open drawer
        </A10Button>
        <A10Drawer
          title="Multi-level drawer"
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <A10Button type="primary" onClick={this.showChildrenDrawer}>
            Two-level drawer
          </A10Button>
          <A10Drawer
            title="Two-level A10Drawer"
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
            This is two-level drawer
          </A10Drawer>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <A10Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Cancel
            </A10Button>
            <A10Button onClick={this.onClose} type="primary">
              Submit
            </A10Button>
          </div>
        </A10Drawer>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);`

export const customCode = `import { A10Drawer, A10Button, A10Radio } from 'a10-gui-widget';

const RadioGroup = A10Radio.Group;

class App extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <RadioGroup
          style={{ marginRight: 8 }}
          defaultValue={this.state.placement}
          onChange={this.onChange}
        >
          <A10Radio value="top">top</A10Radio>
          <A10Radio value="right">right</A10Radio>
          <A10Radio value="bottom">bottom</A10Radio>
          <A10Radio value="left">left</A10Radio>
        </RadioGroup>
        <A10Button type="primary" onClick={this.showDrawer}>
          Open
        </A10Button>
        <A10Drawer
          title="Basic A10Drawer"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </A10Drawer>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);`

export const previewCode = `import {
  A10Drawer, A10List, A10Avatar, A10Divider, A10Col, A10Row,
} from 'a10-gui-widget';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

class App extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <A10List
          dataSource={[
            {
              name: 'Lily',
            },
            {
              name: 'Lily',
            },
          ]}
          bordered
          renderItem={item => (
            <A10List.Item key={item.id} actions={[<a onClick={this.showDrawer}>View Profile</a>]}>
              <A10List.Item.Meta
                avatar={
                  <A10Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Progresser AFX"
              />
            </A10List.Item>
          )}
        />
        <A10Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
          <A10Row>
            <A10Col span={12}>
              <DescriptionItem title="Full Name" content="Lily" />{' '}
            </A10Col>
            <A10Col span={12}>
              <DescriptionItem title="Account" content="AntDesign@example.com" />
            </A10Col>
          </A10Row>
          <A10Row>
            <A10Col span={12}>
              <DescriptionItem title="City" content="HangZhou" />
            </A10Col>
            <A10Col span={12}>
              <DescriptionItem title="Country" content="China🇨🇳" />
            </A10Col>
          </A10Row>
          <A10Row>
            <A10Col span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </A10Col>
            <A10Col span={12}>
              <DescriptionItem title="Website" content="-" />
            </A10Col>
          </A10Row>
          <A10Row>
            <A10Col span={24}>
              <DescriptionItem
                title="Message"
                content="Make things as simple as possible but no simpler."
              />
            </A10Col>
          </A10Row>
          <A10Divider />
          <p style={pStyle}>Company</p>
          <A10Row>
            <A10Col span={12}>
              <DescriptionItem title="Position" content="Programmer" />
            </A10Col>
            <A10Col span={12}>
              <DescriptionItem title="Responsibilities" content="Coding" />
            </A10Col>
          </A10Row>
          <A10Row>
            <A10Col span={12}>
              <DescriptionItem title="Department" content="AFX" />
            </A10Col>
            <A10Col span={12}>
              <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
            </A10Col>
          </A10Row>
          <A10Row>
            <A10Col span={24}>
              <DescriptionItem
                title="Skills"
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
              />
            </A10Col>
          </A10Row>
          <A10Divider />
          <p style={pStyle}>Contacts</p>
          <A10Row>
            <A10Col span={12}>
              <DescriptionItem title="Email" content="AntDesign@example.com" />
            </A10Col>
            <A10Col span={12}>
              <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
            </A10Col>
          </A10Row>
          <A10Row>
            <A10Col span={24}>
              <DescriptionItem
                title="Github"
                content={(
                  <a href="http://github.com/ant-design/ant-design/">
                    github.com/ant-design/ant-design/
                  </a>
                )}
              />
            </A10Col>
          </A10Row>
        </A10Drawer>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);`