import React from 'react'

function col(props) {

    const drop = e =>{
        e.preventDefault();
        const data = e.dataTransfer.getData('tab_id');

        const tab=document.getElementById(data);
        e.target.appendChild(document.getElementById(data))
    }

    const canDrop = (e) =>{
        e.preventDefault()
    }


    return (
        <div id={props.id}  className={props.className} onDrop={drop} onDragOver={canDrop}>
            {props.children === null ? null : props.children}    
        </div>
    )
}

export default col
