import { A10Tree } from '../../../src';
import * as React from 'react';

const { TreeNode } = A10Tree;

export default class Demo extends React.Component {
    state = {
        treeData: [
            { title: 'Expand to load', key: '0' },
            { title: 'Expand to load', key: '1' },
            { title: 'A10Tree Node', key: '2', isLeaf: true },
        ],
    }

    onLoadData = treeNode => new Promise((resolve) => {
        if (treeNode.props.children) {
            resolve();
            return;
        }
        setTimeout(() => {
            treeNode.props.dataRef.children = [
                { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
                { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
            ];
            this.setState({
                treeData: [...this.state.treeData],
            });
            resolve();
        }, 1000);
    })

    renderTreeNodes = data => data.map((item) => {
        if (item.children) {
            return (
                <TreeNode title={item.title} key={item.key} dataRef={item}>
                    {this.renderTreeNodes(item.children)}
                </TreeNode>
            );
        }
        return <TreeNode {...item} dataRef={item} />;
    })

    render() {
        return (
            <A10Tree loadData={this.onLoadData}>
                {this.renderTreeNodes(this.state.treeData)}
            </A10Tree>
        );
    }
}

