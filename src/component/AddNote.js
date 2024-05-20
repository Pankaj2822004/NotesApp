import React, { useContext, useState , useEffect } from "react";
import noteContext from "../context/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({title: "", description: "", tag: ""}); 
  };
  useEffect(() => {
    document.body.classList.add("Addnote-page");

    return () => {
      document.body.classList.remove("Addnote-page");
    };
  }, []);
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-1">
        <h1 style={{ margin: "10px 75px" }}>Add a note</h1>
        <form className="my-1" style={{ margin: "80px " }}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              onChange={onChange}
              aria-describedby="emailHelp"
              minLength={5} required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={note.description}
              name="description"
              onChange={onChange}
              minLength={5} required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              minLength={5} required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={note.title.length <5 || note.description.length<5}
          >
            AddNote
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
