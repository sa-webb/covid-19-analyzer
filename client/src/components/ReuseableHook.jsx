import React from 'react';
import { useFetch } from '../hooks/index'

export default function ReuseableHook() {
    const res = useFetch(`http://localhost:5000/data/`, {});
  
    if (!res.response) {
      return <div>Loading...</div>;
    }
    const data = res.response.data
    console.log(data)
    return (
        <ul>
        {data.map((row) => (
          <li key={row.index}>{row.country_region}{row.province_states}</li>
        ))}
      </ul>
    );
  }