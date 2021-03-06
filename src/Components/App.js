import React, {useState, useEffect} from 'react';
//importing components
import Header from './Header';
import TodoListForm from './TodoListForm';
import TodoLists from './TodoLists';

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

  //delete btn function
  const deltodoList = (id) => {
    const newList = todoLists.filter((todoList) => {
      return todoList.id !== id
    })

    //update list
    settodoLists(newList)
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
      <div className="col-lg-12 col-md-12 row">
      <div className="col-lg-6 col-md-6">
        <TodoListForm getInputsData={getInputsData}/>
      </div>
      <div className="col-lg-6 col-md-6">
        <TodoLists todoLists={todoLists} deltodoList={deltodoList}/>
      </div>
      </div>
    </div>
  );
}

export default App;
