import React from "react";

const ContactList = (props) => {
    //array map to print out individual items
    const todoLists = props.todoLists.map((todoList, pos) => {
        return (
            <div className="list-group" key={pos}>
                <div className="list-group-item">
                    <h5>{pos+1}. {todoList.title}</h5>
                    <p>{todoList.notes}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <h2 className="text-center">Contact Lists</h2>
            <div style={{textAlign: "justify"}}>
                {todoLists}
            </div>
        </div>
    )
}

export default ContactList