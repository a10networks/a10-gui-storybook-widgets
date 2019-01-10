
import * as React from 'react'
import { Code, CodeComponent, CodeCard } from '../utils'
import { A10Anchor } from '../../src'

const { Link } = A10Anchor;

const SummaryTabs = () => {
    const handleClick = (e, link) => {
        e.preventDefault();
        console.log(link);
    };

    return (
        <div id="summaryAnchor" onClick={handleClick}>
            <A10Anchor onClick={() => { return false }}>
                <Link href="#General" title="General" />
                <Link href="#Layout" title="Layout" />
                <Link href="#Navigation" title="Navigation" />
                <Link href="#Data Entry" title="Data Entry" />
                <Link href="#Data Display" title="Data Display" />
                <Link href="#Feedback" title="Feedback" />
                <Link href="#Other" title="Other" />
            </A10Anchor>
        </div>
        <CodeComponent>
            <CodeCard
                title="General"
                id="General"
            >
            </CodeCard>

            <CodeCard
                title="Layout"
                id="Layout"
            >
            </CodeCard>
        </CodeComponent>
    )
}

export default story => {
    story.add('Summary', SummaryTabs)
}