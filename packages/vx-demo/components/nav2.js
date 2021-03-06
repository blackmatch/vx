import Link from 'next/link';
import GithubButton from 'react-github-button';

export default () => (
  <div className='nav'>
    <Link prefetch href="/">
      <div className="logo" />
    </Link>
    <ul>
      <Item href="/">Home</Item>
      <Item href="/docs">Docs</Item>
      <Item href="/gallery">Gallery</Item>

      <GithubButton
        type="stargazers"
        namespace="hshoff"
        repo="vx"
      />
    </ul>

    <style jsx>{`
      .nav {
        display: flex;
        flex-direction: row;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        font-size: 14px;
        z-index: 3;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
      ul {
        list-style-type: none;
        display: flex;
        flex: 1;
        flex-direction: row;
        padding: 0;
        margin: 0;
        color: white;
        justify-content: flex-end;
        align-items: center;
      }
      @media (max-width: 600px) {
        .github-buttons {
          display: none;
        }
        .Item {
          float: left;
        }
      }
    `}</style>
  </div>
)

const Item = ({ href, children, className }) => (
  <li className="Item">
    <Link href={href}>
      <a className={className}>{ children }</a>
    </Link>

    <style jsx>{`
      .Item a {
        display: inline-block;
        padding: 10px;
        text-decoration: none;
        color: #fc2e1c;
        font-weight: 600;
      }
      .Item .github {
        font-weight: 600;
        color: #fc2e1c;
      }

      @media (max-width: 600px) {
        .Item {
          display: block;
          float: left;
        }

        .Item .github {
          margin-top: 0;
        }
      }
    `}</style>
  </li>
)
