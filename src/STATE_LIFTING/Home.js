import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummyTodos = ['todo1','todo2'];
const Home = () => {
    const [todos,setTodo] = useState(dummyTodos); 

    const handleNewTodo = (newtodo)  => {
        setTodo([...todos, newtodo]);
    }
  return (
    <div>
        <NewTodo onTodo={handleNewTodo}/>
        <Todos todos={todos}  />
    </div>
  )
}

export default Home