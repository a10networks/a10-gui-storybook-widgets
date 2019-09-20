import { A10Button, A10Icon } from '../../../src';
import * as React from 'react'

const ButtonGroup = A10Button.Group;

const ButtonGroupDemo = () => {
    return (
        <div>
            <h4>Basic</h4>
            <ButtonGroup>
                <A10Button>Cancel</A10Button>
                <A10Button>OK</A10Button>
            </ButtonGroup>
            <ButtonGroup>
                <A10Button disabled>L</A10Button>
                <A10Button disabled>M</A10Button>
                <A10Button disabled>R</A10Button>
            </ButtonGroup>
            <ButtonGroup>
                <A10Button>L</A10Button>
                <A10Button>M</A10Button>
                <A10Button>R</A10Button>
            </ButtonGroup>

            <h4>With Icon</h4>
            <ButtonGroup>
                <A10Button type="primary">
                    <A10Icon type="left" />Go back
      </A10Button>
                <A10Button type="primary">
                    Go forward<A10Icon type="right" />
                </A10Button>
            </ButtonGroup>
            <ButtonGroup>
                <A10Button type="primary" icon="cloud" />
                <A10Button type="primary" icon="cloud-download" />
            </ButtonGroup>
        </div>
    )
}

export default ButtonGroupDemo