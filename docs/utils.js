import * as React from 'react'
import { Card, Divider } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { docco } from 'react-syntax-highlighter/styles/prism'

export const CodeComponent = props => {
  const { children, title = 'EXAMPLES', ...rest } = props
  return (
    <div {...rest}>
      <div className="story-example">{title}</div>
      <div style={{ padding: 10 }}>{children}</div>
    </div>
  )
}

export const CodeCard = props => {
  return (
    <Card
      title={props.title}
      bordered={true}
      style={{ marginBottom: 20, borderRadius: 4 }}
    >
      {props.children}
      <Divider />
      <p>{props.desc}</p>
      {props.code}
    </Card>
  )
}

export const Code = props => {
  return (
    <SyntaxHighlighter language="javascript" style={docco} wrapLines={true}>
      {props.string}
    </SyntaxHighlighter>
  )
}