const code = `import { A10ListInput } from 'a10-gui-widgets'

class Example extends React.Component {

  constructor(){
    super()
    this.state = {
      inputValue: []
    }
  }

  render() {
    return (
      <A10ListInput
        validation={['ipv4']}
        value={this.state.inputValue}
        errorMessage="Enter a valid IPv4 address."
        onChangeValue={(values: string[]) => {
          this.setState({ inputValue: values })
        }}
      />
    )
  }
}

export default Example
`

export default code
