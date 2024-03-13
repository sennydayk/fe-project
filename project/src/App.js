// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from './components/action'
import Hotellist from './components/hotellist';
import Filter from './components/filter';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <ul>
        {/* {accomdata.map(item => (
          <li key={item.addr1}>{item.title}</li>
        ))} */}
      </ul>
      <Filter></Filter>
      <Hotellist></Hotellist>
    </>
  );
}

export default App;
