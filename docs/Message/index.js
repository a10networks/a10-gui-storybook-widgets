import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'
import * as readme from '../../src/Message/README.md'
import { A10Message, A10Button } from '../../src'
import { Code, CodeComponent, CodeCard } from '../utils'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';


const info = () => {
  A10Message.info('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};
const success = () => {
  A10Message.success('This is a message of success');
};
const load = () => {
  const hide = A10Message.loading('Action in progress..', 0);
  setTimeout(hide, 2500);
};

export default story => {
  return story.addDecorator(withReadme(readme))
    .add('A10Message', () => {
      const top = 200, duration = 2
      return (
        <CodeComponent>
          <CodeCard title="Basic Usage" desc="Basic Usage Example" code={<Code string={'<A10Message top={top} duration={duration} />'} />}>
            <A10Button type='primary' onClick={success}> Success </A10Button>
            <A10Button onClick={info}> Customized display duration </A10Button>
            <A10Button onClick={load}> Display a loading indicator </A10Button>
          </CodeCard>
        </CodeComponent>
      )
    })
}
