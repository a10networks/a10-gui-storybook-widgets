import { A10Upload, A10Button, A10Icon } from '../../../src';
import * as React from 'react';

export default class MyUpload extends React.Component {
  state = {
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    }],
  }

  handleChange = (info) => {
    let fileList = info.fileList;

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // 3. Filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return false;
    });

    this.setState({ fileList });
  }

  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <A10Upload {...props} fileList={this.state.fileList}>
        <A10Button>
          <A10Icon app="global" type="deploy-3" /> Upload
        </A10Button>
      </A10Upload>
    );
  }
}