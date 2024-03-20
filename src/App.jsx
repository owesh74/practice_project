import { useState ,  useEffect} from 'react'
import Navbar from './components/Nav'
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteSweep } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";
 
function App() {
  const [todo, settodo] = useState('')
  const [todos, settodos] = useState([])
  const [Finished, setFinished] = useState(false)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      settodos(storedTodos);
    }
  }, []);
  
  const finish = (e) => {
    setFinished(!Finished)
  }
  

  const Save = (e) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  

  const HandleDelete = (e , id) => {

        let newTodos = todos.filter(Item=>{
          return Item.id!==id
        });
    settodos(newTodos)
    Save()
    
  }

  const HandleEdit = (e ,id) => {
let to = todos.filter(i=>i.id === id)
settodo(to[0].todo)  
let newTodos = todos.filter(Item=>{
  return Item.id!==id
});
settodos(newTodos)
Save()

}

  const HandleAdd = (e) => {
    settodos([...todos, { id:uuidv4(), todo, complete: false }])
    settodo("")

    // console.log(todos)
    Save()

  }
  const HandleChange = (e) => {
    settodo(e.target.value)

    // console.log(todo)
  }
  const HandleTick = (e) => {
    let id = e.target.name
let index = todos.findIndex(item=>{
  return item.id === id;
})
    console.log(index)
    let newTodos = [...todos]
    newTodos[index].complete = !newTodos[index].complete
settodos(newTodos)
Save()

  }
const SaveBtn = () => {
  Save()
}


  return (
    <>
      <body className=' bg-black h-[100vh] overflow-hidden'>
        <Navbar />


        <div className='flex justify-center'>
          <div className="flex-col justify-center bg-black px-16">

            <h1 className='text-center p-3 text-[#FED74f] font-light text-3xl'>Add Todos </h1>
            <div className='flex  justify-center items-center '>

              {/* <h1 className='text-[#FED74f] font-light text-3xl'>Add Todos : </h1>  */}
              <input onChange={HandleChange} value={todo} type="text" className='h-8 w-[300px]  -none outline-none px-4 mx-6  rounded-md' />
              <button onClick={HandleAdd} disabled={todo.length<=1}  className=' bg-[rgb(254,215,79)] px-2 py-1 rounded-md hover:bg-[#9c883d] transition-all font-bold' >Save Work</button>

            </div>

            <h1 className='text- mx-2 mt-6 p-3 text-[#FED74f]  text-2xl'>Todos's List</h1>
<input type="checkbox" onChange={finish} checked={Finished} name="" id="" /> <label htmlFor="" className=' p-3 text-[#FED74f] font-light font-semibold'>Show Tasks You Finished</label>
            {todos.map(Item => {
              return (Finished || !Item.complete) &&(
                <div key={Item.id} className='card bg-black flex justify-between md:w-[80vw]'>


                  <div className='flex'>
                    <input onChange={HandleTick} type="checkbox" checked={Item.complete} name={Item.id} id="" className='mx-2'/>
                    <h1 className={`text-[#FED74f] font-light text-lg ${Item.complete ?"line-through":""  }`}>
                      {Item.todo}
                    </h1>


                  </div>
                  <div>
                    <button onClick={(e)=>{HandleEdit(e , Item.id)}}   className='bg-[rgb(254,215,79)] p-1 mx-2 rounded text-1xl   hover:bg-[#9c883d] transition-all ' ><MdOutlineEditNote /></button>
                    <button onClick={(e)=>{HandleDelete(e , Item.id)}} className='bg-[rgb(254,215,79)] p-1 mx-2 rounded text-1xl   hover:bg-[#9c883d] transition-all ' ><MdDeleteSweep /></button>

                  </div>

                </div>
                
              )
            })}

          </div>
        </div>
<div className='flex justify-center fixed bottom-0 w-[100vw] p-5'>
<button onClick={SaveBtn}  className=' bg-[rgb(254,215,79)] px-2 py-1 rounded-md hover:bg-[#9c883d] transition-all font-bold' >Save</button>


<p className='text-center p-3 text-[#FED74f] font-light text-sm'>Note : if You Forget To Save Your Work Won't Save</p>
</div>
      </body>

    </>
  )
}

export default App
