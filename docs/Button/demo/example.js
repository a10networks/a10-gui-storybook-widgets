
import * as React from 'react'
import { A10Button } from '../../../src'

export const BasicButtonExample = () => {
  return (
    <div>
      <A10Button type="primary">Primary</A10Button>&nbsp;&nbsp;
      <A10Button>Default</A10Button>&nbsp;&nbsp;
      <A10Button type="gray">Gray</A10Button>&nbsp;&nbsp;
      <A10Button type="danger">Danger</A10Button>
    </div>
  )
}

export const IconButtonExample = () => {
  return (
    <div>
      <div style={{ paddingBottom: '8px' }}>
        <A10Button type="primary" shape="circle" icon="search" />&nbsp;&nbsp;
        <A10Button type="primary" icon="search">Search</A10Button>&nbsp;&nbsp;
        <A10Button shape="circle" icon="search" />&nbsp;&nbsp;
        <A10Button icon="search">Search</A10Button>&nbsp;&nbsp;
      </div>
      <div>
        <A10Button shape="circle" icon="search" />&nbsp;&nbsp;
        <A10Button icon="search">Search</A10Button>&nbsp;&nbsp;
        <A10Button type="dashed" shape="circle" icon="search" />&nbsp;&nbsp;
        <A10Button type="dashed" icon="search">Search</A10Button>&nbsp;&nbsp;
      </div>
    </div>
  )
}

export const DisableButtonExample = () => {
  return (
    <div>
      <div style={{ paddingBottom: '8px' }}>
        <A10Button type="primary">Primary</A10Button>&nbsp;&nbsp;
        <A10Button type="primary" disabled>Primary(disabled)</A10Button>
      </div>
      <div style={{ paddingBottom: '8px' }}>
        <A10Button>Default</A10Button>&nbsp;&nbsp;
        <A10Button disabled>Default(disabled)</A10Button>
      </div>
      <div style={{ paddingBottom: '8px' }}>
        <A10Button type="gray">Gray</A10Button>&nbsp;&nbsp;
        <A10Button type="gray" disabled>Gray(disabled)</A10Button>
      </div>
      <div style={{ paddingBottom: '8px' }}>
        <A10Button type="dashed">Dashed</A10Button>&nbsp;&nbsp;
        <A10Button type="dashed" disabled>Dashed(disabled)</A10Button>
      </div>
    </div>
  )
}

export const LoadingButtonExample = () => {
  return (
    <div>
      <div style={{ paddingBottom: '8px' }}>
        <A10Button type="primary" loading>Loading</A10Button>&nbsp;&nbsp;
        <A10Button type="primary" size="small" loading>Loading</A10Button>
      </div>
      <div style={{ paddingBottom: '8px' }}>
        <A10Button shape="circle" loading />&nbsp;&nbsp;
        <A10Button type="primary" shape="circle" loading />
      </div>
    </div>
  )
}
