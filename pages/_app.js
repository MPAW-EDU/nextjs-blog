import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto w-9/12 my-8">
      <header>
        <h1 className="text-6xl font-bold text-center">My Blog</h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li className=""><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
