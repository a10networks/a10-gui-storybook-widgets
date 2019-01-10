
import * as React from 'react'
import FadeinCarouselExample from './demo/FadeinCarousel'
import BasicCarouselExample from './demo/BasicCarousel'
import VerticalCarouselExample from './demo/VerticalCarousel'
import ScrollAutoCarouselExample from './demo/ScrollAutoCarousel'
import { basicCarouselCode, verticalCarouselCode, fadeinCarouselCode, scrollAutoCarouselCode } from './demo/code'
import { withReadme } from 'storybook-readme'
import { Code, CodeComponent, CodeCard } from '../utils'
const A10CarouselReadme = require('../../src/Carousel/README.md')

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic"
        desc="Basic usage."
        code={<Code string={basicCarouselCode} />}
      >
        <BasicCarouselExample />
      </CodeCard>

      <CodeCard
        title="Vertical"
        desc="Vertical pagination."
        code={<Code string={verticalCarouselCode} />}
      >
        <VerticalCarouselExample />
      </CodeCard>

      <CodeCard
        title="Fade in"
        desc="Slides use fade for transition."
        code={<Code string={fadeinCarouselCode} />}
      >
        <FadeinCarouselExample />
      </CodeCard>

      <CodeCard
        title="Scroll automatically"
        desc="Timing of scrolling to the next card/picture."
        code={<Code string={scrollAutoCarouselCode} />}
      >
        <ScrollAutoCarouselExample />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Carousel', withReadme(A10CarouselReadme, Example))
}
