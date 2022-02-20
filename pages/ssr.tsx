import type { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';

type Props = {
  person: string;
};

const SSR: NextPage<Props> = ({ person }) => {
  return (
    <div>Hey {person} 🌹</div>
  );
}

export default SSR;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await axios.get<{ person: string }>('/api/person');
  const { person } = res.data;
  return {
    props: {
      person,
    },
  };
}