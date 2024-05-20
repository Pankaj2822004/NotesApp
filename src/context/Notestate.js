import React, { useState } from "react";
import noteContext from "./noteContext";

const Notestate = (props) => {
  const host = "http://localhost:5000";
  const noteinitial = [
    {
      _id: "65fcf7fa417cdfe3f24d186a",

      user: "65f1bc96589997dcea3c21fb",

      title: "Title",
      description: "description",
      tag: "boys223",
      date: "1711077370249",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(noteinitial);
  const getNotes = async () => {
    
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
   
    const json = await response.json();
    // console.log(json);
    // console.log("pass");
    setnotes(json);
  };
  const addNote = (title, description, tag) => {
    const newNote = {
      _id: Date.now().toString(), // using timestamp as a mock id
      user: "defaultUser", // default user id or any mock value
      title,
      description,
      tag,
      date: new Date().toISOString(), // current date
      __v: 0,
    };
  
    setnotes([...notes, newNote]);
    props.showAlert("Added successfully", "success");
  };
  
  
  const deleteNote = async (id) => {


 
      // If the deletion was successful (status code 200 or 204)
      const newNotes = notes.filter((note) => note._id !== id);
      props.showAlert("deleted successfuly" , "success")
      setnotes(newNotes);
   
  };

  return (
    <noteContext.Provider
      value={{ notes, getNotes, deleteNote,  addNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default Notestate;
