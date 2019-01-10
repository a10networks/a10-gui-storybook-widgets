import {
  A10Upload, A10Message, A10Button, A10Icon,
} from '../../../src';
import * as React from 'react';

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      A10Message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      A10Message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const uploadClickExample = () => {
  return (
    <A10Upload {...props}>
      <A10Button>
        <A10Icon app="global" type="deploy-3" /> Click to Upload
    </A10Button>
    </A10Upload>
  )
}

export default uploadClickExample