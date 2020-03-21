import React, { useState, useEffect } from 'react';

import api from '../api/index';

function SingleApiHook() {
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
        <li key={row.index}>{row.country_region}</li>
      ))}
    </ul>
  );
}

export default SingleApiHook;
