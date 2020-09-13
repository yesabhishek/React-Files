import React from "react"
import "./Card.css"

function Card(props){
    return(
        <div class="cards">
            <div class="card">
                <h2><a href="#">{props.name}</a></h2>
                <h6>{props.email}</h6>
            </div>
            <div class="card">
                <h2><a href="#">{props.name}</a></h2>
                <h6>{props.email}</h6>
            </div>

            <div class="card">
                <h2><a href="#">{props.name}</a></h2>
                <h6>{props.email}</h6>
            </div>
        </div>

    )
}

export default Card