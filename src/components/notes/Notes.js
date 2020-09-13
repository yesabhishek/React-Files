import React from "react";
import "./Notes.css"



function Notes(props){

    return (
        <div className="paper" align="center">
            <input type="checkbox" 
            checked={props.item.completed} 
            onChange={ () => { console.log("Done")}}
            />
            
            <p>{props.note}</p>
            <button onClick={() => 
                console.log("you just cliked a button!")
            }>Dont Click</button>
            <br></br>
        </div>
    );
}

export default Notes;