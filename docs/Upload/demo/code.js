export const uploadClickCode = `import {
  A10Upload, A10Message, A10Button, A10Icon,
} from 'a10-gui-widgets';

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
      A10Message.success(\`$\{info.file.name} file A10Uploaded successfully\`);
    } else if (info.file.status === 'error') {
      A10Message.error(\`$\{info.file.name} file A10Upload failed.\`);
    }
  },
};

ReactDOM.render(
  <A10Upload {...props}>
    <A10Button>
      <A10Icon type="A10Upload" /> Click to A10Upload
    </A10Button>
  </A10Upload>,
  mountNode
);`

export const defaultFileCode = `import { A10Upload, A10Button, A10Icon } from 'a10-gui-widgets';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({ file, fileList }) {
    if (file.status !== 'A10Uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [{
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    response: 'Server Error 500', // custom error A10Message to show
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
    response: 'Server Error 500', // custom error A10Message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
};

ReactDOM.render(
  <A10Upload {...props}>
    <A10Button>
      <A10Icon type="A10Upload" /> A10Upload
    </A10Button>
  </A10Upload>,
  mountNode
);`

export const comControlCode = `import { A10Upload, A10Button, A10Icon } from 'a10-gui-widgets';

class MyA10Upload extends React.Component {
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

    // 1. Limit the number of A10Uploaded files
    // Only to show two recent A10Uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // 3. Filter successfully A10Uploaded files according to response from server
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
          <A10Icon type="A10Upload" /> A10Upload
        </A10Button>
      </A10Upload>
    );
  }
}

ReactDOM.render(<MyA10Upload />, mountNode);`

export const uploadDirCode = `import { A10Upload, A10Button, A10Icon } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Upload action="//jsonplaceholder.typicode.com/posts/" directory>
    <A10Button>
      <A10Icon type="A10Upload" /> A10Upload Directory
    </A10Button>
  </A10Upload>,
  mountNode
);`

export const pictureListCode = `import { A10Upload, A10Button, A10Icon } from 'a10-gui-widgets';

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
  className: 'A10Upload-list-inline',
};

ReactDOM.render(
  <div>
    <A10Upload {...props}>
      <A10Button>
        <A10Icon type="A10Upload" /> A10Upload
      </A10Button>
    </A10Upload>
    <br />
    <br />
    <A10Upload {...props2}>
      <A10Button>
        <A10Icon type="A10Upload" /> A10Upload
      </A10Button>
    </A10Upload>
  </div>,
  mountNode
);`

export const avatarCode = `import { A10Upload, A10Icon, A10Message } from 'a10-gui-widgets';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeA10Upload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    A10Message.error('You can only A10Upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    A10Message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = (info) => {
    if (info.file.status === 'A10Uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  render() {
    const A10UploadButton = (
      <div>
        <A10Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-A10Upload-text">A10Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <A10Upload
        name="avatar"
        listType="picture-card"
        className="avatar-A10Uploader"
        showA10UploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeA10Upload={beforeA10Upload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : A10UploadButton}
      </A10Upload>
    );
  }
}

ReactDOM.render(<Avatar />, mountNode);`

export const pictureWallCode = `import { A10Upload, A10Icon, A10Modal } from 'a10-gui-widgets';

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const A10UploadButton = (
      <div>
        <A10Icon type="plus" />
        <div className="ant-A10Upload-text">A10Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <A10Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : A10UploadButton}
        </A10Upload>
        <A10Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </A10Modal>
      </div>
    );
  }
}

ReactDOM.render(<PicturesWall />, mountNode);`

export const dragDropCode = `import { A10Upload, A10Icon, A10Message } from 'a10-gui-widgets';

const Dragger = A10Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'A10Uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      A10Message.success(\`$\{info.file.name} file A10Uploaded successfully.\`);
    } else if (status === 'error') {
      A10Message.error(\`$\{info.file.name} file A10Upload failed.\`);
    }
  },
};

ReactDOM.render(
  <Dragger {...props}>
    <p className="ant-A10Upload-drag-icon">
      <A10Icon type="inbox" />
    </p>
    <p className="ant-A10Upload-text">Click or drag file to this area to A10Upload</p>
    <p className="ant-A10Upload-hint">Support for a single or bulk A10Upload. Strictly prohibit from A10Uploading company data or other band files</p>
  </Dragger>,
  mountNode
);
`

export const manualCode = `import {
  A10Upload, A10Button, A10Icon, A10Message,
} from 'a10-gui-widgets';
import reqwest from 'reqwest';

class Demo extends React.Component {
  state = {
    fileList: [],
    A10Uploading: false,
  }

  handleA10Upload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      A10Uploading: true,
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
          A10Uploading: false,
        });
        A10Message.success('A10Upload successfully.');
      },
      error: () => {
        this.setState({
          A10Uploading: false,
        });
        A10Message.error('A10Upload failed.');
      },
    });
  }

  render() {
    const { A10Uploading, fileList } = this.state;
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
      beforeA10Upload: (file) => {
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
            <A10Icon type="A10Upload" /> Select File
          </A10Button>
        </A10Upload>
        <A10Button
          type="primary"
          onClick={this.handleA10Upload}
          disabled={fileList.length === 0}
          loading={A10Uploading}
          style={{ marginTop: 16 }}
        >
          {A10Uploading ? 'A10Uploading' : 'Start A10Upload' }
        </A10Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);`