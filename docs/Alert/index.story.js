import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'
import * as readme from '../../src/Alert/README.md'
import { A10Alert } from '../../src'
import { Code, CodeComponent, CodeCard } from '../utils'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

const codes = `
<A10Alert message={message} type={type} showIcon
closeText={closeText} description={descriptionText} />
`

import BasicDemo from './demo/BasicDemo'
import DescriptionDemo from './demo/DescriptionDemo'
import CloseTextDemo from './demo/CloseTextDemo'
import ClosableDemo from './demo/ClosableDemo'
import IconDemo from './demo/IconDemo'
import MoreTypes from './demo/MoreTypesDemo'
import SmoothlyUnmountDemo from './demo/SmoothlyUnmountDemo'
import BannerDemo from './demo/BannerDemo'
import { basicCode, descriptionCode, closeableCode, iconCode, bannerCode, customizedCloseTextCode, smoothlyUnmountCode, moreTypesCode } from './demo/code'

const Example = () => {
  const message = 'Success Text', type = 'success', closeText = 'Close Me', descriptionText = 'This is my description'
  return (
    <CodeComponent>
      <CodeCard title="Basic Usage" desc="Basic Usage Example" code={<Code string={basicCode} />}>
        <BasicDemo />
      </CodeCard>

      <CodeCard title="Description" desc="Additional description for alert message." code={<Code string={descriptionCode} />}>
        <DescriptionDemo />
      </CodeCard>

      <CodeCard title="Customized Close Text" desc="Replace the default icon with customized text." code={<Code string={closeableCode} />}>
        <ClosableDemo />
      </CodeCard>

      <CodeCard title="Icon" desc="Decent icon make information more clear and more friendly." code={<Code string={iconCode} />}>
        <IconDemo />
      </CodeCard>

      <CodeCard title="Banner" desc="Display Alert as a banner at top of page." code={<Code string={bannerCode} />}>
        <BannerDemo />
      </CodeCard>

      <CodeCard title="More types" desc="There are 4 types of Alert: success, info, warning, error." code={<Code string={moreTypesCode} />}>
        <MoreTypes />
      </CodeCard>

      <CodeCard title="Customized Close Text" desc="Replace the default icon with customized text." code={<Code string={customizedCloseTextCode} />}>
        <CloseTextDemo />
      </CodeCard>

      <CodeCard title="Smoothly Unmount" desc="Smoothly and unaffectedly unmount Alert." code={<Code string={smoothlyUnmountCode} />}>
        <SmoothlyUnmountDemo />
      </CodeCard>

    </CodeComponent>
  )
}

export default story => {
  story.add('A10Alert', withReadme(readme, Example))
}
