import React from "react";
import "./styles.css";
function addNote(){
    return(
        <>
        <div className="note">
            <p id="addnote"> This is the note title <br /> This is the note content</p>
        </div>
        </>
    )
}
export default addNote;