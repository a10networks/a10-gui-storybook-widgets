
import * as React from 'react'

import { Code, CodeComponent, CodeCard } from '../utils'
import BasicSelectDemo from './demo/BasicSelect'
import SearchFieldDeno from './demo/SearchField'
import MultipleSelectionDemo from './demo/MultipleSelection'
import MoreSelect from './demo/MoreSelect'
import TagsDemo from './demo/Tags'
import CoordinateDemo from './demo/Coordinate'
import OptionGroupDemo from './demo/OptionGroup'
import GetSelectedItemDemo from './demo/GetSelectedItem'
import AutomaticTokenizationDemo from './demo/AutomaticTokenization'
import CustomDropdownDemo from './demo/CustomDropdown'
import {
  basicSelectCode, searchFieldCode, 
  multipleSelectionCode, moreSelectCode,
  tagsCode, coordinateCode, optionGroupCode, getSelectedItemCode,
  automaticTokenizationCode, customDropdownCode
} from './demo/code'

import { withReadme } from 'storybook-readme'
const readme = require('../../src/Select/README.md')

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Select"
        desc="The simplest use."
        code={<Code string={basicSelectCode} />}
      >
        <BasicSelectDemo />
      </CodeCard>
      <CodeCard
        title="Select with search field"
        desc="Search the options while expanded."
        code={<Code string={searchFieldCode} />}
      >
        <SearchFieldDeno />
      </CodeCard>
      <CodeCard
        title="multiple selection"
        desc="Multiple selection, selecting from existing items (scroll the menu)."
        code={<Code string={multipleSelectionCode} />}
      >
        <SearchFieldDeno />
      </CodeCard>
      <CodeCard
        title="Size"
        desc="The height of the input field for the select defaults to 32px. If size is set to large, the height will be 46px, and if set to small, 24px."
        code={<Code string={moreSelectCode} />}
      >
        <MoreSelect />
      </CodeCard>
      <CodeCard
        title="Tags"
        desc="Select with tags, transform input to tag (scroll the menu)"
        code={<Code string={tagsCode} />}
      >
        <TagsDemo />
      </CodeCard>
      <CodeCard
        title="coordinate"
        desc="Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.

        Using the Cascader component is strongly recommended instead as it is more flexible and capable."
        code={<Code string={coordinateCode} />}
      >
        <CoordinateDemo />
      </CodeCard>
      <CodeCard
        title="Option Group"
        desc="Using OptGroup to group the options."
        code={<Code string={optionGroupCode} />}
      >
        <OptionGroupDemo />
      </CodeCard>
      <CodeCard
        title="Get value of selected item"
        desc="As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item.

        The label of the selected item will be packed as an object for passing to the onChange callback."
        code={<Code string={getSelectedItemCode} />}
      >
        <GetSelectedItemDemo />
      </CodeCard>
      <CodeCard
        title="Automatic tokenization"
        desc="Try to copy Lucy,Jack to the input. Only available in tags and multiple mode."
        code={<Code string={automaticTokenizationCode} />}
      >
        <AutomaticTokenizationDemo />
      </CodeCard>
      <CodeCard
        title="Custom dropdown"
        desc="Customize the dropdown menu via dropdownRender."
        code={<Code string={customDropdownCode} />}
      >
        <AutomaticTokenizationDemo />
      </CodeCard>





     
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Select', withReadme(readme, Example))
}
