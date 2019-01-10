import {
  A10Upload, A10Button, A10Icon, A10Message,
} from '../../../src';
import request from 'request';
import * as React from 'react';

export default class Demo extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: '//jsonplaceholder.typicode.com/posts/',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        A10Message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        A10Message.error('upload failed.');
      },
    });
  }

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div>
        <A10Upload {...props}>
          <A10Button>
            <A10Icon app="global" type="deploy-3" /> Select File
          </A10Button>
        </A10Upload>
        <A10Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16, paddingLeft: 10, paddingRight: 10 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </A10Button>
      </div>
    );
  }
}
