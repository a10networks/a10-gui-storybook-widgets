export const basicDemoCode = `import { A10Button, A10ContextMenu } from 'a10-gui-widgets'

const Example = () => {
  const menu = [
    <div name="add">Add</div>,
    <div name="delete">Delete</div>,
    <div name="share">Share</div>,
  ]
  const onClick = (Component, index) => {
    console.log(Component, index)
  }
  return (
      <A10ContextMenu menu={example1Menu} onClick={onClick}>
        <div style={{ height: '60px', backgroundColor: 'rgb(245, 242, 240)' }}>Test</div>
      </A10ContextMenu>
    </CodeComponent>
  )
}
ReactDOM.render(<Example />, mountNode);`

export const dividerDemoCode = `import { A10Button, A10ContextMenu } from 'a10-gui-widgets'
const Example = () => {
  const menu = [
    <div name="add">Add</div>,
    <A10ContextMenu.Divider />,
    <div name="delete">Delete</div>,
    <A10ContextMenu.Divider />,
    <div name="share">Share</div>,
  ]
  const onClick = (Component, index) => {
    console.log(Component, index)
  }
  return (
      <A10ContextMenu menu={example1Menu} onClick={onClick}>
        <div style={{ height: '60px', backgroundColor: 'rgb(245, 242, 240)' }}>Test</div>
      </A10ContextMenu>
    </CodeComponent>
  )
}
ReactDOM.render(<Example />, mountNode);`
