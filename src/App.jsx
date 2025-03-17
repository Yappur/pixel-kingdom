import { useState } from "react";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Editor />
      <Galeria />
      <Footer />
    </>
  );
}

export default App;
