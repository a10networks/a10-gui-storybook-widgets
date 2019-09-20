import * as React from 'react'
import { _ } from 'a10-gui-framework'
import { withReadme } from 'storybook-readme'
import { Code, CodeComponent, CodeCard } from '../utils'
import { A10MultiSearch, A10Row, A10Col, A10Input, A10Form } from '../../src'
const A10MultiSearchReadme = require('../../src/MultiSearch/README.md')
const FormItem = A10Form.Item
import sourceCode from './code'

class App extends React.Component {
  state = {
    formData: {
      fieldA: {
        value: '',
        label: 'Field A',
        name: 'field-a',
        key: 'fieldA',
      },
      fieldB: {
        value: '',
        label: 'Field B',
        name: 'field-b',
        key: 'fieldB',
        default: true
      },
      fieldC: {
        value: '',
        label: 'Field C',
        name: 'field-c',
        key: 'fieldC',
      },
      fieldD: {
        value: '',
        label: 'Field D',
        name: 'field-d',
        key: 'fieldD',
      },
    },
  }
  onChangeInput = (name, event) => {
    const { formData } = this.state
    formData[name].value = event.target.value
    this.setState({ formData })
  }
  pushField = (searchValues, field) => {
    if (field.value) {
      // field.text = `${field.label}: ${field.value}`
      searchValues.push(field)
    }
  }
  onSearch = () => {
    const { formData } = this.state
    const searchValues = []
    this.pushField(searchValues, formData.fieldA)
    this.pushField(searchValues, formData.fieldB)
    this.pushField(searchValues, formData.fieldC)
    this.pushField(searchValues, formData.fieldD)
    return searchValues
  }
  const onChange = (data, removeData) => {
    const { formData } = this.state
    removeData.map((item) => {
      formData[item.key].value = ''
    })
    data.map((item) => {
      formData[item.key].value = item.value
    })
    this.setState({ formData })
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    }
    const inputs = (
      <A10Row>
        <A10Form>
          <FormItem label="Field A" {...formItemLayout} style={{marginBottom: '-6px'}}>
            <A10Input
              size="middle"
              placeholder="input placeholder"
              value={this.state.formData.fieldA.value}
              onChange={this.onChangeInput.bind(this, 'fieldA')}
            />
          </FormItem>
          <FormItem label="Field B" {...formItemLayout} style={{marginBottom: '-6px'}}>
            <A10Input
              size="middle"
              placeholder="input placeholder"
              value={this.state.formData.fieldB.value}
              onChange={this.onChangeInput.bind(this, 'fieldB')}
            />
          </FormItem>
          <FormItem label="Field C" {...formItemLayout} style={{marginBottom: '-6px'}}>
            <A10Input
              size="middle"
              placeholder="input placeholder"
              value={this.state.formData.fieldC.value}
              onChange={this.onChangeInput.bind(this, 'fieldC')}
            />
          </FormItem>
          <FormItem label="Field D" {...formItemLayout} style={{marginBottom: '-6px'}}>
            <A10Input
              size="middle"
              placeholder="input placeholder"
              value={this.state.formData.fieldD.value}
              onChange={this.onChangeInput.bind(this, 'fieldD')}
            />
          </FormItem>
        </A10Form>
      </A10Row>
    )
    return (
      <CodeComponent>
        <CodeCard
          title="Basic A10MultiSearch"
          desc="Basic A10MultiSearch Example"
          code={
            <Code
              string={sourceCode}
            />
          }
        >
          <A10MultiSearch
            splitter="="
            searchFilters={_.values(this.state.formData)}
            content={inputs}
            onSearch={this.onSearch}
            onChange={this.onChange}
          />
        </CodeCard>
      </CodeComponent>
    )
  }
}
const Example = () => {
  return <App />
}
export default story => {
  story.add('A10MultiSearch', withReadme(A10MultiSearchReadme, Example))
}
