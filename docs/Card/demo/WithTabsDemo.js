import * as React from 'react'
import { A10Card } from '../../../src';

const tabList = [{
    key: 'tab1',
    tab: 'tab1',
}, {
    key: 'tab2',
    tab: 'tab2',
}];

const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};

const tabListNoTitle = [{
    key: 'article',
    tab: 'article',
}, {
    key: 'app',
    tab: 'app',
}, {
    key: 'project',
    tab: 'project',
}];

const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};

export default class TabsCard extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    }

    render() {
        return (
            <div>
                <A10Card
                    style={{ width: '100%' }}
                    title="A10Card title"
                    extra={<a href="#">More</a>}
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                >
                    {contentList[this.state.key]}
                </A10Card>
                <br /><br />
                <A10Card
                    style={{ width: '100%' }}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
                >
                    {contentListNoTitle[this.state.noTitleKey]}
                </A10Card>
            </div>
        );
    }
}
