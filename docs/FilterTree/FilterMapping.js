export default [
  {
    label: 'Protocol',
    icon: {
      app: 'filters',
      type: 'a-flex',
    },
    payload: 'it is a test',
    filters: [
      {
        name: 'Control',
        type: 'label',
      },
      {
        name: 'GTPv0-C',
        'total-count': 10,
      },
      {
        name: 'GTPv1-C',
        'total-count': 20,
      },
      {
        name: 'GTPv2-C',
        'total-count': 15,
      },
      {
        name: 'User',
        type: 'label',
      },
      {
        name: 'GTPv1-U',
        'total-count': 4,
      },
    ],
    orderInfo: {},
    'total-count': 10,
  },
  {
    label: 'Browser',
    payload: 'it is a test',
    icon: {
      app: 'harmony-controller',
      type: 'app-service',
    },
    filters: [
      {
        name: 'Chrome',
        'total-count': 10,
      },
      {
        name: 'IE/Edge',
        'total-count': 20,
      },
      {
        name: 'Firefox',
        'total-count': 15,
      },
      {
        name: 'Safari',
        'total-count': 4,
      },
      {
        name: 'Opera',
        'total-count': 3,
      },
    ],
    orderInfo: {},
    'total-count': 10,
  },
  {
    label: 'Network Element',
    key: 'network',
    type: 'input',
    operator: 'or',
    layout: [
      {
        label: 'IP',
        widget: 'input',
        keys: ['src_ip', 'dst_ip'],
      },
      {
        label: 'TEID',
        widget: 'input',
        keys: ['source_teid', 'dest_teid'],
      },
    ],
  },
  {
    label: 'Range',
    payload: 'it is a test',
    icon: {
      app: 'harmony-controller',
      type: 'app-service',
    },
    type: 'range',
    min: 10,
    max: 100,
    orderInfo: {},
    'total-count': 10,
  },
]
