import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {weatherDataJson} from './weatherDataJson';
import {getWeatherData} from '../store/actions';
const SearchField =(props) =>{
  const [inputVal, setInputvalue] =useState("");
  const dispatch=useDispatch();
  const handleInputValue =(e) =>{
      //debugger;
      const enteredValue=e.target.value;
      setInputvalue(enteredValue);
  }
  useEffect (() => {
    dispatch(getWeatherData(weatherDataJson));
  })
  const  handleOnclick= (e) =>{
  }
    return(
       <div>
           <input type="text" onChange={handleInputValue} placeholder="Enter City"></input>
           <button onClick={handleOnclick}>Search</button>
        </div>
   )
}
export default SearchField;