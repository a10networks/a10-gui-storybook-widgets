import * as React from 'react'

import { A10ConfigList, A10Input } from '../../../src'
import NonExample from './NonExample'

class Example extends React.Component {

  state = {
    dataList: ['app1', 'app2', 'app3']
  }

  onChange(currentList, removeList, newList) {
    console.log(currentList, removeList, newList)
  }

  onChangeCostom(currentList, removeList, newList) {
    this.setState({ dataList: currentList })
    console.log('onChangeCostom', currentList, removeList, newList)
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 9 },
      wrapperCol: { span: 13 },
    }

    const options = {}
    return (
      <React.Fragment>
        <NonExample />
        <A10ConfigList
          data={['app1', 'app2']}
          inputRender={{ type: 'A10Input', options: options }}
          label="App Service"
          createLabel="Associate another App Service"
          formItemLayout={formItemLayout}
          onChange={this.onChange.bind(this)}
        />

        <A10ConfigList
          data={this.state.dataList}
          inputRender={{ renderer: (item, index, onChangeValue) => {
            const onChangeForInput = (event: any) => {
              item.name = event.target.value
              onChangeValue(item)
            }
            return <A10Input value={item.name} onChange={onChangeForInput} />
          } }}
          label="App Service"
          createLabel="Associate another App Service"
          formItemLayout={formItemLayout}
          onChange={this.onChangeCostom.bind(this)}
        />
      </React.Fragment>
    )
  }
}

export default Example
