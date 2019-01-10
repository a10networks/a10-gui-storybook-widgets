import {
  A10Table, A10Icon, A10Switch, A10Radio, A10Form, A10Divider,
} from '../../../src';
import * as React from 'react';
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')
import "../index.less"
const FormItem = A10Form.Item;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 70,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  width: 360,
  render: (text, record) => (
    <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <A10Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <A10Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <A10Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

export default class Demo extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandedRowRender,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
  }

  handleToggle = prop => (enable) => {
    this.setState({ [prop]: enable });
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  handleExpandChange = (enable) => {
    this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
  }

  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  }

  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  }

  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  }

  handleRowSelectionChange = (enable) => {
    this.setState({ rowSelection: enable ? {} : undefined });
  }

  handleScollChange = (enable) => {
    this.setState({ scroll: enable ? scroll : undefined });
  }

  handleDataChange = (hasData) => {
    this.setState({ hasData });
  }

  handlePaginationChange = (e) => {
    const { value } = e.target;
    this.setState({
      pagination: value === 'none' ? false : { position: value },
    });
  }

  render() {
    const state = this.state;
    return (
      <div id="DynamicTableSpecific">
        <CodeCard
          title="Dynamic Settings"
          desc="Select different settings to see the result."
          code={<Code string={demoCode} />}
        >
          <div>
            <div className="components-table-demo-control-bar">
              <A10Form layout="inline">
                <FormItem label="Bordered">
                  <A10Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
                </FormItem>
                <FormItem label="loading">
                  <A10Switch checked={state.loading} onChange={this.handleToggle('loading')} />
                </FormItem>
                <FormItem label="Title">
                  <A10Switch checked={!!state.title} onChange={this.handleTitleChange} />
                </FormItem>
                <FormItem label="Column Header">
                  <A10Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
                </FormItem>
                <FormItem label="Footer">
                  <A10Switch checked={!!state.footer} onChange={this.handleFooterChange} />
                </FormItem>
                <FormItem label="Expandable">
                  <A10Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange} />
                </FormItem>
                <FormItem label="Checkbox">
                  <A10Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
                </FormItem>
                <FormItem label="Fixed Header">
                  <A10Switch checked={!!state.scroll} onChange={this.handleScollChange} />
                </FormItem>
                <FormItem label="Has Data">
                  <A10Switch checked={!!state.hasData} onChange={this.handleDataChange} />
                </FormItem>
                <FormItem label="Size">
                  <A10Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                    <A10Radio.Button value="default">Default</A10Radio.Button>
                    <A10Radio.Button value="middle">Middle</A10Radio.Button>
                    <A10Radio.Button value="small">Small</A10Radio.Button>
                  </A10Radio.Group>
                </FormItem>
                <FormItem label="Pagination">
                  <A10Radio.Group
                    value={state.pagination ? state.pagination.position : 'none'}
                    onChange={this.handlePaginationChange}
                  >
                    <A10Radio.Button value="top">Top</A10Radio.Button>
                    <A10Radio.Button value="bottom">Bottom</A10Radio.Button>
                    <A10Radio.Button value="both">Both</A10Radio.Button>
                    <A10Radio.Button value="none">None</A10Radio.Button>
                  </A10Radio.Group>
                </FormItem>
              </A10Form>
            </div>
            <A10Table {...this.state} columns={columns} dataSource={state.hasData ? data : null} />
          </div>
        </CodeCard>
      </div>
    );
  }
}
