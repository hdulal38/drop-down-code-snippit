import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const dropdownOptions = {
    project:['project-1','project-2'],
    user:['user-1','user-2'],
  };
  const [options,setOptions]=useState('project');
  const[subOption,setSubOption]=useState(dropdownOptions[options][0]);
  const selectOption=(event)=>{
    setOptions(event.target.value);
    setSubOption(dropdownOptions[event.target.value][0])
  }
  const setSubOptionValue=(event)=>{
    setSubOption(event.target.value);
    
  }
  const submit=()=>{
    console.log(subOption);
  }
  return (
   <div>
    <h1>Dynamic dropdown</h1>
    <select name='options' onChange={selectOption} value={options}>
      <option value='project'>Project</option>
      <option value='user'>User</option>
    </select>
    <select name='sub-options' onChange={setSubOptionValue} value={subOption}>
      {dropdownOptions[options].map(optionItem=>{
        return <option key={optionItem} value={optionItem}>{optionItem}</option>
      })}
    </select>
    <button onClick={submit} className='button'>Submit</button>
   </div>
  );
}

export default App;
