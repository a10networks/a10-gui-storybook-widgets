import * as React from 'react'
import { _ } from 'a10-gui-framework'
import { A10CompoundConfigList, A10Select, A10InputNumber } from '../../../src'

class Example extends React.Component {
  render() {
    const ICMPCodeMap = {
      'ICMP Code Number': 'icmp-code-number',
      'Any ICMP Code': 'any-code',
      'Destination Network Unreachable': 'network-unreachable',
      'Destination Host Unreachable': 'host-unreachable',
      'Destination Protocol Unreachable': 'proto-unreachable',
      'Destination Port Unreachable': 'port-unreachable',
      'Fragmentation Required': 'frag-required',
      'Source Route Failed': 'route-failed',
    }

    const ICMPTypeMap = {
      'ICMP Type Number': 'icmp-type-number',
      'Any ICMP Type': 'any-type',
      'Echo Reply': 'echo-reply',
      'Echo Request': 'echo-request',
      'Information Reply': 'info-reply',
      'Information Request': 'info-request',
      'Address Mask Reply': 'mask-reply',
      'Address Mask Request': 'mask-request',
      'Parameter Problem': 'parameter-problem',
      'Redirect Message': 'redirect',
      'Source Quench': 'source-quench',
      'Time Exceeded': 'time-exceeded',
      Timestamp: 'timestamp',
      'Timestamp Reply': 'timestamp-reply',
      'Destination Unreachable': 'dest-unreachable',
    }

    const renderICMPCode = (props: IObject) => {
      const { value, labelElement, conditions, updateValue } = props
      return (
        <>
          {labelElement}
          <A10Select
            defaultValue={value}
            onChange={(val: any) => {
              updateValue(val)
            }}
            style={{ display: 'block', width: '100%' }}
          >
            {Object.keys(ICMPCodeMap).map((key: string) => {
              return (
                <A10Select.Option value={ICMPCodeMap[key]} key={_.uniqueId()}>
                  {key}
                </A10Select.Option>
              )
            })}
          </A10Select>
        </>
      )
    }

    const renderCodeNumber = (props: IObject) => {
      const { value, labelElement, conditions, updateValue } = props
      const enable = conditions.some((condition: string) => {
        return condition === 'enable'
      })
      if (!enable) {
        return <div style={{ height: 90 }} />
      }
      return (
        <>
          {labelElement}
          <A10InputNumber
            min={0}
            max={254}
            value={value}
            onChange={(val: any) => {
              updateValue(val)
            }}
            style={{ display: 'block', width: '100%' }}
          />
          {value < 0 || value > 254 ? (
            <div
              className="error-message"
              style={{
                color: '#f5222d',
                position: 'absolute',
                bottom: '0',
                transform: 'translateY(100%)',
              }}
            >
              {'Code Number should be 0 - 254'}
            </div>
          ) : null}
        </>
      )
    }

    const renderICMPType = (props: IObject) => {
      const { value, labelElement, conditions, updateValue } = props
      return (
        <>
          {labelElement}
          <A10Select
            defaultValue={value}
            onChange={(val: any) => {
              updateValue(val)
            }}
            style={{ display: 'block', width: '100%' }}
          >
            {Object.keys(ICMPTypeMap).map((key: string) => {
              return (
                <A10Select.Option value={ICMPTypeMap[key]} key={_.uniqueId()}>
                  {key}
                </A10Select.Option>
              )
            })}
          </A10Select>
        </>
      )
    }

    const renderTypeNumber = (props: IObject) => {
      const { value, labelElement, conditions, updateValue } = props
      const enable = conditions.some((condition: string) => {
        return condition === 'enable'
      })
      if (!enable) {
        return <div style={{ height: 90 }} />
      }
      return (
        <>
          {labelElement}
          <A10InputNumber
            min={0}
            max={254}
            value={value}
            onChange={(val: any) => {
              updateValue(val)
            }}
            style={{ display: 'block', width: '100%' }}
          />
          {value < 0 || value > 254 ? (
            <div
              className="error-message"
              style={{
                color: '#f5222d',
                position: 'absolute',
                bottom: '0',
                transform: 'translateY(100%)',
              }}
            >
              {'Type Number should be 0 - 254'}
            </div>
          ) : null}
        </>
      )
    }

    return (
      <A10CompoundConfigList
        dataList={[
          {
            'icmp-code': 'icmp-code-number',
            'icmp-code-number': 1,
            'icmp-type': 'icmp-type-number',
            'icmp-type-number': 1,
          },
        ]}
        configList={[
          {
            key: 'icmp-code',
            defaultValue: 'any-code',
            label: 'ICMP Code',
            span: 5,
            offset: 0,
            renderer: renderICMPCode,
            conditionConfig: null,
          },
          {
            key: 'icmp-code-number',
            defaultValue: null,
            label: 'Code Number',
            span: 3,
            offset: 2,
            renderer: renderCodeNumber,
            conditionConfig: [
              {
                conditionKey: 'enable',
                dataConditions: [
                  {
                    key: 'icmp-code',
                    values: ['icmp-code-number'],
                  },
                ],
              },
            ],
          },
          {
            key: 'icmp-type',
            defaultValue: 'any-type',
            label: 'ICMP Type',
            span: 5,
            offset: 2,
            renderer: renderICMPType,
            conditionConfig: null,
          },
          {
            key: 'icmp-type-number',
            defaultValue: null,
            label: 'Type Number',
            span: 3,
            offset: 2,
            renderer: renderTypeNumber,
            conditionConfig: [
              {
                conditionKey: 'enable',
                dataConditions: [
                  {
                    key: 'icmp-type',
                    values: ['icmp-type-number'],
                  },
                ],
              },
            ],
          },
        ]}
        deleteLabel={''}
        deleteSpan={2}
        equalHeight={true}
      />
    )
  }
}

export default Example
