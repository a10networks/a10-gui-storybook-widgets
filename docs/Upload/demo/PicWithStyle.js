import { A10Upload, A10Button, A10Icon } from '../../../src';
import * as React from 'react';
import './index.less'

const fileList = [{
  uid: '-1',
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: '-2',
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};

const PicStyleExample = () => {
  return (
    <div>
      <A10Upload {...props}>
        <A10Button>
          <A10Icon app="global" type="deploy-3" /> Upload
      </A10Button>
      </A10Upload>
      <br />
      <br />
      <A10Upload {...props2}>
        <A10Button>
          <A10Icon app="global" type="deploy-3" /> Upload
      </A10Button>
      </A10Upload>
    </div>
  )
}

export default PicStyleExample