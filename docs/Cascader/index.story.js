
import * as React from 'react'
import { Code, CodeComponent, CodeCard } from '../utils'
import { Divider } from 'antd'

import BasicDemo from './demo/BasicDemo'
import CustomTriggerDemo from './demo/CustomTriggerDemo'
import DisabledOptionDemo from './demo/DisabledDemo'
import SizeDemo from './demo/SizeDemo'
import SearchDemo from './demo/SearchDemo'
import CustomFieldNamesDemo from './demo/CustomFieldNamesDemo'
import HoverDemo from './demo/HoverDemo'
import DefaultValueDemo from './demo/DefaultValueDemo'
import CustomRenderDemo from './demo/CustomRenderDemo'
import LoadLazilyDemo from './demo/LoadLazilyDemo'
import ChangeOnSelectDemo from './demo/ChangeOnSelectDemo'
import { basicCode, customTriggerCode, disabledOptionCode, sizeCode, searchCode, customFieldNameCode, defaultValueCode, hoverCode, changeOnSelectCode, customRenderCode, loadLazilyCode } from './demo/code'

import { withReadme } from 'storybook-readme'
const A10CascaderReadme = require('../../src/Cascader/README.md')

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard title="Basic Usage">
        <BasicDemo />
        <Divider />
        <p>Cascade selection box for selecting province/city/district.</p>
        <Code string={basicCode} />
      </CodeCard>

      <CodeCard title="Custom Trigger">
        <CustomTriggerDemo />
        <Divider />
        <p>Separate trigger button and result.</p>
        <Code string={customTriggerCode} />
      </CodeCard>

      <CodeCard title="Disabled option">
        <DisabledOptionDemo />
        <Divider />
        <p>Disable option by specifying the disabled property in options.</p>
        <Code string={disabledOptionCode} />
      </CodeCard>

      <CodeCard title="Size">
        <SizeDemo />
        <Divider />
        <p>Cascade selection box of different sizes.</p>
        <Code string={sizeCode} />
      </CodeCard>

      <CodeCard title="Search">
        <SearchDemo />
        <Divider />
        <p>Search and select options directly. Now, Cascader[showSearch] doesn't support search on server, more info #5547</p>
        <Code string={searchCode} />
      </CodeCard>

      <CodeCard title="Custom Field Names">
        <CustomFieldNamesDemo />
        <Divider />
        <p>Custom field names.</p>
        <Code string={customFieldNameCode} />
      </CodeCard>

      <CodeCard title="Default">
        <DefaultValueDemo />
        <Divider />
        <p>Specifies default value by an array.</p>
        <Code string={defaultValueCode} />
      </CodeCard>

      <CodeCard title="Hover">
        <HoverDemo />
        <Divider />
        <p>Hover to expand sub menu, click to select option.</p>
        <Code string={hoverCode} />
      </CodeCard>


      <CodeCard title="Change on Select">
        <ChangeOnSelectDemo />
        <Divider />
        <p>Allow only select parent options.</p>
        <Code string={changeOnSelectCode} />
      </CodeCard>

      <CodeCard title="Custom Render">
        <CustomRenderDemo />
        <Divider />
        <p>For instance, add an external link after the selected value.</p>
        <Code string={customRenderCode} />
      </CodeCard>

      <CodeCard title="Load Options Lazily">
        <LoadLazilyDemo />
        <Divider />
        <p>Load options lazily with loadData. Note: loadData cannot work with showSearch.</p>
        <Code string={loadLazilyCode} />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Cascader', withReadme(A10CascaderReadme, Example))
}
