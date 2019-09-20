import * as React from 'react'
import { A10Mention } from '../../../src'

const webFrameworks = [
  { name: 'React', type: 'JavaScript' },
  { name: 'Angular', type: 'JavaScript' },
  { name: 'Laravel', type: 'PHP', disabled: true },
  { name: 'Flask', type: 'Python' },
  { name: 'Django', type: 'Python' },
]

function onSelect(suggestion, data) {
  console.log('onSelect', suggestion, data)
}

class CustomNavMention extends React.Component {
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
        placeholder="@someone"
        style={{ width: '100%' }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
        onSelect={onSelect}
      />
    )
  }
}

export default CustomNavMention
