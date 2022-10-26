import React from "react";


export default function Card(props) {
    return (
        
        <div className="card-container" key={props.key}>
                
                <img src={props.img}/>
                
                <div className="details">
                    <h4>{props.category}</h4>
                    <h1>{props.name}</h1> 
                    <p className="location">{props.location}</p> 
                    <p>{props.description}</p>
                    <button>Ver más</button>
                </div>     
        </div>
    )
}