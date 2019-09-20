export const basicUsageCode = `import { A10Breadcrumb } from 'a10-gui-widgets'

const basicUsage = () => {
  return (
    <A10Breadcrumb>
    <A10Breadcrumb.Item>Home</A10Breadcrumb.Item>
    <A10Breadcrumb.Item><a href="">Application Center</a></A10Breadcrumb.Item>
    <A10Breadcrumb.Item><a href="">Application List</a></A10Breadcrumb.Item>
    <A10Breadcrumb.Item>An Application</A10Breadcrumb.Item>
  </A10Breadcrumb>
  )
}

ReactDOM.render(<basicUsage />, mountNode);`


export const separatorUsageCode = `import { A10Breadcrumb } from 'a10-gui-widgets'

const SeparatorUsage = () => {
  return (
    <A10Breadcrumb separator=">">
    <A10Breadcrumb.Item>Home</A10Breadcrumb.Item>
    <A10Breadcrumb.Item href="">Application Center</A10Breadcrumb.Item>
    <A10Breadcrumb.Item href="">Application List</A10Breadcrumb.Item>
    <A10Breadcrumb.Item>An Application</A10Breadcrumb.Item>
  </A10Breadcrumb>
  )
}

ReactDOM.render(<SeparatorUsage />, mountNode);`

export const withIconCode = `import { A10Breadcrumb } from 'a10-gui-widgets'
const withIcon = () => {
  return (
    <A10Breadcrumb>
    <A10Breadcrumb.Item href="">
      <Icon type="home" />
    </A10Breadcrumb.Item>
    <A10Breadcrumb.Item href="">
      <Icon type="user" />
      <span>Application List</span>
    </A10Breadcrumb.Item>
    <A10Breadcrumb.Item>
      Application
    </A10Breadcrumb.Item>
  </A10Breadcrumb>
  )
}

ReactDOM.render(<withIcon />, mountNode);`

export const reactRouterCode = `import { A10Breadcrumb, A10Alert } from 'a10-gui-widgets'
import {
  Router, Route, Link, hashHistory,
} from 'react-router';

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const Home = ({ routes, params, children }) => (
  <div className="demo">
    <div className="demo-nav">
      <Link to="/">Home</Link>
      <Link to="/apps">Application List</Link>
    </div>
    {children || 'Home Page'}
    <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
    <A10Breadcrumb routes={routes} params={params} />
  </div>
);

const reactRouter = () => {
  return (
    <Router history={hashHistory}>
    <Route name="home" breadcrumbName="Home" path="/" component={Home}>
      <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}>
        <Route name="app" breadcrumbName="Application:id" path=":id">
          <Route name="detail" breadcrumbName="Detail" path="detail" />
        </Route>
      </Route>
    </Route>
  </Router>
  )
}

ReactDOM.render(<reactRouter />, mountNode);`

const urled = `pathSnippets.slice(0, index + 1).join('/')};`

export const otherRouterCode = `import { A10Breadcrumb, A10Alert } from 'a10-gui-widgets'
import {
  HashRouter as Router, Route, Switch, Link, withRouter,
} from 'react-router-dom';

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};

const Home = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = \` /$\{urled} \`;
    return (
      <A10Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </A10Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <A10Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </A10Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  

  return (
    <div className="demo">
    <div className="demo-nav">
      <Link to="/">Home</Link>
      <Link to="/apps">Application List</Link>
    </div>
    <Switch>
      <Route path="/apps" component={Apps} />
      <Route render={() => <span>Home Page</span>} />
    </Switch>
    <A10Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
    <A10Breadcrumb>
      {breadcrumbItems}
    </A10Breadcrumb>
  </div>
  )

ReactDOM.render(  <Router>
  <Home />
</Router>,
mountNode);`
