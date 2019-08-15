import * as React from 'react'

import { A10Calendar } from '../../src'
import BasicCalendarExample from './demo/BasicCalendar'
import NoticeCalendarExample from './demo/NoticeCalendar'
import CardCalendarExample from './demo/CardCalendar'
import SelectableExample from './demo/SelectableCalendar'

import {
  basicCalendarCode,
  noticeCalendarCode,
  cardCalendarCode,
  selectableCalendarCode,
} from './demo/code'

import { withReadme } from 'storybook-readme'
import { Code, CodeComponent, CodeCard } from '../utils'
const A10CalendarReadme = require('../../src/Calendar/README.md')

const Example = () => {
  return (
    <div>
      <CodeComponent>
        <CodeCard
          title="Basic Calendar"
          desc="A basic calendar component with Year/Month switch."
          code={<Code string={basicCalendarCode} />}
        >
          <BasicCalendarExample />
        </CodeCard>

        <CodeCard
          title="Notice Calendar"
          desc="This component can be rendered by using dateCellRender and monthCellRender with the data you need."
          code={<Code string={noticeCalendarCode} />}
        >
          <NoticeCalendarExample />
        </CodeCard>

        <CodeCard
          title="Card Calendar"
          desc="Nested inside a container element for rendering in limited space."
          code={<Code string={cardCalendarCode} />}
        >
          <CardCalendarExample />
        </CodeCard>

        <CodeCard
          title="Selectable Calendar"
          desc="A basic calendar component with Year/Month switch."
          code={<Code string={selectableCalendarCode} />}
        >
          <SelectableExample />
        </CodeCard>
      </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10Calendar', withReadme(A10CalendarReadme, Example))
}
