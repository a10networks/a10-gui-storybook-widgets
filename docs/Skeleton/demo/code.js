export const subCompCode = `import { A10Skeleton, A10Button } from 'a10-gui-widgets';

class Demo extends React.Component {
  state = {
    loading: false,
  };

  showSkeleton = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    return (
      <div className="article">
        <A10Skeleton loading={this.state.loading}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
          </div>
        </A10Skeleton>
        <A10Button onClick={this.showSkeleton} disabled={this.state.loading}>
          Show A10Skeleton
        </A10Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);`

export const listCode = `import {
    A10Skeleton, A10Switch, A10List, A10Avatar, A10Icon,
  } from 'a10-gui-widgets';
  
  const listData = [];
  for (let i = 0; i < 3; i++) {
    listData.push({
      href: 'http://ant.design',
      title: \`ant design part $\{i}\`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }
  
  const IconText = ({ type, text }) => (
    <span>
      <A10Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
  
  class App extends React.Component {
    state = {
      loading: true,
    }
  
    onChange = (checked) => {
      this.setState({ loading: !checked });
    }
  
    render() {
      const { loading } = this.state;
  
      return (
        <div>
          <A10Switch checked={!loading} onChange={this.onChange} />
  
          <A10List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            renderItem={item => (
              <A10List.Item
                key={item.title}
                actions={!loading && [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                extra={!loading && <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <A10Skeleton loading={loading} active avatar>
                  <A10List.Item.Meta
                    avatar={<A10Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </A10Skeleton>
              </A10List.Item>
            )}
          />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, mountNode);`