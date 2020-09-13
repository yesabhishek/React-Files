import React, {Component} from "react";
import "./Body.css"
import Notes from "../notes/Notes"
import Card from "../contact-cards/Card"


class Body extends React.Component{
    
    constructor(){
        super()
        this.state={
            note: "note"
        }
    }

    render(){
       
            const date = new Date();
            const hours = date.getHours();
            let timeOfDay
            const name = "Abhishek";
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
        
        return(
            <div className="body" align="center" style={styles}>
            
            <Notes 
            note="This is a sample note"
            item="yes"/>
            <Notes
            note="This is a whats note"
            item="yes"/>
            <Notes 
            note="haha"
            item="No"/>
            <Notes 
            note="This is a sample note that you dont know"
            item="yes"/>
            <Card 
            name= "Abhishek"
            email= "something@email.com"
            />
            <br></br>
        </div>
        )
    }
    
    }
    


export default Body;