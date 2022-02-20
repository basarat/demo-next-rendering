import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';

type Props = {
  person: string;
};

const ISR: NextPage<Props> = ({ person }) => {
  return (
    <div>Hey {person} 🌹</div>
  );
}

export default ISR;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await axios.get<{ person: string }>('/api/person');
  const { person } = res.data;
  return {
    props: {
      person,
    },
    revalidate: 10,
  };
}