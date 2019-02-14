import * as React from 'react'
import { A10Icon } from '../../../src'
import './index.less'
import iconList from './iconList'

const styles = {
  display: 'inline-block',
  padding: '5px',
  textAlign: 'center',
  margin: '5px 10px',
}

const RenderIcons = props => {
  const { icons, app } = props

  return (
    <React.Fragment>
      <div className="IconDemoSpecific">
        <div style={{ backgroundColor: '#fff' }}>
          {icons.map((name, index) => {
            return (
              <div style={styles} key={`${name}-${index}`}>
                <A10Icon app={app} type={name} />
                <div>{name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

const RenderIconsLight = props => {
  const { icons, app } = props
  return (
    <React.Fragment>
      <div style={{ backgroundColor: '#323745' }}>
        {icons.map((name, index) => {
          return (
            <div style={{ ...styles, color: '#fff' }} key={`${name}-${index}`}>
              <A10Icon app={app} type={name} islight={true} />
              <div>{name}</div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

const Example = () => {
  const styles = {
    border: '1px solid #eee',
    borderRadius: '4px',
    padding: '5px',
    backgroundColor: 'rgb(245, 242, 240)',
  }
  const normalIcons = (
    <fieldset>
      <legend>Action and miscellaneous icons</legend>
      <div style={styles}>{'<A10Icon app="global" type="accordion" />'}</div>
      <RenderIcons app="global" icons={iconList.normal} />
      <div style={styles}>
        {'<A10Icon app="global" type="accordion" islight={true} />'}
      </div>
      <RenderIconsLight app="global" icons={iconList.normal} />
    </fieldset>
  )

  const harmonyControllerIcons = (
    <fieldset>
      <legend>Harmony Controller icons</legend>
      <div style={styles}>
        {'<A10Icon app="harmony-controller" type="actions" />'}
      </div>
      <RenderIcons
        app="harmony-controller"
        icons={iconList.harmonyController}
      />
      <div style={styles}>
        {'<A10Icon app="harmony-controller" type="actions" islight={true} />'}
      </div>
      <RenderIconsLight
        app="harmony-controller"
        icons={iconList.harmonyController}
      />
    </fieldset>
  )

  const giFirewallIcons = (
    <fieldset>
      <legend>Gi Firewall icons</legend>
      <div style={styles}>
        {'<A10Icon app="gi-firewall" type="dashboard" />'}
      </div>
      <RenderIcons app="gi-firewall" icons={iconList.giFirewall} />
      <div style={styles}>
        {'<A10Icon app="gi-firewall" type="dashboard" islight={true} />'}
      </div>
      <RenderIconsLight app="gi-firewall" icons={iconList.giFirewall} />
    </fieldset>
  )

  const thunderAdcIcons = (
    <fieldset>
      <legend>Thunder ADC icons</legend>
      <div style={styles}>{'<A10Icon app="thunder-adc" type="a-flex" />'}</div>
      <RenderIcons app="thunder-adc" icons={iconList.thunderAdc} />
      <div style={styles}>
        {'<A10Icon app="thunder-adc" type="a-flex" islight={true} />'}
      </div>
      <RenderIconsLight app="thunder-adc" icons={iconList.thunderAdc} />
    </fieldset>
  )

  const wafIcons = (
    <fieldset>
      <legend>WAF icons</legend>
      <div style={styles}>{'<A10Icon app="waf" type="app-service" />'}</div>
      <RenderIcons app="waf" icons={iconList.waf} />
      <div style={styles}>
        {'<A10Icon app="waf" type="app-service" islight={true} />'}
      </div>
      <RenderIconsLight app="waf" icons={iconList.waf} />
    </fieldset>
  )

  const flagIcons = (
    <fieldset>
      <legend>Flag Circle icons</legend>
      <div style={styles}>{'<A10Icon app="flag-circle" type="ad" />'}</div>
      <RenderIcons app="flag-circle" icons={iconList.flag} />
    </fieldset>
  )
  return (
    <div style={{ margin: '30px' }}>
      {harmonyControllerIcons}
      <br />
      {giFirewallIcons}
      <br />
      {wafIcons}
      <br />
      {thunderAdcIcons}
      <br />
      {normalIcons}
      <br />
      {flagIcons}
    </div>
  )
}

export default Example
