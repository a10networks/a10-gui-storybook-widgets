import * as React from 'react'

import A10ApiSelect from '../../../src/SearchableSelector'

class Example extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedValue: ''
    }
  }

  render() {
    return (
      <A10ApiSelect
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

