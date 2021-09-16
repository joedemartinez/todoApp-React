import React, {useState, useEffect} from 'react';
//importing components
import Header from './Header';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  //localstoragekey
  const Local_Storage_key = "todoLists"

  //Using useState hook to set initial todoLists as empty
  const [todoLists, settodoLists] = useState([])

  //props function passed to child component, ContactForm
  const getInputsData = (todoList) => {
    //update todoLists using settodoLists
    settodoLists([...todoLists, todoList])
  }

  
  //useEffect retrieving must always come before storing function  
  //retriving data from local storage
  useEffect( () => {
    const retrieved = JSON.parse(localStorage.getItem(Local_Storage_key))
    if(retrieved) settodoLists(retrieved)
  }, [])

  //storing data in local storage
  useEffect( () => {
    localStorage.setItem(Local_Storage_key, JSON.stringify(todoLists))
  }, [todoLists])

  

  return (
    <div className="container-fluid">
      <Header/>
      <ContactForm getInputsData={getInputsData}/>
      <ContactList todoLists={todoLists}/>
    </div>
  );
}

export default App;
