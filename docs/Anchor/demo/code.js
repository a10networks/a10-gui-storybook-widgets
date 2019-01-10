export const basicCode = `import { A10Anchor } from 'a10-gui-widgets';

const { Link } = A10Anchor;

ReactDOM.render(
  <A10Anchor>
        <Link href="#basicAnchor" title="Basic Anchor" />
        <Link href="#staticAnchor" title="Static Anchor" >
          <Link href="#staticAnchor1" title="Static Anchor 1" />
          <Link href="#staticAnchor2" title="Static Anchor 2" />
        </Link>
        <Link href="#customizeAnchor" title="Customize Anchor" />
      </A10Anchor>,
  mountNode
);`

export const staticCode = `import { A10Anchor } from 'a10-gui-widgets';

const { Link } = A10Anchor;

ReactDOM.render(
  <div id="staticAnchor">
      <A10Anchor affix={false}>
        <Link href="#basicAnchor" title="Basic Anchor" />
        <Link href="#staticAnchor" title="Static Anchor" >
          <Link href="#staticAnchor1" title="Static Anchor 1" />
          <Link href="#staticAnchor2" title="Static Anchor 2" />
        </Link>
        <Link href="#customizeAnchor" title="Customize Anchor" />
      </A10Anchor>
      <div id="staticAnchor1">Static Anchor 1</div>
      <div id="staticAnchor2">Static Anchor 2</div>
    </div>,
  mountNode
);`

export const customizeOnClick = `import { A10Anchor } from 'a10-gui-widgets';

const { Link } = A10Anchor;

const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};

ReactDOM.render(
  <div id="customizeAnchor">
      <A10Anchor affix={false} onClick={handleClick}>
        <Link href="#basicAnchor" title="Basic Anchor" />
        <Link href="#staticAnchor" title="Static Anchor" >
          <Link href="#staticAnchor1" title="Static Anchor 1" />
          <Link href="#staticAnchor2" title="Static Anchor 2" />
        </Link>
        <Link href="#customizeAnchor" title="Customize Anchor" />
      </A10Anchor>
    </div>,
  mountNode
);`