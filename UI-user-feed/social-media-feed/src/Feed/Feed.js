import React from 'react';
import '../App.css';

const feed = ( props ) => {
    return (
        <div className = "Feed">
            <p> {props.user} : {props.value} </p>
            <div className ="Likes">
                <strong>{props.likes}</strong>
                <button className="Like-btn" onClick={props.click}>Like</button>
            </div>
        </div>
    )
}

export default feed;