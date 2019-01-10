
import * as React from 'react'

import { A10Explorer } from '../../../src'

const Example = () => {
    const data = [
      {
        name: 'ADC',
        toggled: true,
        children: [
          {
            name: 'SLB',
            toggled: true,
            children: [
              {
                name: 'Virtual Server', toggled: true, children: [
                  {
                    name: 'virtual_server_1', status: 'success', statusTitle: 'Ongoing', count: 22, menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'virtual_server_2', status: 'processing', statusTitle: 'Ongoing', count: 25, menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'virtual_server_3', status: 'default', statusTitle: 'Default', active: true, menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'virtual_server_4', status: 'error', statusTitle: 'Error', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'virtual_server_5', status: 'warning', statusTitle: 'Warning', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'virtual_server_6', status: 'warning', statusTitle: 'Warning', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  },
                ],
              },
              {
                name: 'Server', children: [
                  {
                    name: 'server1', status: 'success', statusTitle: 'Ongoing', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'server2', status: 'processing', statusTitle: 'Ongoing', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'server3', status: 'default', statusTitle: 'Default', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'server4', status: 'error', statusTitle: 'Error', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'server5', status: 'success', statusTitle: 'Success', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  },
                ],
              },
              {
                name: 'Service Group', children: [
                  {
                    name: 'service_group_1', status: 'success', statusTitle: 'Ongoing', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'service_group_2', status: 'processing', statusTitle: 'Ongoing', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'service_group_3', status: 'default', statusTitle: 'default', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'service_group_4', status: 'error', statusTitle: 'error', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'service_group_5', status: 'warning', statusTitle: 'warning', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  },
                ],
              },
            ],
          },
        ],
      },
    ]
    return (
      <A10Explorer data={data} />
    )
  }

export default Example
