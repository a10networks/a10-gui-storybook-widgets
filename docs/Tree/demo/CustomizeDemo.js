import { A10Tree, A10Icon } from '../../../src';
import * as React from 'react';
const { TreeNode } = A10Tree;

const CustomizeExample = () => {
    return (
        <A10Tree
            showIcon
            defaultExpandAll
            defaultSelectedKeys={['0-0-0']}
        >
            <TreeNode icon={<A10Icon type="smile-o" />} title="parent 1" key="0-0">
                <TreeNode icon={<A10Icon type="meh-o" />} title="leaf" key="0-0-0" />
                <TreeNode
                    icon={({ selected }) => (
                        <A10Icon type={selected ? 'frown' : 'frown-o'} />
                    )}
                    title="leaf"
                    key="0-0-1"
                />
            </TreeNode>
        </A10Tree>)
}

export default CustomizeExample