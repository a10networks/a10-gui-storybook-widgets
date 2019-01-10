import { A10Upload, A10Icon, A10Message } from '../../../src';
import * as React from 'react';

const Dragger = A10Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      A10Message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      A10Message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const DragDropExample = () => {
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <A10Icon style={{ width: '19.5px', height: '23.5px' }} app="global" type="deploy-3" />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
    </Dragger>
  )
}

export default DragDropExample