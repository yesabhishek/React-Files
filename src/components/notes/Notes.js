import React, { Component } from "react";
import "./Notes.css";


class Notes extends Component
{
    constructor(){
        super()
        this.state = {
            Note: "This is a sample note data",
            complete: 0
        }
    }
    render()
    {
        return(
            <div className="paper" align="center">
                <input type="checkbox" 
                
                onChange={ () => { console.log("Done")}}
                />
                
                <p>{this.state.Note}</p>
                <button onClick={() => 
                    console.log(this.complete = 2)
                }>Complete</button>
                <br></br>
            </div>
    
        )
                
    }
        
}



export default Notes;