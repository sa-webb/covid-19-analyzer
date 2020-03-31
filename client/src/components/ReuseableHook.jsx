import React from 'react';
import { useFetch } from '../hooks/index'
import {TOTAL_DATA} from '../constants/endpoints/'

export default function ReuseableHook() {
    const res = useFetch(TOTAL_DATA, {});
  
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