import React from 'react';

class ContactForm extends React.Component{

    //Creating a state
    state = {
        title: "",
        notes: ""
    }

    formSubmit = (e) => {
        //prevent page reload - removes all data since theres no localstorage or database
        e.preventDefault();

        //check if inputs are empty
        if (this.state.title === "" || this.state.notes === "") {
            alert("All fields are mandatory!")
            return
        }
        //passing the updated state details to App.js
        this.props.getInputsData(this.state)

        //clear title and notes input after clicking add button
        this.setState({title: "", notes: ""})
    }

    render() {
        return (
            //TodoList form
            <div className="container">
                <h2 className="text-center">To-Do List Form</h2>
                <form className="form-horinzontal" onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label className="control-label">Title</label>
                        <input className="form-control" 
                        type="text" 
                        placeholder="Title" 
                        name="title" autoFocus required
                        value={this.state.title}
                        onChange={ (e) => this.setState({title: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Note</label>
                        <textarea className="form-control" rows="5" cols="20" placeholder="Add Notes" name="note" style={{resize:"none"}} required 
                        value={this.state.notes}
                        onChange={ (e) => this.setState({notes: e.target.value})}/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">Add New</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm;
