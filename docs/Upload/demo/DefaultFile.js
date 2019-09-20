
import * as React from 'react'
import { A10Upload, A10Button, A10Icon } from '../../../src';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [{
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: '2',
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
};

const UploadExample = () => {
  return (
    <A10Upload {...props}>
      <A10Button>
        <A10Icon style={{ width: '19.5px', height: '23.5px' }} app="global" type="deploy-3" /> Upload
    </A10Button>
    </A10Upload>
  )
}

export default UploadExample