import * as React from 'react'

import { A10MultiGroupSelect, A10Row, A10Col } from '../../src'

import { Code, CodeComponent, CodeCard } from '../utils'
import { withReadme } from 'storybook-readme'
const A10GridReadme = require('../../src/MultiGroupSelect/README.md')
// import './style/index.less'

const code = `<A10MultiGroupSelect
dataGroups={[
  {
    uri: '/hccapi/v3/provider/root/shared-object/slb/template'
    label: 'Provider',
    name: 'Provider 1',
    onFetchData: (response) => {
      const dataSource = /* get data source from response  */
      return dataSource
    }
  },
  {
    uri: '/provider/root/tenant/t1/logical-partition/logical_partition1/slb/template/http/flex2',
    name: 'Logical_Partition1',
    label: 'Logical Partition',
    onFetchData: (response) => {
      const dataSource = /* get data source from response  */
      return dataSource
    }
  }
]}
onSelect={(value) => {
  console.log(value)
}}
/>`

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="MultiGroupSelect"
        desc="Basic MultiGroupSelect Usage"
        code={<Code string={code} />}
      >
      <A10Row>
        <A10Col span={8}>
        aFlex
        </A10Col>
        <A10Col span={16}>
        <A10MultiGroupSelect
          dataGroups={[
            {
              uri: '/hccapi/v3/provider/root/shared-object/slb/template'
              label: 'Provider',
              name: 'Provider 1',
              onFetchData: (response) => {
                const aflex = `when RUlE_INIT{
                  array set::SG_ARRAY[list "youtube.com" "SG1" "www.google.com"]
                }`
                const dataSource = [
                  { name: 'aFlex1', message: aflex },
                  { name: 'aFlex2', message: 'contest' },
                  { name: 'aFlex3', message: aflex },
                ]
                return dataSource
              }
            },
            {
              uri: '/provider/root/tenant/t1/logical-partition/logical_partition1/slb/template/http/flex2',
              name: 'Logical_Partition1',
              label: 'Logical Partition',
              onFetchData: (response) => {
                const aflex = `when RUlE_INIT{
                  array set::SG_ARRAY[list "youtube.com" "SG1" "www.google.com"]
                }`
                const dataSource = [
                  { name: 'LPaFlex1', message: aflex },
                  { name: 'LPaFlex2', message: 'contest' },
                  { name: 'LPaFlex3', message: aflex },
                ]
                return dataSource
              }
            }
          ]}
          onSelect={(value) => {
            console.log(value)
          }}
        />
        </A10Col>
      </A10Row>
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10MultiGroupSelect', withReadme(A10GridReadme, Example))
}
