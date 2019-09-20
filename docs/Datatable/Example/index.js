
import * as React from 'react'
import A10Datatable from '../../../src/Datatable'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text: any, record: any) => {
      if (record.status) {
        return <div className="action-col"><StatusBar type={record.status} /></div>
      }
    },
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'VIP Address',
    dataIndex: 'vipAddress',
  },
  {
    title: 'ACL',
    dataIndex: 'acl',
  },
  {
    title: 'Port',
    dataIndex: 'port',
  },
  {
    title: 'Protocol',
    dataIndex: 'protocol',
  },
  {
    title: 'Service Group',
    dataIndex: 'serviceGroup',
  },
  {
    title: 'Connections',
    children: [
      {
        title: 'Current',
        dataIndex: 'connCurrent',
      }, {
        title: 'Total',
        dataIndex: 'connTotal',
      },
    ],
  }, {
    title: 'Bytes',
    children: [
      {
        title: 'In',
        dataIndex: 'bytesIn',
      }, {
        title: 'Out',
        dataIndex: 'bytesOut',
      },
    ],
  },
  {
    title: 'Statistics',
    render: (text: any, record: any) => {
      return <div className="action-col"><a>Stats</a></div>
    },
  },
]

const dataSource = [
  {
    name: 'vs1',
    vipAddress: '0.0.0.0',
    key: 1,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  },
  {
    name: 'vs2',
    vipAddress: '3.2.2.5',
    key: 2,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  },
  {
    name: 'vs3',
    vipAddress: '1.5.4.3',
    key: 3,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  },
  {
    name: 'vs5',
    vipAddress: '192.168.105.99',
    key: 5,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  },
  {
    name: 'vs6',
    vipAddress: '192.168.105.99',
    key: 6,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  },
  {
    name: 'vs7',
    vipAddress: '192.168.105.99',
    key: 7,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  },
  {
    name: 'vs4',
    vipAddress: '192.168.105.99',
    key: 4,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  },
  {
    name: 'vs8',
    vipAddress: '192.168.105.99',
    key: 8,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  },
  {
    name: 'vs9',
    vipAddress: '192.168.105.99',
    key: 9,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  },
  {
    name: 'vs10',
    vipAddress: '192.168.105.99',
    key: 10,
    connTotal: 2,
    connCurrent: 4,
    bytesOut: 7,
    bytesIn: 10,
  }
]

export default class Example extends React.Component {

  render() {
    return (
      <A10Datatable
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
          current: 3,
          total: 1000,
          hideOnSinglePage: true,
        }}
      />
    )
  }
}
