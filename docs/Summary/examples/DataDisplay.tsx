import * as React from 'react'
import * as moment from 'moment'
import {
  A10Row,
  A10Col,
  A10Card,
  A10Avatar,
  A10Collapse,
  A10Diff,
  A10List,
  A10MultiItem,
  A10SearchBar,
  A10Table,
  A10Tag,
  A10Timeline,
  A10Tooltip,
  A10Tree,
} from '../../../src'
import BadgeExample from '../../Badge/demo/BasicDemo'
import CarouselExample from '../../Carousel/demo/BasicCarousel'
import CalendarExample from '../../Calendar/demo/CardCalendar'
import ChartExample from '../../Chart/demo/SummaryChartDemo1'
import CommentExample from '../../Comment/example/Basic'
import DnDExample from '../../DnDTable/ExampleTable'
import FilterBar from '../../../src/Log/FilterBar'
import SearchBar from '../../../src/Log/SearchBar'
import PopoverExample from '../../Popover/demo/ClickPopover'
import { BasicDemo as TabsExample } from '../../Tabs/index.story'
const diffString = `
Index: virtual-server/vip-wildcard
===================================================================
--- virtual-server/vip-wildcard
+++ virtual-server/vip-wildcard
@@ -1,12 +1,51 @@
 {
   "name": "vip-wildcard",
-  "ip-address": "1.2.2.1",
+  "ip-address": "0.0.0.0",
   "enable-disable-action": "enable",
 }
 \
 `
const { Panel } = A10Collapse
const { TreeNode } = A10Tree
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
]
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]
const tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
]

class DataDisplayExamples extends React.Component {
  log = (e: any) => console.log(e)

  preventDefault = (e: any) => {
    e.preventDefault()
    console.log('Clicked! But prevent default.')
  }

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info)
  }

  render() {
    return (
      <A10Card>
        <div className="SummaryExamples">
          <p
            style={{
              fontSize: 14,
              color: 'rgba(0, 0, 0, 0.85)',
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Data Display Widgets
          </p>
          <A10Row gutter={16}>
            <A10Col span={8}>
              <A10Card type="inner" title="A10Avatar">
                <div id="avatarSpecific">
                  <div className="basicAvatarClass">
                    <A10Avatar shape="circle" size={64} icon="user" />
                    <A10Avatar shape="circle" size="large" icon="user" />
                    <A10Avatar shape="circle" icon="user" />
                  </div>
                </div>
              </A10Card>
            </A10Col>
            <A10Col span={8}>
              <A10Card type="inner" title="A10Badge">
                <div id="badgeSpecific">
                  <BadgeExample />
                </div>
              </A10Card>
            </A10Col>
            <A10Col span={8}>
              <A10Card type="inner" title="A10Card">
                I am a card.
              </A10Card>
            </A10Col>
          </A10Row>
          <A10Row gutter={16}>
            <A10Col span={24}>
              <A10Card type="inner" title="A10Carousel" style={{ height: 280 }}>
                <CarouselExample />
              </A10Card>
            </A10Col>
          </A10Row>
          <A10Row gutter={16}>
            <A10Col span={14}>
              <A10Card type="inner" title="A10Calendar" style={{ height: 450 }}>
                <CalendarExample />
              </A10Card>
            </A10Col>
            <A10Col span={10}>
              <A10Card type="inner" title="A10Chart" style={{ height: 450 }}>
                <ChartExample />
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={14}>
              <A10Card type="inner" title="A10Comment" style={{ height: 280 }}>
                <CommentExample />
              </A10Card>
            </A10Col>
            <A10Col span={10}>
              <A10Card type="inner" title="A10Collapse" style={{ height: 280 }}>
                <A10Collapse defaultActiveKey={['1']}>
                  <Panel header="This is panel header 1" key="1">
                    <p>I'm a collapsible.</p>
                  </Panel>
                </A10Collapse>
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={24}>
              <A10Card type="inner" title="A10Diff" style={{ height: 280 }}>
                <A10Diff
                  diff={diffString}
                  outputFormat="side-by-side"
                  matching="lines"
                />
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={24}>
              <A10Card type="inner" title="A10DnDTable" style={{ height: 400 }}>
                <DnDExample />
              </A10Card>
            </A10Col>
          </A10Row>
          <A10Row gutter={16}>
            <A10Col span={24}>
              <A10Card type="inner" title="A10List" style={{ height: 300 }}>
                <A10List
                  size="small"
                  header={<div>Header</div>}
                  footer={<div>Footer</div>}
                  bordered
                  dataSource={data}
                  renderItem={item => <A10List.Item>{item}</A10List.Item>}
                />
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={24}>
              <A10Card type="inner" title="A10LogFilterBar">
                <FilterBar
                  timePeriod={[moment(), moment().add(7, 'days')]}
                  onChangeTimeRange={(timePeriod: moment.Moment[]) => {}}
                  onChangeCurrentTime={() => {}}
                />
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={24}>
              <A10Card type="inner" title="A10LogSearchBar">
                <SearchBar
                  onChangeTab={index => {
                    console.log(index)
                  }}
                >
                  <SearchBar.Label title="test" badgeCount={0} actived={true} />
                  <SearchBar.Label
                    title="test2"
                    badgeCount={100000}
                    actived={false}
                  />
                </SearchBar>
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={8}>
              <A10Card type="inner" title="A10MultiItem">
                <A10MultiItem
                  items={['1', '2', '3']}
                  drawerTitle="Test"
                  showItemClose={true}
                  onCloseItem={index => console.log(index)}
                />
              </A10Card>
            </A10Col>

            <A10Col span={8}>
              <A10Card type="inner" title="A10Popover">
                <PopoverExample />
              </A10Card>
            </A10Col>

            <A10Col span={8}>
              <A10Card type="inner" title="A10SearchBar">
                <A10SearchBar />
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={24}>
              <A10Card type="inner" title="A10Table" style={{ height: 250 }}>
                <A10Table
                  columns={columns}
                  dataSource={tableData}
                  size="small"
                />
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={24}>
              <A10Card type="inner" title="A10Tabs">
                <TabsExample />
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={8}>
              <A10Card type="inner" title="A10Tags">
                <A10Tag closable onClose={this.preventDefault}>
                  Tag 1
                </A10Tag>
              </A10Card>
            </A10Col>

            <A10Col span={8}>
              <A10Card type="inner" title="A10Timeline">
                <A10Timeline>
                  <A10Timeline.Item>
                    Create a services site 2015-09-01
                  </A10Timeline.Item>
                  <A10Timeline.Item>
                    Solve initial network problems 2015-09-01
                  </A10Timeline.Item>
                </A10Timeline>
              </A10Card>
            </A10Col>
            <A10Col span={8}>
              <A10Card type="inner" title="A10Tooltip">
                <A10Tooltip title="prompt text">
                  <span>Tooltip will show when mouse enter.</span>
                </A10Tooltip>
              </A10Card>
            </A10Col>
          </A10Row>

          <A10Row gutter={16}>
            <A10Col span={8}>
              <A10Card type="inner" title="A10Tree">
                <A10Tree
                  checkable
                  defaultExpandedKeys={['0-0-0', '0-0-1']}
                  defaultSelectedKeys={['0-0-0', '0-0-1']}
                  defaultCheckedKeys={['0-0-0', '0-0-1']}
                  onSelect={this.onSelect}
                  onCheck={this.onCheck}
                >
                  <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0" disabled />
                  </TreeNode>
                </A10Tree>
              </A10Card>
            </A10Col>
          </A10Row>
        </div>
      </A10Card>
    )
  }
}

export default DataDisplayExamples
