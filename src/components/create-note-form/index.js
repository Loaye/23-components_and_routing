import React from 'react';
import uuid from 'uuid/v1';

class CreateNoteForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: '',
      content: '',
      id: uuid(),
      editing: false,
      completed: false,
    }

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleCreateNote(this.state);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <textarea
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'>Add</button>
      </form>
    )
  };
};

export default CreateNoteForm;