import * as React from 'react'
import { withReadme } from 'storybook-readme'

import * as readme from '../../src/Form/README.md'
import HorizontalExample from './demo/Horizontal'
import LoginExample from './demo/Login'
import RegistrationExample from './demo/Registration'
import AdvancedExample from './demo/Advanced'
import ModalExample from './demo/Modal'
import DynamicExample from './demo/Dynamic'
import TimeRelatedExample from './demo/TimeRelated'
import CustomizedExample from './demo/Customized'
import StoreUpperExample from './demo/StoreUpper'
import HandleManuallyExample from './demo/HandleManually'
import CustomizeValidationExample from './demo/CustomizeValidation'
import CoordinatedExample from './demo/Coordinated'
import FormExample from './demo/Form'
import DynamicRulesExample from './demo/DynamicRules'
import OtherExample from './demo/Other'
import {
  horizontalCode, loginCode, registrationCode, advancedCode,
  formModalCode, dynamicCode, timeCode, customizedCode, storeCode,
  handleCode, customizedValidationCode, coordinatedCode, formLayoutCode,
  dynamicRulesCode, otherCode
} from './demo/code'
import { Code, CodeComponent, CodeCard } from '../utils'
import './styles/demo.less'

const Example = () => {
  const contentDiv = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  return (
    <div id="formSpecific">
    <CodeComponent>
      <CodeCard
        title="Horizontal Login Form"
        desc="Horizontal login form is often used in navigation bar."
        code={<Code string={horizontalCode} />}
      >
        <HorizontalExample />
      </CodeCard>

      <CodeCard
        title="Login Form"
        desc="Normal login form which can contain more elements."
        code={<Code string={loginCode} />}
      >
        <LoginExample />
      </CodeCard>
      <CodeCard
        title="Registration"
        desc="Fill in this form to create a new account for you."
        code={<Code string={registrationCode} />}
      >
        <RegistrationExample />
      </CodeCard>

      <CodeCard
        title="Advanced Search"
        desc="Three columns layout is often used for advanced searching of data table.

        Because the width of label is not fixed, you may need to adjust it by customizing its style."
        code={<Code string={advancedCode} />}
      >
        <AdvancedExample />
      </CodeCard>

      <CodeCard
        title="Form in Modal to Create"
        desc="When user visit a page with a list of items, and want to create a new item. The page can popup a form in Modal, then let user fill in the form to create an item."
        code={<Code string={formModalCode} />}
      >
        <ModalExample />
      </CodeCard>

      <CodeCard
        title="Dynamic Form Item"
        desc="Add or remove form items dynamically."
        code={<Code string={dynamicCode} />}
      >
        <DynamicExample />
      </CodeCard>

      <CodeCard
        title="Time Related Controls"
        desc="The value of time-related components is a moment object, which we need to pre-process it before we submit to server."
        code={<Code string={timeCode} />}
      >
        <TimeRelatedExample />
      </CodeCard>

      <CodeCard
        title="Customized Form Controls"
        desc="Customized or third-party form controls can be used in Form, too. Controls must follow these conventions:

        It has a controlled property value or other name which is equal to the value of valuePropName.
        
        It has event onChange or an event which name is equal to the value of trigger.
        
        It must be a class component."
        code={<Code string={customizedCode} />}
      >
        <CustomizedExample />
      </CodeCard>

      <CodeCard
        title="Store Form Data into Upper Component"
        desc="We can store form data into upper component or Redux or dva by using onFieldsChange and mapPropsToFields, see more at this rc-form demo.

        Note: You must wrap field data with Form.createFormField in mapPropsToFields."
        code={<Code string={storeCode} />}
      >
        <StoreUpperExample />
      </CodeCard>

      <CodeCard
        title="Handle Form Data Manually"
        desc="Form.create will collect and validate form data automatically. But if you don't need this feature or the default behaviour cannot satisfy your business, you can drop Form.create and handle form data manually."
        code={<Code string={handleCode} />}
      >
        <HandleManuallyExample />
      </CodeCard>

      <CodeCard
        title="Customized Validation"
        desc="We provide properties like validateStatus help hasFeedback to customize your own validate status and message, without using Form.create and getFieldDecorator.

        validateStatus: validate status of form components which could be 'success', 'warning', 'error', 'validating'.
        
        hasFeedback: display feed icon of input control
        
        help: display validate message."
        code={<Code string={customizedValidationCode} />}
      >
        <CustomizeValidationExample />
      </CodeCard>

      <CodeCard
        title="Coordinated Controls"
        desc="Use setFieldsValue to set other control's value programmaticly."
        code={<Code string={coordinatedCode} />}
      >
        <CoordinatedExample />
      </CodeCard>

      <CodeCard
        title="Form Layout"
        desc="There are three layout for form: horizontal, vertical, inline."
        code={<Code string={formLayoutCode} />}
      >
        <FormExample />
      </CodeCard>

      <CodeCard
        title="Dynamic Rules"
        desc="Perform different check rules according to different situations."
        code={<Code string={dynamicRulesCode} />}
      >
        <DynamicRulesExample />
      </CodeCard>

      <CodeCard
        title="Other Form Controls"
        desc="Demostration for validataion configuration for form controls which are not show in the above demos."
        code={<Code string={otherCode} />}
      >
        <OtherExample />
      </CodeCard>
    </CodeComponent>
    </div>
  )
}
export default story => {
  story.add('A10Form', withReadme(readme, Example))
}
