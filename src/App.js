import React, { useState } from 'react';
import Header from './Header.jsx';
import AddNote from './addNote.jsx';
import Note from './note.jsx';
function App() {
  const [item,setItem]=useState([]);
  const addNewNote=(note)=>{
      setItem((prevData)=>{
        return [...prevData,note];
      })
    }

    const onDelete=(id)=>{
        setItem((oldData)=>{
            return oldData.filter((currData,idx)=>{
              return idx!==id;
            })
        })
    }
  return (
    <div className='imp-content'>
    <Header/>
    <AddNote newNote={addNewNote}/>
    {item.map((val, index) => (
      <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>
      ))}
    <h5 className="copyright"><i className="fa-sharp fa-regular fa-copyright"></i>&nbsp; {new Date().getFullYear()}</h5>

    </div>
  );
}

export default App;
