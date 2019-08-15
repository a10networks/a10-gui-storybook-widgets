export const basicCode = `
import { A10Descriptions } from 'a10-gui-widget';

ReactDOM.render(
  <A10Descriptions title="User Info">
    <A10Descriptions.Item label="UserName">Zhou Maomao</A10Descriptions.Item>
    <A10Descriptions.Item label="Telephone">1810000000</A10Descriptions.Item>
    <A10Descriptions.Item label="Live">Hangzhou, Zhejiang</A10Descriptions.Item>
    <A10Descriptions.Item label="Remark">empty</A10Descriptions.Item>
    <A10Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </A10Descriptions.Item>
  </A10Descriptions>,
  mountNode,
);
`

export const boderCode = `
import { A10Descriptions, A10Badge } from 'a10-gui-widget';

ReactDOM.render(
  <A10Descriptions title="User Info" bordered>
    <A10Descriptions.Item label="Product">Cloud Database</A10Descriptions.Item>
    <A10Descriptions.Item label="Billing Mode">Prepaid</A10Descriptions.Item>
    <A10Descriptions.Item label="Automatic Renewal">YES</A10Descriptions.Item>
    <A10Descriptions.Item label="Order time">2018-04-24 18:00:00</A10Descriptions.Item>
    <A10Descriptions.Item label="Usage Time" span={3}>
      2019-04-24 18:00:00
    </A10Descriptions.Item>
    <A10Descriptions.Item label="Status" span={3}>
      <A10Badge status="processing" text="Running" />
    </A10Descriptions.Item>
    <A10Descriptions.Item label="Negotiated Amount">$80.00</A10Descriptions.Item>
    <A10Descriptions.Item label="Discount">$20.00</A10Descriptions.Item>
    <A10Descriptions.Item label="Official Receipts">$60.00</A10Descriptions.Item>
    <A10Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication_factor:3
      <br />
      Region: East China 1<br />
    </A10Descriptions.Item>
  </A10Descriptions>,
  mountNode,
);
`

export const customSizeCode = `
import { A10Descriptions, A10Radio } from 'a10-gui-widget';

class Demo extends React.Component {
  state = {
    size: 'default',
  };

  onChange = e => {
    console.log('size checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <A10Radio.Group onChange={this.onChange} value={this.state.size}>
          <A10Radio value="default">default</A10Radio>
          <A10Radio value="middle">middle</A10Radio>
          <A10Radio value="small">small</A10Radio>
        </A10Radio.Group>
        <br />
        <br />
        <A10Descriptions bordered title="Custom Size" border size={this.state.size}>
          <A10Descriptions.Item label="Product">Cloud Database</A10Descriptions.Item>
          <A10Descriptions.Item label="Billing">Prepaid</A10Descriptions.Item>
          <A10Descriptions.Item label="time">18:00:00</A10Descriptions.Item>
          <A10Descriptions.Item label="Amount">$80.00</A10Descriptions.Item>
          <A10Descriptions.Item label="Discount">$20.00</A10Descriptions.Item>
          <A10Descriptions.Item label="Official">$60.00</A10Descriptions.Item>
          <A10Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication_factor:3
            <br />
            Region: East China 1<br />
          </A10Descriptions.Item>
        </A10Descriptions>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
`

export const responsizeCode = `
import { A10Descriptions } from 'a10-gui-widget';

const Demo = () => {
  return (
    <div>
      <A10Descriptions
        title="Responsive A10Descriptions"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <A10Descriptions.Item label="Product">Cloud Database</A10Descriptions.Item>
        <A10Descriptions.Item label="Billing">Prepaid</A10Descriptions.Item>
        <A10Descriptions.Item label="time">18:00:00</A10Descriptions.Item>
        <A10Descriptions.Item label="Amount">$80.00</A10Descriptions.Item>
        <A10Descriptions.Item label="Discount">$20.00</A10Descriptions.Item>
        <A10Descriptions.Item label="Official">$60.00</A10Descriptions.Item>
        <A10Descriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication_factor:3
          <br />
          Region: East China 1
        </A10Descriptions.Item>
      </A10Descriptions>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
`

export const verticalCode = `
import { A10Descriptions } from 'a10-gui-widget';

ReactDOM.render(
  <A10Descriptions title="User Info" layout="vertical">
    <A10Descriptions.Item label="UserName">Zhou Maomao</A10Descriptions.Item>
    <A10Descriptions.Item label="Telephone">1810000000</A10Descriptions.Item>
    <A10Descriptions.Item label="Live">Hangzhou, Zhejiang</A10Descriptions.Item>
    <A10Descriptions.Item label="Remark">empty</A10Descriptions.Item>
    <A10Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </A10Descriptions.Item>
  </A10Descriptions>,
  mountNode,
);
`

export const verticalBorderCode = `
import { A10Descriptions, A10Badge } from 'a10-gui-widget';

ReactDOM.render(
  <A10Descriptions title="User Info" layout="vertical" bordered>
    <A10Descriptions.Item label="Product">Cloud Database</A10Descriptions.Item>
    <A10Descriptions.Item label="Billing Mode">Prepaid</A10Descriptions.Item>
    <A10Descriptions.Item label="Automatic Renewal">YES</A10Descriptions.Item>
    <A10Descriptions.Item label="Order time">2018-04-24 18:00:00</A10Descriptions.Item>
    <A10Descriptions.Item label="Usage Time" span={3}>
      2019-04-24 18:00:00
    </A10Descriptions.Item>
    <A10Descriptions.Item label="Status" span={3}>
      <A10Badge status="processing" text="Running" />
    </A10Descriptions.Item>
    <A10Descriptions.Item label="Negotiated Amount">$80.00</A10Descriptions.Item>
    <A10Descriptions.Item label="Discount">$20.00</A10Descriptions.Item>
    <A10Descriptions.Item label="Official Receipts">$60.00</A10Descriptions.Item>
    <A10Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication_factor:3
      <br />
      Region: East China 1<br />
    </A10Descriptions.Item>
  </A10Descriptions>,
  mountNode,
);
`
