import * as React from 'react'
import { A10Radio, A10Input } from '../../../src'

const RadioGroup = A10Radio.Group;

class App extends React.Component {
    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <A10Radio style={radioStyle} value={1}>Option A</A10Radio>
                <A10Radio style={radioStyle} value={2}>Option B</A10Radio>
                <A10Radio style={radioStyle} value={3}>Option C</A10Radio>
                <A10Radio style={radioStyle} value={4}>
                    More...
          {this.state.value === 4 ? <A10Input size="small" style={{ width: 100, marginLeft: 10 }} /> : null}
                </A10Radio>
            </RadioGroup>
        );
    }
}

export default App
