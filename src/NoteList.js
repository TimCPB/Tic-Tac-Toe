import React, { Component } from 'react';

class NoteList extends Component{

  constructor(props) {
    super(props)
    this.state = {
      notesList: []
    }
  }
  render(){
    return(
      <div className="NoteList">
          <form>
    <label>
      Add Note: <input type="text" />
    </label>
    <input type="submit" value="Submit" />
  </form>
      </div>
    )
  }
}

export default NoteList