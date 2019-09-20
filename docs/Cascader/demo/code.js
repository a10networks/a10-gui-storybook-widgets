export const basicCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <A10Cascader options={options} onChange={onChange} placeholder="Please select" />,
  mountNode
);`

export const customTriggerCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
  }],
}];

class CitySwitcher extends React.Component {
  state = {
    text: 'Unselect',
  };

  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
  }

  render() {
    return (
      <span>
        {this.state.text}
        &nbsp;
        <A10Cascader options={options} onChange={this.onChange}>
          <a href="#">Change city</a>
        </A10Cascader>
      </span>
    );
  }
}

ReactDOM.render(<CitySwitcher />, mountNode);`

export const disabledOptionCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <A10Cascader options={options} onChange={onChange} />,
  mountNode
);`

export const sizeCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <div>
    <A10Cascader size="large" options={options} onChange={onChange} /><br /><br />
    <A10Cascader options={options} onChange={onChange} /><br /><br />
    <A10Cascader size="small" options={options} onChange={onChange} /><br /><br />
  </div>,
  mountNode
);`

export const searchCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }, {
      value: 'xiasha',
      label: 'Xia Sha',
      disabled: true,
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua men',
    }],
  }],
}];

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

function filter(inputValue, path) {
  return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}

ReactDOM.render(
  <A10Cascader
    options={options}
    onChange={onChange}
    placeholder="Please select"
    showSearch={{ filter }}
  />,
  mountNode
);`

export const customFieldNameCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  code: 'zhejiang',
  name: 'Zhejiang',
  items: [{
    code: 'hangzhou',
    name: 'Hangzhou',
    items: [{
      code: 'xihu',
      name: 'West Lake',
    }],
  }],
}, {
  code: 'jiangsu',
  name: 'Jiangsu',
  items: [{
    code: 'nanjing',
    name: 'Nanjing',
    items: [{
      code: 'zhonghuamen',
      name: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <A10Cascader fieldNames={{ label: 'label', value: 'value', children: 'children' }} options={options} onChange={onChange} placeholder="Please select" />,
  mountNode
);`

export const defaultValueCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <A10Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} />,
  mountNode
);`

export const hoverCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}

ReactDOM.render(
  <A10Cascader
    options={options}
    expandTrigger='hover'
    displayRender={displayRender}
    onChange={onChange}
  />,
  mountNode
);`

export const changeOnSelectCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hanzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <A10Cascader options={options} onChange={onChange} changeOnSelect />,
  mountNode
);`

export const customRenderCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      code: 752100,
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      code: 453400,
    }],
  }],
}];

function handleAreaClick(e, label, option) {
  e.stopPropagation();
  console.log('clicked', label, option);
}

const displayRender = (labels, selectedOptions) => labels.map((label, i) => {
  const option = selectedOptions[i];
  if (i === labels.length - 1) {
    return (
      <span key={option.value}>
        {label} (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
      </span>
    );
  }
  return <span key={option.value}>{label} / </span>;
});

ReactDOM.render(
  <A10Cascader
    options={options}
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    displayRender={displayRender}
    style={{ width: '100%' }}
  />,
  mountNode
);`

export const loadLazilyCode = `import { A10Cascader } from 'a10-gui-widgets';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  isLeaf: false,
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  isLeaf: false,
}];

class LazyOptions extends React.Component {
  state = {
    options,
  };

  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  }

  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: \`$\{targetOption.label} Dynamic 1\`,
        value: 'dynamic1',
      }, {
        label: \`$\{targetOption.label}\` Dynamic 2 \`,
        value: 'dynamic2',
      }];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  }

  render() {
    return (
      <A10Cascader
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    );
  }
}

ReactDOM.render(<LazyOptions />, mountNode);` 