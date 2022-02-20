import type { NextPage } from 'next';

const SSG: NextPage = () => {
  const person = 'Jane Doe';
  return (
    <div>Hey {person} 🌹</div>
  );
}

export default SSG;