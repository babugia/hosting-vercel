import Link from 'next/link';

const Home = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </p>
  </>
);

export default Home;
