
import * as React from 'react'
import * as moment from 'moment';
import { A10Card, A10Icon, A10Button, A10Row, A10Col, A10Avatar, A10Calendar, A10List, A10MultiItem, A10SearchBar } from '../../../src'
import DynamicBadge from '../../Badge/demo/DynamicExample'
import CardBasicDemo from '../../Card/demo/BasicDemo'
import BasicCarouselExample from '../../Carousel/demo/BasicCarousel'
import SummaryChartDemo1 from '../../Chart/demo/SummaryChartDemo1'
import CardCalendarExample from '../../Calendar/demo/CardCalendar'
import CommentBasicExample from '../../Comment/example/Basic'
import CollapseNoArrowDemo from '../../Collapse/demo/NoArrowDemo'
import { ExampleTable as DnDBasicTable } from '../../DnDTable/index.story'
import LogFilterBarDemo from '../../Log/filterbar.story'
import { Example as MultiSearchExample } from '../../MultiSearch/index.story'
import BasicPopoverExample from '../../Popover/demo/BasicPopover'
import TabsIconDemo from '../../Tabs/demo3'
import ListGrid from '../../List/demo/Grid'
import FilterBar from '../../../src/Log/FilterBar'

const rowStyle = {
    marginBottom: '16px'
}
const cardStyle = {
    height: '300px'
}

const listData = [
    {
        title: 'A10 Design Title 1',
    }
]
const DataDisplayExamples = () => {
    return (
        <A10Card>
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
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Avatar" bordered={false} style={cardStyle}>
                            <div class="basicAvatarClass">
                                <A10Avatar size={64} icon="user" />
                                <A10Avatar size="large" icon="user" />
                                <A10Avatar icon="user" />
                                <A10Avatar size="small" icon="user" />
                            </div>
                        </A10Card>
                    </A10Col>

                    <A10Col span={8}>
                        <A10Card title="A10Badge" bordered={false} style={cardStyle}>
                            <DynamicBadge />
                        </A10Card>
                    </A10Col>

                    <A10Col span={8}>
                        <A10Card title="A10Card" bordered={false} style={cardStyle}>
                            This (and all these examples) are contained in a card.
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Carousel" bordered={false} style={cardStyle}>
                            <BasicCarouselExample />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Calendar" bordered={false} style={cardStyle}>
                            <CardCalendarExample />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Chart" bordered={false} style={cardStyle}>
                            <SummaryChartDemo1 />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Comment" bordered={false} style={cardStyle}>
                            <CommentBasicExample />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Collapse" bordered={false} style={cardStyle}>
                            <CollapseNoArrowDemo />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10DnDTable" bordered={false} style={cardStyle}>
                            <DnDBasicTable />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        {/* <A10Card title="A10DnDTable" bordered={false} style={cardStyle}>
                            <DnDBasicTable />
                        </A10Card> */}
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10List" bordered={false} style={cardStyle}>
                            <ListGrid />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10LogFilterBar" bordered={false} style={cardStyle}>
                            <FilterBar timePeriod={[moment(), moment().add(7, 'days')]} />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10MultiItem" bordered={false} style={cardStyle}>
                            {/* <A10MultiItem items={[1, 2, 3]} drawerTitle="Test" showItemClose={true} onCloseItem={(index) => console.log(index)}/> */}
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10MultiSearch" bordered={false} style={cardStyle}>
                            {/* <MultiSearchExample/> */}
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Popover" bordered={false} style={cardStyle}>
                            {/* <BasicPopoverExample /> */}
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Selector" bordered={false} style={cardStyle}>
                            {/* <A10SearchBar /> */}
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Tabs" bordered={false} style={cardStyle}>
                            {/* <TabsIconDemo/> */}
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Table" bordered={false} style={cardStyle}>
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Tag" bordered={false} style={cardStyle}>
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Timeline" bordered={false} style={cardStyle}>
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Tooltip" bordered={false} style={cardStyle}>
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Tree" bordered={false} style={cardStyle}>
                        </A10Card>
                    </A10Col>
                </A10Row>
            </div>
        </A10Card>
    )
}

export default DataDisplayExamples