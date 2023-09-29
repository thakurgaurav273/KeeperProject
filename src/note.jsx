import React from "react";
import "./styles.css";
function Note(props){
    const deleteIcon=()=>{
        props.deleteItem(props.id);
    }
    return(
        <>
            <div className="note2">
                <h4 className="note-title">{props.title}</h4>
                <p className="note-content">{props.content}
                </p>
                <div className="butt">
                <i onClick={deleteIcon} className="fa-solid fa-trash"></i>
                </div>
        </div>

        </>
    )
}
export default Note;