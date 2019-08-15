import * as React from 'react'
import { A10Mention, A10Avatar } from '../../../src'
const Nav = A10Mention.Nav

const webFrameworks = [
  {
    name: 'React',
    type: 'JavaScript',
    icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg',
  },
  {
    name: 'Angular',
    type: 'JavaScript',
    icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png',
  },
  {
    name: 'Dva',
    type: 'Javascript',
    icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png',
  },
  {
    name: 'Flask',
    type: 'Python',
    icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png',
  },
]

class Example extends React.Component {
  state = {
    suggestions: [],
  }
  onSearchChange = value => {
    const searchValue = value.toLowerCase()
    const filtered = webFrameworks.filter(
      item => item.name.toLowerCase().indexOf(searchValue) !== -1,
    )
    const suggestions = filtered.map(
      suggestion => suggestion.name + '-' + suggestion.type,
    )
    this.setState({ suggestions })
  }
  render() {
    const { suggestions } = this.state
    return (
      <A10Mention
        style={{ width: '100%' }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    )
  }
}

export default Example
