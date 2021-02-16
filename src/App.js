import React, { useEffect } from 'react'
import { getData } from './actions/data'
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import Header from './components/Header'
import List from './components/List';

function App() {
  const data = useSelector(state => state.data.data)
   

  // console.log(data)
  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])


  return (
    <div className="App">
      <h1>COVID 19- Nigerian Data</h1>
      <Header {...data} />
      
      <h1>Confirmed Cases by States</h1>
      <List {...data} />
      
    </div>
  );
}

export default App;
