import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CSR: NextPage = () => {
  const [person, setPerson] = useState('');
  useEffect(() => {
    axios.get<{ person: string }>('/api/person')
      .then(res => setPerson(res.data.person));
  }, []);
  return (
    <div>Hey {person} 🌹</div>
  );
}

export default CSR;