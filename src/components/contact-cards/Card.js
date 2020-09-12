import React from "react"
import "./Card.css"

function Card(props){
    return(
        <div class="cards">
            <div class="card">
                <h2><a href="#">{props.name}</a></h2>
                <p>{props.email}</p>
            </div>
            <div class="card">
                <h2><a href="#">{props.name}</a></h2>
                <p>{props.email}</p>
            </div>

            <div class="card">
                <h2><a href="#">{props.name}</a></h2>
                <p>{props.email}</p>
            </div>
        </div>

    )
}

export default Card