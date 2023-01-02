import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Document from "./components/Document";
import doc from "./document.json";
import "./App.css";

function App() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    setBlocks(doc);
  }, []);

  function editBlockField(blockId, field, newValue) {
    const newBlock = { ...blocks.filter((b) => b.id === blockId)[0] };
    newBlock[field] = newValue;

    const newBlocks = [...blocks.filter((b) => b.id !== blockId), newBlock];
    setBlocks(newBlocks);

    copy(JSON.stringify(newBlocks));
    toast.success("Edited sucessfully! copied new JSON configuration to clipboard");
  }

  return (
    <div className="App">
      <Document blocks={blocks} editBlockField={editBlockField} />
      <ToastContainer position="bottom-center"/>
    </div>
  );
}

export default App;
