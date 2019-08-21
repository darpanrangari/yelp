import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [ results, setResults ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState('');

  const searchApi = async (term, location) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi('pasta', 'london'); //default search for pasta and location london
  }, []);

  return [ searchApi, results, errorMessage ];
}
