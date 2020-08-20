import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function getnote(note) {
  return <Note key={note.key} content={note.content} title={note.title} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} content={note.content} title={note.title} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
