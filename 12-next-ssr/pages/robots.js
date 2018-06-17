import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const robots = (props) => {
  return (
    <div>
      <Link href="/">
        <button style={{ fontSize: 20 }}>Home Page</button>
      </Link>
      <h1>Robots</h1>
      <div>
        {props.robots.map(robot => (
          <li key={robot.id}>
            <Link href={`robot/${robot.id}`}>
              <a>{robot.name}</a>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

robots.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    robots: data
  }
}

export default robots;
