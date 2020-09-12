import React from "react";
import "./Body.css"
import Notes from "../notes/Notes"
import Card from "../contact-cards/Card"

function Body(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const name = "Abhishek"
    const styles = {
        fontSize: 30
    }

    if (hours <12){
        timeOfDay = "morning"
        styles.backgroundColor = "#89FCB6"
        styles.color = "#FFFFFF"
    }
    else if (hours >=12 && hours < 17){
        timeOfDay = "Afternoon"
        styles.backgroundColor = "#FF6600"
        styles.color = "#FFFFFF"
    }
    else{
        
        timeOfDay = "Night"
        styles.color = "#4c4c4c"
        styles.backgroundColor = "#191919"
    }



    return (
        <div className="body" align="center" style={styles}>
            <h1> Good {timeOfDay}, {name}!</h1>  
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Card 
            name= "Abhishek"
            email= "something@email.com"
            />

            
            <br></br>
        </div>
    );
}

export default Body;