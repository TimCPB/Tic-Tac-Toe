import React, { Component } from 'react';

class NoteList extends Component{

  constructor(props) {
    super(props)
    this.state = {
      notesList: ''
    }
  }

  myChangeHandler(){
    (event).preventDefault();
    this.setState({ notesList: event.target.value });
  }

  render(){
    return(
      <div className="NoteList">
          <form>
    <label>
      Add Note: <input type="text" onChange={this.myChangeHandler}/>
    </label>
    <input type="submit" value="Submit" />
  </form>
      </div>
    )
  }
}

export default NoteList