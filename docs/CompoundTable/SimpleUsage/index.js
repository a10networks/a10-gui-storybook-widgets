import * as React from 'react'

import { A10CompoundTable, A10Input } from '../../../src'

class Example extends React.Component {

  compoundTable = undefined

  constructor(props) {
    super(props)
    this.state = {
      data: {
        'outbound-server-ip': [],
        name: '',
        ipAddress: '',
        members: [
          {
            port: 11,
            protocol: 'TCP',
            serviceGroup: 'sg1',
            templates: 'temp1',
          },
          {
            port: 12,
            protocol: 'UDP',
            serviceGroup: 'sg1',
            templates: 'temp1',
          }
        ],
      },
    }
  }

  render() {
    const columns = [
      {
        title: 'Port',
        dataIndex: 'port',
        width: '15%',
        renderEditor: (text: any, node: any, onChange: any) => {
          return <A10Input value={node.port} size="middle" onChange={(e: any) => {onChange('port', e.target.value)}} />
        }
      },
      {
        title: 'Protocol',
        dataIndex: 'protocol',
        width: '15%',
        renderEditor: (text: any, node: any, onChange: any) => {
          return <A10Input value={node.protocol} size="middle" onChange={(e: any) => {onChange('protocol', e.target.value)}} />
        }
      },
      {
        title: 'Service Group',
        dataIndex: 'serviceGroup',
        width: '25%',
        renderEditor: (text: any, node: any, onChange: any) => {
          return <A10Input value={node.serviceGroup} size="middle" onChange={(e: any) => {onChange('serviceGroup', e.target.value)}} />
        }
      },
      {
        title: 'Templates',
        dataIndex: 'templates',
        width: '25%',
        renderEditor: (text: any, node: any, onChange: any) => {
          return <A10Input value={node.templates} size="middle" onChange={(e: any) => {onChange('templates', e.target.value)}} />
        }
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        width: '200px',
        renderNormal: (text: any, record: any) => {
          return (
            <div className="action-col">
              <a onClick={() => { console.log('Edit') }}>Edit</a>
              {' | '}
              <a onClick={() => {
                this.compoundTable.handleDeleteRow(record)
              }}>
                Delete
              </a>
            </div>
          )
        },
      },
    ]
    return (
      <A10CompoundTable
        onRef={(node: any) => {this.compoundTable = node}}
        columns={columns}
        dataSource={this.state.data.members}
        onChange={(dataSource: any) => {
          const { data } = this.state
          data.members = dataSource
          this.setState({ data })
        }}
        newRow={{
          port: 43,
          protocol: 'UDP',
        }}
        pageSize={5}
      />
    )
  }

}

export default Example

