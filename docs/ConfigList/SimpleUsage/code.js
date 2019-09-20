export default `import * as React from 'react'

import { A10CustomizeList } from 'a10-gui-widgets'

class Example extends React.Component {

  onChange(currentList, removeList, newList) {
    console.log(currentList, removeList, newList)
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 9 },
      wrapperCol: { span: 13 },
    }

    const options = {}
    return (
      <React.Fragment>
        <A10ConfigList
          data={['app1', 'app2']}
          inputRender={{ type: 'A10Input', options: options }}
          label="App Service"
          createLabel="Associate another App Service"
          formItemLayout={formItemLayout}
          onChange={this.onChange.bind(this)}
        />

        <A10ConfigList
          data={['app1', 'app2', 'app3']}
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
          onChange={this.onChange.bind(this)}
        />
      </React.Fragment>
    )
  }
}

export default Example
`
