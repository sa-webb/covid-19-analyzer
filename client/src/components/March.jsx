import React, { useState, useEffect } from 'react';

import api from '../api/index';

function March() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.getAllData();
      console.log(res.data.data);
      setData(res.data.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.map((row) => (
        <li key={row.index}>{row.index}</li>
      ))}
    </ul>
  );
}

export default March;
