import React, { useState } from "react";
import "./styles.css";

const AddNote=(props)=>{
    const [note3,setNote]= useState({
        title:"",
        content:""
    });
    const handleTitle=(event)=>{
        const {name,value}=event.target;
        setNote((prevValue)=>{
            return {
                ...prevValue,
                [name]:value,
            }
        })
    }

    const addNewNote= (event)=>{
        event.preventDefault();
        props.newNote(note3);
        setNote({
            title:"",
            content:""
        })
    }
    return(
        <>
        <div className="note-container">
            <div className="note">
                <form>
                    {/* to not complete the title with earlier title */}
                    <input type="text" value={note3.title} onChange={handleTitle} name="title" className="title-of-note" autoComplete="off" placeholder="Title"/>
                    <textarea name="content" value={note3.content} onChange={handleTitle} placeholder="Write a note" className="content-of-note" cols="30" rows="5"></textarea>
                    <div className="butt">
                        <button onClick={addNewNote} className="add_button">+</button>
                    </div>
                </form>
            </div>
        </div>

        </>
    )
}
export default AddNote;