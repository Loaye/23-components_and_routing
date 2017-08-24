import './_note-container.scss';

import React from 'react';
import uuid from 'uuid';

import CreateNoteForm from '../create-note-form';

class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  createNote(note) {
    note.id=uuid.v1();
    this.props.app.setState(state => ({
      notes: [...state.notes, note]
    }));
  }

  render() {
    return(
      <div>
        <CreateNoteForm handleCreateNote={this.noteCreate} />
      </div>
    )
  }
}

export default NoteContainer;