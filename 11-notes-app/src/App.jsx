
import { useState } from 'react';
import { X } from 'lucide-react';
const App = () => {
  const [title, setTitle] = useState('');
  const[detail, setDetail] = useState('');
  const [task , setTask ] = useState([]);

  const submitHandler=(e)=>{
      e.preventDefault();
     const copyTask = [...task];
     copyTask.push({title,detail});
     setTask(copyTask);
     setTitle('')
     setDetail('')
  }
  const deleteNote=(idx)=>{
    const copyTask = [...task];

    copyTask.splice(idx,1);

    setTask(copyTask);

  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
       
      <form onSubmit={(e)=>{
          submitHandler(e);
         }} className='flex gap-4 lg:w-1/2 flex-col mb-10 '>
          <h1 className='text-xl font-bold'>Add Notes</h1>

          {/* pahle input */}
          <input type="text"
         placeholder='Enter Notes Heading'
         className='px-5  py-2 font-medium border-2 rounded w-full outline-none'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value);
         }}
         />

          {/* detailed input */}
        <textarea type="text"
        className='px-5 py-2 font-medium h-32 border-2 rounded w-full outline-none resize-none'
        placeholder='Write details here'
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value);
        }}
         />
         <button  className='bg-white active:scale-95 font-medium text-black w-full outline-none rounded '
          >Add Notes</button>

         
      </form>
      <div className=' lg:border-l-2 lg:w-1/2 bg-gray-900 p-10 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto'>
         {task.map(function(elem , idx){

          return <div key={idx} className=' relative h-52 w-40 py-8 px-4 rounded-xl bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover'>
            <button onClick={()=>{
                deleteNote(idx)
            }} className='cursor-pointer active:scale-95 text-black absolute top-5 right-5 text-xs bg-red-500 rounded p-1 z-10'
      >
        <X size={16} strokeWidth={3} />
      </button>
            <h3 className='leading-tight text-black text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.detail}</p>
          </div>
         })}
         
        </div>
        
      </div>
    </div>
  )
}

export default App