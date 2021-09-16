import React from "react";

const TodoLists = (props) => {
    //array map to print out individual items
    const todoLists = props.todoLists.map((todoList, pos) => {
        return (
            <div className="list-group" key={pos}>
                <div className="list-group-item">
                    <h5>{pos+1}. {todoList.title}
                        {/* onclick function to del list */}
                        <span onClick={() => props.deltodoList(todoList.id)} className="pull-right">
                            <button className="btn btn-danger">delete</button>
                        </span>
                    </h5>
                    <p>{todoList.notes}</p> 
                </div>
            </div>
        )
    })

    return (
        <div>
            <h2 className="text-center">To-Do Lists</h2>
            {/* styles to give todolist scroll bar and align-justify */}
            <div style={{height: "500px", textAlign: "justify", overflowY: "scroll"}}>
                {/* if todolist is empty, display no list found */}
                {todoLists.length > 0 ? todoLists : <p className="text-center">No todo list found</p>}
            </div>
        </div>
    )
}

export default TodoLists