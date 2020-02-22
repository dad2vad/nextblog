import Link from 'next/link';

export default () => {
  return (
    <div>
      <h1>hello NEXT.JS!</h1>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/data-fetch">
            <a>Fetching Data with Next.JS</a>
          </Link>
        </li>
        <li>
          <Link href="/mobx-demo">
            <a>mobx-demo</a>
          </Link>
        </li>
        <li>
          <Link href="/styled-components">
            <a>Styled Components</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
