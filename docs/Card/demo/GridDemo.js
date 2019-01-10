import * as React from 'react'
import { A10Card } from '../../../src';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const GridDemo = () => {
    return (
        <A10Card title="A10Card Title">
            <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
            <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
            <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
            <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
            <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
            <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
            <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
        </A10Card>
    )
}

export default GridDemo