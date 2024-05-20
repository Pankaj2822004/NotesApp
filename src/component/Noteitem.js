import React, {useContext} from "react";
import noteContext from "../context/noteContext";
const Noteitem = (props) => {
  const context = useContext(noteContext);
   const {deleteNote}=context;
  const { note , updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2" style={{ height: "85px", width: "220px" }}>
        <div className="card-body">
          <div className="d-flex alignItems: center">
            {" "}
            <h5 className="card-title my-(-2) ">{note.title}</h5>
            <i style={{cursor:'pointer'}} className="fa-solid fa-trash-can   mx-2" onClick={()=>(deleteNote(note._id))}></i>
            <i style={{cursor:'pointer'}}
              className="fa-regular fa-pen-to-square"
              aria-hidden="true"
             onClick={()=>{updateNote(note)}}
            ></i>
          </div>

          <p className="card-text my-2">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
