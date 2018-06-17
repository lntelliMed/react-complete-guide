import Link from 'next/link';
import Image from '../components/Image';

const index = () => {
  return (
    <div>
      <Link href="/about">
        <button  style={{ fontSize: 20 }}>About Page</button>
      </Link>
      <Link href="/robots">
        <button  style={{ fontSize: 20 }}>Robots Page</button>
      </Link>
      <h1>I am a SSR example</h1>
      <p>made with love</p>
      <Image />
    </div>
  );
};

export default index;
