import * as React from 'react'
import { A10Diff } from '../../../src/'
import { CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const json1 = JSON.stringify(
  {
    name: 'vip-wildcard',
    'ip-address': '1.2.2.1',
    'enable-disable-action': 'enable',
    'redistribution-flagged': 0,
    'arp-disable': 0,
    'stats-data-action': 'stats-data-enable',
    'extended-stats': 0,
    'disable-vip-adv': 0,
    uuid: 'd6b2667a-1a0a-11e8-b2c4-a7bde406853f',
    'a10-url': '/axapi/v3/slb/virtual-server/aaa',
  },
  undefined,
  2,
)

const json2 = JSON.stringify(
  {
    name: 'vip-wildcard',
    'ip-address': '0.0.0.0',
    'enable-disable-action': 'enable',
    'redistribution-flagged': 0,
    'arp-disable': 0,
    'stats-data-action': 'stats-data-enable',
    'extended-stats': 0,
    'disable-vip-adv': 0,
    uuid: '7c51b818-0b94-11e8-a055-001fa012b7f6',
    'user-tag': 'Security',
    'port-list': [
      {
        'port-number': 443,
        protocol: 'tcp',
        range: 0,
        'conn-limit': 8000000,
        reset: 0,
        'no-logging': 0,
        'use-alternate-port': 0,
        action: 'enable',
        'def-selection-if-pref-failed': 'def-selection-if-pref-failed',
        'ha-conn-mirror': 0,
        'skip-rev-hash': 0,
        'message-switching': 0,
        'force-routing-mode': 0,
        'reset-on-server-selection-fail': 0,
        'clientip-sticky-nat': 0,
        'extended-stats': 0,
        'snat-on-vip': 0,
        'stats-data-action': 'stats-data-enable',
        'syn-cookie': 0,
        'no-auto-up-on-aflex': 0,
        'scaleout-bucket-count': 32,
        auto: 1,
        precedence: 0,
        'service-group': 'sg-internal',
        ipinip: 0,
        'rtp-sip-call-id-match': 0,
        'use-rcv-hop-for-resp': 0,
        'template-tcp': 'default',
        'template-virtual-port': 'default',
        'use-default-if-no-server': 0,
        'no-dest-nat': 1,
        'port-translation': 0,
        uuid: '7c51d7da-0b94-11e8-a055-001fa012b7f6',
        'a10-url': '/axapi/v3/slb/virtual-server/vs-wildcard/port/443+tcp',
      },
    ],
    'a10-url': '/axapi/v3/slb/virtual-server/vs-wildcard',
  },
  undefined,
  2,
)

export const Demo3 = ({ diffString }) => {
  return (
    <CodeCard
      title="Show diff using two contents"
      desc="A10Diff can generate diff as long as giving two contents (oldStr and newStr), and also `fileName` is required."
      code={<Code string={demoCode} />}
    >
      <A10Diff
        fileName="virtual-server/vip-wildcard"
        oldStr={json1}
        newStr={json2}
        outputFormat="side-by-side"
        matching="words"
      />
    </CodeCard>
  )
}
export default Demo3
