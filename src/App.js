import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './footer.jsx';
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
    <>
    <Header/>
    <AddNote newNote={addNewNote}/>
    <Footer/>
    {item.map((val, index) => (
        <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>
      ))}
    </>
  );
}

export default App;
