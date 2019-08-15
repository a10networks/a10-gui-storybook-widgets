import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/Chart/README.md'

import {
  A10ChartDemo,
  ControlChartDemo,
  LineChartDemo,
  SimpleHeaderChartDemo,
  SummaryChartDemo1,
  SummaryChartDemo2,
  MapDemo,
  PieDemo,
} from './demo'

import './demo/index.less'

import {
  A10ChartDemoCode,
  controlChartDemoCode,
  simpleUsageChartCode,
  simpleHeaderChartDemoCode,
  summaryChartCircleCode,
  summaryChartHalfCode,
  mapChartCode,
  A10ChartPieCode,
} from './demo/code'

const Example = () => {
  return (
    <div id="chartSpecific">
      <CodeComponent>
        <CodeCard
          title="Control Chart"
          desc="Control chart."
          code={<Code string={controlChartDemoCode} />}
        >
          <ControlChartDemo />
        </CodeCard>
        <CodeCard
          title="Pie Chart"
          desc="Pie chart."
          code={<Code string={A10ChartPieCode} />}
        >
          <PieDemo />
        </CodeCard>
        <CodeCard
          title="A10Chart"
          desc="A10Chart (based on ReactHighcharts)"
          code={<Code string={A10ChartDemoCode} />}
        >
          <A10ChartDemo />
        </CodeCard>
        <CodeCard
          title="Summary Chart with half pie"
          desc="Summary Chart with half pie"
          code={<Code string={summaryChartHalfCode} />}
        >
          <div style={{ maxWidth: '200px', maxHeight: '240px' }}>
            <SummaryChartDemo1 />
          </div>
        </CodeCard>

        <CodeCard
          title="Summary Chart with pie"
          desc="Summary Chart with pie"
          code={<Code string={summaryChartCircleCode} />}
        >
          <div style={{ maxWidth: '400px', maxHeight: '240px' }}>
            <SummaryChartDemo2 />
          </div>
        </CodeCard>

        <CodeCard
          title="Simple Header Chart"
          desc="Simple header chart dmeo"
          code={<Code string={simpleHeaderChartDemoCode} />}
        >
          <SimpleHeaderChartDemo />
        </CodeCard>

        <CodeCard
          title="Simple Usage"
          desc="Simple usage."
          code={<Code string={simpleUsageChartCode} />}
        >
          <LineChartDemo />
        </CodeCard>
        <CodeCard
          title="Map Chart"
          desc="Map Chart"
          code={<Code string={mapChartCode} />}
        >
          <MapDemo />
        </CodeCard>
      </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10Chart', withReadme(readme, Example))
}
