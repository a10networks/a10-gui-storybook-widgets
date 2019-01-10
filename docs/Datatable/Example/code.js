const code = `
import { A10Datatable } from 'a10-gui-widgets';

class Example extends React.Component {

  getColumns = () => {
    return [
      {
        title: 'Status',
        dataIndex: 'status',
        width: 60,
        render: (text: any, record: any) => {
          if (record.status) {
            return <div className="action-col">xxx</div>;
          }
        },
      },
      {
        title: 'Name',
        dataIndex: 'name',
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
        title: <span>Connections<span className="subtitle">{'Current / Total'}</span></span>,
        dataIndex: 'connections',
      }, {
        title: <span>Bytes<span className="subtitle">{'In / Out'}</span></span>,
        dataIndex: 'bytes',
      },
      {
        title: 'Statistics',
        render: (text: any, record: any) => {
          return (
            <div className="action-col">
              <a onClick={() => { return; }}>
                Stats
              </a>
            </div>
          );
        },
      },
      {
        dataIndex: 'actions',
        actions: [{
          name: 'edit',
          disable: false,
          onClick: () => { console.log('edit'); },
        }, {
          name: 'delete',
          disable: false,
          onClick: () => { console.log('delete'); },
        }]
      }
    ];
  }

  getPortColumns = () => {
    return [
      {
        title: 'Status',
        dataIndex: 'status',
        width: 60,
        render: (text: any, record: any) => {
          if (record.status) {
            return <div>Sss</div>;
          }
        },
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
        title: <span>Connections<span className="subtitle">{'Current / Total'}</span></span>,
        dataIndex: 'connections',
      }, {
        title: <span>Bytes<span className="subtitle">{'In / Out'}</span></span>,
        dataIndex: 'bytes',
      },
      {
        title: 'Statistics',
        render: (text: any, record: any) => {
          return <div className="action-col"><a onClick={() => { return; }}>Stats</a></div>;
        },
      },
      {
        dataIndex: 'actions',
        actions: [{
          name: 'edit',
          disable: false,
          onClick: () => { console.log('edit'); },
        }, {
          name: 'delete',
          disable: false,
          onClick: () => { console.log('delete'); },
        }]
      },
    ];
  }

  renderRow = (item: any, index: number) => {
    const expanded = new Array();
    if (item['port-list']) {
      item['port-list'].map((child: any, childIndex: number) => {
        expanded.push({
          key: ${'`${index}-${childIndex}`'},
          port: child['port-number'],
          protocol: child.protocol,
          status: 'down',
          $api: child['a10-url'],
          connections: '0 / 0',
          bytes: '0 / 0',
          expanded,
        });
      });
    }

    return {
      key: index,
      name: item.name,
      vipAddress: item['ip-address'],
      acl: item['acl-id'],
      status: 'up',
      $api: item['a10-url'],
      connections: '0 / 0',
      bytes: '0 / 0',
      expanded,
    }
  }

  render() {
    const actions = {
      create:  {
        alias: 'Create',
        callback: () => { console.log('create'); },
      },
      delete:  {
        alias: 'Delete',
        callback: () => { console.log('Delete'); },
      },
    }

    const dataUrls = [
      {
        url: '/axapi/v3/slb/virtual-server',
        listKey: 'virtual-server-list',
        searchKey: 'name',
      },
    ]
    return (
      <div>
        <A10Datatable
          actions={actions}
          dataUrls={dataUrls}
          columns={this.getColumns()}
          subColumns={this.getPortColumns()}
          renderRow={this.renderRow}
        />
      </div>
    );
  }
}

export default Example;
`
export default code
