import Link from 'next/link';

const about = () => {
  return (
    <div>
      <Link href="/">
        <button  style={{ fontSize: 20 }}>Home Page</button>
      </Link>
      <h1>About</h1>
      <p>Server Side Rendering with Next.js</p>
    </div>
  );
};

export default about;
