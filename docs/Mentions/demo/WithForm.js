import * as React from 'react'
import { A10Mentions, A10Form, A10Button } from '../../../src'

const { Option, getMentions } = A10Mentions
class App extends React.Component {
  handleReset = e => {
    e.preventDefault()
    this.props.form.resetFields()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in the form!!!')
        return
      }
      console.log('Submit!!!')
      console.log(values)
    })
  }

  checkMention = (rule, value, callback) => {
    const mentions = getMentions(value)
    if (mentions.length < 2) {
      callback(new Error('More than one must be selected!'))
    } else {
      callback()
    }
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props

    return (
      <A10Form layout="horizontal">
        <A10Form.Item
          label="Top coders"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('mention', {
            rules: [{ validator: this.checkMention }],
          })(
            <A10Mentions rows="3">
              <Option value="afc163">afc163</Option>
              <Option value="zombieJ">zombieJ</Option>
              <Option value="yesmeck">yesmeck</Option>
            </A10Mentions>,
          )}
        </A10Form.Item>
        <A10Form.Item wrapperCol={{ span: 14, offset: 6 }}>
          <A10Button type="primary" onClick={this.handleSubmit}>
            Submit
          </A10Button>
          &nbsp;&nbsp;&nbsp;
          <A10Button onClick={this.handleReset}>Reset</A10Button>
        </A10Form.Item>
      </A10Form>
    )
  }
}

const WithForm = A10Form.create()(App)

export default WithForm
