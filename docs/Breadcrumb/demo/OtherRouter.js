import { A10Breadcrumb, A10Alert } from '../../../src'
import {
    HashRouter as Router, Route, Switch, Link, withRouter,
} from 'react-router-dom';

import * as React from 'react';

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

const urled = `pathSnippets.slice(0, index + 1).join('/')};`

const Home = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${urled}`;
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
    );
});

export default Home;