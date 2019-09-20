export const horizontalCode = `import {
  A10Form, A10Icon, A10Input, A10Button,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <A10Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <A10Input prefix={<A10Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <A10Input prefix={<A10Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <A10Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </A10Button>
        </FormItem>
      </A10Form>
    );
  }
}

const WrappedHorizontalLoginForm = A10Form.create()(HorizontalLoginForm);

ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);`

export const loginCode = `import {
  A10Form, A10Icon, A10Input, A10Button, A10Checkbox,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <A10Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <A10Input prefix={<A10Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <A10Input prefix={<A10Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <A10Checkbox>Remember me</A10Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <A10Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </A10Button>
          Or <a href="">register now!</a>
        </FormItem>
      </A10Form>
    );
  }
}

const WrappedNormalLoginForm = A10Form.create()(NormalLoginForm);

ReactDOM.render(<WrappedNormalLoginForm />, mountNode);`

export const registrationCode = `import {
  A10Form, A10Input, A10Tooltip, A10Icon, A10Cascader, A10Select, A10Row, A10Col, A10Checkbox, A10Button, A10AutoComplete,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;
const Option = A10Select.Option;
const AutoCompleteOption = A10AutoComplete.Option;

const residences = [{
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

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => \`$\{value}$\{domain}\`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <A10Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </A10Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <A10Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <A10Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <A10Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Confirm Password"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <A10Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Nickname&nbsp;
              <A10Tooltip title="What do you want others to call you?">
                <A10Icon type="question-circle-o" />
              </A10Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <A10Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Habitual Residence"
        >
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
          })(
            <A10Cascader options={residences} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <A10Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Website"
        >
          {getFieldDecorator('website', {
            rules: [{ required: true, message: 'Please input website!' }],
          })(
            <A10AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <A10Input />
            </A10AutoComplete>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <A10Row gutter={8}>
            <A10Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(
                <A10Input />
              )}
            </A10Col>
            <A10Col span={12}>
              <A10Button>Get captcha</A10Button>
            </A10Col>
          </A10Row>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <A10Checkbox>I have read the <a href="">agreement</a></A10Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <A10Button type="primary" htmlType="submit">Register</A10Button>
        </FormItem>
      </A10Form>
    );
  }
}

const WrappedRegistrationForm = A10Form.create()(RegistrationForm);

ReactDOM.render(<WrappedRegistrationForm />, mountNode);`

export const advancedCode = `import {
  A10Form, A10Row, A10Col, A10Input, A10Button, A10Icon,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;

class AdvancedSearchForm extends React.Component {
  state = {
    expand: false,
  };

  // To generate mock A10Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <A10Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <FormItem label={\`Field $\`{ i }\`}>
            {getFieldDecorator(\`field - $\`{ i } \`, {
              rules: [{
                required: true,
                message: 'A10Input something!',
              }],
            })(
              <A10Input placeholder="placeholder" />
            )}
          </FormItem>
        </A10Col>
      );
    }
    return children;
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  render() {
    return (
      <A10Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <A10Row gutter={24}>{this.getFields()}</A10Row>
        <A10Row>
          <A10Col span={24} style={{ textAlign: 'right' }}>
            <A10Button type="primary" htmlType="submit">Search</A10Button>
            <A10Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </A10Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              Collapse <A10Icon type={this.state.expand ? 'up' : 'down'} />
            </a>
          </A10Col>
        </A10Row>
      </A10Form>
    );
  }
}

const WrappedAdvancedSearchForm = A10Form.create()(AdvancedSearchForm);
ReactDOM.render(
  <div>
    <WrappedAdvancedSearchForm />
    <div className="search-result-list">Search Result List</div>
  </div>,
  mountNode
);`

export const formModalCode = `import {
  A10Button, A10Modal, A10Form, A10Input, A10Radio,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;

const CollectionCreateForm = A10Form.create()(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {
        visible, onCancel, onCreate, form,
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <A10Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <A10Form layout="vertical">
            <FormItem label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <A10Input />
              )}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description')(<A10Input type="textarea" />)}
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <A10Radio.Group>
                  <A10Radio value="public">Public</A10Radio>
                  <A10Radio value="private">Private</A10Radio>
                </A10Radio.Group>
              )}
            </FormItem>
          </A10Form>
        </A10Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <A10Button type="primary" onClick={this.showModal}>New Collection</A10Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

ReactDOM.render(<CollectionsPage />, mountNode);`

export const dynamicCode = `import {
  A10Form, A10Input, A10Icon, A10Button,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;

let id = 0;

class DynamicFieldSet extends React.Component {
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(++id);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <FormItem
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'Passengers' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(\`names[$\{k}]\`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: true,
            whitespace: true,
            message: "Please input passenger's name or delete this field.",
          }],
        })(
          <A10Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />
        )}
        {keys.length > 1 ? (
          <A10Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        ) : null}
      </FormItem>
    ));
    return (
      <A10Form onSubmit={this.handleSubmit}>
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <A10Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <A10Icon type="plus" /> Add field
          </A10Button>
        </FormItem>
        <FormItem {...formItemLayoutWithOutLabel}>
          <A10Button type="primary" htmlType="submit">Submit</A10Button>
        </FormItem>
      </A10Form>
    );
  }
}

const WrappedDynamicFieldSet = A10Form.create()(DynamicFieldSet);
ReactDOM.render(<WrappedDynamicFieldSet />, mountNode);`

export const timeCode = `import {
  A10Form, A10DatePicker, A10TimePicker, A10Button,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;
const { MonthPicker, RangePicker } = A10DatePicker;

class TimeRelatedForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
      <A10Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="A10DatePicker"
        >
          {getFieldDecorator('date-picker', config)(
            <A10DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="A10DatePicker[showTime]"
        >
          {getFieldDecorator('date-time-picker', config)(
            <A10DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="MonthPicker"
        >
          {getFieldDecorator('month-picker', config)(
            <MonthPicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="RangePicker"
        >
          {getFieldDecorator('range-picker', rangeConfig)(
            <RangePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="RangePicker[showTime]"
        >
          {getFieldDecorator('range-time-picker', rangeConfig)(
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="A10TimePicker"
        >
          {getFieldDecorator('time-picker', config)(
            <A10TimePicker />
          )}
        </FormItem>
        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <A10Button type="primary" htmlType="submit">Submit</A10Button>
        </FormItem>
      </A10Form>
    );
  }
}

const WrappedTimeRelatedForm = A10Form.create()(TimeRelatedForm);

ReactDOM.render(<WrappedTimeRelatedForm />, mountNode);`

export const customizedCode = `import {
  A10Form, A10Input, A10Select, A10Button,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;
const Option = A10Select.Option;

class PriceInput extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    };
  }

  handleNumberChange = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  }

  handleCurrencyChange = (currency) => {
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    this.triggerChange({ currency });
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to A10Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }

  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <A10Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <A10Select
          value={state.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </A10Select>
      </span>
    );
  }
}

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <A10Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem label="Price">
          {getFieldDecorator('price', {
            initialValue: { number: 0, currency: 'rmb' },
            rules: [{ validator: this.checkPrice }],
          })(<PriceInput />)}
        </FormItem>
        <FormItem>
          <A10Button type="primary" htmlType="submit">Submit</A10Button>
        </FormItem>
      </A10Form>
    );
  }
}

const WrappedDemo = A10Form.create()(Demo);

ReactDOM.render(<WrappedDemo />, mountNode);`

export const storeCode = `import { A10Form, A10Input } from 'a10-gui-widgets';

const FormItem = A10Form.Item;

const CustomizedForm = A10Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: A10Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <A10Form layout="inline">
      <FormItem label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<A10Input />)}
      </FormItem>
    </A10Form>
  );
});

class Demo extends React.Component {
  state = {
    fields: {
      username: {
        value: 'benjycui',
      },
    },
  };

  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  }

  render() {
    const fields = this.state.fields;
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);`

export const handleCode = `import { A10Form, A10InputNumber } from 'a10-gui-widgets';

const FormItem = A10Form.Item;

function validatePrimeNumber(number) {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!',
  };
}

class RawForm extends React.Component {
  state = {
    number: {
      value: 11,
    },
  };

  handleNumberChange = (value) => {
    this.setState({
      number: {
        ...validatePrimeNumber(value),
        value,
      },
    });
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    const number = this.state.number;
    const tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
    return (
      <A10Form>
        <FormItem
          {...formItemLayout}
          label="Prime between 8 & 12"
          validateStatus={number.validateStatus}
          help={number.errorMsg || tips}
        >
          <A10InputNumber
            min={8}
            max={12}
            value={number.value}
            onChange={this.handleNumberChange}
          />
        </FormItem>
      </A10Form>
    );
  }
}

ReactDOM.render(<RawForm />, mountNode);`

export const customizedValidationCode = `import {
  A10Form, A10Input, A10DatePicker, A10Col, A10TimePicker, A10Select, A10Cascader, A10InputNumber,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;
const Option = A10Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

ReactDOM.render(
  <A10Form>
    <FormItem
      {...formItemLayout}
      label="Fail"
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <A10Input placeholder="unavailable choice" id="error" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Warning"
      validateStatus="warning"
    >
      <A10Input placeholder="Warning" id="warning" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <A10Input placeholder="I'm the content is being validated" id="validating" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <A10Input placeholder="I'm the content" id="success" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <A10Input placeholder="Warning" id="warning" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Fail"
      hasFeedback
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <A10Input placeholder="unavailable choice" id="error" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <A10DatePicker style={{ width: '100%' }} />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <A10TimePicker style={{ width: '100%' }} />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Error"
      hasFeedback
      validateStatus="error"
    >
      <A10Select defaultValue="1">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </A10Select>
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <A10Cascader defaultValue={['1']} options={[]} />
    </FormItem>

    <FormItem
      label="inline"
      {...formItemLayout}
    >
      <A10Col span={11}>
        <FormItem validateStatus="error" help="Please select the correct date">
          <A10DatePicker />
        </FormItem>
      </A10Col>
      <A10Col span={2}>
        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
          -
        </span>
      </A10Col>
      <A10Col span={11}>
        <FormItem>
          <A10DatePicker />
        </FormItem>
      </A10Col>
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <A10InputNumber style={{ width: '100%' }} />
    </FormItem>
  </A10Form>,
  mountNode
);`

export const coordinatedCode = `import {
  A10Form, A10Select, A10Input, A10Button,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;
const Option = A10Select.Option;

class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: \`Hi, $\{value === 'male' ? 'man' : 'lady'}!\`,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <A10Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Note"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(
            <A10Input />
          )}
        </FormItem>
        <FormItem
          label="Gender"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <A10Select
              placeholder="A10Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </A10Select>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <A10Button type="primary" htmlType="submit">
            Submit
          </A10Button>
        </FormItem>
      </A10Form>
    );
  }
}

const WrappedApp = A10Form.create()(App);

ReactDOM.render(<WrappedApp />, mountNode);`

export const formLayoutCode = `import {
  A10Form, A10Input, A10Button, A10Radio,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;

class FormLayoutDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    return (
      <div>
        <A10Form layout={formLayout}>
          <FormItem
            label="A10Form Layout"
            {...formItemLayout}
          >
            <A10Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
              <A10Radio.A10Button value="horizontal">Horizontal</A10Radio.A10Button>
              <A10Radio.A10Button value="vertical">Vertical</A10Radio.A10Button>
              <A10Radio.A10Button value="inline">Inline</A10Radio.A10Button>
            </A10Radio.Group>
          </FormItem>
          <FormItem
            label="Field A"
            {...formItemLayout}
          >
            <A10Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="Field B"
            {...formItemLayout}
          >
            <A10Input placeholder="input placeholder" />
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <A10Button type="primary">Submit</A10Button>
          </FormItem>
        </A10Form>
      </div>
    );
  }
}

ReactDOM.render(<FormLayoutDemo />, mountNode);`

export const dynamicRulesCode = `import {
  A10Form, A10Input, A10Button, A10Checkbox,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class DynamicRule extends React.Component {
  state = {
    checkNick: false,
  };

  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('success');
        }
      },
    );
  }

  handleChange = (e) => {
    this.setState({
      checkNick: e.target.checked,
    }, () => {
      this.props.form.validateFields(['nickname'], { force: true });
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: 'Please input your name',
            }],
          })(
            <A10Input placeholder="Please input your name" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Nickname">
          {getFieldDecorator('nickname', {
            rules: [{
              required: this.state.checkNick,
              message: 'Please input your nickname',
            }],
          })(
            <A10Input placeholder="Please input your nickname" />
          )}
        </FormItem>
        <FormItem {...formTailLayout}>
          <A10Checkbox
            checked={this.state.checkNick}
            onChange={this.handleChange}
          >
            Nickname is required
          </A10Checkbox>
        </FormItem>
        <FormItem {...formTailLayout}>
          <A10Button type="primary" onClick={this.check}>
            Check
          </A10Button>
        </FormItem>
      </div>
    );
  }
}

const WrappedDynamicRule = A10Form.create()(DynamicRule);
ReactDOM.render(<WrappedDynamicRule />, mountNode);`

export const otherCode = `import {
  A10Form, A10Select, A10InputNumber, A10Switch, A10Radio,
  Slider, A10Button, A10Upload, A10Icon, A10Rate,
} from 'a10-gui-widgets';

const FormItem = A10Form.Item;
const Option = A10Select.Option;
const RadioButton = A10Radio.A10Button;
const RadioGroup = A10Radio.Group;

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  normFile = (e) => {
    console.log('A10Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <A10Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Plain Text"
        >
          <span className="ant-form-text">China</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="A10Select"
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: 'Please select your country!' },
            ],
          })(
            <A10Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </A10Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="A10Select[multiple]"
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          })(
            <A10Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </A10Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="A10InputNumber"
        >
          {getFieldDecorator('input-number', { initialValue: 3 })(
            <A10InputNumber min={1} max={10} />
          )}
          <span className="ant-form-text"> machines</span>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="A10Switch"
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <A10Switch />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Slider"
        >
          {getFieldDecorator('slider')(
            <Slider marks={{
              0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F',
            }}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="A10Radio.Group"
        >
          {getFieldDecorator('radio-group')(
            <RadioGroup>
              <A10Radio value="a">item 1</A10Radio>
              <A10Radio value="b">item 2</A10Radio>
              <A10Radio value="c">item 3</A10Radio>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="A10Radio.A10Button"
        >
          {getFieldDecorator('radio-button')(
            <RadioGroup>
              <RadioButton value="a">item 1</RadioButton>
              <RadioButton value="b">item 2</RadioButton>
              <RadioButton value="c">item 3</RadioButton>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="A10Rate"
        >
          {getFieldDecorator('rate', {
            initialValue: 3.5,
          })(
            <A10Rate />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="A10Upload"
          extra="longgggggggggggggggggggggggggggggggggg"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <A10Upload name="logo" action="/upload.do" listType="picture">
              <A10Button>
                <A10Icon type="upload" /> Click to upload
              </A10Button>
            </A10Upload>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Dragger"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <A10Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <A10Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </A10Upload.Dragger>
            )}
          </div>
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <A10Button type="primary" htmlType="submit">Submit</A10Button>
        </FormItem>
      </A10Form>
    );
  }
}

const WrappedDemo = A10Form.create()(Demo);

ReactDOM.render(<WrappedDemo />, mountNode);`