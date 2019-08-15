import * as React from 'react'
import { A10Icon as Icon } from '../../../src'
import './index.less'
import iconList from './iconList'

const renderIcons = (iconCategory: string) => {
  return iconList[iconCategory].map((icon: String, index: number) => (
    <li key={index}>
      <Icon title={icon} type={icon} />
    </li>
  ))
}
const Example = () => {
  return (
    <div className="IconDemoSpecific">
      <h3>Directional Icons</h3>
      <ul className="anticons-list">{renderIcons('directional')}</ul>
      <h3>Suggested Icons</h3>
      <ul className="anticons-list">{renderIcons('suggested')}</ul>
      <h3>Editor Icons</h3>
      <ul className="anticons-list">{renderIcons('editor')}</ul>
      <h3>Data Icons</h3>
      <ul className="anticons-list">{renderIcons('data-icons')}</ul>
      <h3>Brand Icons</h3>
      <ul className="anticons-list">{renderIcons('brand')}</ul>
      <h3>App Icons</h3>
      <ul className="anticons-list">{renderIcons('app')}</ul>
    </div>
  )
}

export default Example
