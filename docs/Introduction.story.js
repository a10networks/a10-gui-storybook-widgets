import * as React from 'react';
import { doc } from 'storybook-readme'

const A10Introduction = require('../src/Introduction.md')

export default story => {
    story.add('Introduction', doc(A10Introduction))
};
