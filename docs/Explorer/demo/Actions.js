
import * as React from 'react'

import { A10Explorer, A10Divider, A10Button } from '../../../src'

export default class Example extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoading: false,
      isToggledAll: true,
      isError: false,
      isBlank: false
    }
    this.onLoadingAction = this.onLoadingAction.bind(this)
    this.onToggleAllAction = this.onToggleAllAction.bind(this)
    this.onErrorAction = this.onErrorAction.bind(this)
  }

  onLoadingAction() {
    this.setState({ isLoading: !this.state.isLoading })
  }

  onToggleAllAction() {
    this.setState({ isToggledAll: !this.state.isToggledAll })
  }

  onErrorAction() {
    this.setState({ isError: !this.state.isError })
  }

  getData() {
    return [
      {
        name: 'ADC',
        toggled: this.state.isToggledAll,
        children: [
          {
            name: 'SLB',
            toggled: this.state.isToggledAll,
            error: this.state.isError,
            children: [
              {
                name: 'Virtual Server',
                toggled: this.state.isToggledAll,
                loading: this.state.isLoading,
                count: 6,
                children: [
                  {
                    name: 'New Virtual Server', type: 'new'
                  },
                  {
                    name: 'virtual_server_1', status: 'success', statusTitle: 'Ongoing', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'virtual_server_2', status: 'processing', statusTitle: 'Ongoing', menu: [
                      { name: 'Edit' }, { name: 'Delete' },
                    ]
                  }, {
                    name: 'virtual_server_3', status: 'default', statusTitle: 'Default', menu: [
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
                name: 'Server', toggled: this.state.isToggledAll, error: this.state.isError, count: 0, children: [],
              },
              {
                name: 'Service Group', toggled: this.state.isToggledAll, children: [
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
  }
  render() {
    return (
      <div>
        <A10Button onClick={this.onToggleAllAction}>{this.state.isToggledAll ? 'Default Expand' : 'Default Collspan'}</A10Button>
        &nbsp;
        <A10Button onClick={this.onLoadingAction}>{this.state.isLoading ? 'Hide Loading' : 'Show Loading'}</A10Button>
        &nbsp;
        <A10Button onClick={this.onErrorAction}>{this.state.isError ? 'Hide Error' : 'Show Error'}</A10Button>
        &nbsp;
        <A10Divider />
        <A10Explorer data={this.getData()} />
      </div>
    )
  }
}
