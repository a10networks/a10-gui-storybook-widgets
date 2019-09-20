import * as React from 'react'
import { A10Mention, A10Popover, A10Button } from '../../../src';

const { toString, toContentState } = A10Mention;

function onChange(editorState) {
    console.log(toString(editorState));
}

function onSelect(suggestion) {
    console.log('onSelect', suggestion);
}

class PopoverContainer extends React.Component {
    getSuggestionContainer = () => this.popover.getPopupDomNode()

    visibleChange = (visible) => {
        if (visible && this.mention) {
            this.mention.focus();
        }
    }

    render() {
        const mention = (
            <A10Mention
                ref={ele => this.mention = ele}
                style={{ width: '100%' }}
                onChange={onChange}
                defaultValue={toContentState('@afc163')}
                suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
                onSelect={onSelect}
                getSuggestionContainer={this.getSuggestionContainer}
            />
        );
        return (
            <A10Popover
                trigger="click"
                content={mention}
                title="Title"
                ref={popover => this.popover = popover}
                onVisibleChange={this.visibleChange}
            >
                <A10Button type="primary">Click Me</A10Button>
            </A10Popover>
        );
    }
}

export default PopoverContainer