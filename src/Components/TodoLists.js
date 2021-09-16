import React from "react";

const TodoLists = (props) => {
    //array map to print out individual items
    const todoLists = props.todoLists.map((todoList, pos) => {
        return (
            <div className="list-group" key={pos} id={pos+1}>
                <div className="list-group-item">
                    <h5>{pos+1}. {todoList.title}</h5>
                    <p>{todoList.notes}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h2 className="text-center">To-Do Lists</h2>
            <div style={{textAlign: "justify"}}>
                {todoLists}
            </div>
        </div>
    )
}

export default TodoLists