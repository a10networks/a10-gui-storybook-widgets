import * as React from 'react'

import { A10Chart, A10Button } from '../../../src'
import TableContent from './TableContent'

const groups = [
    [
        {name: 'HTTP', actived: true},
        {name: 'HTTPS'},
        {name: 'FTP'},
        {name: 'SFTP'},
    ],
    [
        {name: 'UPLOAD', actived: true},
        {name: 'DOWNLOAD'},
    ]
]

const settingsContent = <div>
    <p>Add to Dashboard</p>
    <p>Options</p>
</div>

const defaultData = {
  'map': {
      type: 'map',
      config: {},
      counters: {},
  },

  detail: {
      type: 'detail',
      config: <TableContent />
  }
}

export default class Example extends React.Component {

  constructor() {
      super()
      this.state = {
          type: 'map',
          disableFilter: true,
          config: {},
          counters: {},
      }
  }

  render() {

    const onClickMenu = (options) => {
        const type = options.type
        this.setState(defaultData[type])
        if (this.state.groups.length === options.groups.length) {
            this.state.groups.map((group, index) => {
                group.map((tab) => {
                    tab.actived = tab.name === options.groups[index]
                })
            })
        }
    }

    return (
      <div>
        <A10Chart.Detail
            types={['map', 'detail']}
            settings={settingsContent}
            onClickMenu={onClickMenu}
            title="WORLD MAP"
            chartConfig={this.state.config}
            counters={this.state.counters}
            type={this.state.type}
        />
      </div>
    )
  }
}
