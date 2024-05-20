import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/noteContext";
import Noteitem from "./Noteitem";
import {useNavigate} from "react-router-dom"
import AddNote from "./AddNote";

const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
if(localStorage.getItem('token')) {
    getNotes();
}
else{
  navigate("/");
  
}
   
  }, [getNotes , navigate]);
  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const updateNote = (currentNote) => {
    ref.current.click();

    setnote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });

  };

  
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <AddNote showAlert={props.showAlert}/>

      <button
        ref={ref}
        type="button"
        className="btn btn-primary mx-3 d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        EditNote
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Note Added
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-1" style={{ margin: "80px " }}>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    aria-describedby="emailHelp"
                    minLength={5} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                    minLength={5} required
                  />
                </div>
               
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button"  className="btn btn-primary" disabled={note.etitle.length <5 || note.edescription.length<5}>
                updateNote
              </button>
            </div>
          </div>
        </div>
      </div>

           <div className="row my-3" style={{ margin: "16px 75px" }}>
        <h3>My Notes</h3>
        <div className="container">
          {notes.length===0 && 'No Notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;