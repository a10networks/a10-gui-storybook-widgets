export default `import * as React from 'react'
import { A10MultiSearch, A10Row, A10Col, A10Input, A10Form } from 'a10-gui-widgets'
const FormItem = A10Form.Item

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
      field.text = ${'`${field.label}: ${field.value}`'}
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
    console.log('Select Filters:', data, removeData)
    const { formData } = this.state
    removeData.map((item) => {
      formData[item.key].value = ''
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
          <FormItem label="Field A" {...formItemLayout}>
            <A10Input
              placeholder="input placeholder"
              value={this.state.formData.fieldA.value}
              onChange={this.onChangeInput.bind(this, 'fieldA')}
            />
          </FormItem>
          <FormItem label="Field B" {...formItemLayout}>
            <A10Input
              placeholder="input placeholder"
              value={this.state.formData.fieldB.value}
              onChange={this.onChangeInput.bind(this, 'fieldB')}
            />
          </FormItem>
          <FormItem label="Field C" {...formItemLayout}>
            <A10Input
              placeholder="input placeholder"
              value={this.state.formData.fieldC.value}
              onChange={this.onChangeInput.bind(this, 'fieldC')}
            />
          </FormItem>
          <FormItem label="Field D" {...formItemLayout}>
            <A10Input
              placeholder="input placeholder"
              value={this.state.formData.fieldD.value}
              onChange={this.onChangeInput.bind(this, 'fieldD')}
            />
          </FormItem>
        </A10Form>
      </A10Row>
    )
    return (
      <A10MultiSearch
        content={inputs}
        onSearch={this.onSearch}
        onChange={this.onChange}
      />
    )
  }
}

export defualt APP`
