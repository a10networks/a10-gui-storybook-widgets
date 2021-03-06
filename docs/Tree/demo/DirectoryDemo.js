import { A10Tree } from '../../../src';
import * as React from 'react';

const { DirectoryTree } = A10Tree;
const { TreeNode } = A10Tree;

export default class Demo extends React.Component {
    onSelect = () => {
        console.log('Trigger Select');
    };

    onExpand = () => {
        console.log('Trigger Expand');
    };

    render() {
        return (
            <DirectoryTree
                multiple
                defaultExpandAll
                onSelect={this.onSelect}
                onExpand={this.onExpand}
            >
                <TreeNode title="parent 0" key="0-0">
                    <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
                    <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
                </TreeNode>
                <TreeNode title="parent 1" key="0-1">
                    <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                    <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                </TreeNode>
            </DirectoryTree>
        );
    }
}
