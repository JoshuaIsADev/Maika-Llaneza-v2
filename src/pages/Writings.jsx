import { useEffect } from 'react';
import { getWritingsList } from '../services/apiWritingsList';

function Writings() {
  useEffect(function () {
    getWritingsList().then((data) => console.log(data), []);
  });

  return <div>Writings</div>;
}

export default Writings;
