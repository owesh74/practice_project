import React, { useState } from 'react';
import Navbar from './components/Nav';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState('');
  const [todos, settodos] = useState([]);
  const [editTodo, setEditTodo] = useState('');
  const [editId, setEditId] = useState(null);

  const HandleDelete = (id) => {
    settodos(todos.filter(todo => todo.id !== id));
  }

  const HandleEdit = (id) => {
    settodos(todos.map(item => {
      if (item.id === id) {
        return { ...item, todo: editTodo };
      }
      return item;
    }));
    setEditId(null);
    setEditTodo('');
  }

  const HandleAdd = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;
    settodos([...todos, { id: uuidv4(), todo: todo, complete: false }]);
    settodo('');
  }

  const HandleChange = (e) => {
    settodo(e.target.value);
  }

  const HandleTick = (id) => {
    settodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    }));
  }

  return (
    <>
      <body className='bg-black h-[100vh] overflow-hidden'>
        <Navbar />
        <div className='flex justify-center'>
          <div className="bg-black w-1/2">
            <h1 className='text-center p-3 text-[#FED74f] font-light text-3xl'>Add Todos </h1>
            <div className='flex justify-center items-center'>
              <form onSubmit={HandleAdd}>
                <input onChange={HandleChange} value={todo} type="text" className='h-8 w-[300px] -none outline-none px-4 mx-6 rounded-md' />
                <button type="submit" className='bg-[rgb(254,215,79)] px-2 py-1 rounded-md hover:bg-[#9c883d] transition-all font-bold'>Add Work</button>
              </form>
            </div>
            <h1 className='mx-2 mt-6 p-3 text-[#FED74f] text-2xl'>Todos List</h1>
            {todos.map(Item => (
              <div key={Item.id} className='bg-black flex justify-between'>
                <div className='flex'>
                  <input onChange={() => HandleTick(Item.id)} type="checkbox" checked={Item.complete} className='mx-2' />
                  <h1 className={`text-[#FED74f] font-light text-lg ${Item.complete ? "line-through" : ""}`}>
                    {Item.todo}
                  </h1>
                </div>
                <div>
                  <button onClick={() => setEditId(Item.id)} className='bg-[rgb(254,215,79)] px-2 mx-2 rounded-md hover:bg-[#9c883d] transition-all font-bold'>Edit</button>
                  <button onClick={() => HandleDelete(Item.id)} className='bg-[rgb(254,215,79)] px-2 mx-2 rounded-md hover:bg-[#9c883d] transition-all font-bold'>Delete</button>
                </div>
              </div>
            ))}
            {editId && (
              <div className='bg-black flex justify-between'>
                <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} type="text" className='h-8 w-[300px] -none outline-none px-4 mx-6 rounded-md' />
                <button onClick={() => HandleEdit(editId)} className='bg-[rgb(254,215,79)] px-2 py-1 rounded-md hover:bg-[#9c883d] transition-all font-bold'>Save</button>
              </div>
            )}
          </div>
        </div>
      </body>
    </>
  )
}

export default App;
