const code = `import { A10CompoundTable, A10Input } from 'a10-gui-widgets'

class Example extends React.Component {

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
        width: '150px',
        renderEditor: (text: any, node: any, onChange: any) => {
          return <A10Input value={node.port} onChange={(e: any) => {onChange('port', e.target.value)}} />
        }
      },
      {
        title: 'Protocol',
        dataIndex: 'protocol',
        width: '150px',
        renderEditor: (text: any, node: any, onChange: any) => {
          return <A10Input value={node.protocol} onChange={(e: any) => {onChange('protocol', e.target.value)}} />
        }
      },
      {
        title: 'Service Group',
        dataIndex: 'serviceGroup',
        width: '20%',
        renderEditor: (text: any, node: any, onChange: any) => {
          return <A10Input value={node.serviceGroup} onChange={(e: any) => {onChange('serviceGroup', e.target.value)}} />
        }
      },
      {
        title: 'Templates',
        dataIndex: 'templates',
        width: '20%',
        renderEditor: (text: any, node: any, onChange: any) => {
          return <A10Input value={node.templates} onChange={(e: any) => {onChange('templates', e.target.value)}} />
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
              <a onClick={() => { console.log('Delete') }}>Delete</a>
            </div>
          )
        },
      },
    ]
    return (
      <A10CompoundTable
        ref={(node: any) => {this.compoundTable = node}}
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

export default Example`

export default code
