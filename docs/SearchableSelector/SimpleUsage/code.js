export const code1 = `
import { A10SearchableSelector } from 'a10-gui-widgets'

class Example extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedValue: ''
    }
  }

  render() {
    return (
      <A10SearchableSelector
        dataUrls={[
          {
            url: '/axapi/v3/slb/template/client-ssh',
            listKey: 'client-ssh-list',
            primaryKey: 'name',
            searchKey: 'name',
          }
        ]}
        selectValue={this.state.selectedValue}
        onChangeSelectValue={(selectedValue) => { console.log(selectedValue); this.setState({ selectedValue }) }}
        onSearch={(searchValue) => { console.log('onSearch', searchValue) }}
      />
    )
  }

}

export default Example
`

export const code2 = `
import { A10SearchableSelector } from 'a10-gui-widgets'

class Example extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedValue: ''
    }
  }

  render() {
    return (
      <A10SearchableSelector
        dataUrls={[
          {
            url: '/axapi/v3/slb/template/client-ssh',
            listKey: 'client-ssh-list',
            primaryKey: 'name',
            searchKey: 'name',
          },
          {
            url: '/axapi/v3/slb/template/server-ssh',
            listKey: 'server-ssh-list',
            primaryKey: 'name',
            searchKey: 'name',
          }
        ]}
        selectValue={this.state.selectedValue}
        onChangeSelectValue={(selectedValue) => { console.log(selectedValue); this.setState({ selectedValue }) }}
        onSearch={(searchValue) => { console.log('onSearch', searchValue) }}
      />
    )
  }

}

export default Example
`


export const code3 = `
import { A10SearchableSelector } from 'a10-gui-widgets'

class Example extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedValue: ''
    }
  }

  render() {
    return (
      <A10SearchableSelector
        showNone={false}
        dataUrls={[
          {
            url: '/axapi/v3/slb/template/client-ssh',
            listKey: 'client-ssh-list',
            primaryKey: 'name',
            searchKey: 'name',
          }
        ]}
        selectValue={this.state.selectedValue}
        onChangeSelectValue={(selectedValue) => { console.log(selectedValue); this.setState({ selectedValue }) }}
        onSearch={(searchValue) => { console.log('onSearch', searchValue) }}
      />
    )
  }

}

export default Example
`
