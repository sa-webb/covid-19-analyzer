import React from 'react';
import axios from 'axios';

export const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
    // eslint-disable-next-line
  }, []);
  return { response, error };
};
